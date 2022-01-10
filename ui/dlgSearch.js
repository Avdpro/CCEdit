//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {btnIcon} from "../gear/btnIcon.js";
import {CheckBox} from "../gear/CheckBox.js";
import {btnSmall} from "../gear/btnSmall.js";
/*#{1FO45K4LL0Imports*/
let jaxApp=null;
/*}#1FO45K4LL0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var dlgSearch=function (app, editor){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FO45K4LL1ExLocal*/
	jaxApp=app;
	/*}#1FO45K4LL1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FO45K4LM1ExState*/
		/*}#1FO45K4LM1ExState*/
	},);
	/*#{1FO45K4LL1PostState*/
	let cm=null;
	/*}#1FO45K4LL1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FO45K4LL1", 
		"locked": 0, "x": 0, "y": 0, "w": "FW", "h": 60, "autoLayout": 1, "zIndex": 15, "clip": 1, 
		items: [
			{
				"type": "box", "jaxId": "1FO470L800", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "color": appCfg.color.headBox, "border": 1, "shadowColor": [0,0,0,0.5]
			},
			{
				"type": "edit", "jaxId": "1FO470L808", "id": "EdFind", "x": 9, "y": 5, "w": 300, "h": 20, "bgColor": [255,255,255,1], "borderStyle": 0, "placeHolder": "Text to find", 
				"outline": 0, "spellCheck": 0, 
				//函数
				OnUpdate:function(){
					/*#{1FO4KNL1P0Code*/
					self.startFind();
					/*}#1FO4KNL1P0Code*/
				},
				//函数
				OnCancel:function(){
					/*#{1FO4QDB6L0Code*/
					editor.closeDlg(self);
					/*}#1FO4QDB6L0Code*/
				},
				//函数
				OnInput:function(){
					/*#{1FO508HT50Code*/
					self.BtnReplace.enable=self.EdReplace.text&&self.EdFind.text;
					self.BtnReplaceAll.enable=self.EdReplace.text&&self.EdFind.text;
					/*}#1FO508HT50Code*/
				}
			},
			{
				"type": btnIcon(app,20,"arrowup.svg",null),"jaxId": "1FO46IHD70", 
				"locked": 0, "id": "BtnPre", "x": 310, "y": 5, 
				//函数
				OnClick:function(){
					/*#{1FO4KNL1P1Code*/
					self.findPre();
					/*}#1FO4KNL1P1Code*/
				}
			},
			{
				"type": btnIcon(app,20,"arrowdown.svg",null),"jaxId": "1FO46IJR70", 
				"locked": 0, "id": "BtnPre", "x": 330, "y": 5, 
				//函数
				OnClick:function(){
					/*#{1FO4KNL1P2Code*/
					self.findNext();
					/*}#1FO4KNL1P2Code*/
				}
			},
			{
				"type": CheckBox(app,"Case",0,null),"jaxId": "1FO46LTD50", 
				"locked": 0, "id": "CBCase", "x": 350, "y": 5, 
				//函数
				OnCheck:function(){
					/*#{1FO4NH85I0Code*/
					self.startFind();
					/*}#1FO4NH85I0Code*/
				}
			},
			{
				"type": CheckBox(app,"Word",0,null),"jaxId": "1FO46LUH60", 
				"locked": 0, "id": "CBWord", "x": 420, "y": 5, 
				//函数
				OnCheck:function(){
					/*#{1FO4NH85I1Code*/
					self.startFind();
					/*}#1FO4NH85I1Code*/
				}
			},
			{
				"type": CheckBox(app,"RegExp",0,null),"jaxId": "1FO46N2BJ0", 
				"locked": 0, "id": "CBRegExp", "x": 490, "y": 5, 
				//函数
				OnCheck:function(){
					/*#{1FO4NH85I2Code*/
					self.startFind();
					/*}#1FO4NH85I2Code*/
				}
			},
			{
				"type": btnIcon(app,24,"close.svg",null),"jaxId": "1FO470L803", 
				"locked": 0, "id": "BtnClose", "x": "FW-25", "y": 3, "autoLayout": 1, 
				//函数
				OnClick:function(){
					/*#{1FO49486U0Code*/
					editor.closeDlg(self);
					return 1;
					/*}#1FO49486U0Code*/
				}
			},
			{
				"type": "group", "jaxId": "1FO4V5LUV6", "id": "GPReplace", 
				items: [
					{
						"type": "edit", "jaxId": "1FO4U3USQ0", "id": "EdReplace", "x": 9, "y": 33, "w": 300, "h": 20, "bgColor": [255,255,255,1], "borderStyle": 0, "placeHolder": "Replace text", 
						"outline": 0, "spellCheck": 0, 
						//函数
						OnUpdate:function(){
							/*#{1FO4U3USQ2Code*/
							self.startFind();
							/*}#1FO4U3USQ2Code*/
						},
						//函数
						OnCancel:function(){
							/*#{1FO4U3USQ4Code*/
							editor.closeDlg(self);
							/*}#1FO4U3USQ4Code*/
						},
						//函数
						OnInput:function(){
							/*#{1FO509UA71Code*/
							self.BtnReplace.enable=self.EdReplace.text&&self.EdFind.text;
							self.BtnReplaceAll.enable=self.EdReplace.text&&self.EdFind.text;
							/*}#1FO509UA71Code*/
						}
					},
					{
						"type": btnSmall(app,100,"Replace",null),"jaxId": "1FO4UPVM20", 
						"locked": 0, "id": "BtnReplace", "x": 320, "y": 32, 
						//函数
						OnClick:function(){
							/*#{1FO5A8L0G0Code*/
							self.replace();
							/*}#1FO5A8L0G0Code*/
						}
					},
					{
						"type": btnSmall(app,100,"Replace all",null),"jaxId": "1FO4USLR90", 
						"locked": 0, "id": "BtnReplaceAll", "x": 430, "y": 32, 
						//函数
						OnClick:function(){
							/*#{1FO5A8L0G1Code*/
							self.replaceAll();
							/*}#1FO5A8L0G1Code*/
						}
					}
				]
			},
			{
				"type": CheckBox(app,"In selection",0,null),"jaxId": "1FO54J14A0", 
				"locked": 0, "id": "CBInSel", "x": 540, "y": 32, 
				//函数
				OnCheck:function(){
					/*#{1FO54J14B1Code*/
					/*}#1FO54J14B1Code*/
				}
			}
		],
		faces: {
			"find": {
				/*GPReplace*/"#1FO4V5LUV6": {
					"display": 0
				},
			},
			"replace": {
				/*GPReplace*/"#1FO4V5LUV6": {
					"display": 1
				},
			}
		},
		/*#{1FO45K4LL1ExAttrs*/
		/*}#1FO45K4LL1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FO45K4LL1CreateFunc*/
			/*}#1FO45K4LL1CreateFunc*/
		
		}
	};
	/*#{1FO45K4LL1ExViewDef*/
	cssVO.OnShow=function(vo){
		let state=vo.state;
		let find=vo.find;
		let findText;
		cm=vo.cm;
		if(find instanceof RegExp){
			findText=find.source;
		}else if(find){
			findText=""+find;
		}else{
			findText="";
		}
		self.EdFind.text=findText;
		self.EdFind.startEdit();
		if(findText){
			self.startFind();
		}
		if(vo.replace){
			self.showFace("replace");
			self.h=60;
		}else{
			self.showFace("find");
			self.h=30;
		}
		self.BtnReplace.enable=self.EdReplace.text&&self.EdFind.text;
		self.BtnReplaceAll.enable=self.EdReplace.text&&self.EdFind.text;
	};
	
	//------------------------------------------------------------------------
	//Handle shortcut, only handle "Find"/Replace
	cssVO.handleShortcut=function(cmd){
		if(cmd==="Find"){
			self.findNext();
			return 1;
		}else if(cmd==="FindNext"){
			self.findNext();
			return 1;
		}else if(cmd==="FindPre"){
			self.findPre();
			return 1;
		}
		return 0;
	};
	
	//------------------------------------------------------------------------
	//Find next match:
	cssVO.startFind=function(rev){
		let findText;
		let useCase,useWord,useRegExp;
		let state = getSearchState(cm);
		
		findText=self.EdFind.text;
		if(!findText){
			clearSearch(cm);
			return;
		}
		useCase=self.CBCase.checked;
		useWord=self.CBWord.checked;
		useRegExp=self.CBRegExp.checked;
		cm.operation(function() {
			startSearch(cm, state, findText, useCase, useWord, useRegExp);
			state.posFrom = state.posTo = cm.getCursor();
			findNext(cm, !!rev);
		});			
	};

	//------------------------------------------------------------------------
	cssVO.findPre=function(){
		if(cm){
			var state = getSearchState(cm);
			if (!state.query){
				self.startFind(true);
				return;
			}
			doSearch(cm,true);
		}
	};

	//------------------------------------------------------------------------
	cssVO.findNext=function(){
		if(cm){
			var state = getSearchState(cm);
			if (!state.query){
				self.startFind(false);
			}
			doSearch(cm);
		}
	};
	
	//------------------------------------------------------------------------
	//Replace current find item
	cssVO.replace=function(){
		let cursor,match,query;
		let selFrom,selTo,findFrom,findTo;
		var state = getSearchState(cm);
		var text;
		if (!state.query){
			self.startFind(false);
			doSearch(cm);
			return;
		}
		cursor=state.findCursor;
		if(!cursor){
			doSearch(cm);
			return;
		}
		text=self.EdReplace.text;
		query=state.query;
		match=state.findMatch;
		findFrom=state.findFrom;
		findTo=state.findTo;
		selFrom=cm.getCursor("from");
		selTo=cm.getCursor("to");
		if(equalCursorPos(findFrom,selFrom) && equalCursorPos(findTo,selTo)){
			cursor.replace(typeof query == "string" ? text :
						   text.replace(/\$(\d)/g, function(_, i) {return match[i];}));
			doSearch(cm);
		}else{
			doSearch(cm);
		}
	};
	
	//------------------------------------------------------------------------
	//Replace all items in doc
	cssVO.replaceAll=function(){
		let inSel,cursor,findText,text,query,useCase,cnt;
		var state = getSearchState(cm);
		text=self.EdReplace.text;
		findText=self.EdFind.text;
		query=state.query;
		if (!query){
			self.startFind(false);
			doSearch(cm);
			return;
		}
		if(state.queryText!==findText){
			self.startFind(false);
			doSearch(cm);
			return;
		}
		cursor=state.findCursor;
		if(!cursor){
			doSearch(cm);
			return;
		}
		useCase=state.useCase;
		inSel=self.CBInSel.checked;
		cnt=0;
		if(inSel){
			let selFrom,selTo,findFrom,findTo;
			selFrom=cm.getCursor("from");
			selTo=cm.getCursor("to");
			cm.operation(function() {
				for (var cursor = getSearchCursor(cm, query, CodeMirror.Pos(cm.firstLine()), useCase); cursor.findNext();) {
					findFrom=cursor.from();
					findTo=cursor.to();
					if(cmp(findFrom,selFrom)>0){
						if(cmp(findFrom,selTo)<0){
							if (typeof query != "string") {
								var match = cm.getRange(cursor.from(), cursor.to()).match(query);
								cursor.replace(text.replace(/\$(\d)/g, function(_, i) {return match[i];}));
							} else {
								cursor.replace(text);
							}
							cnt++;
						}
					}
				}
			});
		}else{
			cm.operation(function() {
				for (var cursor = getSearchCursor(cm, query, CodeMirror.Pos(cm.firstLine()), useCase); cursor.findNext();) {
					if (typeof query != "string") {
						var match = cm.getRange(cursor.from(), cursor.to()).match(query);
						cursor.replace(text.replace(/\$(\d)/g, function(_, i) {return match[i];}));
					} else {
						cursor.replace(text);
					}
					cnt++;
				}
			});
		}
		app.showStateText(`${cnt} ${cnt>1?"occurrences":"occurrence"} replaced.`,0);
		//TODO: code this:
	};
