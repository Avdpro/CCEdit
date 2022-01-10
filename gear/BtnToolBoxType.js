//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FMUGHN0A0Imports*/
/*}#1FMUGHN0A0Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var BtnToolBoxType=function (app, icon, name, codeName, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FMUGHN0A1ExLocal*/
	/*}#1FMUGHN0A1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FMUGHN0A3ExState*/
		/*}#1FMUGHN0A3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FMUGHN0A1Mid*/
	/*}#1FMUGHN0A1Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FMUGHN0A1", "x": 60, "y": 250, "w": 250, "h": 50, 
		"hudState": state, 
		"hudBtnUp": {
			"type": "box", "jaxId": "1FMUHDL1Q3", "x": 0, "y": 0, "w": "FW", "h": 50, "color": [255,255,255,1], "border": 3, "coner": 6, "shadow": 1, "shadowX": 0, 
			"shadowColor": [0,0,0,0.5]
		},
		"hudBtnDown": {
			"type": "box", "jaxId": "1FMUHDL1Q6", "x": 0, "y": 2, "w": "FW", "h": "FH", "color": [255,255,255,1], "border": 3, "coner": 6, "shadowColor": [0,0,0,0.5]
		},
		"hudBtnGray": {
			"type": "box", "jaxId": "1FMUHDL1Q9", "x": 0, "y": 0, "w": "FW", "h": "FH", "color": [255,255,255,1], "border": 3, "borderColor": [128,128,128,1], 
			"coner": 6, "shadowColor": [0,0,0,0.5]
		},
		"hudBtnOver": {
			"type": "box", "jaxId": "1FMUHDL1Q12", "x": 0, "y": 0, "w": "FW", "h": 50, "color": appCfg.color.highLight, "border": 3, "coner": 6, "shadow": 1, "shadowX": 0, 
			"shadowColor": [0,0,0,0.5]
		},
		items: [
			{
				"type": "image", "jaxId": "1FMUHDL1Q15", "x": 10, "y": 8, "w": 36, "h": 32, "image": icon, "autoSize": 0, "fitSize": 1
			},
			{
				"type": "text", "jaxId": "1FMUHDL1Q24", "id": "TxtName", "x": 50, "y": 0, "w": 100, "h": 50, "text": name, "color": [0,0,0], "alignV": 1, "fontSize": appCfg.txtSize.mid
			}
		],
		faces: {
			"up": {
				/**/"#1FMUHDL1Q15": {
					"y": 8, "alpha": 1
				},
				/*TxtName*/"#1FMUHDL1Q24": {
					"y": 0, "alpha": 1
				},
			},
			"down": {
				/**/"#1FMUHDL1Q15": {
					"y": 10, "alpha": 1
				},
				/*TxtName*/"#1FMUHDL1Q24": {
					"y": 2, "alpha": 1
				},
			},
			"gray": {
				/**/"#1FMUHDL1Q15": {
					"y": 8, "alpha": 0.5
				},
				/*TxtName*/"#1FMUHDL1Q24": {
					"y": 0, "alpha": 0.5
				},
			}
		},
		OnCreate: function(){
			self=this;
			/*#{1FMUGHN0A1CreateFunc*/
			/*}#1FMUGHN0A1CreateFunc*/
		}
	};
	/*#{1FMUGHN0A1ExViewDef*/
	/*}#1FMUGHN0A1ExViewDef*/
	
	return cssVO;
};

/*#{1FMUGHN0A0PostCode*/
/*}#1FMUGHN0A0PostCode*/

