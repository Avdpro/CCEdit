//Auto genterated by Cody
/*App的基础配置文件文件*/
//----------------------------------------------------------------------------
/*VO Object*/
var appCfg={
	"txtSize": {
		"small": 12, "mid": 16, "big": 20, "bigger": 24, "large": 28, "larger": 32, "huge": 40, "huger": 48, "shuge": 60, "smallMid": 14, "smaller": 10
	},
	"size": {
		"btnIcon": 32, "btnStdH": 32, "naviBoxW": 200, "toolBoxW": 280, "headerH": 28, "naviItemH": 24, "listItemH": 24, "stateBoxH": 24, "listHeadH": 20, "listColW1": 300, 
		"listColW2": 150, "listColW3": 200, "infoLineH": 24, "btmBoxH": 150
	},
	"color": {
		"btnStdFace": [30,100,180,1], "btnStdDown": [35,105,200,1], "btnStdGray": [200,200,200,1], "btnStdText": [255,255,255,1], "highLight": [220,240,255,1], 
		"btnDown": [50,147,250,1], "window": [250,250,250,1], "headBox": [220,220,220,1], "stateBox": [210,210,210,1], "gntSelect": "linear-gradient(to right, rgba(190,220,2550,1), 50%, rgba(220,240,255,0.5))", 
		"gntFile": "linear-gradient(to right, rgba(190,220,255,1), 10%, rgba(220,240,255,0.5))", "tabFace": [226,229,233,1], "tabFrame": [180,180,180,1]
	},
	"shortCuts": {
		"83": [
			{
				"action": "Save", "shiftKey": false, "metaKey": true, "ctrlKey": false, "altKey": false
			},{
				"action": "SaveAs", "shiftKey": true, "metaKey": true, "ctrlKey": false, "altKey": false
			}
		],
		"87": {
			"action": "CloseDoc", "altKey": true, "ctrlKey": false, "metaKey": false, "shiftKey": false
		},
		"KeyF": [
			{
				"action": "Find", "altKey": false, "ctrlKey": false, "metaKey": true, "shiftKey": false
			},{
				"action": "Replace", "altKey": true, "ctrlKey": false, "metaKey": true, "shiftKey": false
			}
		],
		"KeyG": [
			{
				"action": "FindNext", "altKey": false, "ctrlKey": false, "metaKey": true, "shiftKey": false
			},{
				"action": "FindPre", "altKey": true, "ctrlKey": false, "metaKey": true, "shiftKey": false
			}
		]
	},
	"ui": {
		"showBtmBox": 0
	},
	/*#{1FBOMFC1A11*/
	/*}#1FBOMFC1A11*/
};

/*#{1FBOMFC1A0ExFuncs*/
//Check platform and set shortcut
var userAgent = navigator.userAgent;
var platform = navigator.platform;

var gecko = /gecko\/\d/i.test(userAgent);
var ie_upto10 = /MSIE \d/.test(userAgent);
var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
var edge = /Edge\/(\d+)/.exec(userAgent);
var ie = ie_upto10 || ie_11up || edge;
var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
var webkit = !edge && /WebKit\//.test(userAgent);
var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
var chrome = !edge && /Chrome\//.test(userAgent);
var presto = /Opera\//.test(userAgent);
var safari = /Apple Computer/.test(navigator.vendor);
var firefox = userAgent.toLowerCase().indexOf('firefox') > -1;
var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
var phantom = /PhantomJS/.test(userAgent);

var ios = safari && (/Mobile\/\w+/.test(userAgent) || navigator.maxTouchPoints > 2);
var android = /Android/.test(userAgent);

var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
var mac = ios || /Mac/.test(platform);
var chromeOS = /\bCrOS\b/.test(userAgent);
var windows = /win/i.test(platform);

//****************************************************************************
//Device Info:
//****************************************************************************
{
	appCfg.deviceInfo={
		"mac":mac,
		"windows":windows,
		"ios":ios,
		"android":android,
		"safari":safari,
		"chrome":chrome,
		"firefox":firefox,
		"mobile":mobile,
		//TODO: add language etc.
	};
}

