//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {BtnStd} from "../gear/BtnStd.js";
import {CheckBox} from "../gear/CheckBox.js";
/*#{1FMU80LUN0Imports*/
import {appData} from "../appData.js";
import pathLib from "/@path";
import {CCDoc} from "../data/CCDoc.js";
import {LintResult,LintDoc,LintPrj} from "../lib/lint.js";
import {findFile as CSSFindFile} from "../gear/findFile.js";
import {infoLine} from "../gear/infoLine.js";
/*}#1FMU80LUN0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var TbxLint=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FMU80LUN1ExLocal*/
	let prjResults=null;
	let curDoc=null;
	let docState=null;
	/*}#1FMU80LUN1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FMU80LUN3ExState*/
		/*}#1FMU80LUN3ExState*/
	},);
	/*#{1FMU80LUN1PostState*/
	/*}#1FMU80LUN1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FMU80LUN1", 
		"locked": 1, "x": 0, "y": 0, "w": "FW", "h": "FH", 
		items: [
			{
				"type": BtnStd(app,100,"Run lint",null),"jaxId": "1FNPO8Q6M1", 
				"locked": 0, "id": "BtnLint", "x": 10, "y": 10, 
				//函数
				OnClick:function(){
					/*#{1FNPU60DC0Code*/
					self.doLint();
					/*}#1FNPU60DC0Code*/
				}
			},
			{
				"type": "text", "jaxId": "1FNPOS7O40", "id": "TxtState", "x": 16, "y": 50, "w": 100, "h": 20, "text": "Lint result:", "color": [0,0,0], "fontSize": 16
			},
			{
				"type": "tree", "jaxId": "1FNPOS7O50", "id": "ListBox", "x": 10, "y": 75, "w": "FW-20", "h": "FH-85", "autoLayout": 1, "multiSelect": 0, 
				//函数
				nodeCSS:function(item, node){
					/*#{1FO06ONP80Code*/
					return {
						type:infoLine(app,20,item.type[0]==="w"?"warning.svg":"error.svg",`[${item.line}]: ${item.message}`),
						OnClick:function(){
							app.openFile(item.doc,item.line);
						}
					};
					/*}#1FO06ONP80Code*/
				},
				//函数
				getSubObjs:function(item, node){
					/*#{1FO06ONP82Code*/
					let list;
					list=item.errors.concat(item.warnings);
					return list;
					/*}#1FO06ONP82Code*/
				}
			},
			{
				"type": CheckBox(app,"Whole project",0,null),"jaxId": "1FNPOS7O51", 
				"locked": 0, "id": "CBPrj", "x": 120, "y": 16
			}
		],
		faces: {
		},
		/*#{1FMU80LUN1ExAttrs*/
		/*}#1FMU80LUN1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FMU80LUN1CreateFunc*/
			app.onNotify("FocusDoc",()=>{
				self.showUI();
			},self);
			/*}#1FMU80LUN1CreateFunc*/
		
		}
	};
	/*#{1FMU80LUN1ExViewDef*/
	let doLint=()=>{
		self.doLint(1);
	};
	//------------------------------------------------------------------------
	//Show UI:
	cssVO.showUI=function(vo){
		let doc;
		doc=CCDoc.getHotDoc();
		if(curDoc===doc){
			return;
		}
		if(curDoc){
			curDoc.offNotify("Save",doLint,self);
		}
		curDoc=doc;
		curDoc.onNotify("Save",doLint,self);
		curDoc.onNotify("Load",doLint,self);
		docState=doc.getState("ToolLint");
		if(!docState){
			docState=new LintResult(doc,null);
			doc.setState("ToolLint",docState);
		}
		if(!self.CBPrj.checked){
			self.doLint(1);
		}
	};

	//------------------------------------------------------------------------
	//Check if a doc is compatible with a doc:
	cssVO.workWithDoc=function(doc){
		return 10;
	};
	
	//------------------------------------------------------------------------
	//Do lint the doc, or project:
	cssVO.doLint=async function(thisFile){
		let result;
		if(!thisFile && self.CBPrj.checked){
			let files;
			self.ListBox.clear();
			self.BtnLint.enable=false;
			files=await LintPrj(app.appPrj.disk.diskObj,(file)=>{
				self.ListBox.addNode(file,null,CSSFindFile(app,file.path));
			});
			self.TxtState.text="Project lint result:";
			self.BtnLint.enable=true;
			return;
		}
		if(!self.CBPrj.checked){
			self.ListBox.clear();
			if(curDoc.lineCount()>10000){
				self.TxtState.text="Working...";
				self.BtnLint.enable=false;
			}
			result=await LintDoc(curDoc);
			if(result){
				self.showDocResult(result.result);
			}else{
				self.TxtState.text="Can't lint this file.";
			}
			self.BtnLint.enable=true;
		}
	};
	
	//------------------------------------------------------------------------
	//Show one doc's result
	cssVO.showDocResult=function(result){
		let listBox,list,i,n,item,cnt;
		cnt=0;
		listBox=self.ListBox;
		list=result.errors;
		if(list){
			n=list.length;
			for(i=0;i<n;i++){
				item=list[i];
				listBox.addNode(item,null,{
					type:infoLine(app,0,"error.svg",`[${item.line}]: ${item.message}`),info:item,
					OnClick:function(){
						app.openFile(this.info.doc.path,this.info.line);
					}
				});
			}
			cnt+=n;
		}
		list=result.warnings;
		if(list){
			n=list.length;
			for(i=0;i<n;i++){
				item=list[i];
				listBox.addNode(item,null,{
					type:infoLine(app,0,"warning.svg",`[${item.line}]: ${item.message}`),info:item,
					OnClick:function(){
						app.openFile(this.info.doc.path,this.info.line);
					}
				});
			}
			cnt+=n;
		}
		if(!cnt){
			self.TxtState.text="Zero issues, good job.";
		}else{
			self.TxtState.text="Lint result:";
		}
	};
	/*}#1FMU80LUN1ExViewDef*/
	
	return cssVO;
};

