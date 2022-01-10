//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FOA2G7AF0Imports*/
import {appData} from "../appData.js";
import {makeCokeFrame} from "/jaxweb/lib/CokeFrame.js";
/*}#1FOA2G7AF0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var BBXTerminal=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FOA2G7AF1ExLocal*/
	let cokeFrame=null;
	/*}#1FOA2G7AF1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FOA2G7AF3ExState*/
		/*}#1FOA2G7AF3ExState*/
	},);
	/*#{1FOA2G7AF1PostState*/
	/*}#1FOA2G7AF1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FOA2G7AF1", 
		"locked": 0, "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, 
		items: [
			{
				"type": "hud", "jaxId": "1FOA36O3B0", "id": "BoxFrame", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1
			}
		],
		faces: {
		},
		/*#{1FOA2G7AF1ExAttrs*/
		/*}#1FOA2G7AF1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FOA2G7AF1CreateFunc*/
			/*}#1FOA2G7AF1CreateFunc*/
		
		}
	};
	/*#{1FOA2G7AF1ExViewDef*/
	//------------------------------------------------------------------------
	//ShowUI:
	cssVO.showUI=async function(){
		setTimeout(async ()=>{
			if(!cokeFrame){
				cokeFrame=await makeCokeFrame(self.BoxFrame.webObj);
				await cokeFrame.execCmd(`cd /${app.appPrj.diskName}`);
				cokeFrame.startInputCmd();
			}
		},50);
		//Do nothing more
	};
	
	//------------------------------------------------------------------------
	//CoverUI:
	cssVO.coverUI=function(){
		//TODO: Code this:
	};
	/*}#1FOA2G7AF1ExViewDef*/
	
	return cssVO;
};

/*#{1FOA2G7AF0PostCode*/
/*appData.regBtmBox({
	codeName:"terminal",
	name:"Terminal",
	createUI:BBXTerminal,
	icon:"assets/help.svg"
});*/
/*}#1FOA2G7AF0PostCode*/

export {BBXTerminal};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "BBXTerminal.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FOA2G7AF0", 
//			"attrs": {
//				"viewName": "\"BBXTerminal\"", "device": "Custom size", "w": "750", "h": "375", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FOA2G7AF1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOA2G7AF2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FOA2G7AF3", 
//						"attrs": {}, "funcs": {"jaxId":"1FOA2G7AF4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "autoLayout": "On"
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FOA2G7AF6","entrys":[]}, 
//					"funcs": {"jaxId":"1FOA2G7AF7","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "HudObj", "jaxId": "1FOA36O3B0", 
//							"attrs": {
//								"locked": "0", "id": "\"BoxFrame\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FOA36O3B2","funcs":[]}, "subs": []
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FOA2G7AF8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FOA2G7AF10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}