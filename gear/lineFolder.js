//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FBR0ANJB9Imports*/
/*}#1FBR0ANJB9Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var lineFolder=function (app, item, node, box, intend, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FBR0ANJB12ExLocal*/
	var isOpen;
	var lastPenDown=0;
	/*}#1FBR0ANJB12ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FBR0ANJB14ExState*/
		/*}#1FBR0ANJB14ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FBR0ANJB12Mid*/
	isOpen=0;
	intend=node.intendW;
	/*}#1FBR0ANJB12Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FBR0ANJB12", "x": 0, "y": 0, "w": "FW", "h": 30, "autoLayout": 1, 
		"hudState": state, 
		"hudBtnDown": {
			"type": "box", "jaxId": "1FBR0ANJC3", "x": 0, "y": 0, "w": "FW", "h": 32, "autoLayout": 1, "color": appCfg.color.highLight, "shadowColor": [0,0,0,0.5]
		},
		items: [
			{
				"type": "box", "jaxId": "1FBR0ANJC5", "id": "BoxSelect", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "display": 0, "color": [220,220,220,1], 
				"shadowColor": [0,0,0,0.5]
			},
			{
				"type": "box", "jaxId": "1FC0E6SVE0", "id": "BoxHot", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "display": 0, "color": [180,180,180,0], 
				"gradient": appCfg.color.gntSelect, "shadowColor": [0,0,0,0.5]
			},
			{
				"type": "button", "jaxId": "1FBR0ANJD0", "id": "BtnOpen", "x": intend+10, "y": "FH/2", "w": 16, "h": 16, "anchorH": 1, "anchorV": 1, 
				"hudBtnDown": {
					"type": "box", "jaxId": "1FBR0ANJD2", "x": -2, "y": -2, "w": 20, "h": 20, "color": [180,180,180,0], "border": 2, "coner": 10, "shadowColor": [0,0,0,0.5]
				},
				items: [
					{
						"type": "image", "jaxId": "1FBR0ANJD4", "x": 0, "y": 0, "w": 16, "h": 16, "image": "assets/zhankai.svg", "autoSize": 0, "fitSize": 1
					}
				],
				//函数
				OnClick:function(){
					/*#{1FBTRVRVM0Code*/
					if(isOpen){
						self.close();
					}else{
						self.open();
					}
					/*}#1FBTRVRVM0Code*/
				}
			},
			{
				"type": "image", "jaxId": "1FBR0ANJD6", "id": "ImgIcon", "x": intend+18, "y": 3, "w": 24, "h": 24, "image": "assets/mulu.svg", "autoSize": 0, "fitSize": 1
			},
			{
				"type": "text", "jaxId": "1FBR0ANJE1", "id": "TxtName", "x": intend+18+28+2, "y": 0, "w": 100, "h": 30, "text": item.name, "color": [0,0,0], "alignV": 1, 
				"fontSize": appCfg.txtSize.mid
			}
		],
		faces: {
			"open": {
				"$":function(vo){
					/*#{1FBTRR6N50Func*/
					isOpen=1;
					/*}#1FBTRR6N50Func*/
				},
				/*BtnOpen*/"#1FBR0ANJD0": {
					"rotate": 90
				},
			},
			"close": {
				"$":function(vo){
					/*#{1FBTRRFDV0Func*/
					isOpen=0;
					/*}#1FBTRRFDV0Func*/
				},
				/*BtnOpen*/"#1FBR0ANJD0": {
					"rotate": 0
				},
			},
			"normal": {
				/*BoxSelect*/"#1FBR0ANJC5": {
					"display": 0
				},
				/*BoxHot*/"#1FC0E6SVE0": {
					"display": 0
				},
			},
			"hot": {
				/*BoxSelect*/"#1FBR0ANJC5": {
					"display": 0
				},
				/*BoxHot*/"#1FC0E6SVE0": {
					"display": 1
				},
			},
			"noSub": {
				/*BtnOpen*/"#1FBR0ANJD0": {
					"alpha": 0.5
				},
			},
			"hasSub": {
				/*BtnOpen*/"#1FBR0ANJD0": {
					"alpha": 1
				},
			},
			"selected": {
				/*BoxSelect*/"#1FBR0ANJC5": {
					"display": 1
				},
				/*BoxHot*/"#1FC0E6SVE0": {
					"display": 0
				},
			}
		},
		OnCreate: function(){
			self=this;
			/*#{1FBR0ANJB12CreateFunc*/
			node.setName=this.rename.bind(this);
			item.getSubItems().then((list)=>{
				if(list && list.length>0){
					self.showFace("hasSub");
				}else{
					self.showFace("noSub");
				}
			});
			/*}#1FBR0ANJB12CreateFunc*/
		}
	};
	/*#{1FBR0ANJB12ExViewDef*/
	
	//------------------------------------------------------------------------
	//点击这一行，选中这个磁盘
	cssVO.OnClick=function(){
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
	//展开项目
	cssVO.open=function(){
		app.openItem(item,self,node);
	};

	//------------------------------------------------------------------------
	//关闭项目
	cssVO.close=function(){
		box.closeNode(node);
	};
	
	//------------------------------------------------------------------------
	//改名
	cssVO.rename=function(newName){
		item.rename(newName);
		self.TxtName.text=newName;
	};
	
	/*}#1FBR0ANJB12ExViewDef*/
	
	return cssVO;
};