/*}#1FO45K4LL1ExViewDef*/
	
	return cssVO;
};

/*#{1FO45K4LL0PostCode*/

function cmp(a, b) {
	return a.line - b.line || a.ch - b.ch 
}

function equalCursorPos(a, b){
	return a.sticky == b.sticky && cmp(a, b) == 0 
}
//----------------------------------------------------------------------------
//Convert special chars:
function parseString(string) {
	return string.replace(/\\([nrt\\])/g, function(match, ch) {
		if (ch == "n") return "\n"
		if (ch == "r") return "\r"
		if (ch == "t") return "\t"
		if (ch == "\\") return "\\"
		return match
	})
}

//----------------------------------------------------------------------------
//Parse the query:
function parseQuery(query,isRE,useWord,useCase) {
	//var isRE = query.match(/^\/(.*)\/([a-z]*)$/);
	if (isRE) {
		try { query = new RegExp(query); }
		catch(e) {} // Not a regular expression after all, do a string search
	} else {
		query = parseString(query)
	}
	if(useWord){
		query=new RegExp(`\\b${query}\\b`,"g");
	}
	if (typeof query == "string" ? query == "" : query.test("")){
		query = /x^/;
	}
	return query;
}

//----------------------------------------------------------------------------
//Function to let codemirror mark query string in code feild:
function searchOverlay(query, useCase) {
	if (typeof query == "string")
		query = new RegExp(query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), useCase ? "g" : "gi");
	else if (!query.global)
		query = new RegExp(query.source, query.ignoreCase ? "gi" : "g");

	return {token: function(stream) {
		query.lastIndex = stream.pos;
		var match = query.exec(stream.string);
		if (match && match.index == stream.pos) {
			stream.pos += match[0].length || 1;
			return "searching";
		} else if (match) {
			stream.pos = match.index;
		} else {
			stream.skipToEnd();
		}
	}};
}

