import {JAXHudObj} from "/jaxweb/lib/JAXHudObj.js";

var CCCodeEditorCM5,__Proto;
const EDITMODE_TEXT="Text";
const EDITMODE_CONFLICT="Conflict";

//---------------------------------------------------------------------------
//使用CodeMirror5的
CCCodeEditorCM5=function(jaxEnv){
	let self=this;

	JAXHudObj.call(this,jaxEnv);

	this.jaxClassFunc=CCCodeEditorCM5;
	
	this.mode=EDITMODE_TEXT;

	this.cm=null;//CodeMirror编辑器
	this.cmDoc=null;//CodeMirror的Doc
	this.cdyDoc=null;//CodyDoc对象

	this.OnFocus=null;
	this.OnBlur=null;
	this.OnChange=null;
	this.OnCursorAct=null;

	this.cdyDoc2DocMap=new Map();
};

__Proto=CCCodeEditorCM5.prototype=new JAXHudObj();

//****************************************************************************
//属性列表/注册创建函数:
//****************************************************************************
{
	//CSS属性列表
	CCCodeEditorCM5.jaxPptSet=new Set(Array.from(JAXHudObj.jaxPptSet).concat([
		"OnFocus","OnBlur","OnChange","OnCursorAct",
	]));

	//------------------------------------------------------------------------
	//注册基础Hud类
	JAXHudObj.regHudByType('CCCodeEditor', function (env) {
		return new CCCodeEditorCM5(env);
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
	__Proto.switchDoc=function(cdyDoc,conflictDoc)
	{
		var cmDoc,options;
		var text,mode,jsHint,hasHint,wrap;
		
		this.mode=EDITMODE_TEXT;
		wrap=false;
		switch(cdyDoc.fileExt){
			case "js":
			case "mjs":
				hasHint=1;
				mode="javascript";
				jsHint=1;
				break;
			case "html":
				mode="text/html";
				break;
			case "md":
				wrap=true;
				mode="text/x-markdown";
				break;
			case "json":
				mode={name: "javascript", json: true};
				break;
			default:
				mode="text";
				break;
		}

		text = cdyDoc.getCodeText();
		cmDoc=this.cdyDoc2DocMap.get(cdyDoc);
		if(cmDoc){

		}else{
			cmDoc=CodeMirror.Doc(text,mode);
		}
		if(!this.cm) {
			options={
				value: "",
				mode: mode,
				indentUnit: 4,
				indentWithTabs: true,
				lineWrapping:wrap,
				lineNumbers: true,
				foldGutter: true,
				gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
				rulers: [{color: "#CCC", column: 78, lineStyle: "dashed"}],
				styleActiveLine: true,
				extraKeys: {},
			};
			if(hasHint){
				options.extraKeys["Ctrl-Space"]="autocomplete";
			}
			this.cm = CodeMirror(this.webObj, options);
			this.cmDoc = null;
			this.cm.on("focus", this.OnCMFocus.bind(this));
			this.cm.on("blur", this.OnCMBlur.bind(this));
			this.cm.on("input", this.OnCMInput.bind(this));
			this.cm.on("changes", this.OnCMChanges.bind(this));
			if(jsHint){
				this.cm.on("change", this.OnCMChangeJSHint.bind(this));
			}
			//光标变化消息:
			this.cm.on("cursorActivity", this.OnCMCursorAct.bind(this));
			this.cm.uiCCEdit=this;
		}
		this.cm.swapDoc(cmDoc);
		this.cmDoc=cmDoc;
		this.cdyDoc=cdyDoc;
		cdyDoc.assignEditor(this);
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
		text=cdyDoc.getCodeText(true);
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
	//得到滚动Info:
	__Proto.scrollIntoView=function(pos,margin){
		this.cm.scrollIntoView(pos,margin>0?margin:100);
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
		//单个改变:
		__Proto.OnCMChangeJSHint=function(cm,changeObj){
			if(changeObj.origin==="+input" && changeObj.text[0]==='.'){
				cm.execCommand("autocomplete");
			}
			return cm;
		};

		//-------------------------------------------------------------------
		//批量改变:
		__Proto.OnCMChanges=function(){
			this.OnChange&&this.OnChange();
			if(this.mode===EDITMODE_CONFLICT){
				this.conflictDoc.codeChanged(this.cmDoc.changeGeneration());
			}else{
				this.cdyDoc.codeChanged(this.cmDoc.changeGeneration());
			}
		};

		//-------------------------------------------------------------------
		//光标变化:
		__Proto.OnCMCursorAct=function(){
			this.OnCursorAct&&this.OnCursorAct();
		};
	}

}

export {CCCodeEditorCM5}