/*#{1FBR0ANJB9PostCode*/
/*}#1FBR0ANJB9PostCode*/

export {lineFolder};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "lineFolder.js", "def": "CdyFileUIGear", "jaxId": "1FBR0ANJB9", 
//			"attrs": {
//				"gearName": "\"lineFolder\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FBR0ANJB10", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FBR0ANJB11","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FBR0ANJB12", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR0ANJB13", 
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
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FBR0ANJB14", 
//					"attrs": {}, "funcs": {"jaxId":"1FBR0ANJC0","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "30", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "drag": "NA", "enable": "On", "zIndex": "0"
//				}, 
//				"viewFaces": {
//					"jaxId": "1FBR0ANJC1", 
//					"entrys": [
//						{
//							"jaxId": "1FBTRR6N50", "attrs": {"Face Name":"\"open\"","Face Function":"1"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBTRSPNE0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FBTRRFDV0", "attrs": {"Face Name":"\"close\"","Face Function":"1"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBTRSPNE1", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FBU8UR460", "attrs": {"Face Name":"\"normal\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBU931GF0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FBU8UVIQ0", "attrs": {"Face Name":"\"hot\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBU931GG0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FBUBQNQC0", "attrs": {"Face Name":"\"noSub\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBUBRP6K0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FBUBRE670", "attrs": {"Face Name":"\"hasSub\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBUBRP6K1", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FC0E8B2T0", 
//							"attrs": {"Face Name":"\"selected\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC0EBGN50", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						}
//					]
//				}, 
//				"funcs": {"jaxId":"1FBR0ANJC2","funcs":[]}, 
//				"btnHuds": {
//					"hudBtnDown": {
//						"type": "object", "def": "HudBox", "jaxId": "1FBR0ANJC3", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "32", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "color": "#appCfg.color.highLight", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//							"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//							"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FBR0ANJC4","funcs":[]}, "subs": []
//					}
//				}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FBR0ANJC5", 
//						"attrs": {
//							"locked": "0", "id": "\"BoxSelect\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//							"display": "Hide", "clip": "Off", "uiEvent": "On", "color": "[220,220,220,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", 
//							"coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", 
//							"alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FBU7NUOV3", 
//							"entrys": [
//								{
//									"jaxId": "1FBU931GG1", "entryId": "1FBU8UVIQ0", "faceName": "hot", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBU931GG2", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FBU931GG3", "entryId": "1FBU8UR460", "faceName": "normal", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBU931GG4", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FC0EBGN51", "entryId": "1FC0E8B2T0", "faceName": "selected", 
//									"attrs": {"display":"Show"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FC0EBGN52", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FBR0ANJC6","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FC0E6SVE0", 
//						"attrs": {
//							"locked": "0", "id": "\"BoxHot\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Hide", 
//							"clip": "Off", "uiEvent": "On", "color": "[180,180,180,0]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "#appCfg.color.gntSelect", 
//							"shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", 
//							"cursor": "\"\"", "zIndex": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FC0E6SVF0", 
//							"entrys": [
//								{
//									"jaxId": "1FC0E6SVF1", "entryId": "1FBU8UVIQ0", "faceName": "hot", 
//									"attrs": {"display":"Show"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FC0E6SVF2", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FC0E6SVF3", "entryId": "1FBU8UR460", "faceName": "normal", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FC0E6SVF4", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FC0EOQA10", "entryId": "1FC0E8B2T0", "faceName": "selected", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FC0EOQA11", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FC0E6SVF5","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudBtn", "jaxId": "1FBR0ANJD0", 
//						"attrs": {
//							"locked": "0", "id": "\"BtnOpen\"", "x": "#intend+10", "y": "\"FH/2\"", "w": "16", "h": "16", "anchorH": "Center", "anchorV": "Center", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "drag": "NA", "enable": "On", "zIndex": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FBTRQ8CU3", 
//							"entrys": [
//								{
//									"jaxId": "1FBTRSPNE2", "entryId": "1FBTRR6N50", "faceName": "open", 
//									"attrs": {"rotate":"90"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBTRSPNE3", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FBTRSPNE4", "entryId": "1FBTRRFDV0", "faceName": "close", 
//									"attrs": {"rotate":"0"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBTRSPNE5", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FBUBRP6K2", "entryId": "1FBUBQNQC0", "faceName": "noSub", 
//									"attrs": {"alpha":"0.5"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBUBRP6K3", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FBUBRP6K4", "entryId": "1FBUBRE670", "faceName": "hasSub", 
//									"attrs": {"alpha":"1"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBUBRP6K5", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {
//							"jaxId": "1FBR0ANJD1", 
//							"funcs": [
//								{
//									"jaxId": "1FBTRVRVM0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//									"args": {
//										"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBTRVTNS0", 
//										"attrs": {}
//									}, 
//									"attrs": {"Mockup Result":"\"\""}
//								}
//							]
//						}, 
//						"btnHuds": {
//							"hudBtnDown": {
//								"type": "object", "def": "HudBox", "jaxId": "1FBR0ANJD2", 
//								"attrs": {
//									"locked": "0", "id": "\"\"", "x": "-2", "y": "-2", "w": "20", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//									"clip": "Off", "uiEvent": "On", "color": "[180,180,180,0]", "border": "2", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "10", 
//									"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//									"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//								}, 
//								"funcs": {"jaxId":"1FBR0ANJD3","funcs":[]}, "subs": []
//							}
//						}, 
//						"subs": [
//							{
//								"type": "object", "def": "HudImage", "jaxId": "1FBR0ANJD4", 
//								"attrs": {
//									"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "16", "h": "16", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//									"clip": "Off", "uiEvent": "On", "image": "assets/zhankai.svg", "autoSize": "0", "fitSize": "1", "alpha": "1", "rotate": "0", "cursor": "\"\"", 
//									"zIndex": "0"
//								}, 
//								"funcs": {"jaxId":"1FBR0ANJD5","funcs":[]}, "subs": []
//							}
//						]
//						
//					},
//					{
//						"type": "object", "def": "HudImage", "jaxId": "1FBR0ANJD6", 
//						"attrs": {
//							"locked": "0", "id": "\"ImgIcon\"", "x": "#intend+18", "y": "3", "w": "24", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "image": "assets/mulu.svg", "autoSize": "0", "fitSize": "1", "alpha": "1", "rotate": "0", "cursor": "\"\"", 
//							"zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FBR0ANJE0","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FBR0ANJE1", 
//						"attrs": {
//							"locked": "1", "id": "\"TxtName\"", "x": "#intend+18+28+2", "y": "0", "w": "100", "h": "30", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "text": "#item.name", "color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", 
//							"wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.mid", "bold": "0", "italic": "0", 
//							"underline": "0", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FBR0ANJE2","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}