//----------------------------------------------------------------------------
//The search state to keep in codemirror:
function SearchState() {
	this.posFrom = this.posTo = this.lastQuery = this.query = null;
	this.useCase=false;
	this.overlay = null;
}

//----------------------------------------------------------------------------
//Get current search state, if there is none, create one:
function getSearchState(cm) {
	return cm.state.search || (cm.state.search = new SearchState());
}

//----------------------------------------------------------------------------
//Clear current search
function clearSearch(cm) {cm.operation(function() {
	var state = getSearchState(cm);
	state.lastQuery = state.query;
	if (!state.query) return;
	state.query = state.queryText = null;
	cm.removeOverlay(state.overlay);
	if (state.annotate) { state.annotate.clear(); state.annotate = null; }
});}

//----------------------------------------------------------------------------
//Get the search cursor:
function getSearchCursor(cm, query, pos, useCase) {
	return cm.getSearchCursor(query, pos, {caseFold: useCase?false:true, multiline: true});
}

//----------------------------------------------------------------------------
//Start the search
function startSearch(cm, state, query, useCase, useWord, useRegExp) {
	state.queryText = query;
	state.query = parseQuery(query,useRegExp,useWord);
	cm.removeOverlay(state.overlay, state.useCase);
	state.useCase=useCase;
	state.overlay = searchOverlay(state.query, state.useCase);
	cm.addOverlay(state.overlay);
	if (cm.showMatchesOnScrollbar) {
		if (state.annotate) { state.annotate.clear(); state.annotate = null; }
		state.annotate = cm.showMatchesOnScrollbar(state.query, state.useCase);
	}
}