//****************************************************************************
//Key short-cuts goes here:
//****************************************************************************
{
	let shortcutsVO;
	if(mac){
		shortcutsVO={
			"KeyS": [
				{
					"action": "Save", "shiftKey": false, "metaKey": true, "ctrlKey": false, "altKey": false
				},{
					"action": "SaveAs", "shiftKey": true, "metaKey": true, "ctrlKey": false, "altKey": false
				}
			],
			"87": {
				"action": "CloseDoc", "altKey": true, "ctrlKey": false, "metaKey": false, "shiftKey": false
			},
			"KeyF": [
				{
					"action": "Find", "altKey": false, "ctrlKey": false, "metaKey": true, "shiftKey": false
				},{
					"action": "Replace", "altKey": true, "ctrlKey": false, "metaKey": true, "shiftKey": false
				}
			],
			"KeyG": [
				{
					"action": "FindNext", "altKey": false, "ctrlKey": false, "metaKey": true, "shiftKey": false
				},{
					"action": "FindPre", "altKey": true, "ctrlKey": false, "metaKey": true, "shiftKey": false
				}
			]
		};
	}else{
		shortcutsVO={
			"KeyS": [
				{
					"action": "Save", "shiftKey": false, "metaKey": false, "ctrlKey": true, "altKey": false
				},{
					"action": "SaveAs", "shiftKey": true, "metaKey": false, "ctrlKey": true, "altKey": false
				}
			],
			"KeyW": {
				"action": "CloseDoc", "altKey": true, "ctrlKey": false, "metaKey": false, "shiftKey": false
			},
			"KeyF": [
				{
					"action": "Find", "altKey": false, "ctrlKey": true, "metaKey": false, "shiftKey": false
				},{
					"action": "Replace", "altKey": true, "ctrlKey": true, "metaKey": false, "shiftKey": false
				}
			],
			"KeyG": [
				{
					"action": "FindNext", "altKey": false, "ctrlKey": true, "metaKey": false, "shiftKey": false
				},{
					"action": "FindPre", "altKey": true, "ctrlKey": true, "metaKey": false, "shiftKey": false
				}
			]
		};
	}
	appCfg.shortCuts=shortcutsVO;
}

/*}#1FBOMFC1A0ExFuncs*/

