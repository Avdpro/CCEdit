//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FCPIR4IM0Imports*/
import {appData} from "../appData.js";
import {} from "../ui/dlgSearch.js"
/*}#1FCPIR4IM0Imports*/
//----------------------------------------------------------------------------
/*Hud控件节点，没有内容，可以有子节点*/
var editUI=function (app, def, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FCPIR4IM1ExLocal*/
	let scrollInfo,cursorPos;
	let curDoc=null;
	let dlgMap=new Map();
	let curDlg=null;
	let curToolBar=null;
	/*}#1FCPIR4IM1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FCPIR4IM3ExState*/
		/*}#1FCPIR4IM3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FCPIR4IM1Mid*/
	/*}#1FCPIR4IM1Mid*/
	
	cssVO={
		"type": "hud", "jaxId": "1FCPIR4IM1", "id": "UIEditDoc", "x": 0, "y": 1, "w": "FW", "h": "FH-2", "autoLayout": 1, 
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FCPIR4IM1CreateFunc*/
			/*}#1FCPIR4IM1CreateFunc*/
		}
	};
	/*#{1FCPIR4IM1ExViewDef*/

	//Assign a new type:
	cssVO.type=def?(def.hudName||"CCCodeEditor"):"CCCodeEditor";

	//------------------------------------------------------------------------
	//Show UI in editDoc:
	cssVO.showUI=async function(vo){
		let doc,conflictDoc,line;
		doc=vo.doc;
		line=vo.line;
		if(!curDoc){
			curDoc=doc;
			conflictDoc=vo.conflictDoc;
			await self.switchDoc(doc);
		}else{
			//Do nothing...
		}
		window.setTimeout(()=>{
			self.focus();
			if(line>0){
				//TODO: code this:
				self.setCursorPos({line:line-1,ch:0});
				self.scrollIntoView({line:line-1,ch:0},100);
			}else{
				if(scrollInfo){
					self.scrollTo(scrollInfo.left,scrollInfo.top);
				}
			}
		},0);
	};
	
	//------------------------------------------------------------------------
	//UI been coverd, save scroll and cursor info:
	cssVO.coverUI=function(vo){
		scrollInfo=this.getScrollInfo();
		cursorPos=this.getCursorPos();
	};
	
	let hasFocus=false;
	//------------------------------------------------------------------------
	//Gain focus:
	cssVO.OnFocus=function(vo){
		hasFocus=true;
		app.setFocusBox(app.editDock);
	};
	
	//------------------------------------------------------------------------
	//Lost focus:
	cssVO.OnBlur=function(vo){
		hasFocus=false;
	}
	
	//------------------------------------------------------------------------
	//Shortcuts:
	cssVO.handleShortcut=function(cmd){
		if(curDlg && !hasFocus){
			return curDlg.handleShortcut(cmd);
		}
		return 0;
	};

	//************************************************************************
	//Tool-bar feature:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//Show editor toolBar. If we have one toolBar showing, ignor this one:
		cssVO.showToolBar=function(tbFunc){
			let h;
			if(curToolBar){
				return;
			}
			curToolBar=self.appendNewChild(tbFunc(app,self));
			h=curToolBar.h;
			self.h="FH-2-"+h;
			self.y+=h;
			curToolBar.y=-h;
		};
	}
	
	//************************************************************************
	//Dialog feature:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//Show a dialog, if we have one dlg showing, close it first.
		cssVO.showDlg=function(dlgFunc,vo){
			let dlg,h;
			if(curDlg){
				self.closeDlg(curDlg);
			}
			dlg=dlgMap.get(dlgFunc);
			if(!dlg){
				dlg=self.appendNewChild(dlgFunc(app,self));
				dlg.hold();
				dlgMap.set(dlgFunc,dlg);
			}else{
				self.appendChild(dlg);
			}
			if(dlg.OnShow){
				dlg.OnShow(vo);
			}
			h=dlg.h;
			self.y+=h;
			dlg.y=-h;
			curDlg=dlg;
			if(curToolBar){
				self.h=`FH-2-${curToolBar.h}-${h}`;
				curToolBar.y=-h-curToolBar.h;
			}else{
				self.h="FH-2-"+h;
			}
		};
		
		//--------------------------------------------------------------------
		//Close a dialog:
		cssVO.closeDlg=function(dlg){
			let h;
			if(dlg!==curDlg){
				return;
			}
			h=dlg.h;
			self.y-=h;
			self.removeChild(dlg);
			curDlg=null;
			if(curToolBar){
				self.h="FH-2-"+curToolBar.h;
				curToolBar.y=-curToolBar.h;
			}else{
				self.h="FH-2";
			}
			self.focus();
		};
		
		//--------------------------------------------------------------------
		//Get current dialog:
		cssVO.getDlg=function(){
			return curDlg;
		};
	}

	/*}#1FCPIR4IM1ExViewDef*/
	
	return cssVO;
};

/*#{1FCPIR4IM0PostCode*/
//------------------------------------------------------------------------
//Register as editBox plugin:
let boxDef={
	codeName:"EditCode",
	name:"Edit Codes",
	createUI: editUI,
	canEditDoc:function(doc){
		return 1;//Poor match
	}
};
appData.regEditBox(boxDef);

//----------------------------------------------------------------------------
//Config CodeMirror to close dialog when press ESC key.
let sel_dontScroll={scroll: false}
CodeMirror.commands.singleSelection= function (cm) { 
	let editUI=cm.uiCCEdit;
	if(editUI){
		let dlg=editUI.getDlg();
		if(dlg){
			editUI.closeDlg(dlg);
			return;
		}
	}
	let list=cm.listSelections();
	if(list && list.length>1){
		return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); 
	}
	return cm.setSelection(cm.getCursor("head"), cm.getCursor("head"), sel_dontScroll); 
};
/*}#1FCPIR4IM0PostCode*/

export {editUI};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "editUI.js", "def": "CdyFileUIGear", "jaxId": "1FCPIR4IM0", 
//			"attrs": {
//				"gearName": "\"editUI\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FCPIR4IP0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FCPIR4IP2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudObj", "jaxId": "1FCPIR4IM1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCPIR4IM2", 
//					"attrs": {
//						"def": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FCPIR4IM3", 
//					"attrs": {}, "funcs": {"jaxId":"1FCPIR4IP3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"UIEditDoc\"", "x": "0", "y": "1", "w": "\"FW\"", "h": "\"FH-2\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//					"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {"jaxId":"1FCPIR4IP4","entrys":[]}, 
//				"funcs": {"jaxId":"1FCPIR4IP6","funcs":[]}, "subs": []
//			}
//		}/*Doc}#*/;
//	}