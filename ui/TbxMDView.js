//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FOC25BGK0Imports*/
import {appData} from "../appData.js";
import {CCDoc} from "../data/CCDoc.js";
import {fsPromises as fsp} from "/@fs";
import pathLib from "/@path";
import markdownit from "/@markdownit";
/*}#1FOC25BGK0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var TbxMDView=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FOC25BGK1ExLocal*/
	let curDoc;
	/*}#1FOC25BGK1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FOC25BGK3ExState*/
		/*}#1FOC25BGK3ExState*/
	},);
	/*#{1FOC25BGK1PostState*/
	/*}#1FOC25BGK1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FOC25BGK1", 
		"locked": 0, "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, 
		items: [
			{
				"type": "hud", "jaxId": "1FOC28QMI0", "id": "BoxMD", "x": 10, "y": 0, "w": "FW-10", "h": "FH", "autoLayout": 1
			}
		],
		faces: {
		},
		/*#{1FOC25BGK1ExAttrs*/
		/*}#1FOC25BGK1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FOC25BGK1CreateFunc*/
			self.BoxMD.webObj.style.overflowY = "scroll";
			app.onNotify("FocusDoc",()=>{
				self.showUI();
			},self);
			/*}#1FOC25BGK1CreateFunc*/
		
		}
	};
	/*#{1FOC25BGK1ExViewDef*/
	
	let showMD=()=>{
		self.showMD(1);
	};
	
	//------------------------------------------------------------------------
	//Show UI:
	cssVO.showUI=async function(vo){
		let doc;
		doc=CCDoc.getHotDoc();
		if(curDoc===doc){
			return;
		}
		if(curDoc){
			curDoc.offNotify("Save",showMD);
		}
		curDoc=doc;
		if(doc){
			curDoc.onNotify("Save",showMD,self);
			curDoc.onNotify("Load",showMD,self);
		}
		self.showMD();
	};
	
	//------------------------------------------------------------------------
	//Show MD contents:
	cssVO.showMD=async function(){
		let doc=curDoc;
		let disk=app.appPrj.disk.diskObj;
		if(!doc){
			self.BoxMD.webObj.innerHTML="<span color=#808080;>Doc is not markdown.</span>";
			return;
		}
		let ext=pathLib.extname(doc.path).toLowerCase();
		if(ext!==".md"){
			self.BoxMD.webObj.innerHTML="<span color=#808080;>Doc is not markdown.</span>";
			return;
		}
		try{
			let text=await disk.readFile(doc.path,"utf8");
			text=markdownit().render(text);
			self.BoxMD.webObj.innerHTML=text;
		}catch(err){
			self.BoxMD.webObj.innerHTML=`<div color=#C03030;>Parse markdown error: ${err}</div>`;
		}
	};

	//------------------------------------------------------------------------
	//Check if a doc is compatible with a doc:
	cssVO.workWithDoc=function(doc){
		let ext;
		ext=pathLib.extname(doc.path).toLowerCase();
		if(ext===".md"){
			return 100;
		}
		return 0;
	};
	
	/*}#1FOC25BGK1ExViewDef*/
	
	return cssVO;
};

/*#{1FOC25BGK0PostCode*/
//----------------------------------------------------------------------------
//:Register tool box:
/*appData.regToolBox({
	codeName:"ViewMD",
	name:"View MarkDown",
	createUI:TbxMDView,
	icon:"assets/filemd.svg",
	checkDoc(doc){
		let ext;
		ext=pathLib.extname(doc.path).toLowerCase();
		if(ext===".md"){
			return 100;
		}
		return 0;
	},
	ownBoxSize:true,
	initSize:300
});*/
/*}#1FOC25BGK0PostCode*/

export {TbxMDView};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "TbxMDView.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FOC25BGK0", 
//			"attrs": {
//				"viewName": "\"TbxMDView\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FOC25BGK1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOC25BGK2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FOC25BGK3", 
//						"attrs": {}, "funcs": {"jaxId":"1FOC25BGK4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "autoLayout": "On"
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FOC25BGK6","entrys":[]}, 
//					"funcs": {"jaxId":"1FOC25BGK7","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "HudObj", "jaxId": "1FOC28QMI0", 
//							"attrs": {
//								"locked": "0", "id": "\"BoxMD\"", "x": "10", "y": "0", "w": "\"FW-10\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FOC28QMI2","funcs":[]}, "subs": []
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FOC25BGK8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FOC25BGK10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}