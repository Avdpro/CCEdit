//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FBQUBCS30Imports*/
/*}#1FBQUBCS30Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var lineDisk=function (app, item, node, box, intend, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FBQUBCS31ExLocal*/
	let isOpen;
	/*}#1FBQUBCS31ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FBQUBCS33ExState*/
		/*}#1FBQUBCS33ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FBQUBCS31Mid*/
	isOpen=0;
	intend=node.intendW;
	/*}#1FBQUBCS31Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FBQUBCS31", "x": 0, "y": 0, "w": "FW", "h": 30, "autoLayout": 1, 
		"hudState": state, 
		"hudBtnDown": {
			"type": "box", "jaxId": "1FBQUIL1V0", "x": 0, "y": 0, "w": "FW", "h": 32, "autoLayout": 1, "color": appCfg.color.highLight, "shadowColor": [0,0,0,0.5]
		},
		items: [
			{
				"type": "box", "jaxId": "1FBQUNFRF2", "id": "BoxSelect", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "display": 0, "color": [220,220,220,1], 
				"shadowColor": [0,0,0,0.5]
			},
			{
				"type": "box", "jaxId": "1FC0EE1EN0", "id": "BoxHot", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "display": 0, "color": [180,180,180,0], 
				"gradient": appCfg.color.gntSelect, "shadowColor": [0,0,0,0.5]
			},
			{
				"type": "button", "jaxId": "1FBQVBOBS0", "id": "BtnOpen", "x": intend+10, "y": "FH/2", "w": 16, "h": 16, "anchorH": 1, "anchorV": 1, 
				"hudBtnDown": {
					"type": "box", "jaxId": "1FBQVBOBS3", "x": -2, "y": -2, "w": 20, "h": 20, "color": [180,180,180,0], "border": 2, "coner": 10, "shadowColor": [0,0,0,0.5]
				},
				items: [
					{
						"type": "image", "jaxId": "1FBQV4CC80", "x": 0, "y": 0, "w": 16, "h": 16, "image": "assets/zhankai.svg", "autoSize": 0, "fitSize": 1
					}
				],
				//函数
				OnClick:function(){
					/*#{1FBTSKFJ50Code*/
					if(isOpen){
						self.close();
					}else{
						self.open();
					}
					/*}#1FBTSKFJ50Code*/
				}
			},
			{
				"type": "image", "jaxId": "1FBQUIL1V3", "id": "ImgIcon", "x": intend+18, "y": 3, "w": 24, "h": 24, "image": "assets/disk.svg", "autoSize": 0, "fitSize": 1
			},
			{
				"type": "text", "jaxId": "1FBQVBOBS7", "id": "TxtName", "x": intend+18+28+2, "y": 0, "w": 100, "h": 30, "text": item.name, "color": [0,0,0], "alignV": 1, 
				"fontSize": appCfg.txtSize.mid
			}
		],
		faces: {
			"open": {
				"$":function(vo){
					/*#{1FBRTVGP50Func*/
					isOpen=1;
					/*}#1FBRTVGP50Func*/
				},
				/*BtnOpen*/"#1FBQVBOBS0": {
					"rotate": 90
				},
			},
			"close": {
				"$":function(vo){
					/*#{1FBRU0D8N0Func*/
					isOpen=0;
					/*}#1FBRU0D8N0Func*/
				},
				/*BtnOpen*/"#1FBQVBOBS0": {
					"rotate": 0
				},
			},
			"noSub": {
				/*BtnOpen*/"#1FBQVBOBS0": {
					"alpha": 0.3
				},
			},
			"hasSub": {
				/*BtnOpen*/"#1FBQVBOBS0": {
					"alpha": 1
				},
			},
			"normal": {
				/*BoxSelect*/"#1FBQUNFRF2": {
					"display": 0
				},
				/*BoxHot*/"#1FC0EE1EN0": {
					"display": 0
				},
			},
			"hot": {
				/*BoxSelect*/"#1FBQUNFRF2": {
					"display": 0
				},
				/*BoxHot*/"#1FC0EE1EN0": {
					"display": 1
				},
			},
			"selected": {
				/*BoxSelect*/"#1FBQUNFRF2": {
					"display": 1
				},
				/*BoxHot*/"#1FC0EE1EN0": {
					"display": 0
				},
			}
		},
		OnCreate: function(){
			self=this;
			/*#{1FBQUBCS31CreateFunc*/
			item.getSubFolders().then((list)=>{
				if(list && list.length>0){
					self.showFace("hasSub");
				}else{
					self.showFace("noSub");
				}
			});
			/*}#1FBQUBCS31CreateFunc*/
		}
	};
	/*#{1FBQUBCS31ExViewDef*/
	//---------------------------------------------------------------------
	//点击这一行，选中这个磁盘
	cssVO.OnClick=function(){
		app.naviToItem(item,self,node);
	};

	//---------------------------------------------------------------------
	//展开项目
	cssVO.open=function(){
		app.openItem(item,self,node);
	};

	//---------------------------------------------------------------------
	//关闭项目
	cssVO.close=function(){
		box.closeNode(node);
	};
	/*}#1FBQUBCS31ExViewDef*/
	
	return cssVO;
};

