//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FMVLNTKC0Imports*/
import {CCFile} from "../data/CCFile.js";
import {appData} from "../appData.js";
/*}#1FMVLNTKC0Imports*/
//----------------------------------------------------------------------------
/*Hud控件节点，没有内容，可以有子节点*/
var editConflictUI=function (app, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FMVLNTKC1ExLocal*/
	let scrollInfo,cursorPos;
	let curDoc=null;
	/*}#1FMVLNTKC1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FMVLNTKC3ExState*/
		/*}#1FMVLNTKC3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FMVLNTKC1Mid*/
	/*}#1FMVLNTKC1Mid*/
	
	cssVO={
		"type": "hud", "jaxId": "1FMVLNTKC1", "x": 0, "y": 0, "w": 100, "h": 100, 
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FMVLNTKC1CreateFunc*/
			/*}#1FMVLNTKC1CreateFunc*/
		}
	};
	/*#{1FMVLNTKC1ExViewDef*/
	cssVO.type="CCCodeEditor";

	//------------------------------------------------------------------------
	//UI will be showed in editDoc:
	cssVO.showUI=function(vo){
		let doc,conflictDoc;
		doc=vo.doc;
		if(!curDoc){
			curDoc=doc;
			conflictDoc=vo.conflictDoc;
			if(conflictDoc){
				curDoc.setConflict(conflictDoc);
				self.switchConflictDoc(conflictDoc,doc);
			}else{
				throw "No conflictDoc.";
			}
		}else{
			//Do nothing...
		}
		window.setTimeout(()=>{
			self.focus();
			if(scrollInfo){
				self.scrollTo(scrollInfo.left,scrollInfo.top);
			}
		},0);
	};
	
	//------------------------------------------------------------------------
	//UI been coverd by others, keep scroll/cursor:
	cssVO.coverUI=function(vo){
		scrollInfo=this.getScrollInfo();
		cursorPos=this.getCursorPos();
	};
	
	//------------------------------------------------------------------------
	//Gain focus
	cssVO.OnFocus=function(vo){
		app.setFocusBox(app.editDock);
	};
	
	/*}#1FMVLNTKC1ExViewDef*/
	
	return cssVO;
};

/*#{1FMVLNTKC0PostCode*/
//------------------------------------------------------------------------
//Register as editBox plugin:
let boxDef={
	codeName:"EditConflict",
	name:"Edit Conflict",
	createUI: editConflictUI,
	canEditDoc:function(doc){
		if(CCFile.isConflictFileName(doc.path)){
			return 100;//Match
		}
		return 0;
	}
};
appData.regEditBox(boxDef);
/*}#1FMVLNTKC0PostCode*/

export {editConflictUI};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "editConflictUI.js", "def": "CdyFileUIGear", "jaxId": "1FMVLNTKC0", 
//			"attrs": {
//				"gearName": "\"editConflictUI\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FMVLNTKD0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FMVLNTKD2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudObj", "jaxId": "1FMVLNTKC1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMVLNTKC2", 
//					"attrs": {}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FMVLNTKC3", 
//					"attrs": {}, "funcs": {"jaxId":"1FMVLNTKD3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "100", "h": "100", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {"jaxId":"1FMVLNTKD4","entrys":[]}, 
//				"funcs": {"jaxId":"1FMVLNTKD6","funcs":[]}, "subs": []
//			}
//		}/*Doc}#*/;
//	}