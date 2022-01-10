//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FCKGV36P4Imports*/
/*}#1FCKGV36P4Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var lineFile=function (app, item, node, box, intend, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FCKGV36P7ExLocal*/
	let lastPenDown=0;
	let disk,path;
	/*}#1FCKGV36P7ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FCKGV36P9ExState*/
		/*}#1FCKGV36P9ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FCKGV36P7Mid*/
	intend=node.intendW;
	/*}#1FCKGV36P7Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FCKGV36P7", "x": 0, "y": 0, "w": "FW", "h": 30, "autoLayout": 1, 
		"hudState": state, 
		"hudBtnUp": {
			"type": "box", "jaxId": "1FCTRDI920", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "color": [180,180,180,0], "shadowColor": [0,0,0,0.5]
		},
		"hudBtnDown": {
			"type": "box", "jaxId": "1FCKGV36Q11", "x": 0, "y": 0, "w": "FW", "h": 32, "autoLayout": 1, "color": appCfg.color.highLight, "shadowColor": [0,0,0,0.5]
		},
		items: [
			{
				"type": "box", "jaxId": "1FCKGV36Q13", "id": "BoxSelect", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "display": 0, "color": [220,220,220,1], 
				"shadowColor": [0,0,0,0.5]
			},
			{
				"type": "box", "jaxId": "1FCKGV36R5", "id": "BoxHot", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "display": 0, "color": [180,180,180,0], 
				"gradient": appCfg.color.gntSelect, "shadowColor": [0,0,0,0.5]
			},
			{
				"type": "image", "jaxId": "1FCKGV36S4", "id": "ImgIcon", "x": intend+2, "y": 3, "w": 24, "h": 24, "image": "assets/wenjian.svg", "autoSize": 0, "fitSize": 1
			},
			{
				"type": "text", "jaxId": "1FCKGV36S6", "id": "TxtName", "x": intend+2+24, "y": 0, "w": 100, "h": 30, "text": item.name, "color": [0,0,0], "alignV": 1, 
				"fontSize": appCfg.txtSize.mid
			}
		],
		faces: {
			"normal": {
				/*BoxSelect*/"#1FCKGV36Q13": {
					"display": 0
				},
				/*BoxHot*/"#1FCKGV36R5": {
					"display": 0
				},
			},
			"hot": {
				/*BoxSelect*/"#1FCKGV36Q13": {
					"display": 0
				},
				/*BoxHot*/"#1FCKGV36R5": {
					"display": 1
				},
			},
			"selected": {
				/*BoxSelect*/"#1FCKGV36Q13": {
					"display": 1
				},
				/*BoxHot*/"#1FCKGV36R5": {
					"display": 0
				},
			}
		},
		OnCreate: function(){
			self=this;
			/*#{1FCKGV36P7CreateFunc*/
			disk=item.disk.diskObj;
			path=item.path;
			self.updateMark();
			/*}#1FCKGV36P7CreateFunc*/
		}
	};
	/*#{1FCKGV36P7ExViewDef*/
	cssVO.OnClick=function(e){
		let time,dTime;
		time=Date.now();
		dTime=time-lastPenDown;
		app.naviToItem(item,self,node);
		if(dTime<800){
			app.openItem(item,self,node);
		}
		lastPenDown=time;
	};
	
	//------------------------------------------------------------------------
	//Update version mark:
	cssVO.updateMark=node.updateMark=async function(){
		let entry,diskVIdx;
		entry=await disk.getEntry(path);
		diskVIdx=await item.disk.getVersionIdx();
		if(entry && diskVIdx>0){
			item.baseVersionIdx=entry.baseVersionIdx;
			item.modified=entry.modified;
			item.modifyTime=entry.modifyTime;
			item.size=entry.size;
			if(entry.baseVersionIdx>0){
				if(entry.modified){
					self.ImgMark=self.appendNewChild({type:"image",x:intend-18,y:5,w:20,h:20,image:"assets/modified.svg","fitSize": 1});
				}else{
					if(self.ImgMark){
						self.removeChild(self.ImgMark);
						self.ImgMark=null;
					}
				}
			}else{
				if(entry.modified){
					self.ImgMark=self.appendNewChild({type:"image",x:intend-18,y:5,w:20,h:20,image:"assets/newmark.svg","fitSize": 1});
				}else{
					if(self.ImgMark){
						self.removeChild(self.ImgMark);
						self.ImgMark=null;
					}
				}
			}
		}else{
			if(self.ImgMark){
				self.removeChild(self.ImgMark);
				self.ImgMark=null;
			}
		}
	};
	/*}#1FCKGV36P7ExViewDef*/
	
	return cssVO;
};