/*#{1FBQUBCS30PostCode*/
/*}#1FBQUBCS30PostCode*/

export {lineDisk};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "lineDisk.js", "def": "CdyFileUIGear", "jaxId": "1FBQUBCS30", 
//			"attrs": {
//				"gearName": "\"lineDisk\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FBQUBCS70", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FBQUBCS72","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FBQUBCS31", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBQUBCS32", 
//					"attrs": {
//						"item": {
//							"name": "item", "type": "object", "def": "CdyAttrMockupObj", "mockupDef": "MockupRef1FBS4M8GE0", "mockupName": "game", "tip": ""
//						}, 
//						"node": {"type":"auto","valText":"\"\"","initVal":"","info":null,"tip":null}, 
//						"box": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}, 
//						"intend": {"type":"int","valText":"32","initVal":"","info":null,"tip":null}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FBQUBCS33", 
//					"attrs": {}, "funcs": {"jaxId":"1FBQUBCS73","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "30", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "drag": "NA", "enable": "On", "zIndex": "0"
//				}, 
//				"viewFaces": {
//					"jaxId": "1FBQUBCS74", 
//					"entrys": [
//						{
//							"jaxId": "1FBRTVGP50", "attrs": {"Face Name":"\"open\"","Face Function":"1"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBRU0PKJ1", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FBRU0D8N0", "attrs": {"Face Name":"\"close\"","Face Function":"1"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBRU0PKJ2", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FBRU1L2C0", "attrs": {"Face Name":"\"noSub\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBRU2LBP0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FBRU2A1C0", "attrs": {"Face Name":"\"hasSub\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBRU2LBP1", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FBU6T2CD0", "attrs": {"Face Name":"\"normal\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBU6V7MV0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FBU6U9KI0", "attrs": {"Face Name":"\"hot\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBU6V7MV1", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FC0EEUBB0", 
//							"attrs": {"Face Name":"\"selected\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC0EGUKQ0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						}
//					]
//				}, 
//				"funcs": {"jaxId":"1FBQUBCS76","funcs":[]}, 
//				"btnHuds": {
//					"hudBtnDown": {
//						"type": "object", "def": "HudBox", "jaxId": "1FBQUIL1V0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "32", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "color": "#appCfg.color.highLight", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//							"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//							"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FBQUIL1V2","funcs":[]}, "subs": []
//					}
//				}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FBQUNFRF2", 
//						"attrs": {
//							"locked": "0", "id": "\"BoxSelect\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//							"display": "Hide", "clip": "Off", "uiEvent": "On", "color": "[220,220,220,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", 
//							"coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", 
//							"alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FBU0FN933", 
//							"entrys": [
//								{
//									"jaxId": "1FBU6V7N00", "entryId": "1FBU6T2CD0", "faceName": "normal", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBU6V7N01", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FBU6V7N02", "entryId": "1FBU6U9KI0", "faceName": "hot", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBU6V7N03", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FC0EGUKQ1", "entryId": "1FC0EEUBB0", "faceName": "selected", 
//									"attrs": {"display":"Show"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FC0EGUKQ2", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FBQUNFRF4","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FC0EE1EN0", 
//						"attrs": {
//							"locked": "0", "id": "\"BoxHot\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Hide", 
//							"clip": "Off", "uiEvent": "On", "color": "[180,180,180,0]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "#appCfg.color.gntSelect", 
//							"shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", 
//							"cursor": "\"\"", "zIndex": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FC0EE1EO0", 
//							"entrys": [
//								{
//									"jaxId": "1FC0EE1EP0", "entryId": "1FBU6T2CD0", "faceName": "normal", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FC0EE1EP1", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FC0EE1EP2", "entryId": "1FBU6U9KI0", "faceName": "hot", 
//									"attrs": {"display":"Show"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FC0EE1EP3", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FC0EPADG0", "entryId": "1FC0EEUBB0", "faceName": "selected", 
//									"attrs": {"display":"Hide"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FC0EPADG1", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FC0EE1EP4","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudBtn", "jaxId": "1FBQVBOBS0", 
//						"attrs": {
//							"locked": "0", "id": "\"BtnOpen\"", "x": "#intend+10", "y": "\"FH/2\"", "w": "16", "h": "16", "anchorH": "Center", "anchorV": "Center", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "drag": "NA", "enable": "On", "zIndex": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FBRU0PKK2", 
//							"entrys": [
//								{
//									"jaxId": "1FBRU0PKK3", "entryId": "1FBRTVGP50", "faceName": "open", 
//									"attrs": {"rotate":"90"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBRU0PKK4", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FBRU0PKK5", "entryId": "1FBRU0D8N0", "faceName": "close", 
//									"attrs": {"rotate":"0"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBRU0PKK6", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FBRU2LBP2", "entryId": "1FBRU1L2C0", "faceName": "noSub", 
//									"attrs": {"alpha":"0.3"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBRU2LBP3", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FBRU2LBP4", "entryId": "1FBRU2A1C0", "faceName": "hasSub", 
//									"attrs": {"alpha":"1"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBRU2LBP5", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {
//							"jaxId": "1FBQVBOBS2", 
//							"funcs": [
//								{
//									"jaxId": "1FBTSKFJ50", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//									"args": {
//										"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBTSL9SO0", 
//										"attrs": {}
//									}, 
//									"attrs": {"Mockup Result":"\"\""}
//								}
//							]
//						}, 
//						"btnHuds": {
//							"hudBtnDown": {
//								"type": "object", "def": "HudBox", "jaxId": "1FBQVBOBS3", 
//								"attrs": {
//									"locked": "0", "id": "\"\"", "x": "-2", "y": "-2", "w": "20", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//									"clip": "Off", "uiEvent": "On", "color": "[180,180,180,0]", "border": "2", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "10", 
//									"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//									"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//								}, 
//								"funcs": {"jaxId":"1FBQVBOBS5","funcs":[]}, "subs": []
//							}
//						}, 
//						"subs": [
//							{
//								"type": "object", "def": "HudImage", "jaxId": "1FBQV4CC80", 
//								"attrs": {
//									"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "16", "h": "16", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//									"clip": "Off", "uiEvent": "On", "image": "assets/zhankai.svg", "autoSize": "0", "fitSize": "1", "alpha": "1", "rotate": "0", "cursor": "\"\"", 
//									"zIndex": "0"
//								}, 
//								"funcs": {"jaxId":"1FBQV4CC90","funcs":[]}, "subs": []
//							}
//						]
//						
//					},
//					{
//						"type": "object", "def": "HudImage", "jaxId": "1FBQUIL1V3", 
//						"attrs": {
//							"locked": "0", "id": "\"ImgIcon\"", "x": "#intend+18", "y": "3", "w": "24", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "image": "assets/disk.svg", "autoSize": "0", "fitSize": "1", "alpha": "1", "rotate": "0", "cursor": "\"\"", 
//							"zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FBQUIL1V5","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FBQVBOBS7", 
//						"attrs": {
//							"locked": "1", "id": "\"TxtName\"", "x": "#intend+18+28+2", "y": "0", "w": "100", "h": "30", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "text": "#item.name", "color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", 
//							"wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.mid", "bold": "0", "italic": "0", 
//							"underline": "0", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FBQVBOBS9","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}