/*#{1FMU80LUN0PostCode*/
//----------------------------------------------------------------------------
//:Register tool box:
/*appData.regToolBox({
	codeName:"LintView",
	name:"Code Doctor",
	createUI:TbxLint,
	icon:"assets/tip.svg",
	checkDoc(doc){
		let ext;
		ext=pathLib.extname(doc.path).toLowerCase();
		if(ext===".js" || ext===".mjs" || ext===".json"|| ext===".html"|| ext===".htm"){
			return 50;
		}
		return 0;
	}
});*/
/*}#1FMU80LUN0PostCode*/

export {TbxLint};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "TbxLint.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FMU80LUN0", 
//			"attrs": {
//				"viewName": "\"TbxLint\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FMU80LUN1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMU80LUN2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FMU80LUN3", 
//						"attrs": {}, "funcs": {"jaxId":"1FMU80LUN4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "1", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\""
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FMU80LUN6","entrys":[]}, 
//					"funcs": {"jaxId":"1FMU80LUN7","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "Gear1FDAETMLJ0", "jaxId": "1FNPO8Q6M1", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNPO8Q6M2", 
//								"attrs": {
//									"w": {"type":"int","valText":"100","initVal":0,"info":null,"tip":null}, 
//									"text": {
//										"type": "string", "valText": "\"Run lint\"", "initVal": "", "info": null, 
//										"tip": null
//									}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNPO8Q6M3", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnLint\"", "x": "10", "y": "10", "autoLayout": "Off"
//							}, 
//							"faces": null, 
//							"funcs": {
//								"jaxId": "1FNPO8Q6M5", 
//								"funcs": [
//									{
//										"jaxId": "1FNPU60DC0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNPU68H50", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}
//							
//						},
//						{
//							"type": "object", "def": "HudTxt", "jaxId": "1FNPOS7O40", 
//							"attrs": {
//								"locked": "0", "id": "\"TxtState\"", "x": "16", "y": "50", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Lint result:\"", "color": "[0,0,0]", "autoSizeW": "0", 
//								"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "16", "bold": "0", 
//								"italic": "0", "underline": "0"
//							}, 
//							"funcs": {"jaxId":"1FNPOSL231","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "HudTreeBox", "jaxId": "1FNPOS7O50", 
//							"attrs": {
//								"locked": "0", "id": "\"ListBox\"", "x": "10", "y": "75", "w": "\"FW-20\"", "h": "\"FH-85\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "headSpace": "0", "endSpace": "50", 
//								"nodeGap": "0", "intend": "30", "multiSelect": "0"
//							}, 
//							"funcs": {
//								"jaxId": "1FNPOSL233", 
//								"funcs": [
//									{
//										"jaxId": "1FO06ONP80", "type": "object", "def": "CdyFunc", "name": "nodeCSS", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO06ONP81", 
//											"attrs": {
//												"item": {
//													"type": "auto", "valText": "null", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"node": {
//													"type": "auto", "valText": "null", "initVal": "", "info": null, 
//													"tip": null
//												}
//											}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									},
//									{
//										"jaxId": "1FO06ONP82", "type": "object", "def": "CdyFunc", "name": "getSubObjs", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO06ONP83", 
//											"attrs": {
//												"item": {
//													"type": "auto", "valText": "null", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"node": {
//													"type": "auto", "valText": "null", "initVal": "", "info": null, 
//													"tip": null
//												}
//											}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}, 
//							"subs": []
//						},
//						{
//							"type": "object", "def": "Gear1FNKQC26S0", "jaxId": "1FNPOS7O51", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNPOSL234", 
//								"attrs": {
//									"text": {
//										"type": "string", "valText": "\"Whole project\"", "initVal": "", 
//										"info": null, "tip": null
//									}, 
//									"checked": {"type":"int","valText":"0","initVal":0,"info":null,"tip":null}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNPOSL235", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"CBPrj\"", "x": "120", "y": "16", "autoLayout": "Off"
//							}, 
//							"faces": null, "funcs": {"jaxId":"1FNPOSL237","funcs":[]}
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FMU80LUN8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FMU80LUN10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}