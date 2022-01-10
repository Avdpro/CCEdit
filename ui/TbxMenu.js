//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FMU807IE0Imports*/
import {appData} from "../appData.js";
import {CCDoc} from "../data/CCDoc.js";
import {BtnToolBoxType} from "../gear/BtnToolBoxType.js"
/*}#1FMU807IE0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var TbxMenu=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FMU807IE1ExLocal*/
	let btns=[];
	/*}#1FMU807IE1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FMU807IE3ExState*/
		/*}#1FMU807IE3ExState*/
	},);
	/*#{1FMU807IE1PostState*/
	/*}#1FMU807IE1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FMU807IE1", 
		"locked": 0, "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "clip": 1, 
		items: [],
		faces: {
		},
		/*#{1FMU807IE1ExAttrs*/
		/*}#1FMU807IE1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FMU807IE1CreateFunc*/
			let list=appData.getToolBoxRegs();
			let def,css,pos,btn;
			pos=10;
			for(def of list){
				if(def.createUI!==TbxMenu){
					css={
						type:BtnToolBoxType(app,def.icon||"assets/wenjian.svg",def.name,def.codename),x:"(FW/2)",y:pos,def:def,anchorH:1,autoLayout:1,
						OnClick:function(){
							//switch toolbox:
							app.mainUI.showToolBox(this.def.codeName);
							return 1;
						}
					};
					btn=self.appendNewChild(css);
					btns.push(btn);
					pos+=60;
				}
			}
			app.onNotify("FocusDoc",()=>{
				self.updateButtons();
			},self);
			/*}#1FMU807IE1CreateFunc*/
		
		}
	};
	/*#{1FMU807IE1ExViewDef*/
	//------------------------------------------------------------------------
	//Call when show in dock:
	cssVO.showUI=function(vo){
		//TODO: filter buttons:
		self.updateButtons();
	};
	
	//------------------------------------------------------------------------
	//Update buttons state by doc:
	cssVO.updateButtons=function(){
		var doc,i,n,def,btn,score;
		doc=CCDoc.getHotDoc();
		n=btns.length;
		for(btn of btns){
			def=btn.def;
			if(def.checkDoc){
				score=def.checkDoc(doc);
			}else{
				score=10;
			}
			btn.enable=!!score;
		}
	};
	
	//------------------------------------------------------------------------
	//Check if a doc is compatible with a doc:
	cssVO.workWithDoc=function(doc){
		return 15;//Higher than other tool's default score, so can be default when select:
	};
	/*}#1FMU807IE1ExViewDef*/
	
	return cssVO;
};

/*#{1FMU807IE0PostCode*/
//----------------------------------------------------------------------------
//:Register tool box:
/*appData.regToolBox({
	codeName:"Menu",
	name:"Toolbox Menu",
	createUI:TbxMenu,
	icon:"assets/tip.svg",
	checkDoc(doc){
		return 10;
	}
});*/
/*}#1FMU807IE0PostCode*/

export {TbxMenu};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "TbxMenu.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FMU807IE0", 
//			"attrs": {
//				"viewName": "\"TbxMenu\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FMU807IE1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMU807IE2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FMU807IE3", 
//						"attrs": {}, "funcs": {"jaxId":"1FMU807IE4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "autoLayout": "On", "clip": "On"
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FMU807IE6","entrys":[]}, 
//					"funcs": {"jaxId":"1FMU807IE7","funcs":[]}, "subs": []
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FMU807IE8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FMU807IE10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}