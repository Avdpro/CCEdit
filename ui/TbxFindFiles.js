//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {CheckBox} from "../gear/CheckBox.js";
import {BtnStd} from "../gear/BtnStd.js";
/*#{1FMU7U8NG0Imports*/
import {appData} from "../appData.js";
import {FindInFiles,FindFile,FindLine} from "../lib/findfile.js";
import {findFile as CSSFindFile} from "../gear/findFile.js";
import {findLine as CSSFindLine} from "../gear/findLine.js";
/*}#1FMU7U8NG0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var TbxFindFiles=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FMU7U8NG1ExLocal*/
	let clickOut=false;
	/*}#1FMU7U8NG1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FMU7U8NG3ExState*/
		/*}#1FMU7U8NG3ExState*/
	},);
	/*#{1FMU7U8NG1PostState*/
	/*}#1FMU7U8NG1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FMU7U8NG1", 
		"locked": 1, "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, 
		items: [
			{
				"type": "tree", "jaxId": "1FNLDH1686", "id": "BoxList", "x": 5, "y": 150, "w": "FW-10", "h": "FH-160", "autoLayout": 1, "multiSelect": 0, 
				//函数
				nodeCSS:function(item, node){
					/*#{1FNN4MHNI0Code*/
					return {
						type:CSSFindLine(app,item.line,item.text,item,node),
						OnClick:function(){
							clickOut=true;
							app.openFile(item.file.path,item.line);
						}
					};
					/*}#1FNN4MHNI0Code*/
				},
				//函数
				getSubObjs:function(item, node){
					/*#{1FNN4MHNI2Code*/
					return item.lines;
					/*}#1FNN4MHNI2Code*/
				}
			},
			{
				"type": "group", "jaxId": "1FNN26F4N0", "id": "GrpFind", 
				items: [
					{
						"type": "text", "jaxId": "1FNKQ8PUG0", "x": 10, "y": 12, "w": 100, "h": 20, "text": "Find:", "color": [0,0,0], "fontSize": appCfg.txtSize.smallMid
					},
					{
						"type": "edit", "jaxId": "1FNKQ8PUG3", "id": "EdFind", "x": 10, "y": 32, "w": "FW-20", "h": 24, "autoLayout": 1, "bgColor": [255,255,255,1], "borderStyle": 0, 
						"placeHolder": "Text to find", 
						//函数
						OnChange:function(){
							/*#{1FNLFCT4N0Code*/
							/*}#1FNLFCT4N0Code*/
						},
						//函数
						OnUpdate:function(){
							/*#{1FNLFCT4N1Code*/
							let text=this.text;
							if(text){
								self.doFind();
							}
							/*}#1FNLFCT4N1Code*/
						},
						//函数
						OnInput:function(){
							/*#{1FNLFN65F0Code*/
							let text=this.text;
							self.BtnFind.enable=text?1:0;
							/*}#1FNLFN65F0Code*/
						}
					},
					{
						"type": CheckBox(app,"Case",0,null),"jaxId": "1FNKR0NS80", 
						"locked": 0, "id": "CBCase", "x": 10, "y": 65
					},
					{
						"type": CheckBox(app,"Word",0,null),"jaxId": "1FNKR7C8Q0", 
						"locked": 0, "id": "CBWord", "x": "FW/3", "y": 65
					},
					{
						"type": CheckBox(app,"RegExp",0,null),"jaxId": "1FNKRC8L10", 
						"locked": 0, "id": "CBRegExp", "x": "FW/3*2", "y": 65
					},
					{
						"type": "edit", "jaxId": "1FNKRKR430", "id": "EdFilter", "x": 10, "y": 94, "w": "FW-150", "h": 24, "autoLayout": 1, "bgColor": [255,255,255,1], 
						"borderStyle": 0, "placeHolder": "File filter(s)", "OnUpdate": undefined, 
						//函数
						OnUpdate:function(){
							/*#{1FNLFCT4N2Code*/
							/*}#1FNLFCT4N2Code*/
						}
					},
					{
						"type": BtnStd(app,100,"Find",null),"jaxId": "1FNKS9RJ10", 
						"locked": 0, "id": "BtnFind", "x": "FW-130", "y": 89, 
						//函数
						OnClick:function(){
							/*#{1FNN8O7RR0Code*/
							self.doFind();
							/*}#1FNN8O7RR0Code*/
						}
					},
					{
						"type": CheckBox(app,"Replace",0,null),"jaxId": "1FNKS73I50", 
						"locked": 0, "id": "CBReplace", "x": 10, "y": 125, 
						//函数
						OnCheck:function(){
							/*#{1FNLFCT4N3Code*/
							if(this.checked){
								self.showFace("replace");
							}else{
								self.showFace("find");
							}
							/*}#1FNLFCT4N3Code*/
						}
					},
					{
						"type": "edit", "jaxId": "1FNKS8NI70", "id": "EdReplace", "x": 10, "y": 150, "w": "FW-150", "h": 24, "autoLayout": 1, "bgColor": [255,255,255,1], 
						"borderStyle": 0, "placeHolder": "Text to replace", 
						//函数
						OnUpdate:function(){
							/*#{1FNLFCT4N4Code*/
							/*}#1FNLFCT4N4Code*/
						}
					}
				]
			}
		],
		faces: {
			"find": {
				/*BoxList*/"#1FNLDH1686": {
					"y": 150, "h": "FH-160"
				},
				/*BtnFind*/"#1FNKS9RJ10": {
					"y": 89
				},
				/*EdReplace*/"#1FNKS8NI70": {
					"display": 0
				},
			},
			"replace": {
				/*BoxList*/"#1FNLDH1686": {
					"y": 180, "h": "FH-190"
				},
				/*BtnFind*/"#1FNKS9RJ10": {
					"y": 142
				},
				/*EdReplace*/"#1FNKS8NI70": {
					"display": 1
				},
			}
		},
		/*#{1FMU7U8NG1ExAttrs*/
		/*}#1FMU7U8NG1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FMU7U8NG1CreateFunc*/
			self.BtnFind.enable=0;
			self.showFace("find");
			/*}#1FMU7U8NG1CreateFunc*/
		
		}
	};
	/*#{1FMU7U8NG1ExViewDef*/
	//------------------------------------------------------------------------
	//Check if a doc is compatible with a doc:
	cssVO.workWithDoc=function(doc){
		if(clickOut){
			return 100;
		}
		return 10;
	};
	
	//------------------------------------------------------------------------
	//Find in files:
	cssVO.doFind=async function(){
		let text2Find,options;
		let entryList;
		let fileNode=null;
		text2Find=self.EdFind.text;
		options={
			useCase:self.CBCase.checked,
			useWord:self.CBWord.checked,
			useRegExp:self.CBRegExp.checked,
			filter:self.EdFilter.text
		}
		self.BoxList.clear();
		self.GrpFind.uiEvent=-1;
		self.GrpFind.alpha=0.5;
		await FindInFiles(app.appPrj.disk.diskObj,text2Find,options,item=>{
			if(item instanceof FindFile){
				self.BoxList.addNode(item,null,CSSFindFile(app,`${item.path} (${item.lines.length})`));
			}
		});
		self.GrpFind.uiEvent=1;
		self.GrpFind.alpha=1;
	};
	/*}#1FMU7U8NG1ExViewDef*/
	
	return cssVO;
};

