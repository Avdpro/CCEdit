//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FNKQC26S0Imports*/
/*}#1FNKQC26S0Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var CheckBox=function (app, text, checked, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FNKQC26S1ExLocal*/
	/*}#1FNKQC26S1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		"checked": checked, "text": text
		/*#{1FNKQC26S3ExState*/
		/*}#1FNKQC26S3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FNKQC26S1Mid*/
	/*}#1FNKQC26S1Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FNKQC26S1", "x": 38, "y": 83, "w": 20, "h": 20, "cursor": "pointer", 
		"hudState": state, 
		"hudBtnUp": {
			"type": "box", "jaxId": "1FNKQRNV80", "x": 0, "y": 0, "w": 18, "h": 18, "color": [255,255,255,1], "border": 2, "coner": 5, "shadowColor": [0,0,0,0.5]
		},
		items: [
			{
				"type": "text", "jaxId": "1FNKQRNV83", "x": 22, "y": 0, "w": 100, "h": 20, "text": $V(()=>(state.text)),"color": [0,0,0], "alignV": 1, "fontSize": appCfg.txtSize.smallMid
			},
			{
				"type": "box", "jaxId": "1FNKQRNV86", "id": "BoxCheck", "x": 4, "y": 4, "w": 10, "h": 10, "display": $V(()=>(state.checked)),"color": [0,0,0,1], "coner": 5, 
				"shadowColor": [0,0,0,0.5]
			}
		],
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FNKQC26S1CreateFunc*/
			/*}#1FNKQC26S1CreateFunc*/
		}
	};
	//函数
	cssVO.OnClick=function(){
		/*#{1FNLDI4EJ0Code*/
		state.checked=state.checked?0:1;
		self.OnCheck&&self.OnCheck();
		/*}#1FNLDI4EJ0Code*/
	};
	
	/*#{1FNKQC26S1ExViewDef*/
	Object.defineProperty(cssVO,"%checked",{
		get:function(){
			return state.checked;
		},
		set:function(v){
			state.checked=v?1:0;
		},
		enumerable:true
	});
	Object.defineProperty(cssVO,"%text",{
		get:function(){
			return state.text;
		},
		set:function(v){
			state.text=v?1:0;
		},
		enumerable:true
	});
	/*}#1FNKQC26S1ExViewDef*/
	
	return cssVO;
};

/*#{1FNKQC26S0PostCode*/
/*}#1FNKQC26S0PostCode*/

export {CheckBox};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "CheckBox.js", "def": "CdyFileUIGear", "jaxId": "1FNKQC26S0", 
//			"attrs": {
//				"gearName": "\"CheckBox\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FNKQC26T0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FNKQC26T2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FNKQC26S1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNKQC26S2", 
//					"attrs": {
//						"text": {
//							"type": "string", "valText": "\"Check Box\"", "initVal": "", "info": null, 
//							"tip": null
//						}, 
//						"checked": {"type":"int","valText":"1","initVal":0,"info":null,"tip":null}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FNKQC26S3", 
//					"attrs": {
//						"checked": {
//							"type": "int", "valText": "#checked", "initVal": "", "info": null, "tip": "Add new attribute.", "exposeAttr": 1
//						}, 
//						"text": {
//							"type": "string", "valText": "#text", "initVal": "", "info": null, "tip": "Add new attribute.", "exposeAttr": 1
//						}
//					}, 
//					"funcs": {"jaxId":"1FNKQC26T3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "38", "y": "83", "w": "20", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"pointer\"", "zIndex": "0", "drag": "NA", "enable": "On"
//				}, 
//				"viewFaces": {"jaxId":"1FNKQC26T4","entrys":[]}, 
//				"funcs": {
//					"jaxId": "1FNKQC26T6", 
//					"funcs": [
//						{
//							"jaxId": "1FNLDI4EJ0", "type": "object", "def": "OnClick", "name": "OnClick", "info": "函数", "tip": "", 
//							"args": {
//								"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNLDIODA0", 
//								"attrs": {}
//							}, 
//							"attrs": {"Mockup Result":"\"\""}
//						}
//					]
//				}, 
//				"btnHuds": {
//					"hudBtnUp": {
//						"type": "object", "def": "HudBox", "jaxId": "1FNKQRNV80", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "18", "h": "18", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[255,255,255,1]", "border": "2", "borderStyle": "Solid", 
//							"borderColor": "[0,0,0,1]", "coner": "5", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//							"shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FNKQRNV82","funcs":[]}, "subs": []
//					}
//				}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FNKQRNV83", 
//						"attrs": {
//							"locked": "1", "id": "\"\"", "x": "22", "y": "0", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "${state.text}", "color": "[0,0,0]", "autoSizeW": "0", 
//							"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//							"bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"funcs": {"jaxId":"1FNKQRNV85","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FNKQRNV86", 
//						"attrs": {
//							"locked": "0", "id": "\"BoxCheck\"", "x": "4", "y": "4", "w": "10", "h": "10", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "${state.checked}", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[0,0,0,1]", "border": "0", "borderStyle": "Solid", 
//							"borderColor": "[0,0,0,1]", "coner": "5", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//							"shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FNKQRNV88","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}