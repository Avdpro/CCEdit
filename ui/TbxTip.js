//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FMU85B5U0Imports*/
import {appData} from "../appData.js";
import {fsPromises as fsp} from "/@fs";
import pathLib from "/@path";
import markdownit from "/@markdownit";
/*}#1FMU85B5U0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var TbxTip=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FMU85B5U1ExLocal*/
	/*}#1FMU85B5U1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FMU85B5U3ExState*/
		/*}#1FMU85B5U3ExState*/
	},);
	/*#{1FMU85B5U1PostState*/
	/*}#1FMU85B5U1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FMU85B5U1", 
		"locked": 0, "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, 
		items: [
			{
				"type": "hud", "jaxId": "1FMU87UMD0", "id": "DivMD", "x": 10, "y": 10, "w": "FW-20", "h": "FH-20", "autoLayout": 1
			}
		],
		faces: {
		},
		/*#{1FMU85B5U1ExAttrs*/
		/*}#1FMU85B5U1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FMU85B5U1CreateFunc*/
			self.showTip();
			/*}#1FMU85B5U1CreateFunc*/
		
		}
	};
	/*#{1FMU85B5U1ExViewDef*/
	//------------------------------------------------------------------------
	//Show tip markdown file:
	cssVO.showTip=async function(){
		let path=pathLib.join(app.dirPath,"tip.md");
		try{
			let text=await fsp.readFile(path,"utf8");
			text=markdownit().render(text);
			this.DivMD.webObj.innerHTML=text;
		}catch(err){
		}
	};

	//------------------------------------------------------------------------
	//Check if a doc is compatible with a doc:
	cssVO.workWithDoc=function(doc){
		return 10;
	};
	/*}#1FMU85B5U1ExViewDef*/
	
	return cssVO;
};

/*#{1FMU85B5U0PostCode*/
//----------------------------------------------------------------------------
//:Register tool box:
/*appData.regToolBox({
	codeName:"Tip",
	name:"CCEdit Tips",
	createUI:TbxTip,
	icon:"assets/help.svg"
});*/
/*}#1FMU85B5U0PostCode*/

export {TbxTip};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "TbxTip.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FMU85B5U0", 
//			"attrs": {
//				"viewName": "\"TbxTip\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FMU85B5U1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMU85B5U2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FMU85B5U3", 
//						"attrs": {}, "funcs": {"jaxId":"1FMU85B5U4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "autoLayout": "On"
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FMU85B5U6","entrys":[]}, 
//					"funcs": {"jaxId":"1FMU85B5U7","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "HudObj", "jaxId": "1FMU87UMD0", 
//							"attrs": {
//								"locked": "0", "id": "\"DivMD\"", "x": "10", "y": "10", "w": "\"FW-20\"", "h": "\"FH-20\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FMU87UMD2","funcs":[]}, "subs": []
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FMU85B5U8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FMU85B5U10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}