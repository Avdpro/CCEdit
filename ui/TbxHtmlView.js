//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {btnIcon} from "../gear/btnIcon.js";
/*#{1FOE5MIS10Imports*/
import {appData} from "../appData.js";
import {CCDoc} from "../data/CCDoc.js";
import pathLib from "/@path";
/*}#1FOE5MIS10Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var TbxHtmlView=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FOE5MIS11ExLocal*/
	/*}#1FOE5MIS11ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FOE5MIS13ExState*/
		/*}#1FOE5MIS13ExState*/
	},);
	/*#{1FOE5MIS11PostState*/
	let curDoc=null;
	let curURL="";
	let pageFrame=null;
	let pageDoc=null;
	/*}#1FOE5MIS11PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FOE5MIS11", 
		"locked": 0, "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, 
		items: [
			{
				"type": "hud", "jaxId": "1FOE8O38B0", "id": "BoxPage", "x": 0, "y": 30, "w": "FW", "h": "FH-30", "autoLayout": 1
			},
			{
				"type": "box", "jaxId": "1FOE8O38B3", "id": "BoxHead", "x": 0, "y": 0, "w": "FW", "h": 30, "autoLayout": 1, "color": appCfg.color.headBox, "shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": btnIcon(app,24,"arrowright.svg",null),"jaxId": "1FOE6ATIV0", 
						"locked": 0, "id": "BtnUseDoc", "x": 3, "y": 3, "tip": "Use this file", 
						//函数
						OnClick:function(){
							/*#{1FOER5DES0Code*/
							self.openDocPage();
							/*}#1FOER5DES0Code*/
						}
					},
					{
						"type": "edit", "jaxId": "1FOE8O38B6", "id": "EdURL", "x": 30, "y": 5, "w": "FW-90", "h": 20, "autoLayout": 1, "bgColor": [255,255,255,1], "borderStyle": 0, 
						"placeHolder": "Page path/URL", "outline": 0, "spellCheck": 0, 
						//函数
						OnUpdate:function(){
							/*#{1FOEPOQBT0Code*/
							self.openPage(self.EdURL.text);
							/*}#1FOEPOQBT0Code*/
						}
					},
					{
						"type": btnIcon(app,24,"redo.svg",null),"jaxId": "1FOE6AVM00", 
						"locked": 0, "x": "FW-60", "y": 3, "autoLayout": 1, "tip": "Refresh", 
						//函数
						OnClick:function(){
							/*#{1FOEQ09VM0Code*/
							self.refreshPage();
							/*}#1FOEQ09VM0Code*/
						}
					},
					{
						"type": btnIcon(app,24,"browser.svg",null),"jaxId": "1FOE86VJE0", 
						"locked": 0, "x": "FW-36", "y": 3, "autoLayout": 1, "tip": "Open page", 
						//函数
						OnClick:function(){
							/*#{1FOEQ09VM1Code*/
							self.openBrowser();
							/*}#1FOEQ09VM1Code*/
						}
					},
					{
						"type": "box", "jaxId": "1FOE8O38B10", "x": 0, "y": "FH", "w": "FW", "h": "1", "autoLayout": 1, "color": [80,80,80,1], "shadowColor": [0,0,0,0.5]
					}
				]
			}
		],
		faces: {
		},
		/*#{1FOE5MIS11ExAttrs*/
		/*}#1FOE5MIS11ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FOE5MIS11CreateFunc*/
			app.onNotify("FocusDoc",()=>{
				self.showUI();
			},self);
			/*}#1FOE5MIS11CreateFunc*/
		
		}
	};
	/*#{1FOE5MIS11ExViewDef*/
	let showPage=()=>{
		self.showPage(true);
	};

	//------------------------------------------------------------------------
	//Called when show:
	cssVO.showUI=function(vo){
		let doc;
		doc=CCDoc.getHotDoc();
		if(curDoc===doc){
			return;
		}
		if(curDoc){
			curDoc.offNotify("Save",showPage);
		}
		curDoc=doc;
		if(doc){
			let ext;
			curDoc.onNotify("Save",showPage,self);
			curDoc.onNotify("Load",showPage,self);
			ext=pathLib.extname(doc.path).toLowerCase();
			if(ext===".html"||ext===".htm"){
				self.BtnUseDoc.enable=true;		
			}else{
				self.BtnUseDoc.enable=false;		
			}
		}else{
			self.BtnUseDoc.enable=false;		
		}
		self.showPage(false);
	};
	
	//------------------------------------------------------------------------
	//Create the iFrame if there is not:
	cssVO.ensureFrame=function(){
		if(!pageFrame){
			pageFrame=document.createElement("iframe");
			//pageFrame.src=`${document.location.origin}//-terminal/frame.html?${seq}`;
			pageFrame.style.position="absolute";
			pageFrame.style.left="0px";
			pageFrame.style.top="0px";
			pageFrame.style.width="100%";
			pageFrame.style.height="100%";
			pageFrame.style.border="none";
			self.BoxPage.webObj.appendChild(pageFrame);
		}
	};
	
	//------------------------------------------------------------------------
	//Generate URL from doc
	function doc2URL(doc){
		return `${document.location.origin}//${app.appPrj.diskName}/${doc.path}`;
	};
	
	//------------------------------------------------------------------------
	//Open page:
	cssVO.openPage=function(url){
		self.ensureFrame();
		curURL=url;
		self.EdURL.text=curURL;
		pageFrame.src=curURL;
		pageDoc=null;
	};
	
	//------------------------------------------------------------------------
	//Refresh the page:
	cssVO.refreshPage=function(){
		if(pageFrame && curURL){
			pageFrame.src=curURL;
		}
	};
	
	//------------------------------------------------------------------------
	//Open a new web-browser-page:
	cssVO.openBrowser=function(){
		if(pageFrame && curURL){
			window.open(curURL,"CCEditHtmlViewOpen");
		}
	};
	
	//------------------------------------------------------------------------
	//Show the html-web page:
	cssVO.showPage=function(update=1){
		if(pageFrame && curURL){
			//Reload the page?
			if(update){
				pageFrame.src=curURL;
			}
			return;
		}
		if(!curURL && curDoc){
			let ext;
			//Check if current doc is ok to open:
			ext=pathLib.extname(curDoc.path).toLowerCase();
			if(ext===".html"||ext===".htm"){
				curURL=doc2URL(curDoc);
				pageDoc=curDoc;
			}
		}
		if(curURL){
			self.ensureFrame();
			self.EdURL.text=curURL;
			pageFrame.src=curURL;
		}
	};
	
	//------------------------------------------------------------------------
	//Open page by current doc:
	cssVO.openDocPage=function(){
		let url;
		if(!curDoc){
			return;
		}
		url=doc2URL(curDoc);
		self.ensureFrame();
		curURL=url;
		self.EdURL.text=curURL;
		pageFrame.src=curURL;
		pageDoc=curDoc;
	};
	
	//------------------------------------------------------------------------
	//Check if a doc is ok with this toolBox:
	cssVO.workWithDoc=function(doc){
		let ext;
		if(doc===pageDoc){
			return 100;
		}
		ext=pathLib.extname(doc.path).toLowerCase();
		if(ext===".html"||ext===".htm"){
			return 80;
		}
		return 0;
	};
	/*}#1FOE5MIS11ExViewDef*/
	
	return cssVO;
};