//----------------------------------------------------------------------------
//Open dialog to search:
function doSearch(cm, rev, persistent, immediate) {
	var state = getSearchState(cm);
	if (state.query)
		return findNext(cm, rev);
	var q = cm.getSelection() || state.lastQuery;
	if (q instanceof RegExp && q.source == "x^") q = null
	if (persistent) {
		//What is this?
	} else {
		let editUI=cm.uiCCEdit;
		if(editUI){
			editUI.showDlg(dlgSearch,{find:q,cm:cm,state:state});
		}
	}
}

//----------------------------------------------------------------------------
//Find next match, rev is the find direction:
function findNext(cm, rev, callback) {cm.operation(function() {
	var state = getSearchState(cm);
	var useCase=state.useCase;
	var match;
	if(rev){
		state.posFrom = state.posTo = cm.getCursor("from");
	}else{
		state.posFrom = state.posTo = cm.getCursor();
	}
	var cursor = getSearchCursor(cm, state.query, rev ? state.posFrom : state.posTo, useCase);
	state.findMatch=null;
	state.findFrom=null;
	state.findTo=null;
	state.findCursor=null;
	match=cursor.find(rev);
	if (!match) {
		cursor = getSearchCursor(cm, state.query, rev ? CodeMirror.Pos(cm.lastLine()) : CodeMirror.Pos(cm.firstLine(), 0), useCase);
		match=cursor.find(rev);
		if (!match){
			jaxApp.showStateText(`Can't find text: `,0,state.queryText);
			return;
		}
		jaxApp.showStateText(rev?"Find passed the file begining.":"Find passed the file end.");
	}
	state.findMatch=match;
	state.findFrom=cursor.from();
	state.findTo=cursor.to();
	cm.setSelection(cursor.from(), cursor.to());
	cm.scrollIntoView({from: cursor.from(), to: cursor.to()}, 20);
	state.posFrom = cursor.from(); state.posTo = cursor.to();
	state.findCursor=cursor;
	if (callback){
		callback(cursor.from(), cursor.to())
	}
});}

