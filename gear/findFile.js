//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FNN3CVIR0Imports*/
/*}#1FNN3CVIR0Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var findFile=function (app, path, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FNN3CVIR1ExLocal*/
	let node,box;
	let isOpen=0;
	/*}#1FNN3CVIR1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FNN3CVIR3ExState*/
		/*}#1FNN3CVIR3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FNN3CVIR1Mid*/
	/*}#1FNN3CVIR1Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FNN3CVIR1", "x": 0, "y": 0, "w": "FW", "h": 24, "autoLayout": 1, 
		"hudState": state, 
		"hudBtnUp": {
			"type": "box", "jaxId": "1FNN5JMG10", "x": 0, "y": 0, "w": "FW", "h": 24, "autoLayout": 1, "color": [180,180,180,0], "shadowColor": [0,0,0,0.5]
		},
		items: [
			{
				"type": "button", "jaxId": "1FNN3DUJ20", "id": "BtnOpen", "x": 10, "y": "FH/2", "w": 16, "h": 16, "anchorH": 1, "anchorV": 1, "enable": 0, 
				"hudBtnDown": {
					"type": "box", "jaxId": "1FNN3DUJ34", "x": -2, "y": -2, "w": 20, "h": 20, "color": [180,180,180,0], "border": 2, "coner": 10, "shadowColor": [0,0,0,0.5]
				},
				items: [
					{
						"type": "image", "jaxId": "1FNN3DUJ36", "x": 0, "y": 0, "w": 16, "h": 16, "image": "assets/zhankai.svg", "autoSize": 0, "fitSize": 1
					}
				],
				//函数
				OnClick:function(){
					/*#{1FNN3DUJ32Code*/
					/*}#1FNN3DUJ32Code*/
				}
			},
			{
				"type": "text", "jaxId": "1FNN3M06V2", "x": 18, "y": 0, "w": 100, "h": 24, "text": path, "color": [0,0,0], "alignV": 1, "fontSize": appCfg.txtSize.smallMid
			}
		],
		faces: {
			"open": {
				"$":function(vo){
					/*#{1FNN46PE60Func*/
					isOpen=1;
					/*}#1FNN46PE60Func*/
				},
				/*BtnOpen*/"#1FNN3DUJ20": {
					"rotate": 90
				},
			},
			"close": {
				"$":function(vo){
					/*#{1FNN482310Func*/
					isOpen=0;
					/*}#1FNN482310Func*/
				},
				/*BtnOpen*/"#1FNN3DUJ20": {
					"rotate": 0
				},
			}
		},
		OnCreate: function(){
			self=this;
			/*#{1FNN3CVIR1CreateFunc*/
			node=this.owner;
			box=node.owner;
			/*}#1FNN3CVIR1CreateFunc*/
		}
	};
	/*#{1FNN3CVIR1ExViewDef*/
	cssVO.OnClick=function(){
		if(isOpen){
			self.showFace("close");
			box.closeNode(node);
		}else{
			self.showFace("open");
			box.openNode(node);
		}
	};
	/*}#1FNN3CVIR1ExViewDef*/
	
	return cssVO;
};

/*#{1FNN3CVIR0PostCode*/
/*}#1FNN3CVIR0PostCode*/

export {findFile};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "findFile.js", "def": "CdyFileUIGear", "jaxId": "1FNN3CVIR0", 
//			"attrs": {
//				"gearName": "\"findFile\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FNN3CVIS0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FNN3CVIS2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FNN3CVIR1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNN3CVIR2", 
//					"attrs": {
//						"path": {
//							"type": "string", "valText": "\"/coke/disk.json\"", "initVal": "", 
//							"info": null, "tip": null
//						}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FNN3CVIR3", 
//					"attrs": {}, "funcs": {"jaxId":"1FNN3CVIS3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "drag": "NA", "enable": "On"
//				}, 
//				"viewFaces": {
//					"jaxId": "1FNN3CVIS4", 
//					"entrys": [
//						{
//							"jaxId": "1FNN46PE60", "attrs": {"Face Name":"\"open\"","Face Function":"1"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNN49C000", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FNN482310", "attrs": {"Face Name":"\"close\"","Face Function":"1"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNN49C001", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						}
//					]
//				}, 
//				"funcs": {"jaxId":"1FNN3CVIS6","funcs":[]}, 
//				"btnHuds": {
//					"hudBtnUp": {
//						"type": "object", "def": "HudBox", "jaxId": "1FNN5JMG10", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[180,180,180,0]", "border": "0", "borderStyle": "Solid", 
//							"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//							"shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FNN5JMG12","funcs":[]}, "subs": []
//					}
//				}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudBtn", "jaxId": "1FNN3DUJ20", 
//						"attrs": {
//							"locked": "0", "id": "\"BtnOpen\"", "x": "10", "y": "\"FH/2\"", "w": "16", "h": "16", "anchorH": "Center", "anchorV": "Center", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "drag": "NA", "enable": "Off", "zIndex": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FNN3DUJ30", 
//							"entrys": [
//								{
//									"jaxId": "1FNN49C002", "entryId": "1FNN46PE60", "faceName": "open", 
//									"attrs": {"rotate":"90"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FNN49C003", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FNN49C004", "entryId": "1FNN482310", "faceName": "close", 
//									"attrs": {"rotate":"0"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FNN49C005", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {
//							"jaxId": "1FNN3DUJ31", 
//							"funcs": [
//								{
//									"jaxId": "1FNN3DUJ32", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//									"args": {
//										"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNN3DUJ33", 
//										"attrs": {}
//									}, 
//									"attrs": {"Mockup Result":"\"\""}
//								}
//							]
//						}, 
//						"btnHuds": {
//							"hudBtnDown": {
//								"type": "object", "def": "HudBox", "jaxId": "1FNN3DUJ34", 
//								"attrs": {
//									"locked": "0", "id": "\"\"", "x": "-2", "y": "-2", "w": "20", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//									"clip": "Off", "uiEvent": "On", "color": "[180,180,180,0]", "border": "2", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "10", 
//									"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//									"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//								}, 
//								"funcs": {"jaxId":"1FNN3DUJ35","funcs":[]}, "subs": []
//							}
//						}, 
//						"subs": [
//							{
//								"type": "object", "def": "HudImage", "jaxId": "1FNN3DUJ36", 
//								"attrs": {
//									"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "16", "h": "16", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//									"clip": "Off", "uiEvent": "On", "image": "assets/zhankai.svg", "autoSize": "0", "fitSize": "1", "alpha": "1", "rotate": "0", "cursor": "\"\"", 
//									"zIndex": "0"
//								}, 
//								"funcs": {"jaxId":"1FNN3DUJ37","funcs":[]}, "subs": []
//							}
//						]
//						
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FNN3M06V2", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "18", "y": "0", "w": "100", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "#path", "color": "[0,0,0]", "autoSizeW": "0", 
//							"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//							"bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"funcs": {"jaxId":"1FNN3M06V4","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}