/*#{1FOE5MIS10PostCode*/
/*appData.regToolBox({
	codeName:"ViewHtml",
	name:"View Html",
	createUI:TbxHtmlView,
	icon:"assets/browser.svg",
	checkDoc(doc){
		let ext;
		ext=pathLib.extname(doc.path).toLowerCase();
		if(ext===".html"){
			return 100;
		}
		return 10;
	},
	ownBoxSize:true,
	initSize:300
});*/
/*}#1FOE5MIS10PostCode*/

export {TbxHtmlView};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "TbxHtmlView.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FOE5MIS10", 
//			"attrs": {
//				"viewName": "\"TbxHtmlView\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FOE5MIS11", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOE5MIS12", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FOE5MIS13", 
//						"attrs": {}, "funcs": {"jaxId":"1FOE5MIS14","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "autoLayout": "On"
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FOE5MIS16","entrys":[]}, 
//					"funcs": {"jaxId":"1FOE5MIS17","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "HudObj", "jaxId": "1FOE8O38B0", 
//							"attrs": {
//								"locked": "0", "id": "\"BoxPage\"", "x": "0", "y": "30", "w": "\"FW\"", "h": "\"FH-30\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FOE8O38B2","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FOE8O38B3", 
//							"attrs": {
//								"locked": "0", "id": "\"BoxHead\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "30", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.headBox", "border": "0", 
//								"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", 
//								"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//							}, 
//							"funcs": {"jaxId":"1FOE8O38B5","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FOE6ATIV0", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOE6ATIV1", 
//										"attrs": {
//											"w": {"type":"int","valText":"24","initVal":0,"info":null,"tip":null}, 
//											"image": {
//												"type": "string", "valText": "\"arrowright.svg\"", "initVal": "", 
//												"info": null, "tip": null
//											}
//										}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOE6ATIV2", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnUseDoc\"", "x": "3", "y": "3", "autoLayout": "Off", 
//										"tip": {
//											"type": "auto", "valText": "\"Use this file\"", "initVal": undefined, 
//											"info": null, "tip": null
//										}
//									}, 
//									"faces": null, 
//									"funcs": {
//										"jaxId": "1FOE6ATIV4", 
//										"funcs": [
//											{
//												"jaxId": "1FOER5DES0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOER78M10", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}
//									
//								},
//								{
//									"type": "object", "def": "HudEdit", "jaxId": "1FOE8O38B6", 
//									"attrs": {
//										"locked": "0", "id": "\"EdURL\"", "x": "30", "y": "5", "w": "\"FW-90\"", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "bgColor": "[255,255,255,1]", 
//										"border": "1", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "text": "\"\"", "font": "\"\"", "color": "[0,0,0]", "fontSize": "16", 
//										"placeHolder": "\"Page path/URL\"", "inputType": "text", "selectOnFocus": "1", "outline": "0", "spellCheck": "0"
//									}, 
//									"funcs": {
//										"jaxId": "1FOE8O38B8", 
//										"funcs": [
//											{
//												"jaxId": "1FOEPOQBT0", "type": "object", "def": "CdyFunc", "name": "OnUpdate", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOEPQJ1V0", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}, 
//									"subs": []
//								},
//								{
//									"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FOE6AVM00", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOE6AVM01", 
//										"attrs": {
//											"w": {"type":"int","valText":"24","initVal":0,"info":null,"tip":null}, 
//											"image": {
//												"type": "string", "valText": "\"redo.svg\"", "initVal": "", "info": null, 
//												"tip": null
//											}
//										}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOE6AVM02", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"\"", "x": "\"FW-60\"", "y": "3", "autoLayout": "On", 
//										"tip": {"type":"auto","valText":"\"Refresh\"","info":null,"tip":null}
//									}, 
//									"faces": null, 
//									"funcs": {
//										"jaxId": "1FOE6AVM03", 
//										"funcs": [
//											{
//												"jaxId": "1FOEQ09VM0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOEQ0JSC0", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}
//									
//								},
//								{
//									"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FOE86VJE0", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOE86VJE1", 
//										"attrs": {
//											"w": {"type":"int","valText":"24","initVal":0,"info":null,"tip":null}, 
//											"image": {
//												"type": "string", "valText": "\"browser.svg\"", "initVal": "", 
//												"info": null, "tip": null
//											}
//										}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOE86VJE2", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"\"", "x": "\"FW-36\"", "y": "3", "autoLayout": "On", 
//										"tip": {"type":"auto","valText":"\"Open page\"","info":null,"tip":null}
//									}, 
//									"faces": null, 
//									"funcs": {
//										"jaxId": "1FOE86VJE3", 
//										"funcs": [
//											{
//												"jaxId": "1FOEQ09VM1", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOEQ0JSC1", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}
//									
//								},
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FOE8O38B10", 
//									"attrs": {
//										"locked": "0", "id": "\"\"", "x": "0", "y": "\"FH\"", "w": "\"FW\"", "h": "\"1\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[80,80,80,1]", "border": "0", "borderStyle": "Solid", 
//										"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//										"shadowColor": "[0,0,0,0.5]"
//									}, 
//									"funcs": {"jaxId":"1FOE8O38B12","funcs":[]}, "subs": []
//								}
//							]
//							
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FOE5MIS18", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FOE5MIS110","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}