//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FO4U6EE40Imports*/
/*}#1FO4U6EE40Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var btnSmall=function (app, w, text, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FO4U6EE41ExLocal*/
	/*}#1FO4U6EE41ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FO4U6EE43ExState*/
		/*}#1FO4U6EE43ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FO4U6EE41Mid*/
	/*}#1FO4U6EE41Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FO4U6EE41", "x": 153, "y": 186, "w": w, "h": 20, 
		"hudState": state, 
		items: [
			{
				"type": "box", "jaxId": "1FO4UNE3K3", "x": 0, "y": 0, "w": "FW", "h": "FH", "color": appCfg.color.btnStdFace, "coner": 4, "shadow": 1, "shadowX": 0, 
				"shadowY": 1, "shadowBlur": 2, "shadowColor": [0,0,0,0.5]
			},
			{
				"type": "text", "jaxId": "1FO4UNE3K12", "x": 0, "y": 0, "w": 150, "h": 20, "autoLayout": 1, "text": text, "color": appCfg.color.btnStdText, "alignH": 1, 
				"alignV": 1, "fontSize": appCfg.txtSize.smallMid
			}
		],
		faces: {
			"up": {
				/**/"#1FO4UNE3K3": {
					"color": appCfg.color.btnStdFace, "y": 0, "shadow": 1
				},
				/**/"#1FO4UNE3K12": {
					"y": 0, "alpha": 1
				},
			},
			"down": {
				/**/"#1FO4UNE3K3": {
					"color": appCfg.color.btnStdDown, "y": 1, "shadow": 0
				},
				/**/"#1FO4UNE3K12": {
					"y": 1, "alpha": 0.75
				},
			},
			"gray": {
				/**/"#1FO4UNE3K3": {
					"y": 0, "color": appCfg.color.btnStdGray, "shadow": 1
				},
				/**/"#1FO4UNE3K12": {
					"y": 0, "alpha": 0.75
				},
			}
		},
		OnCreate: function(){
			self=this;
			/*#{1FO4U6EE41CreateFunc*/
			/*}#1FO4U6EE41CreateFunc*/
		}
	};
	/*#{1FO4U6EE41ExViewDef*/
	/*}#1FO4U6EE41ExViewDef*/
	
	return cssVO;
};

/*#{1FO4U6EE40PostCode*/
/*}#1FO4U6EE40PostCode*/

export {btnSmall};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "btnSmall.js", "def": "CdyFileUIGear", "jaxId": "1FO4U6EE40", 
//			"attrs": {
//				"gearName": "\"btnSmall\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FO4U6EE50", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FO4U6EE52","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FO4U6EE41", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4U6EE42", 
//					"attrs": {
//						"w": {"type":"int","valText":"150","initVal":"","info":null,"tip":null}, 
//						"text": {
//							"type": "string", "valText": "\"button\"", "initVal": "", "info": null, 
//							"tip": null
//						}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FO4U6EE43", 
//					"attrs": {}, "funcs": {"jaxId":"1FO4U6EE53","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "153", "y": "186", "w": "#w", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "drag": "NA", "enable": "On"
//				}, 
//				"viewFaces": {
//					"jaxId": "1FO4U6EE54", 
//					"entrys": [
//						{
//							"jaxId": "1FO4UE28T0", "attrs": {"Face Name":"\"up\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4UNE3K0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FO4UE6CP0", "attrs": {"Face Name":"\"down\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4UNE3K1", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FO4UEB8R0", "attrs": {"Face Name":"\"gray\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4UNE3K2", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						}
//					]
//				}, 
//				"funcs": {"jaxId":"1FO4U6EE56","funcs":[]}, "btnHuds": {}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FO4UNE3K3", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.btnStdFace", "border": "0", 
//							"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "4", "gradient": "\"\"", "shadow": "1", "shadowX": "0", "shadowY": "1", "shadowBlur": "2", 
//							"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//						}, 
//						"faces": {
//							"jaxId": "1FO4UNE3K4", 
//							"entrys": [
//								{
//									"jaxId": "1FO4UNE3K5", "entryId": "1FO4UE28T0", "faceName": "up", 
//									"attrs": {"color":"#appCfg.color.btnStdFace","y":"0","shadow":"1"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FO4UNE3K6", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FO4UNE3K7", "entryId": "1FO4UE6CP0", "faceName": "down", 
//									"attrs": {"color":"#appCfg.color.btnStdDown","y":"1","shadow":"0"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FO4UNE3K8", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FO4UNE3K9", "entryId": "1FO4UEB8R0", "faceName": "gray", 
//									"attrs": {"y":"0","color":"#appCfg.color.btnStdGray","shadow":"1"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FO4UNE3K10", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FO4UNE3K11","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FO4UNE3K12", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "150", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "#text", "color": "#appCfg.color.btnStdText", 
//							"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Center", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//							"bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FO4UNE3K13", 
//							"entrys": [
//								{
//									"jaxId": "1FO4UNE3K14", "entryId": "1FO4UE28T0", "faceName": "up", 
//									"attrs": {"y":"0","alpha":"1"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FO4UNE3K15", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FO4UNE3K16", "entryId": "1FO4UE6CP0", "faceName": "down", 
//									"attrs": {"y":"1","alpha":"0.75"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FO4UNE3K17", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FO4UNE3K18", "entryId": "1FO4UEB8R0", "faceName": "gray", 
//									"attrs": {"y":"0","alpha":"0.75"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FO4UNE3K19", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FO4UNE3K20","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}