/*#{1FMU7U8NG0PostCode*/
/*appData.regToolBox({
	codeName:"FindInFiles",
	name:"Find in Files",
	createUI:TbxFindFiles,
	icon:"assets/findfiles.svg"
})*/;
/*}#1FMU7U8NG0PostCode*/

export {TbxFindFiles};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "TbxFindFiles.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FMU7U8NG0", 
//			"attrs": {
//				"viewName": "\"TbxFindFiles\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FMU7U8NG1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMU7U8NG2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FMU7U8NG3", 
//						"attrs": {}, "funcs": {"jaxId":"1FMU7U8NG4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "1", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "autoLayout": "On"
//					}, 
//					"faces": null, 
//					"viewFaces": {
//						"jaxId": "1FMU7U8NG6", 
//						"entrys": [
//							{
//								"jaxId": "1FNKSE8FM0", "attrs": {"Face Name":"\"find\"","Face Function":"0"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNLDH1680", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FNKSFBQH0", 
//								"attrs": {"Face Name":"\"replace\"","Face Function":"0"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNLDH1681", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							}
//						]
//					}, 
//					"funcs": {"jaxId":"1FMU7U8NG7","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "HudTreeBox", "jaxId": "1FNLDH1686", 
//							"attrs": {
//								"locked": "0", "id": "\"BoxList\"", "x": "5", "y": "150", "w": "\"FW-10\"", "h": "\"FH-160\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "headSpace": "0", "endSpace": "50", 
//								"nodeGap": "0", "intend": "30", "multiSelect": "0"
//							}, 
//							"faces": {
//								"jaxId": "1FNLDH1687", 
//								"entrys": [
//									{
//										"jaxId": "1FNLDH1688", "entryId": "1FNKSE8FM0", "faceName": "find", 
//										"attrs": {"y":"150","h":"\"FH-160\""}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FNLDH1689", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FNLDH16810", "entryId": "1FNKSFBQH0", "faceName": "replace", 
//										"attrs": {"y":"180","h":"\"FH-190\""}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FNLDH16811", 
//											"attrs": []
//										}
//										
//									}
//								]
//							}, 
//							"funcs": {
//								"jaxId": "1FNLDH16812", 
//								"funcs": [
//									{
//										"jaxId": "1FNN4MHNI0", "type": "object", "def": "CdyFunc", "name": "nodeCSS", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNN4MHNI1", 
//											"attrs": {
//												"item": {
//													"type": "auto", "valText": "null", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"node": {
//													"type": "auto", "valText": "null", "initVal": "", "info": null, 
//													"tip": null
//												}
//											}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									},
//									{
//										"jaxId": "1FNN4MHNI2", "type": "object", "def": "CdyFunc", "name": "getSubObjs", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNN4MHNI3", 
//											"attrs": {
//												"item": {
//													"type": "auto", "valText": "null", "initVal": "", "info": null, 
//													"tip": null
//												}, 
//												"node": {
//													"type": "auto", "valText": "null", "initVal": "", "info": null, 
//													"tip": null
//												}
//											}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}, 
//							"subs": []
//						},
//						{
//							"type": "object", "def": "LayoutGroup", "jaxId": "1FNN26F4N0", 
//							"attrs": {"locked":"0","id":"\"GrpFind\""}, 
//							"funcs": {"jaxId":"1FNN27G1H1","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FNKQ8PUG0", 
//									"attrs": {
//										"locked": "0", "id": "\"\"", "x": "10", "y": "12", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Find:\"", "color": "[0,0,0]", "autoSizeW": "0", 
//										"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//										"bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FNKQ8PUG2","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudEdit", "jaxId": "1FNKQ8PUG3", 
//									"attrs": {
//										"locked": "0", "id": "\"EdFind\"", "x": "10", "y": "32", "w": "\"FW-20\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "bgColor": "[255,255,255,1]", 
//										"border": "1", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "text": "\"\"", "font": "\"\"", "color": "[0,0,0]", "fontSize": "16", 
//										"placeHolder": "\"Text to find\"", "inputType": "text", "selectOnFocus": "1", "outline": "1", "spellCheck": "1"
//									}, 
//									"funcs": {
//										"jaxId": "1FNKQ8PUG5", 
//										"funcs": [
//											{
//												"jaxId": "1FNLFCT4N0", "type": "object", "def": "CdyFunc", "name": "OnChange", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNLFD73U0", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											},
//											{
//												"jaxId": "1FNLFCT4N1", "type": "object", "def": "CdyFunc", "name": "OnUpdate", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNLFD73U1", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											},
//											{
//												"jaxId": "1FNLFN65F0", "type": "object", "def": "CdyFunc", "name": "OnInput", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNLFNBKF0", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}, 
//									"subs": []
//								},
//								{
//									"type": "object", "def": "Gear1FNKQC26S0", "jaxId": "1FNKR0NS80", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNKR0NS81", 
//										"attrs": {
//											"text": {
//												"type": "string", "valText": "\"Case\"", "initVal": "", "info": null, 
//												"tip": null
//											}, 
//											"checked": {"type":"int","valText":"0","initVal":0,"info":null,"tip":null}
//										}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNKR0NS82", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"CBCase\"", "x": "10", "y": "65", "autoLayout": "Off"
//									}, 
//									"faces": null, "funcs": {"jaxId":"1FNKR0NS84","funcs":[]}
//								},
//								{
//									"type": "object", "def": "Gear1FNKQC26S0", "jaxId": "1FNKR7C8Q0", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNKR7C8Q1", 
//										"attrs": {
//											"text": {
//												"type": "string", "valText": "\"Word\"", "initVal": "", "info": null, 
//												"tip": null
//											}, 
//											"checked": {"type":"int","valText":"0","initVal":0,"info":null,"tip":null}
//										}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNKR7C8Q2", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"CBWord\"", "x": "\"FW/3\"", "y": "65", "autoLayout": "Off"
//									}, 
//									"faces": null, "funcs": {"jaxId":"1FNKR7C8R0","funcs":[]}
//								},
//								{
//									"type": "object", "def": "Gear1FNKQC26S0", "jaxId": "1FNKRC8L10", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNKRC8L11", 
//										"attrs": {
//											"text": {
//												"type": "string", "valText": "\"RegExp\"", "initVal": "", "info": null, 
//												"tip": null
//											}, 
//											"checked": {"type":"int","valText":"0","initVal":0,"info":null,"tip":null}
//										}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNKRC8L12", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"CBRegExp\"", "x": "\"FW/3*2\"", "y": "65", "autoLayout": "Off"
//									}, 
//									"faces": null, "funcs": {"jaxId":"1FNKRC8L13","funcs":[]}
//								},
//								{
//									"type": "object", "def": "HudEdit", "jaxId": "1FNKRKR430", 
//									"attrs": {
//										"locked": "0", "id": "\"EdFilter\"", "x": "10", "y": "94", "w": "\"FW-150\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "bgColor": "[255,255,255,1]", 
//										"border": "1", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "text": "\"\"", "font": "\"\"", "color": "[0,0,0]", "fontSize": "16", 
//										"placeHolder": "\"File filter(s)\"", "inputType": "text", "selectOnFocus": "1", "outline": "1", "spellCheck": "1", 
//										"OnUpdate": {"type":"auto","info":null,"tip":null}
//									}, 
//									"funcs": {
//										"jaxId": "1FNKRKR431", 
//										"funcs": [
//											{
//												"jaxId": "1FNLFCT4N2", "type": "object", "def": "CdyFunc", "name": "OnUpdate", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNLFD73U2", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}, 
//									"subs": []
//								},
//								{
//									"type": "object", "def": "Gear1FDAETMLJ0", "jaxId": "1FNKS9RJ10", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNKS9RJ11", 
//										"attrs": {
//											"w": {"type":"int","valText":"100","initVal":0,"info":null,"tip":null}, 
//											"text": {
//												"type": "string", "valText": "\"Find\"", "initVal": "", "info": null, 
//												"tip": null
//											}
//										}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNKS9RJ12", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnFind\"", "x": "\"FW-130\"", "y": "89", "autoLayout": "Off"
//									}, 
//									"faces": {
//										"jaxId": "1FNKS9RJ13", 
//										"entrys": [
//											{
//												"jaxId": "1FNLDH1682", "entryId": "1FNKSE8FM0", "faceName": "find", 
//												"attrs": {"y":"89"}, 
//												"anis": {
//													"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FNLDH1683", 
//													"attrs": []
//												}
//												
//											},
//											{
//												"jaxId": "1FNLDH1684", "entryId": "1FNKSFBQH0", "faceName": "replace", 
//												"attrs": {"y":"142"}, 
//												"anis": {
//													"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FNLDH1685", 
//													"attrs": []
//												}
//												
//											}
//										]
//									}, 
//									"funcs": {
//										"jaxId": "1FNKS9RJ14", 
//										"funcs": [
//											{
//												"jaxId": "1FNN8O7RR0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNN8P7K10", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}
//									
//								},
//								{
//									"type": "object", "def": "Gear1FNKQC26S0", "jaxId": "1FNKS73I50", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNKS73I51", 
//										"attrs": {
//											"text": {
//												"type": "string", "valText": "\"Replace\"", "initVal": "", "info": null, 
//												"tip": null
//											}, 
//											"checked": {"type":"int","valText":"0","initVal":0,"info":null,"tip":null}
//										}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNKS73I52", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"CBReplace\"", "x": "10", "y": "125", "autoLayout": "Off"
//									}, 
//									"faces": null, 
//									"funcs": {
//										"jaxId": "1FNKS73I53", 
//										"funcs": [
//											{
//												"jaxId": "1FNLFCT4N3", "type": "object", "def": "CdyFunc", "name": "OnCheck", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNLFD73U3", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}
//									
//								},
//								{
//									"type": "object", "def": "HudEdit", "jaxId": "1FNKS8NI70", 
//									"attrs": {
//										"locked": "0", "id": "\"EdReplace\"", "x": "10", "y": "150", "w": "\"FW-150\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "bgColor": "[255,255,255,1]", 
//										"border": "1", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "text": "\"\"", "font": "\"\"", "color": "[0,0,0]", "fontSize": "16", 
//										"placeHolder": "\"Text to replace\"", "inputType": "text", "selectOnFocus": "1", "outline": "1", "spellCheck": "1"
//									}, 
//									"faces": {
//										"jaxId": "1FNLDH16814", 
//										"entrys": [
//											{
//												"jaxId": "1FNLDH16815", "entryId": "1FNKSE8FM0", "faceName": "find", 
//												"attrs": {"display":"Hide"}, 
//												"anis": {
//													"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FNLDH16816", 
//													"attrs": []
//												}
//												
//											},
//											{
//												"jaxId": "1FNLDH16817", "entryId": "1FNKSFBQH0", "faceName": "replace", 
//												"attrs": {"display":"Show"}, 
//												"anis": {
//													"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FNLDH16818", 
//													"attrs": []
//												}
//												
//											}
//										]
//									}, 
//									"funcs": {
//										"jaxId": "1FNKS8NI71", 
//										"funcs": [
//											{
//												"jaxId": "1FNLFCT4N4", "type": "object", "def": "CdyFunc", "name": "OnUpdate", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNLFD73U4", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}, 
//									"subs": []
//								}
//							]
//							
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FMU7U8NG8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FMU7U8NG10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}