export {BtnToolBoxType};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "BtnToolBoxType.js", "def": "CdyFileUIGear", "jaxId": "1FMUGHN0A0", 
//			"attrs": {
//				"gearName": "\"BtnToolBoxType\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FMUGHN0B0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FMUGHN0B2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FMUGHN0A1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMUGHN0A2", 
//					"attrs": {
//						"icon": {
//							"type": "string", "valText": "\"assets/wenjian.svg\"", "initVal": "", 
//							"info": null, "tip": null
//						}, 
//						"name": {
//							"type": "string", "valText": "\"File Details\"", "initVal": "", "info": null, 
//							"tip": null
//						}, 
//						"codeName": {
//							"type": "string", "valText": "\"file\"", "initVal": "", "info": null, 
//							"tip": null
//						}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FMUGHN0A3", 
//					"attrs": {}, "funcs": {"jaxId":"1FMUGHN0B3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "60", "y": "250", "w": "250", "h": "50", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "drag": "NA", "enable": "On"
//				}, 
//				"viewFaces": {
//					"jaxId": "1FMUGHN0B4", 
//					"entrys": [
//						{
//							"jaxId": "1FMUH8IBI0", "attrs": {"Face Name":"\"up\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMUHDL1Q0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FMUH8QIP0", "attrs": {"Face Name":"\"down\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMUHDL1Q1", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FMUH8TK60", "attrs": {"Face Name":"\"gray\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMUHDL1Q2", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						}
//					]
//				}, 
//				"funcs": {"jaxId":"1FMUGHN0B6","funcs":[]}, 
//				"btnHuds": {
//					"hudBtnUp": {
//						"type": "object", "def": "HudBox", "jaxId": "1FMUHDL1Q3", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "50", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[255,255,255,1]", "border": "3", "borderStyle": "Solid", 
//							"borderColor": "[0,0,0,1]", "coner": "6", "gradient": "\"\"", "shadow": "1", "shadowX": "0", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//							"shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FMUHDL1Q5","funcs":[]}, "subs": []
//					}, 
//					"hudBtnDown": {
//						"type": "object", "def": "HudBox", "jaxId": "1FMUHDL1Q6", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "2", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[255,255,255,1]", "border": "3", "borderStyle": "Solid", 
//							"borderColor": "[0,0,0,1]", "coner": "6", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//							"shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FMUHDL1Q8","funcs":[]}, "subs": []
//					}, 
//					"hudBtnGray": {
//						"type": "object", "def": "HudBox", "jaxId": "1FMUHDL1Q9", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[255,255,255,1]", "border": "3", "borderStyle": "Solid", 
//							"borderColor": "[128,128,128,1]", "coner": "6", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//							"shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FMUHDL1Q11","funcs":[]}, "subs": []
//					}, 
//					"hudBtnOver": {
//						"type": "object", "def": "HudBox", "jaxId": "1FMUHDL1Q12", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "50", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.highLight", "border": "3", 
//							"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "6", "gradient": "\"\"", "shadow": "1", "shadowX": "0", "shadowY": "2", "shadowBlur": "3", 
//							"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FMUHDL1Q14","funcs":[]}, "subs": []
//					}
//				}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudImage", "jaxId": "1FMUHDL1Q15", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "10", "y": "8", "w": "36", "h": "32", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "image": "#icon", "autoSize": "0", "fitSize": "1"
//						}, 
//						"faces": {
//							"jaxId": "1FMUHDL1Q16", 
//							"entrys": [
//								{
//									"jaxId": "1FMUHDL1Q17", "entryId": "1FMUH8IBI0", "faceName": "up", 
//									"attrs": {"y":"8","alpha":"1"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FMUHDL1Q18", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FMUHDL1Q19", "entryId": "1FMUH8QIP0", "faceName": "down", 
//									"attrs": {"y":"10","alpha":"1"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FMUHDL1Q20", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FMUHDL1Q21", "entryId": "1FMUH8TK60", "faceName": "gray", 
//									"attrs": {"y":"8","alpha":"0.5"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FMUHDL1Q22", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FMUHDL1Q23","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FMUHDL1Q24", 
//						"attrs": {
//							"locked": "0", "id": "\"TxtName\"", "x": "50", "y": "0", "w": "100", "h": "50", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "#name", "color": "[0,0,0]", "autoSizeW": "0", 
//							"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.mid", 
//							"bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FMUHDL1Q25", 
//							"entrys": [
//								{
//									"jaxId": "1FMUHDL1Q26", "entryId": "1FMUH8IBI0", "faceName": "up", 
//									"attrs": {"y":"0","alpha":"1"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FMUHDL1Q27", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FMUHDL1Q28", "entryId": "1FMUH8QIP0", "faceName": "down", 
//									"attrs": {"y":"2","alpha":"1"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FMUHDL1Q29", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FMUHDL1Q30", "entryId": "1FMUH8TK60", "faceName": "gray", 
//									"attrs": {"y":"0","alpha":"0.5"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FMUHDL1Q31", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FMUHDL1Q32","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}