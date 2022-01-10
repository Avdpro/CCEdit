//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FCPQCQ9I0Imports*/
import {btnIcon} from "./btnIcon.js"
/*}#1FCPQCQ9I0Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var docTab=function (app, doc, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FCPQCQ9I1ExLocal*/
	let tabBox;
	/*}#1FCPQCQ9I1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FCPQCQ9I3ExState*/
		/*}#1FCPQCQ9I3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FCPQCQ9I1Mid*/
	/*}#1FCPQCQ9I1Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FCPQCQ9I1", "x": 65, "y": 93, "w": 120, "h": appCfg.size.headerH, "drag": 1, 
		"hudState": state, 
		"hudBtnUp": {
			"type": "box", "jaxId": "1FCPR9E5U0", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "color": appCfg.color.tabFace, "border": 1, "borderColor": appCfg.color.tabFrame, 
			"shadowColor": [0,0,0,0.5]
		},
		"hudBtnDown": {
			"type": "box", "jaxId": "1FCPSU5DV0", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "color": appCfg.color.highLight, "border": 1, "borderColor": [180,180,180,1], 
			"shadowColor": [0,0,0,0.5]
		},
		items: [
			{
				"type": "box", "jaxId": "1FCPSU5DV3", "id": "BoxHot", "x": 1, "y": 1, "w": "FW-2", "h": "FH-2", "autoLayout": 1, "display": 0, "color": appCfg.color.window, 
				"shadowColor": [0,0,0,0.5]
			},
			{
				"type": "text", "jaxId": "1FCPQFKEI0", "id": "TxtName", "x": 5, "y": 0, "w": 100, "h": 28, "autoLayout": 1, "uiEvent": -1, "text": doc.name, "color": [0,0,0], 
				"alignV": 1, "fontSize": appCfg.txtSize.smallMid
			},
			{
				"type": btnIcon(app,16,"close.svg",null),"jaxId": "1FCPSU5DV6", 
				"locked": 0, "x": "FW-22", "y": "(FH-16)/2", "autoLayout": 1, 
				//函数
				OnClick:function(e){
					/*#{1FCR0HVKF0Code*/
					app.closeDoc(doc);
					/*}#1FCR0HVKF0Code*/
				}
			},
			{
				"type": "box", "jaxId": "1FCR1NSHD0", "id": "HotDot", "x": "FW-12", "y": 3, "w": 8, "h": 8, "autoLayout": 1, "display": 0, "color": [150,0,0,1], "coner": 5, 
				"shadowColor": [0,0,0,0.5]
			}
		],
		faces: {
			"hot": {
				/*BoxHot*/"#1FCPSU5DV3": {
					"display": 1
				},
			},
			"normal": {
				/*BoxHot*/"#1FCPSU5DV3": {
					"display": 0
				},
			},
			"changed": {
				/*HotDot*/"#1FCR1NSHD0": {
					"display": 1
				},
			},
			"saved": {
				/*HotDot*/"#1FCR1NSHD0": {
					"display": 0
				},
			}
		},
		OnCreate: function(){
			self=this;
			/*#{1FCPQCQ9I1CreateFunc*/
			let txtW,w;
			tabBox=self.father.father;
			self.doc=doc;
			txtW=this.TxtName.textW;
			w=txtW+30;
			w=w<50?50:w;
			w=w>160?160:w;
			this.w=w;
			txtW=w-30;
			this.TxtName.w=txtW;
			this.docName=doc.name;
			if(w===160){
				this.TxtName.ellipsis=1;
			}
			doc.assignTab(this);
			/*}#1FCPQCQ9I1CreateFunc*/
		}
	};
	//函数
	cssVO.OnDragStart=function(e){
		/*#{1FCUVTEV40Code*/
		self.zIndex=5;
		self.ox=self.x;
		self.uiEvent=-1;
		tabBox.dragTabStart(self);
		/*}#1FCUVTEV40Code*/
	};
	
	//函数
	cssVO.OnDrag=function(e, dx, dy){
		/*#{1FCUVTEV41Code*/
		self.x=self.ox+dx;
		tabBox.dragTab(self,self.x);
		/*}#1FCUVTEV41Code*/
	};
	
	//函数
	cssVO.OnDragEnd=function(e, cancel, dx, dy){
		/*#{1FCUVTEV42Code*/
		self.zIndex=0;
		self.uiEvent=1;
		tabBox.dragTabEnd(self,self.x);
		/*}#1FCUVTEV42Code*/
	};
	
	/*#{1FCPQCQ9I1ExViewDef*/
	cssVO.OnClick=function(){
		app.focusDoc(doc);
	};
	/*}#1FCPQCQ9I1ExViewDef*/
	
	return cssVO;
};

