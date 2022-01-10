//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FOEAFH5P0Imports*/
/*}#1FOEAFH5P0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var TbxHtmlView1=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FOEAFH5P1ExLocal*/
	/*}#1FOEAFH5P1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FOEAFH5P3ExState*/
		/*}#1FOEAFH5P3ExState*/
	},);
	/*#{1FOEAFH5P1PostState*/
	/*}#1FOEAFH5P1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FOEAFH5P1", 
		"locked": 0, "x": 0, "y": 0, "w": "FW", "h": "FH", 
		items: [],
		faces: {
		},
		/*#{1FOEAFH5P1ExAttrs*/
		/*}#1FOEAFH5P1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FOEAFH5P1CreateFunc*/
			/*}#1FOEAFH5P1CreateFunc*/
		
		}
	};
	/*#{1FOEAFH5P1ExViewDef*/
	/*}#1FOEAFH5P1ExViewDef*/
	
	return cssVO;
};

/*#{1FOEAFH5P0PostCode*/
/*}#1FOEAFH5P0PostCode*/

export {TbxHtmlView1};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "TbxHtmlView1.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FOEAFH5P0", 
//			"attrs": {
//				"viewName": "\"TbxHtmlView1\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FOEAFH5P1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOEAFH5P2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FOEAFH5P3", 
//						"attrs": {}, "funcs": {"jaxId":"1FOEAFH5P4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\""
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FOEAFH5P6","entrys":[]}, 
//					"funcs": {"jaxId":"1FOEAFH5P7","funcs":[]}, "subs": []
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FOEAFH5P8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FOEAFH5P10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}