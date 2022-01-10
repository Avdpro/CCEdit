import {JAXHudObj} from "/jaxweb/lib/JAXHudObj.js";
import {appData} from "../appData.js";
import {CCDoc} from "../data/CCDoc.js";
import pathLib from "/@path";

var CCEditorChanges,__Proto;
const EDITMODE_TEXT="Text";
const EDITMODE_CONFLICT="Conflict";
const EDITMODE_COMPARE="Compare";

//---------------------------------------------------------------------------
//使用CodeMirror5的
CCEditorChanges=function(jaxEnv){
	let self=this;

	JAXHudObj.call(this,jaxEnv);

	this.jaxClassFunc=CCEditorChanges;
	
	this.mode=EDITMODE_COMPARE;

	this.cm=null;//CodeMirror编辑器
	this.cmDoc=null;//CodeMirror的Doc
	this.cdyDoc=null;//CodyDoc对象

	this.OnFocus=null;
	this.OnBlur=null;
	this.OnChange=null;
	this.OnCursorAct=null;

	this.cdyDoc2DocMap=new Map();
};

__Proto=CCEditorChanges.prototype=new JAXHudObj();

//****************************************************************************
//属性列表/注册创建函数:
//****************************************************************************
{
	//CSS属性列表
	CCEditorChanges.jaxPptSet=new Set(Array.from(JAXHudObj.jaxPptSet).concat([
		"OnFocus","OnBlur","OnChange","OnCursorAct",
	]));

	//------------------------------------------------------------------------
	//注册基础Hud类
	JAXHudObj.regHudByType('CCCodeEditorChanges', function (env) {
		return new CCEditorChanges(env);
	});

	//------------------------------------------------------------------------
	//Register editor
	appData.regEditBox({
		name:"Edit Changes",
		codeName:"EditChanges",
		icon:"",
		hudName:"CCCodeEditorChanges",
		canEditDoc(doc){
			if(doc.path.endsWith(".baseversion")){
				return 100;
			}
			return 0;
		}
	});
}

