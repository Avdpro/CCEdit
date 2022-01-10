//Auto genterated by Cody
import {$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FBR1UGHB0Imports*/
/*}#1FBR1UGHB0Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var itemFile=function (app, item, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FBR1UGHB3ExLocal*/
	/*}#1FBR1UGHB3ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FBR1UGHB5ExState*/
		/*}#1FBR1UGHB5ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FBR1UGHB3Mid*/
	/*}#1FBR1UGHB3Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FBR1UGHB3", "w": "FW", "h": 24, "autoLayout": 1, 
		"hudState": state, 
		"hudBtnDown": {
			"type": "box", "jaxId": "1FBR1UGHB9", "w": "FW", "h": 32, "color": appCfg.color.highLight, "shadowColor": [0,0,0,0.5]
		},
		items: [
			{
				"type": "image", "jaxId": "1FBR1UGHD3", "id": "ImgIcon", "w": 24, "h": 24, "image": "assets/wenjian.svg", "autoSize": 0, "fitSize": 1
			},
			{
				"type": "text", "jaxId": "1FBR1UGHD5", "id": "TxtName", "x": 26, "w": 100, "h": 24, "text": "0", "color": [0,0,0], "alignV": 1, "fontSize": appCfg.txtSize.mid
			}
		],
		faces: {
			"normal": {
			},
			"hot": {
			}
		},
		OnCreate: function(){
			self=this;
			/*#{1FBR1UGHB3CreateFunc*/
			/*}#1FBR1UGHB3CreateFunc*/
		}
	};
	/*#{1FBR1UGHB3ExViewDef*/
	/*}#1FBR1UGHB3ExViewDef*/
	
	return cssVO;
};

export {itemFile};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "itemFile.js", "def": "CdyFileUIGear", "jaxId": "1FBR1UGHB0", 
//			"attrs": {
//				"gearName": "\"itemFile\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FBR1UGHB1", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FBR1UGHB2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FBR1UGHB3", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR1UGHB4", 
//					"attrs": {
//						"item": {
//							"name": "item", "type": "object", "def": "CdyAttrMockupObj", "mockupDef": "MockupRef1FBS4FICA0", "mockupName": "jsfile", "tip": ""
//						}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FBR1UGHB5", 
//					"attrs": {}, "funcs": {"jaxId":"1FBR1UGHB6","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0"
//				}, 
//				"viewFaces": {
//					"jaxId": "1FBR1UGHB7", 
//					"entrys": [
//						{
//							"jaxId": "1FBSBDHUO0", "attrs": {"Face Name":"\"normal\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBSBG6N00", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FBSBEJDK0", "attrs": {"Face Name":"\"hot\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBSBG6N01", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						}
//					]
//				}, 
//				"funcs": {"jaxId":"1FBR1UGHB8","funcs":[]}, 
//				"btnHuds": {
//					"hudBtnDown": {
//						"type": "object", "def": "HudBox", "jaxId": "1FBR1UGHB9", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "32", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "color": "#appCfg.color.highLight", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//							"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//							"rotate": "0"
//						}, 
//						"funcs": {"jaxId":"1FBR1UGHC0","funcs":[]}, "subs": []
//					}
//				}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudImage", "jaxId": "1FBR1UGHD3", 
//						"attrs": {
//							"locked": "0", "id": "\"ImgIcon\"", "x": "0", "y": "0", "w": "24", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "image": "assets/wenjian.svg", "autoSize": "0", "fitSize": "1", "alpha": "1", "rotate": "0"
//						}, 
//						"funcs": {"jaxId":"1FBR1UGHD4","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FBR1UGHD5", 
//						"attrs": {
//							"locked": "0", "id": "\"TxtName\"", "x": "26", "y": "0", "w": "100", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "text": "\"0\"", "color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", 
//							"alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.mid", "bold": "0", "italic": "0", "underline": "0", "alpha": "1", 
//							"rotate": "0"
//						}, 
//						"funcs": {"jaxId":"1FBR1UGHE0","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}