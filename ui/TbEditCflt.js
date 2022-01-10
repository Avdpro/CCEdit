//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {btnSmall} from "../gear/btnSmall.js";
/*#{1FOGSCA420Imports*/
/*}#1FOGSCA420Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var TbEditCflt=function (app, editor){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FOGSCA421ExLocal*/
	/*}#1FOGSCA421ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FOGSCA423ExState*/
		/*}#1FOGSCA423ExState*/
	},);
	/*#{1FOGSCA421PostState*/
	/*}#1FOGSCA421PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FOGSCA421", 
		"locked": 0, "x": 0, "y": 0, "w": "FW", "h": 24, "autoLayout": 1, 
		items: [
			{
				"type": "box", "jaxId": "1FOGSIB5E0", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "color": appCfg.color.headBox, "shadowColor": [0,0,0,0.5]
			},
			{
				"type": "hud", "jaxId": "1FOHHSNFV0", "x": 0, "y": 0, "w": "FW*0.31", "h": "FH", "autoLayout": 1, 
				items: [
					{
						"type": "text", "jaxId": "1FOHHPK4S0", "id": "TxtCloud", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "text": "Cloud Version", "color": [0,0,0], 
						"alignH": 2, "alignV": 1, "fontSize": appCfg.txtSize.small
					}
				]
			},
			{
				"type": "hud", "jaxId": "1FOHHSONS0", "x": "FW*0.31", "y": 0, "w": "FW*0.38", "h": "FH", "autoLayout": 1, 
				items: [
					{
						"type": "text", "jaxId": "1FOHHSONS2", "id": "TxtCloud", "x": 0, "y": 0, "w": "FW", "h": 24, "autoLayout": 1, "text": "Mine Version", "color": [0,0,0], 
						"alignH": 1, "alignV": 1, "fontSize": appCfg.txtSize.small
					}
				]
			},
			{
				"type": "hud", "jaxId": "1FOHHV3HN0", "x": "FW*0.69", "y": 0, "w": "FW*0.31", "h": "FH", "autoLayout": 1, 
				items: [
					{
						"type": "text", "jaxId": "1FOHHV3HN2", "id": "TxtCloud", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "text": "Base Version", "color": [0,0,0], 
						"alignV": 1, "fontSize": appCfg.txtSize.small
					}
				]
			},
			{
				"type": btnSmall(app,150,"Conflict Resolved",null),"jaxId": "1FOGSIB5E3", 
				"locked": 0, "x": 5, "y": 2, 
				//函数
				OnClick:function(){
					/*#{1FOHG965O0Code*/
					app.DoResolveConflict(editor.conflictDoc);
					/*}#1FOHG965O0Code*/
				}
			},
			{
				"type": "box", "jaxId": "1FOGSOK9S0", "x": 0, "y": 24, "w": "FW", "h": 1, "autoLayout": 1, "color": [80,80,80,1], "shadowColor": [0,0,0,0.5]
			}
		],
		faces: {
		},
		/*#{1FOGSCA421ExAttrs*/
		/*}#1FOGSCA421ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FOGSCA421CreateFunc*/
			/*}#1FOGSCA421CreateFunc*/
		
		}
	};
	/*#{1FOGSCA421ExViewDef*/
	/*}#1FOGSCA421ExViewDef*/
	
	return cssVO;
};

/*#{1FOGSCA420PostCode*/
/*}#1FOGSCA420PostCode*/

export {TbEditCflt};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "TbEditCflt.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FOGSCA420", 
//			"attrs": {
//				"viewName": "\"TbEditCflt\"", "device": "Custom size", "w": "750", "h": "300", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FOGSCA421", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOGSCA422", 
//						"attrs": {"editor":{"type":"auto","valText":"null","initVal":"","info":""}}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FOGSCA423", 
//						"attrs": {}, "funcs": {"jaxId":"1FOGSCA430","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "24", "autoLayout": "On"
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FOGSCA432","entrys":[]}, 
//					"funcs": {"jaxId":"1FOGSCA433","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FOGSIB5E0", 
//							"attrs": {
//								"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.headBox", "border": "0", 
//								"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", 
//								"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//							}, 
//							"funcs": {"jaxId":"1FOGSIB5E2","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "HudObj", "jaxId": "1FOHHSNFV0", 
//							"attrs": {
//								"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW*0.31\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FOHHSNFV2","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FOHHPK4S0", 
//									"attrs": {
//										"locked": "0", "id": "\"TxtCloud\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Cloud Version\"", 
//										"color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Right", "alignV": "Center", "font": "\"\"", 
//										"fontSize": "#appCfg.txtSize.small", "bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FOHHPK4T0","funcs":[]}, "subs": []
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "HudObj", "jaxId": "1FOHHSONS0", 
//							"attrs": {
//								"locked": "0", "id": "\"\"", "x": "\"FW*0.31\"", "y": "0", "w": "\"FW*0.38\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FOHHSONS1","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FOHHSONS2", 
//									"attrs": {
//										"locked": "0", "id": "\"TxtCloud\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Mine Version\"", "color": "[0,0,0]", 
//										"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Center", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.small", 
//										"bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FOHHSONS3","funcs":[]}, "subs": []
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "HudObj", "jaxId": "1FOHHV3HN0", 
//							"attrs": {
//								"locked": "0", "id": "\"\"", "x": "\"FW*0.69\"", "y": "0", "w": "\"FW*0.31\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FOHHV3HN1","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FOHHV3HN2", 
//									"attrs": {
//										"locked": "0", "id": "\"TxtCloud\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Base Version\"", 
//										"color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", 
//										"fontSize": "#appCfg.txtSize.small", "bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FOHHV3HN3","funcs":[]}, "subs": []
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "Gear1FO4U6EE40", "jaxId": "1FOGSIB5E3", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOGSIB5E4", 
//								"attrs": {
//									"w": {"type":"int","valText":"150","initVal":0,"info":"","tip":""}, 
//									"text": {
//										"type": "string", "valText": "\"Conflict Resolved\"", "initVal": "", "info": "", "tip": ""
//									}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOGSIB5E5", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"\"", "x": "5", "y": "2", "autoLayout": "Off"
//							}, 
//							"faces": null, 
//							"funcs": {
//								"jaxId": "1FOGSIB5E7", 
//								"funcs": [
//									{
//										"jaxId": "1FOHG965O0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOHGAJ070", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}
//							
//						},
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FOGSOK9S0", 
//							"attrs": {
//								"locked": "0", "id": "\"\"", "x": "0", "y": "24", "w": "\"FW\"", "h": "1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[80,80,80,1]", "border": "0", "borderStyle": "Solid", 
//								"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//								"shadowColor": "[0,0,0,0.5]"
//							}, 
//							"funcs": {"jaxId":"1FOGSOK9S2","funcs":[]}, "subs": []
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FOGSCA434", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FOGSCA436","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}