//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FMU7UMV50Imports*/
import {appData} from "../appData.js";
import {fsPromises as fsp} from "/@fs";
import {CCDoc} from "../data/CCDoc.js";
import pathLib from "/@path";
import {infoLine} from "../gear/infoLine.js";
/*}#1FMU7UMV50Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var TbxMarks=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FMU7UMV51ExLocal*/
	let curDoc=null;
	let mode=null;
	let modState=null;
	let CodeMirror=window.CodeMirror;
	/*}#1FMU7UMV51ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FMU7UMV53ExState*/
		/*}#1FMU7UMV53ExState*/
	},);
	/*#{1FMU7UMV51PostState*/
	/*}#1FMU7UMV51PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FMU7UMV51", 
		"locked": 0, "x": 1, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, 
		items: [
			{
				"type": "text", "jaxId": "1FO1L2ITE1", "x": 10, "y": 10, "w": 357, "h": 20, "text": "Marks and Todos:", "color": [0,0,0], "alignV": 1, "fontSize": 16
			},
			{
				"type": "scroll", "jaxId": "1FO1L93H00", "x": 10, "y": 35, "w": "FW-20", "h": "FH-45", "column": 1, "autoLayout": 1, "id": "ListBox", 
				subs:[
				
				]
			}
		],
		faces: {
		},
		/*#{1FMU7UMV51ExAttrs*/
		/*}#1FMU7UMV51ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FMU7UMV51CreateFunc*/
			app.onNotify("FocusDoc",()=>{
				self.showUI();
			},self);
			/*}#1FMU7UMV51CreateFunc*/
		
		}
	};
	/*#{1FMU7UMV51ExViewDef*/
	let doParse=()=>{
		self.doParse(1);
	};
	//------------------------------------------------------------------------
	//Show UI:
	cssVO.showUI=function(vo){
		let doc;
		doc=CCDoc.getHotDoc();
		if(curDoc===doc){
			return;
		}
		if(curDoc){
			curDoc.offNotify("Save",doParse,self);
		}
		curDoc=doc;
		curDoc.onNotify("Save",doParse,self);
		curDoc.onNotify("Load",doParse,self);
		self.doParse(1);
	};
	
	//------------------------------------------------------------------------
	//Do parse:
	cssVO.doParse=async function(){
		let lines,source,style,cnt,listBox,info,divMD;
		listBox=this.ListBox;
		listBox.clear();
		if(!modState){
			mode = CodeMirror.getMode(CodeMirror.defaults, "javascript");
			modState=CodeMirror.startState(mode);
		}
		cnt=0;
		source=curDoc.getCodeText();
		lines= CodeMirror.splitLines(source);
		for (var i = 0, e = lines.length; i < e; ++i) {
			var stream = new CodeMirror.StringStream(lines[i], null, {
				lookAhead: function(n) { return lines[i + n] },
				baseToken: function() {}
			});
			while (!stream.eol()) {
				style = mode.token(stream, modState);
				if(style==="todo"){
					info=stream.current().trim();
					info=info.substring(2).trim();
					listBox.addSub({
						type:infoLine(app,0,"todo.svg",`${info}`),line:i,
						OnClick:function(){
							app.openFile(curDoc.path,this.line+1);
						}
					});
					cnt++;
				}else if(style==="bookmark"){
					let pos;
					info=stream.current().trim();
					info=info.substring(3).trim();
					pos=info.indexOf(":");
					if(pos>0){
						info=info.substring(0,pos).trim();
					}
					listBox.addSub({
						type:infoLine(app,0,"mark.svg",`${info}`),line:i,
						OnClick:function(){
							app.openFile(curDoc.path,this.line+1);
						}
					});
					cnt++;
				}
				stream.start = stream.pos;
			}
		}
		if(cnt<5){
			divMD={
				type:"hud",w:"(FW-20)*1.3",h:300,autoLayout:1,alpha:cnt>=2?0.5:1,scale:1/1.3
			};
			[,divMD]=listBox.addSub(divMD);
			let path=pathLib.join(app.dirPath,"marks.md");
			try{
				let text=await fsp.readFile(path,"utf8");
				text=markdownit().render(text);
				divMD.webObj.innerHTML=text;
			}catch(err){
			}
		}
	};
	
	//------------------------------------------------------------------------
	//Check if a doc is compatible with a doc:
	cssVO.workWithDoc=function(doc){
		let ext;
		ext=pathLib.extname(doc.path);
		if(ext!==".js" && ext!==".mjs"){
			return 0;
		}
		return 50;
	};
	
	/*}#1FMU7UMV51ExViewDef*/
	
	return cssVO;
};

/*#{1FMU7UMV50PostCode*/
//:Register tool box:
/*appData.regToolBox({
	codeName:"Marks",
	name:"Marks and Todos",
	createUI:TbxMarks,
	icon:"assets/mark.svg",
	checkDoc(doc){
		let ext;
		ext=pathLib.extname(doc.path).toLowerCase();
		switch(ext){
			case ".mjs":
			case ".js":
				return 50;
		}
		return 0;
	}
});*/
/*}#1FMU7UMV50PostCode*/

export {TbxMarks};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "TbxMarks.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FMU7UMV50", 
//			"attrs": {
//				"viewName": "\"TbxMarks\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FMU7UMV51", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMU7UMV52", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FMU7UMV53", 
//						"attrs": {}, "funcs": {"jaxId":"1FMU7UMV54","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "1", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "autoLayout": "On"
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FMU7UMV56","entrys":[]}, 
//					"funcs": {"jaxId":"1FMU7UMV57","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "HudTxt", "jaxId": "1FO1L2ITE1", 
//							"attrs": {
//								"locked": "1", "id": "\"\"", "x": "10", "y": "10", "w": "357", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Marks and Todos:\"", "color": "[0,0,0]", 
//								"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "16", 
//								"bold": "0", "italic": "0", "underline": "0"
//							}, 
//							"funcs": {"jaxId":"1FO1L2ITE3","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "HudScrollBox", "jaxId": "1FO1L93H00", 
//							"attrs": {
//								"locked": "0", "x": "10", "y": "35", "w": "\"FW-20\"", "h": "\"FH-45\"", "column": "1", "cursor": "\"\"", "zIndex": "0", "autoLayout": "On", "id": "\"ListBox\""
//							}, 
//							"funcs": {"jaxId":"1FO1L93H02","funcs":[]}, "subGroup": [], "subs": []
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FMU7UMV58", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FMU7UMV510","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}