/*#{1FCKGV36P4PostCode*/
/*}#1FCKGV36P4PostCode*/

export {lineFile};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "lineFile.js", "def": "CdyFileUIGear", "jaxId": "1FCKGV36P4", 
//			"attrs": {
//				"gearName": "\"lineFile\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FCKGV36P5", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FCKGV36P6","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FCKGV36P7", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCKGV36P8", 
//					"attrs": {
//						"item": {
//							"name": "item", "type": "object", "def": "CdyAttrMockupObj", "mockupDef": "MockupRef1FBS4ID2E0", "mockupName": "gear", "tip": ""
//						}, 
//						"node": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}, 
//						"box": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}, 
//						"intend": {"type":"int","valText":"32","initVal":"","info":null,"tip":null}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FCKGV36P9", 
//					"attrs": {}, "funcs": {"jaxId":"1FCKGV36P10","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "30", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "drag": "NA", "enable": "On", "zIndex": "0"
//				}, 
//				"viewFaces": {
//					"jaxId": "1FCKGV36P11", 
//					"entrys": [
//						{
//							"jaxId": "1FCKGV36Q0", "attrs": {"Face Name":"\"normal\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCKGV36Q1", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FCKGV36Q2", "attrs": {"Face Name":"\"hot\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCKGV36Q3", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FCKGV36Q8", 
//							"attrs": {"Face Name":"\"selected\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCKGV36Q9", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						}
//					]
//				}, 
//				"funcs": {"jaxId":"1FCKGV36Q10","funcs":[]}, 
//				"btnHuds": {
//					"hudBtnUp": {
//						"type": "object", "def": "HudBox", "jaxId": "1FCTRDI920", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[180,180,180,0]", "border": "0", "borderStyle": "Solid", 
//							"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//							"shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FCTRDI922","funcs":[]}, "subs": []
//					}, 
//					"hudBtnDown": {
//						"type": "object", "def": "HudBox", "jaxId": "1FCKGV36Q11", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "32", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "color": "#appCfg.color.highLight", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//							"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//							"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FCKGV36Q12","funcs":[]}, "subs": []
//					}
//				}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FCKGV36Q13", 
//						"attrs": {
//							"locked": "0", "id": "\"BoxSelect\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//							"display": "Hide", "clip": "Off", "uiEvent": "On", "color": "[220,220,220,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", 
//							"coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", 
//							"alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FCKGV36Q14", 
//							"entrys": [
//								{
//									"jaxId": "1FCKGV36Q15", "entryId": "1FCKGV36Q2", "faceName": "hot", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCKGV36Q16", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FCKGV36R0", "entryId": "1FCKGV36Q0", "faceName": "normal", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCKGV36R1", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FCKGV36R2", "entryId": "1FCKGV36Q8", "faceName": "selected", 
//									"attrs": {"display":"Show"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCKGV36R3", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FCKGV36R4","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FCKGV36R5", 
//						"attrs": {
//							"locked": "0", "id": "\"BoxHot\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Hide", 
//							"clip": "Off", "uiEvent": "On", "color": "[180,180,180,0]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "#appCfg.color.gntSelect", 
//							"shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", 
//							"cursor": "\"\"", "zIndex": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FCKGV36R6", 
//							"entrys": [
//								{
//									"jaxId": "1FCKGV36R7", "entryId": "1FCKGV36Q2", "faceName": "hot", 
//									"attrs": {"display":"Show"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCKGV36R8", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FCKGV36R9", "entryId": "1FCKGV36Q0", "faceName": "normal", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCKGV36R10", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FCKGV36R11", "entryId": "1FCKGV36Q8", "faceName": "selected", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCKGV36R12", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FCKGV36R13","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudImage", "jaxId": "1FCKGV36S4", 
//						"attrs": {
//							"locked": "0", "id": "\"ImgIcon\"", "x": "#intend+2", "y": "3", "w": "24", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "image": "assets/wenjian.svg", "autoSize": "0", "fitSize": "1", "alpha": "1", "rotate": "0", 
//							"cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FCKGV36S5","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FCKGV36S6", 
//						"attrs": {
//							"locked": "1", "id": "\"TxtName\"", "x": "#intend+2+24", "y": "0", "w": "100", "h": "30", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "text": "#item.name", "color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", 
//							"wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.mid", "bold": "0", "italic": "0", 
//							"underline": "0", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FCKGV36S7","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}