export {appCfg};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "appCfg.js", "type": "object", "def": "CdyFileAppCfg", "jaxId": "1FBOMFC1A0", 
//			"attrs": {
//				"appCfg": {
//					"name": "appCfg", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBOMFC1A1", 
//					"attrs": {
//						"txtSize": {
//							"name": "txtSize", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBONOCKO0", 
//							"attrs": {
//								"small": {"type":"int","valText":"12","initVal":"","info":null,"tip":null}, 
//								"mid": {"type":"int","valText":"16","initVal":"","info":null,"tip":null}, 
//								"big": {"type":"int","valText":"20","initVal":"","info":null,"tip":null}, 
//								"bigger": {"type":"int","valText":"24","initVal":"","info":null,"tip":null}, 
//								"large": {"type":"int","valText":"28","initVal":"","info":null,"tip":null}, 
//								"larger": {"type":"int","valText":"32","initVal":"","info":null,"tip":null}, 
//								"huge": {"type":"int","valText":"40","initVal":"","info":null,"tip":null}, 
//								"huger": {"type":"int","valText":"48","initVal":"","info":null,"tip":null}, 
//								"shuge": {"type":"int","valText":"60","initVal":"","info":null,"tip":null}, 
//								"smallMid": {"type":"int","valText":"14","initVal":"","info":null,"tip":null}, 
//								"smaller": {"type":"int","valText":"10","initVal":"","info":null,"tip":null}
//							}
//						}, 
//						"size": {
//							"name": "size", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBONOCKO2", 
//							"attrs": {
//								"btnIcon": {"type":"int","valText":"32","initVal":"","info":null,"tip":null}, 
//								"btnStdH": {"type":"int","valText":"32","initVal":"","info":null,"tip":null}, 
//								"naviBoxW": {"type":"int","valText":"200","initVal":"","info":null,"tip":null}, 
//								"toolBoxW": {"type":"int","valText":"280","initVal":"","info":null,"tip":null}, 
//								"headerH": {"type":"int","valText":"28","initVal":"","info":null,"tip":null}, 
//								"naviItemH": {"type":"int","valText":"24","initVal":"","info":null,"tip":null}, 
//								"listItemH": {"type":"int","valText":"24","initVal":"","info":null,"tip":null}, 
//								"stateBoxH": {"type":"int","valText":"24","initVal":"","info":null,"tip":null}, 
//								"listHeadH": {"type":"int","valText":"20","initVal":"","info":null,"tip":null}, 
//								"listColW1": {"type":"int","valText":"300","initVal":"","info":null,"tip":null}, 
//								"listColW2": {"type":"int","valText":"150","initVal":"","info":null,"tip":null}, 
//								"listColW3": {"type":"int","valText":"200","initVal":"","info":null,"tip":null}, 
//								"infoLineH": {"type":"int","valText":"24","initVal":"","info":null,"tip":null}, 
//								"btmBoxH": {"type":"int","valText":"150","initVal":"","info":null,"tip":null}
//							}
//						}, 
//						"color": {
//							"name": "color", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBONOCKO1", 
//							"attrs": {
//								"btnStdFace": {
//									"type": "colorRGBA", "valText": "[30,100,180,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"btnStdDown": {
//									"type": "colorRGBA", "valText": "[35,105,200,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"btnStdGray": {
//									"type": "colorRGBA", "valText": "[200,200,200,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"btnStdText": {
//									"type": "colorRGBA", "valText": "[255,255,255,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"highLight": {
//									"type": "colorRGBA", "valText": "[220,240,255,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"btnDown": {
//									"type": "colorRGBA", "valText": "[50,147,250,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"window": {
//									"type": "colorRGBA", "valText": "[250,250,250,1]", "initVal": "", 
//									"info": null, "tip": "Window face color"
//								}, 
//								"headBox": {
//									"type": "colorRGBA", "valText": "[220,220,220,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"stateBox": {
//									"type": "colorRGBA", "valText": "[210,210,210,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"gntSelect": {
//									"type": "string", "valText": "\"linear-gradient(to right, rgba(190,220,2550,1), 50%, rgba(220,240,255,0.5))\"", "initVal": "", 
//									"info": null, "tip": "Selected"
//								}, 
//								"gntFile": {
//									"type": "string", "valText": "\"linear-gradient(to right, rgba(190,220,255,1), 10%, rgba(220,240,255,0.5))\"", "initVal": "", 
//									"info": null, "tip": "File line"
//								}, 
//								"tabFace": {
//									"type": "colorRGBA", "valText": "[226,229,233,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"tabFrame": {
//									"type": "colorRGBA", "valText": "[180,180,180,1]", "initVal": "", 
//									"info": null, "tip": null
//								}
//							}
//						}, 
//						"shortCuts": {
//							"name": "shortCuts", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2JIRBC0", 
//							"attrs": {
//								"83": {
//									"name": "83", "type": "object", "def": "CdyDocArray", "jaxId": "1FD47N3FF0", 
//									"attrs": [
//										{
//											"name": 0, "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FD47N3FF1", 
//											"attrs": {
//												"action": {
//													"type": "string", "valText": "\"Save\"", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"shiftKey": {
//													"type": "bool", "valText": "false", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"metaKey": {
//													"type": "bool", "valText": "true", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"ctrlKey": {
//													"type": "bool", "valText": "false", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"altKey": {
//													"type": "bool", "valText": "false", "initVal": "", "info": null, 
//													"tip": null
//												}
//											}
//											
//										},
//										{
//											"name": 1, "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FD47N3FF2", 
//											"attrs": {
//												"action": {
//													"type": "string", "valText": "\"SaveAs\"", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"shiftKey": {
//													"type": "bool", "valText": "true", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"metaKey": {
//													"type": "bool", "valText": "true", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"ctrlKey": {
//													"type": "bool", "valText": "false", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"altKey": {
//													"type": "bool", "valText": "false", "initVal": "", "info": null, 
//													"tip": null
//												}
//											}
//											
//										}
//									]
//								}, 
//								"87": {
//									"name": "87", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCR6L2IJ0", 
//									"attrs": {
//										"action": {
//											"type": "string", "valText": "\"CloseDoc\"", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"altKey": {
//											"type": "bool", "valText": "true", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"ctrlKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"metaKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"shiftKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}
//									}
//								}, 
//								"KeyF": {
//									"name": "KeyF", "type": "object", "def": "CdyDocArray", "jaxId": "1FOAK0TQU0", 
//									"attrs": [
//										{
//											"name": 0, "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOAK0TQU1", 
//											"attrs": {
//												"action": {
//													"type": "string", "valText": "\"Find\"", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"altKey": {
//													"type": "bool", "valText": "false", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"ctrlKey": {
//													"type": "bool", "valText": "false", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"metaKey": {
//													"type": "bool", "valText": "true", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"shiftKey": {
//													"type": "bool", "valText": "false", "initVal": "", "info": null, 
//													"tip": null
//												}
//											}
//											
//										},
//										{
//											"name": 1, "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOAK0TQU2", 
//											"attrs": {
//												"action": {
//													"type": "string", "valText": "\"Replace\"", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"altKey": {
//													"type": "bool", "valText": "true", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"ctrlKey": {
//													"type": "bool", "valText": "false", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"metaKey": {
//													"type": "bool", "valText": "true", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"shiftKey": {
//													"type": "bool", "valText": "false", "initVal": "", "info": null, 
//													"tip": null
//												}
//											}
//											
//										}
//									]
//								}, 
//								"KeyG": {
//									"name": "KeyG", "type": "object", "def": "CdyDocArray", "jaxId": "1FOBJ0A1P0", 
//									"attrs": [
//										{
//											"name": 0, "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOBJ0A1P1", 
//											"attrs": {
//												"action": {
//													"type": "string", "valText": "\"FindNext\"", "initVal": "", 
//													"info": null, "tip": null
//												}, 
//												"altKey": {
//													"type": "bool", "valText": "false", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"ctrlKey": {
//													"type": "bool", "valText": "false", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"metaKey": {
//													"type": "bool", "valText": "true", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"shiftKey": {
//													"type": "bool", "valText": "false", "initVal": "", "info": null, 
//													"tip": null
//												}
//											}
//											
//										},
//										{
//											"name": 1, "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOBJ0A1P2", 
//											"attrs": {
//												"action": {
//													"type": "string", "valText": "\"FindPre\"", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"altKey": {
//													"type": "bool", "valText": "true", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"ctrlKey": {
//													"type": "bool", "valText": "false", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"metaKey": {
//													"type": "bool", "valText": "true", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"shiftKey": {
//													"type": "bool", "valText": "false", "initVal": "", "info": null, 
//													"tip": null
//												}
//											}
//											
//										}
//									]
//								}
//							}
//						}, 
//						"ui": {
//							"name": "ui", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO8TKMRQ0", 
//							"attrs": {
//								"showBtmBox": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}
//							}
//						}
//					}
//				}
//			}
//		}/*Doc}#*/;
//	}