//****************************************************************************
//可继承的成员函数:
//****************************************************************************
{
	//------------------------------------------------------------------------
	//ApplyCSS的最后，设置WebObj属性:
	__Proto.postApplyCSS = function (cssObj)
	{
		let list;
		list=this.items2Add_;
		if(Array.isArray(list)){
			this._applyItems(list);
		}
		{
			let hudPose, aniPose;
			hudPose = this.hudPose;
			aniPose = this.aniPose;
			aniPose.x = 0;
			aniPose.y = 0;
			aniPose.alpha = hudPose.alpha;
			aniPose.scale = hudPose.scale;
			aniPose.rot = hudPose.rot;
		}
		if(cssObj.face){
			this.showFace(cssObj.face);
		}
		this._syncWebObj();

		let stateObj=this.stateObj_;
		if(stateObj){
			this.jaxEnv.popHudState(stateObj);
		}
		this.cm=null;
	};

	//-----------------------------------------------------------------------
	//开始编辑代码:
	__Proto.switchDoc=async function(baseDoc)
	{
		let cmDoc,path,ext,liveDocPath,liveDoc;
		let text,mode,baseText;
		
		path=baseDoc.path;
		ext=pathLib.extname(path);
		if(ext!==".baseversion"){
			throw "Bad base doc name";
		}
		//TODO: can be better:
		//liveDocPath=path.substring(0,path.length-ext.length);
		//liveDoc=await CCDoc.openDoc(liveDocPath);
		liveDoc=baseDoc.compareTgtDoc;
		if(!liveDoc){
			throw "Can't read live doc";
		}
		
		switch(liveDoc.fileExt){
			case "js":
			case "mjs":
				mode="javascript";
				break;
			case "html":
				mode="text/html";
				break;
			case "json":
				mode={name: "javascript", json: true};
				break;
			default:
				mode="text";
				break;
		}

		text = liveDoc.getCodeText();
		baseText=baseDoc.getCodeText();
		if(!this.cm) {
			let height;
			this.mergeView = CodeMirror.MergeView(this.webObj, {
				value: text,
				orig: baseText,
				mode: mode,
				indentUnit: 4,
				indentWithTabs: true,
				lineNumbers: true,
				rulers: [{color: "#CCC", column: 78, lineStyle: "dashed"}],
				styleActiveLine: true,
				highlightDifferences: true,
				connect: true,
			});
			height=this.h-2;
			this.mergeView.editor().setSize(null, height);
			this.mergeView.rightOriginal().setSize(null, height);
			this.mergeView.wrap.style.height = height + "px"
			this.cm=this.mergeView.editor();
			this.cm.on("focus", this.OnCMFocus.bind(this));
			this.cm.on("blur", this.OnCMBlur.bind(this));
			this.cm.on("input", this.OnCMInput.bind(this));
			this.cm.on("changes", this.OnCMChanges.bind(this));
			//光标变化消息:
			this.cm.on("cursorActivity", this.OnCMCursorAct.bind(this));
		}
		this.cmDoc=this.cm.doc;
		this.cdyDoc=baseDoc;
		baseDoc.assignEditor(this);
	};

	//-----------------------------------------------------------------------
	//更新文档:
	__Proto.updateDocCode=function()
	{
		var cmDoc;
		var cdyDoc;
		var text;
		cmDoc=this.cmDoc;
		cdyDoc=this.cdyDoc;
		if(!cmDoc || !cdyDoc){
			return;
		}
		text=cmDoc.getValue();
		cdyDoc.setCodeText(text,true);
	};

	//-----------------------------------------------------------------------
	//Doc changed, update editor's text
	__Proto.OnDocChange=function()
	{
		var cmDoc;
		var cdyDoc;
		var text;
		var sinfo,cpos;
		cmDoc=this.cmDoc;
		cdyDoc=this.cdyDoc;
		if(!cmDoc || !cdyDoc){
			return;
		}
		//Keep cursor/scroll pos:
		sinfo=this.cm.getScrollInfo();
		cpos=this.cmDoc.getCursor();
		text=cdyDoc.getCodeText();
		text=cmDoc.setValue(text);
		//Restore cursor/ scroll pos
		this.cmDoc.setCursor(cpos);
		this.cm.scrollTo(sinfo.left,sinfo.top);
	};

	//-----------------------------------------------------------------------
	//聚焦编辑:
	__Proto.focus=function(){
		this.cm.focus();
	};

	//-----------------------------------------------------------------------
	//得到滚动Info:
	__Proto.getScrollInfo=function(){
		return this.cm.getScrollInfo();
	};

	//-----------------------------------------------------------------------
	//得到滚动Info:
	__Proto.scrollTo=function(x,y){
		this.cm.scrollTo(x,y);
	};

	//-----------------------------------------------------------------------
	//得到光标信息:
	__Proto.getCursorPos=function(){
		return this.cmDoc.getCursor();
	};

	//-----------------------------------------------------------------------
	//设置光标位置:
	__Proto.setCursorPos=function(...pos){
		return this.cmDoc.setCursor(...pos);
	};


	//************************************************************************
	//Content access funcitons:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//Get total line count:
		__Proto.lineCount=function(){
			return this.cmDoc.lineCount();
		};

		//--------------------------------------------------------------------
		//Get line text:
		__Proto.getLine=function(idx){
			return this.cmDoc.getLine();
		};
		
		//--------------------------------------------------------------------
		//Get current edit version:
		__Proto.getEditVsn=function(){
			if(!this.cmDoc){
				return 0;
			}
			return this.cmDoc.changeGeneration();
		};
		
		//--------------------------------------------------------------------
		__Proto.markClean=function(){
			if(this.cmDoc){
				this.cleanVsn=this.cmDoc.changeGeneration();
				return 0;
			}
		};

		//--------------------------------------------------------------------
		__Proto.isClean=function(){
			if(this.cmDoc){
				return this.cleanVsn===this.cmDoc.changeGeneration();
			}
			return 1;
		};
	}

	//***********************************************************************
	//CM的事件响应:
	//***********************************************************************
	{
		//-------------------------------------------------------------------
		//获得输入焦点:
		__Proto.OnCMFocus=function(){
			this.OnFocus&&this.OnFocus();
		};

		//-------------------------------------------------------------------
		//失去输入焦点:
		__Proto.OnCMBlur=function(){
			this.OnBlur&&this.OnBlur();
		};

		//-------------------------------------------------------------------
		//用户输入:
		__Proto.OnCMInput=function(){
			this.OnInput&&this.OnInput();
		};

		//-------------------------------------------------------------------
		//批量改变:
		__Proto.OnCMChanges=function(){
			this.OnChange&&this.OnChange();
			if(this.mode===EDITMODE_CONFLICT){
				this.conflictDoc.codeChanged();
			}else{
				this.cdyDoc.codeChanged();
			}
		};

		//-------------------------------------------------------------------
		//光标变化:
		__Proto.OnCMCursorAct=function(){
			this.OnCursorAct&&this.OnCursorAct();
		};
	}

}

export default CCEditorChanges;