/*#{1FCPQCQ9I0PostCode*/
/*}#1FCPQCQ9I0PostCode*/

export {docTab};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "docTab.js", "def": "CdyFileUIGear", "jaxId": "1FCPQCQ9I0", 
//			"attrs": {
//				"gearName": "\"docTab\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FCPQCQ9M0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FCPQCQ9M2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FCPQCQ9I1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCPQCQ9I2", 
//					"attrs": {
//						"doc": {
//							"name": "doc", "type": "object", "def": "CdyAttrMockupObj", "mockupDef": "MockupRef1FCN17IQQ0", "mockupName": "doc", "tip": ""
//						}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FCPQCQ9I3", 
//					"attrs": {}, "funcs": {"jaxId":"1FCPQCQ9M3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "65", "y": "93", "w": "120", "h": "#appCfg.size.headerH", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//					"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "drag": "Move out", "enable": "On"
//				}, 
//				"viewFaces": {
//					"jaxId": "1FCPQCQ9M4", 
//					"entrys": [
//						{
//							"jaxId": "1FCQ523G60", "attrs": {"Face Name":"\"hot\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCQ534LM0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FCQ52IA90", "attrs": {"Face Name":"\"normal\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCQ534LM1", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FCR1LBEE0", 
//							"attrs": {"Face Name":"\"changed\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCR1P9SQ0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FCR1LONI0", "attrs": {"Face Name":"\"saved\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCR1P9SQ1", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						}
//					]
//				}, 
//				"funcs": {
//					"jaxId": "1FCPQCQ9M6", 
//					"funcs": [
//						{
//							"jaxId": "1FCUVTEV40", "type": "object", "def": "OnDragStart", "name": "OnDragStart", "info": "函数", "tip": "", 
//							"args": {
//								"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCUVVFNF0", 
//								"attrs": {"e":{"type":"auto","valText":"0","info":null,"tip":null}}
//							}, 
//							"attrs": {"Mockup Result":"\"\""}
//						},
//						{
//							"jaxId": "1FCUVTEV41", "type": "object", "def": "OnDrag", "name": "OnDrag", "info": "函数", "tip": "", 
//							"args": {
//								"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCUVVFNF1", 
//								"attrs": {
//									"e": {"type":"auto","valText":"0","info":null,"tip":null}, 
//									"dx": {"type":"auto","valText":"0","info":null,"tip":null}, 
//									"dy": {"type":"auto","valText":"0","info":null,"tip":null}
//								}
//							}, 
//							"attrs": {"Mockup Result":"\"\""}
//						},
//						{
//							"jaxId": "1FCUVTEV42", "type": "object", "def": "OnDragEnd", "name": "OnDragEnd", "info": "函数", "tip": "", 
//							"args": {
//								"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCUVVFNF2", 
//								"attrs": {
//									"e": {"type":"auto","valText":"0","info":null,"tip":null}, 
//									"cancel": {"type":"auto","valText":"0","info":null,"tip":null}, 
//									"dx": {"type":"auto","valText":"0","info":null,"tip":null}, 
//									"dy": {"type":"auto","valText":"0","info":null,"tip":null}
//								}
//							}, 
//							"attrs": {"Mockup Result":"\"\""}
//						}
//					]
//				}, 
//				"btnHuds": {
//					"hudBtnUp": {
//						"type": "object", "def": "HudBox", "jaxId": "1FCPR9E5U0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.tabFace", "border": "1", "borderStyle": "Solid", 
//							"borderColor": "#appCfg.color.tabFrame", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//							"shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FCPR9E5U2","funcs":[]}, "subs": []
//					}, 
//					"hudBtnDown": {
//						"type": "object", "def": "HudBox", "jaxId": "1FCPSU5DV0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.highLight", "border": "1", 
//							"borderStyle": "Solid", "borderColor": "[180,180,180,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", 
//							"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FCPSU5DV2","funcs":[]}, "subs": []
//					}
//				}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FCPSU5DV3", 
//						"attrs": {
//							"locked": "0", "id": "\"BoxHot\"", "x": "1", "y": "1", "w": "\"FW-2\"", "h": "\"FH-2\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//							"display": "Hide", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.window", 
//							"border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", 
//							"shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//						}, 
//						"faces": {
//							"jaxId": "1FCQ1UM514", 
//							"entrys": [
//								{
//									"jaxId": "1FCQ534LM2", "entryId": "1FCQ523G60", "faceName": "hot", 
//									"attrs": {"display":"Show"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCQ534LM3", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FCQ534LM4", "entryId": "1FCQ52IA90", "faceName": "normal", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCQ534LM5", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FCPSU5DV5","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FCPQFKEI0", 
//						"attrs": {
//							"locked": "0", "id": "\"TxtName\"", "x": "5", "y": "0", "w": "100", "h": "28", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "TreeOff", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "#doc.name", "color": "[0,0,0]", "autoSizeW": "0", 
//							"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//							"bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"funcs": {"jaxId":"1FCPQFKEI2","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FCPSU5DV6", 
//						"args": {
//							"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCPSU5DV7", 
//							"attrs": {
//								"w": {"type":"int","valText":"16","initVal":0,"info":null,"tip":null}, 
//								"image": {
//									"type": "string", "valText": "\"close.svg\"", "initVal": "", "info": null, 
//									"tip": null
//								}
//							}
//						}, 
//						"stateObj": {
//							"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCPSU5DV8", 
//							"attrs": {}
//						}, 
//						"attrs": {
//							"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"\"", "x": "\"FW-22\"", "y": "\"(FH-16)/2\"", "autoLayout": "On"
//						}, 
//						"faces": null, 
//						"funcs": {
//							"jaxId": "1FCPSU5DV10", 
//							"funcs": [
//								{
//									"jaxId": "1FCR0HVKF0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//									"args": {
//										"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCR0HVKF1", 
//										"attrs": {
//											"e": {
//												"type": "auto", "valText": "null", "initVal": "", "info": null, 
//												"tip": null
//											}
//										}
//									}, 
//									"attrs": {"Mockup Result":"\"\""}
//								}
//							]
//						}
//						
//					},
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FCR1NSHD0", 
//						"attrs": {
//							"locked": "0", "id": "\"HotDot\"", "x": "\"FW-12\"", "y": "3", "w": "8", "h": "8", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Hide", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[150,0,0,1]", "border": "0", "borderStyle": "Solid", 
//							"borderColor": "[0,0,0,1]", "coner": "5", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//							"shadowColor": "[0,0,0,0.5]"
//						}, 
//						"faces": {
//							"jaxId": "1FCR1P9SR0", 
//							"entrys": [
//								{
//									"jaxId": "1FCR1P9SR1", "entryId": "1FCR1LBEE0", "faceName": "changed", 
//									"attrs": {"display":"Show"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCR1P9SR2", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FCR1P9SR3", "entryId": "1FCR1LONI0", "faceName": "saved", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCR1P9SR4", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FCR1P9SR5","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}