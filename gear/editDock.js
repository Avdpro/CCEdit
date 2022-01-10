//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FCN3UDVQ0Imports*/
/*}#1FCN3UDVQ0Imports*/
//----------------------------------------------------------------------------
/*界面的堆叠坞站。*/
var editDock=function (app, w, h, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FCN3UDVQ1ExLocal*/
	/*}#1FCN3UDVQ1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FCN3UDVQ3ExState*/
		/*}#1FCN3UDVQ3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FCN3UDVQ1Mid*/
	/*}#1FCN3UDVQ1Mid*/
	
	cssVO={
		"type": "dock", "jaxId": "1FCN3UDVQ1", "id": "EditDoc", "x": 0, "y": 0, "w": w, "h": h, "ui": 0, "autoLayout": 1, 
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FCN3UDVQ1CreateFunc*/
			app.editDock=self;
			/*}#1FCN3UDVQ1CreateFunc*/
		}
	};
	/*#{1FCN3UDVQ1ExViewDef*/

	//------------------------------------------------------------------------
	//Show a doc to edit, maybe with a line number
	cssVO.showDoc=function(doc,line){
		self.showUI(doc.editor,{doc:doc,line:line});
	};
	
	//------------------------------------------------------------------------
	//关闭一个文档:
	cssVO.closeDoc=function(doc){
		let editor;
		editor=doc.editor;
		if(!editor){
			return;
		}
		doc.assignEditor(null);
		self.dismissUI(editor);
	};
	
	//------------------------------------------------------------------------
	//Box获得App焦点:
	cssVO.OnAppFocus=function(){
	};

	//-------------------------------------------------------------------------
	//Box失去App焦点:
	cssVO.OnAppBlur=function(){
	};
	
	//------------------------------------------------------------------------
	//快捷键处理:
	cssVO.handleShortcut=function(cmd){
		switch(cmd){
			case "CloseDoc":
				app.closeDoc(null);
				return 1;
			case "Save":
				app.DoSaveDoc();
				return 1;
			case "SaveAs":
				app.DoSaveAsDoc();
				return 1;
			default:{
				let ui=self.curUI;
				return ui.handleShortcut&&ui.handleShortcut(cmd);
			}
		}
	};
	/*}#1FCN3UDVQ1ExViewDef*/
	
	return cssVO;
};

/*#{1FCN3UDVQ0PostCode*/
/*}#1FCN3UDVQ0PostCode*/

export {editDock};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "editDock.js", "def": "CdyFileUIGear", "jaxId": "1FCN3UDVQ0", 
//			"attrs": {
//				"gearName": "\"editDock\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FCN3UDVV0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FCN3UDVV2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudDock", "jaxId": "1FCN3UDVQ1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCN3UDVQ2", 
//					"attrs": {
//						"w": {
//							"type": "string", "valText": "\"FW\"", "initVal": "", "info": null, 
//							"tip": null
//						}, 
//						"h": {
//							"type": "string", "valText": "\"FH\"", "initVal": "", "info": null, 
//							"tip": null
//						}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FCN3UDVQ3", 
//					"attrs": {}, "funcs": {"jaxId":"1FCN3UDVV3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"EditDoc\"", "x": "0", "y": "0", "w": "#w", "h": "#h", "ui": "0", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//					"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {"jaxId":"1FCN3UDVV4","entrys":[]}, 
//				"funcs": {"jaxId":"1FCN3UDVV6","funcs":[]}, "subs": []
//			}
//		}/*Doc}#*/;
//	}