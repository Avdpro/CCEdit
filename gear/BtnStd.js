//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FDAETMLJ0Imports*/
/*}#1FDAETMLJ0Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var BtnStd=function (app, w, text, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FDAETMLJ1ExLocal*/
	/*}#1FDAETMLJ1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		"text": text
		/*#{1FDAETMLJ3ExState*/
		/*}#1FDAETMLJ3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FDAETMLJ1Mid*/
	/*}#1FDAETMLJ1Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FDAETMLJ1", "x": 106, "y": 129, "w": w, "h": appCfg.size.btnStdH, 
		"hudState": state, 
		"hudBtnUp": {
			"type": "box", "jaxId": "1FDAF6F8M0", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "color": appCfg.color.btnStdFace, "coner": 3, "shadow": 1, 
			"shadowX": 1, "shadowY": 1, "shadowBlur": 2, "shadowColor": [0,0,0,0.5]
		},
		"hudBtnDown": {
			"type": "box", "jaxId": "1FDAFQV503", "x": 0, "y": 1, "w": "FW", "h": "FH", "autoLayout": 1, "color": appCfg.color.btnStdDown, "coner": 3, "shadowColor": [0,0,0,0.5]
		},
		"hudBtnGray": {
			"type": "box", "jaxId": "1FDAFQV506", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "color": appCfg.color.btnStdGray, "coner": 3, "shadowColor": [0,0,0,0.5]
		},
		items: [
			{
				"type": "text", "jaxId": "1FDAFQV509", "id": "TxtLabel", "x": 0, "y": 0, "w": w, "h": 32, "autoLayout": 1, "text": $V(()=>(state.text)),"color": appCfg.color.btnStdText, 
				"alignH": 1, "alignV": 1, "fontSize": appCfg.txtSize.mid
			}
		],
		faces: {
			"up": {
				/*TxtLabel*/"#1FDAFQV509": {
					"y": 0
				},
			},
			"down": {
				/*TxtLabel*/"#1FDAFQV509": {
					"y": 1
				},
			},
			"gray": {
				/*TxtLabel*/"#1FDAFQV509": {
					"y": 0
				},
			}
		},
		OnCreate: function(){
			self=this;
			/*#{1FDAETMLJ1CreateFunc*/
			/*}#1FDAETMLJ1CreateFunc*/
		}
	};
	/*#{1FDAETMLJ1ExViewDef*/
	//------------------------------------------------------------------------
	//设置文本
	cssVO.setText=function(text){
		self.TxtLabel.text=text;
	};
	
	//------------------------------------------------------------------------
	//得到文本
	cssVO.getText=function(){
		return self.TxtLabel.text;
	}
	/*}#1FDAETMLJ1ExViewDef*/
	
	return cssVO;
};

/*#{1FDAETMLJ0PostCode*/
/*}#1FDAETMLJ0PostCode*/

export {BtnStd};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "BtnStd.js", "def": "CdyFileUIGear", "jaxId": "1FDAETMLJ0", 
//			"attrs": {
//				"gearName": "\"BtnStd\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FDAETMLO0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FDAETMLO2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FDAETMLJ1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FDAETMLJ2", 
//					"attrs": {
//						"w": {"type":"int","valText":"150","initVal":"","info":null,"tip":null}, 
//						"text": {
//							"type": "string", "valText": "\"Button\"", "initVal": "", "info": null, 
//							"tip": null
//						}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FDAETMLJ3", 
//					"attrs": {"text":{"type":"auto","valText":"#text","info":null,"tip":null}}, 
//					"funcs": {"jaxId":"1FDAETMLO3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "106", "y": "129", "w": "#w", "h": "#appCfg.size.btnStdH", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//					"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "drag": "NA", "enable": "On"
//				}, 
//				"viewFaces": {
//					"jaxId": "1FDAETMLO4", 
//					"entrys": [
//						{
//							"jaxId": "1FDAFN6OP0", "attrs": {"Face Name":"\"up\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FDAFQV500", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FDAFNEE60", "attrs": {"Face Name":"\"down\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FDAFQV501", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FDAFNI400", "attrs": {"Face Name":"\"gray\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FDAFQV502", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						}
//					]
//				}, 
//				"funcs": {"jaxId":"1FDAETMLO6","funcs":[]}, 
//				"btnHuds": {
//					"hudBtnUp": {
//						"type": "object", "def": "HudBox", "jaxId": "1FDAF6F8M0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.btnStdFace", "border": "0", 
//							"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "3", "gradient": "\"\"", "shadow": "1", "shadowX": "1", "shadowY": "1", "shadowBlur": "2", 
//							"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FDAF6F8M2","funcs":[]}, "subs": []
//					}, 
//					"hudBtnDown": {
//						"type": "object", "def": "HudBox", "jaxId": "1FDAFQV503", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "1", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.btnStdDown", "border": "0", 
//							"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "3", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", 
//							"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FDAFQV505","funcs":[]}, "subs": []
//					}, 
//					"hudBtnGray": {
//						"type": "object", "def": "HudBox", "jaxId": "1FDAFQV506", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.btnStdGray", "border": "0", 
//							"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "3", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", 
//							"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FDAFQV508","funcs":[]}, "subs": []
//					}
//				}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FDAFQV509", 
//						"attrs": {
//							"locked": "1", "id": "\"TxtLabel\"", "x": "0", "y": "0", "w": "#w", "h": "32", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "${state.text}", "color": "#appCfg.color.btnStdText", 
//							"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Center", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.mid", 
//							"bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FDAFQV5010", 
//							"entrys": [
//								{
//									"jaxId": "1FDAFQV5011", "entryId": "1FDAFN6OP0", "faceName": "up", 
//									"attrs": {"y":"0"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FDAFQV5012", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FDAFQV5013", "entryId": "1FDAFNEE60", "faceName": "down", 
//									"attrs": {"y":"1"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FDAFQV5014", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FDAFQV5015", "entryId": "1FDAFNI400", "faceName": "gray", 
//									"attrs": {"y":"0"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FDAFQV5016", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FDAFQV5017","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}