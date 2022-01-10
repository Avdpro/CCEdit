//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FNS161QQ0Imports*/
/*}#1FNS161QQ0Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var infoLine=function (app, intend, image, text, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FNS161QQ1ExLocal*/
	/*}#1FNS161QQ1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FNS161QQ3ExState*/
		/*}#1FNS161QQ3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FNS161QQ1Mid*/
	/*}#1FNS161QQ1Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FNS161QQ1", "x": 0, "y": 0, "w": "FW", "h": appCfg.size.infoLineH, 
		"hudState": state, 
		"hudBtnDown": {
			"type": "box", "jaxId": "1FNSO7V9I3", "x": 0, "y": 0, "w": "FW", "h": appCfg.size.infoLineH, "autoLayout": 1, "color": appCfg.color.highLight, "shadowColor": [0,0,0,0.5]
		},
		"hudBtnOver": {
			"type": "box", "jaxId": "1FNSO7V9I6", "x": 0, "y": 0, "w": "FW", "h": appCfg.size.infoLineH, "autoLayout": 1, "color": [180,180,180,0.2], "shadowColor": [0,0,0,0.5]
		},
		items: [
			{
				"type": "image", "jaxId": "1FNSO7V9I9", "x": intend+10, "y": 2, "w": 20, "h": 20, "display": image?1:0, "image": "assets/"+image, "autoSize": 0, "fitSize": 1
			},
			{
				"type": "text", "jaxId": "1FNSO7V9I12", "id": "TxtInfo", "x": intend+(image?32:5), "y": 0, "w": 100, "h": 24, "text": text, "color": [0,0,0], "alignV": 1, 
				"fontSize": appCfg.txtSize.smallMid
			}
		],
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FNS161QQ1CreateFunc*/
			/*}#1FNS161QQ1CreateFunc*/
		}
	};
	/*#{1FNS161QQ1ExViewDef*/
	cssVO.OnMouseInOut=function(isIn){
		if(isIn){
			app.showTip(self,text,self.w,-5,2,2,0);
		}else{
			app.abortTip(self);
		}
	};
	/*}#1FNS161QQ1ExViewDef*/
	
	return cssVO;
};

/*#{1FNS161QQ0PostCode*/
/*}#1FNS161QQ0PostCode*/

export {infoLine};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "infoLine.js", "def": "CdyFileUIGear", "jaxId": "1FNS161QQ0", 
//			"attrs": {
//				"gearName": "\"infoLine\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FNS161QR0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FNS161QR2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FNS161QQ1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNS161QQ2", 
//					"attrs": {
//						"intend": {"type":"int","valText":"20","initVal":"","info":null,"tip":null}, 
//						"image": {"type":"string","valText":"\"\"","initVal":"","info":null,"tip":null}, 
//						"text": {
//							"type": "string", "valText": "\"abcd\"", "initVal": "", "info": null, 
//							"tip": null
//						}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FNS161QQ3", 
//					"attrs": {}, "funcs": {"jaxId":"1FNS161QR3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "#appCfg.size.infoLineH", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//					"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "drag": "NA", "enable": "On"
//				}, 
//				"viewFaces": {"jaxId":"1FNS161QR4","entrys":[]}, 
//				"funcs": {"jaxId":"1FNS161QR6","funcs":[]}, 
//				"btnHuds": {
//					"hudBtnDown": {
//						"type": "object", "def": "HudBox", "jaxId": "1FNSO7V9I3", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "#appCfg.size.infoLineH", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.highLight", 
//							"border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", 
//							"shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FNSO7V9I5","funcs":[]}, "subs": []
//					}, 
//					"hudBtnOver": {
//						"type": "object", "def": "HudBox", "jaxId": "1FNSO7V9I6", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "#appCfg.size.infoLineH", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[180,180,180,0.2]", "border": "0", 
//							"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", 
//							"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FNSO7V9I8","funcs":[]}, "subs": []
//					}
//				}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudImage", "jaxId": "1FNSO7V9I9", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "#intend+10", "y": "2", "w": "20", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "#image?1:0", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "image": "#\"assets/\"+image", "autoSize": "0", "fitSize": "1"
//						}, 
//						"funcs": {"jaxId":"1FNSO7V9I11","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FNSO7V9I12", 
//						"attrs": {
//							"locked": "0", "id": "\"TxtInfo\"", "x": "#intend+(image?32:5)", "y": "0", "w": "100", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "#text", "color": "[0,0,0]", 
//							"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//							"bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"funcs": {"jaxId":"1FNSO7V9I14","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}