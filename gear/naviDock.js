//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {naviBox} from "./naviBox.js";
/*#{1FNGGRFGR0Imports*/
/*}#1FNGGRFGR0Imports*/
//----------------------------------------------------------------------------
/*界面的堆叠坞站。*/
var naviDock=function (app, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FNGGRFGR1ExLocal*/
	let isHot=0;
	/*}#1FNGGRFGR1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FNGGRFGR3ExState*/
		/*}#1FNGGRFGR3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FNGGRFGR1Mid*/
	/*}#1FNGGRFGR1Mid*/
	
	cssVO={
		"type": "dock", "jaxId": "1FNGGRFGR1", "id": "NaviDock", "x": 0, "y": 0, "w": "FW", "h": "FH", "ui": 0, "autoLayout": 1, 
		items: [
			{
				"type": naviBox(app,null),"jaxId": "1FNGH0H0E0", 
				"locked": 0, "id": "naviBox", "x": 0, "y": 0
			}
		],
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FNGGRFGR1CreateFunc*/
			app.naviDock=this;
			/*}#1FNGGRFGR1CreateFunc*/
		}
	};
	/*#{1FNGGRFGR1ExViewDef*/
	//-------------------------------------------------------------------------
	//Box获得App焦点:
	cssVO.OnAppFocus=function(){
		isHot=true;
		this.isHot=true;
		let ui=this.curUI;
		if(ui){
			ui.OnAppFocus();
		}
	};

	//-------------------------------------------------------------------------
	//Box失去App焦点:
	cssVO.OnAppBlur=function(){
		isHot=false;
		this.isHot=false;
		let ui=this.curUI;
		if(ui){
			ui.OnAppBlur();
		}
	};
	/*}#1FNGGRFGR1ExViewDef*/
	
	return cssVO;
};

/*#{1FNGGRFGR0PostCode*/
/*}#1FNGGRFGR0PostCode*/

export {naviDock};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "naviDock.js", "def": "CdyFileUIGear", "jaxId": "1FNGGRFGR0", 
//			"attrs": {
//				"gearName": "\"naviDock\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FNGGRFGS0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FNGGRFGS2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudDock", "jaxId": "1FNGGRFGR1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNGGRFGR2", 
//					"attrs": {}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FNGGRFGR3", 
//					"attrs": {}, "funcs": {"jaxId":"1FNGGRFGS3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"NaviDock\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "ui": "0", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//					"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {"jaxId":"1FNGGRFGS4","entrys":[]}, 
//				"funcs": {"jaxId":"1FNGGRFGS6","funcs":[]}, 
//				"subs": [
//					{
//						"type": "object", "def": "Gear1FBS9Q16V0", "jaxId": "1FNGH0H0E0", 
//						"args": {
//							"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNGH1GQL0", 
//							"attrs": {}
//						}, 
//						"stateObj": {
//							"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNGH1GQL1", 
//							"attrs": {}
//						}, 
//						"attrs": {
//							"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"naviBox\"", "x": "0", "y": "0", "autoLayout": "Off"
//						}, 
//						"faces": null, "funcs": {"jaxId":"1FNGH1GQL3","funcs":[]}
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}