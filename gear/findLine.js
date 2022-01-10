//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FNN3MD530Imports*/
/*}#1FNN3MD530Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var findLine=function (app, line, text, item, node, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FNN3MD531ExLocal*/
	/*}#1FNN3MD531ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FNN3MD533ExState*/
		/*}#1FNN3MD533ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FNN3MD531Mid*/
	/*}#1FNN3MD531Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FNN3MD531", "x": 0, "y": 0, "w": "FW", "h": 24, "autoLayout": 1, 
		"hudState": state, 
		"hudBtnUp": {
			"type": "box", "jaxId": "1FNN8I01A0", "x": 0, "y": 0, "w": "FW", "h": 24, "autoLayout": 1, "color": [180,180,180,0], "shadowColor": [0,0,0,0.5]
		},
		"hudBtnDown": {
			"type": "box", "jaxId": "1FNNA2LLT0", "x": 0, "y": 0, "w": "FW", "h": 24, "color": appCfg.color.highLight, "shadowColor": [0,0,0,0.5]
		},
		"hudBtnOver": {
			"type": "box", "jaxId": "1FNN9VRJ30", "x": 0, "y": 0, "w": "FW", "h": 24, "color": [0,0,0,0.1], "shadowColor": [0,0,0,0.5]
		},
		items: [
			{
				"type": "text", "jaxId": "1FNN3VAVI0", "x": 20, "y": 0, "w": 100, "h": 24, "uiEvent": -1, "text": "["+line+"] "+text, "color": [0,0,0], "alignV": 1, 
				"font": "monospace", "fontSize": appCfg.txtSize.small
			}
		],
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FNN3MD531CreateFunc*/
			/*}#1FNN3MD531CreateFunc*/
		}
	};
	/*#{1FNN3MD531ExViewDef*/
	/*}#1FNN3MD531ExViewDef*/
	
	return cssVO;
};

/*#{1FNN3MD530PostCode*/
/*}#1FNN3MD530PostCode*/

export {findLine};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "findLine.js", "def": "CdyFileUIGear", "jaxId": "1FNN3MD530", 
//			"attrs": {
//				"gearName": "\"findLine\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FNN3MD540", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FNN3MD542","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FNN3MD531", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNN3MD532", 
//					"attrs": {
//						"line": {"type":"int","valText":"100","initVal":"","info":null,"tip":null}, 
//						"text": {
//							"type": "string", "valText": "\"let x=1024\"", "initVal": "", "info": null, 
//							"tip": null
//						}, 
//						"item": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}, 
//						"node": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FNN3MD533", 
//					"attrs": {}, "funcs": {"jaxId":"1FNN3MD543","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "drag": "NA", "enable": "On"
//				}, 
//				"viewFaces": {"jaxId":"1FNN3MD544","entrys":[]}, 
//				"funcs": {"jaxId":"1FNN3MD546","funcs":[]}, 
//				"btnHuds": {
//					"hudBtnUp": {
//						"type": "object", "def": "HudBox", "jaxId": "1FNN8I01A0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[180,180,180,0]", "border": "0", "borderStyle": "Solid", 
//							"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//							"shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FNN8I01A2","funcs":[]}, "subs": []
//					}, 
//					"hudBtnDown": {
//						"type": "object", "def": "HudBox", "jaxId": "1FNNA2LLT0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.highLight", "border": "0", 
//							"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", 
//							"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FNNA2LLT2","funcs":[]}, "subs": []
//					}, 
//					"hudBtnOver": {
//						"type": "object", "def": "HudBox", "jaxId": "1FNN9VRJ30", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[0,0,0,0.1]", "border": "0", "borderStyle": "Solid", 
//							"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//							"shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FNN9VRJ32","funcs":[]}, "subs": []
//					}
//				}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FNN3VAVI0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "20", "y": "0", "w": "100", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "TreeOff", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "#\"[\"+line+\"] \"+text", "color": "[0,0,0]", 
//							"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"monospace\"", 
//							"fontSize": "#appCfg.txtSize.small", "bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"funcs": {"jaxId":"1FNN3VAVI2","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}