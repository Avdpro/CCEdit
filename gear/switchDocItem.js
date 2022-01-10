//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FCTJHJN30Imports*/
/*}#1FCTJHJN30Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var switchDocItem=function (app, item, node, box, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FCTJHJN33ExLocal*/
	/*}#1FCTJHJN33ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FCTJHJN40ExState*/
		/*}#1FCTJHJN40ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FCTJHJN33Mid*/
	/*}#1FCTJHJN33Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FCTJHJN33", "x": 0, "y": 0, "w": "FW", "h": 30, "autoLayout": 1, 
		"hudState": state, 
		"hudBtnUp": {
			"type": "box", "jaxId": "1FCTRFK6P0", "x": 0, "y": 0, "w": "FW", "h": "FH", "color": [180,180,180,0], "shadowColor": [0,0,0,0.5]
		},
		"hudBtnDown": {
			"type": "box", "jaxId": "1FCTJHJN50", "x": 0, "y": 0, "w": "FW", "h": 32, "autoLayout": 1, "color": appCfg.color.highLight, "shadowColor": [0,0,0,0.5]
		},
		items: [
			{
				"type": "box", "jaxId": "1FCTJHJN52", "id": "BoxSelect", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "display": 0, "color": [220,220,220,1], 
				"shadowColor": [0,0,0,0.5]
			},
			{
				"type": "box", "jaxId": "1FCTJHJN67", "id": "BoxHot", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "display": 0, "color": [180,180,180,0], 
				"gradient": appCfg.color.gntSelect, "shadowColor": [0,0,0,0.5]
			},
			{
				"type": "image", "jaxId": "1FCTJHJN616", "id": "ImgIcon", "x": 2, "y": 3, "w": 24, "h": 24, "image": item.type==="disk"?"assets/disk.svg":"assets/wenjian.svg", 
				"autoSize": 0, "fitSize": 1
			},
			{
				"type": "text", "jaxId": "1FCTJHJN70", "id": "TxtName", "x": 26, "y": 0, "w": 100, "h": 30, "text": item.name, "color": [0,0,0], "alignV": 1, "fontSize": appCfg.txtSize.mid
			}
		],
		faces: {
			"normal": {
				/*BoxSelect*/"#1FCTJHJN52": {
					"display": 0
				},
				/*BoxHot*/"#1FCTJHJN67": {
					"display": 0
				},
			},
			"hot": {
				/*BoxSelect*/"#1FCTJHJN52": {
					"display": 0
				},
				/*BoxHot*/"#1FCTJHJN67": {
					"display": 1
				},
			},
			"selected": {
				/*BoxSelect*/"#1FCTJHJN52": {
					"display": 1
				},
				/*BoxHot*/"#1FCTJHJN67": {
					"display": 0
				},
			}
		},
		OnCreate: function(){
			self=this;
			/*#{1FCTJHJN33CreateFunc*/
			/*}#1FCTJHJN33CreateFunc*/
		}
	};
	/*#{1FCTJHJN33ExViewDef*/
	cssVO.OnClick=function(){
		box.clickNode(node,item);
		return 1;
	};
	/*}#1FCTJHJN33ExViewDef*/
	
	return cssVO;
};

/*#{1FCTJHJN30PostCode*/
/*}#1FCTJHJN30PostCode*/

export {switchDocItem};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "switchDocItem.js", "def": "CdyFileUIGear", "jaxId": "1FCTJHJN30", 
//			"attrs": {
//				"gearName": "\"switchDocItem\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FCTJHJN31", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FCTJHJN32","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FCTJHJN33", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCTJHJN34", 
//					"attrs": {
//						"item": {
//							"name": "item", "type": "object", "def": "CdyAttrMockupObj", "mockupDef": "MockupRef1FBS4ID2E0", "mockupName": "gear", "tip": ""
//						}, 
//						"node": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}, 
//						"box": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FCTJHJN40", 
//					"attrs": {}, "funcs": {"jaxId":"1FCTJHJN41","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "30", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "drag": "NA", "enable": "On"
//				}, 
//				"viewFaces": {
//					"jaxId": "1FCTJHJN42", 
//					"entrys": [
//						{
//							"jaxId": "1FCTJHJN43", "attrs": {"Face Name":"\"normal\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCTJHJN44", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FCTJHJN45", "attrs": {"Face Name":"\"hot\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCTJHJN46", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FCTJHJN47", 
//							"attrs": {"Face Name":"\"selected\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCTJHJN48", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						}
//					]
//				}, 
//				"funcs": {"jaxId":"1FCTJHJN49","funcs":[]}, 
//				"btnHuds": {
//					"hudBtnUp": {
//						"type": "object", "def": "HudBox", "jaxId": "1FCTRFK6P0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[180,180,180,0]", "border": "0", "borderStyle": "Solid", 
//							"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//							"shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FCTRFK6P2","funcs":[]}, "subs": []
//					}, 
//					"hudBtnDown": {
//						"type": "object", "def": "HudBox", "jaxId": "1FCTJHJN50", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "32", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "color": "#appCfg.color.highLight", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//							"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//							"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FCTJHJN51","funcs":[]}, "subs": []
//					}
//				}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FCTJHJN52", 
//						"attrs": {
//							"locked": "0", "id": "\"BoxSelect\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//							"display": "Hide", "clip": "Off", "uiEvent": "On", "color": "[220,220,220,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", 
//							"coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", 
//							"alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FCTJHJN53", 
//							"entrys": [
//								{
//									"jaxId": "1FCTJHJN60", "entryId": "1FCTJHJN45", "faceName": "hot", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCTJHJN61", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FCTJHJN62", "entryId": "1FCTJHJN43", "faceName": "normal", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCTJHJN63", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FCTJHJN64", "entryId": "1FCTJHJN47", "faceName": "selected", 
//									"attrs": {"display":"Show"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCTJHJN65", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FCTJHJN66","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FCTJHJN67", 
//						"attrs": {
//							"locked": "0", "id": "\"BoxHot\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Hide", 
//							"clip": "Off", "uiEvent": "On", "color": "[180,180,180,0]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "#appCfg.color.gntSelect", 
//							"shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", 
//							"cursor": "\"\"", "zIndex": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FCTJHJN68", 
//							"entrys": [
//								{
//									"jaxId": "1FCTJHJN69", "entryId": "1FCTJHJN45", "faceName": "hot", 
//									"attrs": {"display":"Show"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCTJHJN610", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FCTJHJN611", "entryId": "1FCTJHJN43", "faceName": "normal", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCTJHJN612", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FCTJHJN613", "entryId": "1FCTJHJN47", "faceName": "selected", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCTJHJN614", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FCTJHJN615","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudImage", "jaxId": "1FCTJHJN616", 
//						"attrs": {
//							"locked": "0", "id": "\"ImgIcon\"", "x": "2", "y": "3", "w": "24", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "image": "#item.type===\"disk\"?\"assets/disk.svg\":\"assets/wenjian.svg\"", "autoSize": "0", "fitSize": "1", "alpha": "1", 
//							"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FCTJHJN617","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FCTJHJN70", 
//						"attrs": {
//							"locked": "1", "id": "\"TxtName\"", "x": "26", "y": "0", "w": "100", "h": "30", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "text": "#item.name", "color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", 
//							"alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.mid", "bold": "0", "italic": "0", "underline": "0", "alpha": "1", 
//							"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FCTJHJN71","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}