//----------------------------------------------------------------------------
//Open dialog to replace:
function replace(cm){
	var state = getSearchState(cm);
	var q = cm.getSelection() || state.lastQuery;
	if (q instanceof RegExp && q.source == "x^") q = null
	let editUI=cm.uiCCEdit;
	if(editUI){
		editUI.showDlg(dlgSearch,{find:q,cm:cm,state:state,replace:true});
	}
};


CodeMirror.commands.find = function(cm) {
	let editUI;
	clearSearch(cm);
	doSearch(cm);
};

CodeMirror.commands.findNext = doSearch;
CodeMirror.commands.findPrev = function(cm) {doSearch(cm, true);};
CodeMirror.commands.clearSearch = clearSearch;

CodeMirror.commands.replace = replace;
CodeMirror.commands.replaceAll = replace;


/*}#1FO45K4LL0PostCode*/

export {dlgSearch};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "dlgSearch.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FO45K4LL0", 
//			"attrs": {
//				"viewName": "\"dlgSearch\"", "device": "Custom size", "w": "768", "h": "300", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FO45K4LL1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO45K4LM0", 
//						"attrs": {
//							"editor": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}
//						}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FO45K4LM1", 
//						"attrs": {}, "funcs": {"jaxId":"1FO45K4LM2","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "60", "autoLayout": "On", "zIndex": "15", "clip": "On"
//					}, 
//					"faces": null, 
//					"viewFaces": {
//						"jaxId": "1FO45K4LM4", 
//						"entrys": [
//							{
//								"jaxId": "1FO4UUS640", "attrs": {"Face Name":"\"find\"","Face Function":"0"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4V5LUV4", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FO4V0K480", 
//								"attrs": {"Face Name":"\"replace\"","Face Function":"0"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4V5LUV5", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							}
//						]
//					}, 
//					"funcs": {"jaxId":"1FO45K4LM5","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FO470L800", 
//							"attrs": {
//								"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.headBox", "border": "1", 
//								"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", 
//								"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//							}, 
//							"funcs": {"jaxId":"1FO470L802","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "HudEdit", "jaxId": "1FO470L808", 
//							"attrs": {
//								"locked": "0", "id": "\"EdFind\"", "x": "9", "y": "5", "w": "300", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "bgColor": "[255,255,255,1]", "border": "1", "borderStyle": "Solid", 
//								"borderColor": "[0,0,0,1]", "coner": "0", "text": "\"\"", "font": "\"\"", "color": "[0,0,0]", "fontSize": "16", "placeHolder": "\"Text to find\"", 
//								"inputType": "text", "selectOnFocus": "1", "outline": "0", "spellCheck": "0"
//							}, 
//							"funcs": {
//								"jaxId": "1FO470L8010", 
//								"funcs": [
//									{
//										"jaxId": "1FO4KNL1P0", "type": "object", "def": "CdyFunc", "name": "OnUpdate", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4KOTO10", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									},
//									{
//										"jaxId": "1FO4QDB6L0", "type": "object", "def": "CdyFunc", "name": "OnCancel", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4QDPTQ0", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									},
//									{
//										"jaxId": "1FO508HT50", "type": "object", "def": "CdyFunc", "name": "OnInput", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO509UA70", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}, 
//							"subs": []
//						},
//						{
//							"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FO46IHD70", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO46IHD71", 
//								"attrs": {
//									"w": {"type":"int","valText":"20","initVal":0,"info":null,"tip":null}, 
//									"image": {
//										"type": "string", "valText": "\"arrowup.svg\"", "initVal": "", 
//										"info": null, "tip": null
//									}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO46IHD72", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnPre\"", "x": "310", "y": "5", "autoLayout": "Off"
//							}, 
//							"faces": null, 
//							"funcs": {
//								"jaxId": "1FO46IHD74", 
//								"funcs": [
//									{
//										"jaxId": "1FO4KNL1P1", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4KOTO11", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}
//							
//						},
//						{
//							"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FO46IJR70", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO46IJR71", 
//								"attrs": {
//									"w": {"type":"int","valText":"20","initVal":0,"info":null,"tip":null}, 
//									"image": {
//										"type": "string", "valText": "\"arrowdown.svg\"", "initVal": "", 
//										"info": null, "tip": null
//									}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO46IJR72", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnPre\"", "x": "330", "y": "5", "autoLayout": "Off"
//							}, 
//							"faces": null, 
//							"funcs": {
//								"jaxId": "1FO46IJR73", 
//								"funcs": [
//									{
//										"jaxId": "1FO4KNL1P2", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4KOTO12", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}
//							
//						},
//						{
//							"type": "object", "def": "Gear1FNKQC26S0", "jaxId": "1FO46LTD50", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO46LTD51", 
//								"attrs": {
//									"text": {
//										"type": "string", "valText": "\"Case\"", "initVal": "", "info": null, 
//										"tip": null
//									}, 
//									"checked": {"type":"int","valText":"0","initVal":0,"info":null,"tip":null}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO46LTD52", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"CBCase\"", "x": "350", "y": "5", "autoLayout": "Off"
//							}, 
//							"faces": null, 
//							"funcs": {
//								"jaxId": "1FO46LTD54", 
//								"funcs": [
//									{
//										"jaxId": "1FO4NH85I0", "type": "object", "def": "CdyFunc", "name": "OnCheck", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4NI1EK0", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}
//							
//						},
//						{
//							"type": "object", "def": "Gear1FNKQC26S0", "jaxId": "1FO46LUH60", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO46LUH61", 
//								"attrs": {
//									"text": {
//										"type": "string", "valText": "\"Word\"", "initVal": "", "info": null, 
//										"tip": null
//									}, 
//									"checked": {"type":"int","valText":"0","initVal":0,"info":null,"tip":null}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO46LUH70", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"CBWord\"", "x": "420", "y": "5", "autoLayout": "Off"
//							}, 
//							"faces": null, 
//							"funcs": {
//								"jaxId": "1FO46LUH71", 
//								"funcs": [
//									{
//										"jaxId": "1FO4NH85I1", "type": "object", "def": "CdyFunc", "name": "OnCheck", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4NI1EK1", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}
//							
//						},
//						{
//							"type": "object", "def": "Gear1FNKQC26S0", "jaxId": "1FO46N2BJ0", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO46N2BJ1", 
//								"attrs": {
//									"text": {
//										"type": "string", "valText": "\"RegExp\"", "initVal": "", "info": null, 
//										"tip": null
//									}, 
//									"checked": {"type":"int","valText":"0","initVal":0,"info":null,"tip":null}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO46N2BJ2", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"CBRegExp\"", "x": "490", "y": "5", "autoLayout": "Off"
//							}, 
//							"faces": null, 
//							"funcs": {
//								"jaxId": "1FO46N2BJ3", 
//								"funcs": [
//									{
//										"jaxId": "1FO4NH85I2", "type": "object", "def": "CdyFunc", "name": "OnCheck", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4NI1EK2", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}
//							
//						},
//						{
//							"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FO470L803", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO470L804", 
//								"attrs": {
//									"w": {"type":"int","valText":"24","initVal":0,"info":null,"tip":null}, 
//									"image": {
//										"type": "string", "valText": "\"close.svg\"", "initVal": "", "info": null, 
//										"tip": null
//									}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO470L805", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnClose\"", "x": "\"FW-25\"", "y": "3", "autoLayout": "On"
//							}, 
//							"faces": null, 
//							"funcs": {
//								"jaxId": "1FO470L807", 
//								"funcs": [
//									{
//										"jaxId": "1FO49486U0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO494T9K0", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}
//							
//						},
//						{
//							"type": "object", "def": "LayoutGroup", "jaxId": "1FO4V5LUV6", 
//							"attrs": {"locked":"0","id":"\"GPReplace\""}, 
//							"faces": {
//								"jaxId": "1FO4V5LUV7", 
//								"entrys": [
//									{
//										"jaxId": "1FO4V5LUV8", "entryId": "1FO4UUS640", "faceName": "find", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FO4V5LUV9", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FO4V5LUV10", "entryId": "1FO4V0K480", "faceName": "replace", 
//										"attrs": {"display":"Show"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FO4V5LUV11", 
//											"attrs": []
//										}
//										
//									}
//								]
//							}, 
//							"funcs": {"jaxId":"1FO4V5LUV12","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudEdit", "jaxId": "1FO4U3USQ0", 
//									"attrs": {
//										"locked": "0", "id": "\"EdReplace\"", "x": "9", "y": "33", "w": "300", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "bgColor": "[255,255,255,1]", "border": "1", "borderStyle": "Solid", 
//										"borderColor": "[0,0,0,1]", "coner": "0", "text": "\"\"", "font": "\"\"", "color": "[0,0,0]", "fontSize": "16", "placeHolder": "\"Replace text\"", 
//										"inputType": "text", "selectOnFocus": "1", "outline": "0", "spellCheck": "0"
//									}, 
//									"funcs": {
//										"jaxId": "1FO4U3USQ1", 
//										"funcs": [
//											{
//												"jaxId": "1FO4U3USQ2", "type": "object", "def": "CdyFunc", "name": "OnUpdate", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4U3USQ3", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											},
//											{
//												"jaxId": "1FO4U3USQ4", "type": "object", "def": "CdyFunc", "name": "OnCancel", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4U3USQ5", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											},
//											{
//												"jaxId": "1FO509UA71", "type": "object", "def": "CdyFunc", "name": "OnInput", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO509UA72", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}, 
//									"subs": []
//								},
//								{
//									"type": "object", "def": "Gear1FO4U6EE40", "jaxId": "1FO4UPVM20", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4UPVM21", 
//										"attrs": {
//											"w": {"type":"int","valText":"100","initVal":0,"info":null,"tip":null}, 
//											"text": {
//												"type": "string", "valText": "\"Replace\"", "initVal": "", "info": null, 
//												"tip": null
//											}
//										}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4UPVM22", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnReplace\"", "x": "320", "y": "32", "autoLayout": "Off"
//									}, 
//									"faces": null, 
//									"funcs": {
//										"jaxId": "1FO4UPVM24", 
//										"funcs": [
//											{
//												"jaxId": "1FO5A8L0G0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO5A9A4C0", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}
//									
//								},
//								{
//									"type": "object", "def": "Gear1FO4U6EE40", "jaxId": "1FO4USLR90", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4USLR91", 
//										"attrs": {
//											"w": {"type":"int","valText":"100","initVal":0,"info":null,"tip":null}, 
//											"text": {
//												"type": "string", "valText": "\"Replace all\"", "initVal": "", 
//												"info": null, "tip": null
//											}
//										}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO4USLR92", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnReplaceAll\"", "x": "430", "y": "32", "autoLayout": "Off"
//									}, 
//									"faces": null, 
//									"funcs": {
//										"jaxId": "1FO4USLR93", 
//										"funcs": [
//											{
//												"jaxId": "1FO5A8L0G1", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO5A9A4C1", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}
//									
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "Gear1FNKQC26S0", "jaxId": "1FO54J14A0", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO54J14A1", 
//								"attrs": {
//									"text": {
//										"type": "string", "valText": "\"In selection\"", "initVal": "", 
//										"info": null, "tip": null
//									}, 
//									"checked": {"type":"int","valText":"0","initVal":0,"info":null,"tip":null}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO54J14A2", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"CBInSel\"", "x": "540", "y": "32", "autoLayout": "Off"
//							}, 
//							"faces": null, 
//							"funcs": {
//								"jaxId": "1FO54J14B0", 
//								"funcs": [
//									{
//										"jaxId": "1FO54J14B1", "type": "object", "def": "CdyFunc", "name": "OnCheck", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO54J14B2", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}
//							
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FO45K4LM6", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FO45K4LM8","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}