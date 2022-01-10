//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {JAXDataObj} from "/jaxweb/lib/JAXDataObj.js"
/*#{1FCN16S6G0Imports*/
import {CCFile} from "./CCFile.js"
import pathLib from "/@path";
import wordLib from "../lib/ccjshint.js";
/*}#1FCN16S6G0Imports*/
/*DataClass*/
var CCDoc;
let __Proto;

//*****************************************************
/*CCDoc: Data object class*/
//*****************************************************
{
	CCDoc=function(appData, file){
		var jaxEnv,app;
		/*#{1FCN17IQQ0Pre*/
		/*}#1FCN17IQQ0Pre*/
		if(!appData){return;}
		JAXDataObj.call(this,appData.jaxEnv);
		this.appData=appData;
		
		//Data attributes:
		this.path = file.path;
		this.text = "";
		this.editBox = null;
		this.changed = null;
		this.editVsn = 0;
		this.saveVsn = 0;
		this.name = file.name;
		this.disk = file.disk;
		this.diskPath = file.diskPath;
		/*#{1FCN17IQQ0Post*/
		this.app=appData.app;
		this.fileObj=file;
		this.loadPMS=null;
		this.editor=null;
		this.docTab=null;
		this.baseTime=file.modifyTime;
		this.fileExt=file.fileExt;
		this.isBaseVersion=false;
		this.isConflict=false;
		this.compareTgtDoc=null;
		this.compareText=null;
		this.docStates={};
		/*}#1FCN17IQQ0Post*/
	};
	__Proto=CCDoc.prototype={};
	
	
	/*#{1FCN17IQQ0Functions*/
	var curOpenDocs=new Map();
	var activeDocStack=[];
	var hotDoc=null;
	var ccDoc=__Proto;
	
	JAXDataObj.call(CCDoc,null,null,null);

	//------------------------------------------------------------------------
	//New document:
	CCDoc.newDoc=async function(appData,filePath,text=""){
		let app,prj,diskPath,path,file,doc;
		app=appData.app;
		prj=app.appPrj;
		if(!prj || !prj.disk){
			return null;
		}
		file=await prj.disk.newFile(filePath,text);
		if(!file){
			return null;
		}
		doc=curOpenDocs.get(file.diskPath);
		if(doc){
			await doc.loadPMS;
			return doc;
		}
		doc=new CCDoc(appData,file);
		curOpenDocs.set(file.diskPath,doc);
		return await doc.loadDoc();
	};
	
	//------------------------------------------------------------------------
	//Open a doc:
	CCDoc.openDoc=async function(appData,file){
		let doc,path,orgPath;
		if(typeof(file)==="string"){
			let app,prj,diskPath,path,ext;
			path=file;
			app=appData.app;
			prj=app.appPrj;
			if(!prj || !prj.disk){
				return null;
			}
			ext=pathLib.extname(path);
			if(ext===".baseversion"){
				let baseText,orgPath,entry,fakeFile,tgtDoc;
				diskPath=`/${prj.disk.name}/${path}`;
				orgPath=path.substring(0,path.length-ext.length);
				//Load the file's baseVersion content:
				doc=curOpenDocs.get(diskPath);
				if(doc){
					return doc;
				}
				baseText=await prj.disk.diskObj.loadFileBase(orgPath,"utf8");
				baseText=baseText||"";
				entry={
					path:path,
					diskPath:diskPath,
					name:pathLib.basename(path),
					size:baseText.length,
					modifyTime:Date.now()
				};
				tgtDoc=await CCDoc.openDoc(appData,orgPath);
				fakeFile=new CCFile(appData,prj.disk,entry);
				doc=new CCDoc(appData,fakeFile);
				doc.setBaseVersion(tgtDoc,baseText);
				curOpenDocs.set(diskPath,doc);
				return doc;
			}else{
				file=await prj.disk.getFile(path);
			}
		}
		if(file instanceof CCFile){
			doc=curOpenDocs.get(file.diskPath);
			if(doc){
				await doc.loadPMS;
				return doc;
			}
			doc=new CCDoc(appData,file);
			curOpenDocs.set(file.diskPath,doc);
			await doc.loadDoc();
		}
		return doc;
	};
	
	//------------------------------------------------------------------------
	//Close a doc:
	CCDoc.closeDoc=function(doc){
		let idx;
		curOpenDocs.set(doc.diskPath,null);
		idx=activeDocStack.indexOf(doc);
		if(idx>=0){
			activeDocStack.splice(idx,1);
		}
		return activeDocStack[activeDocStack.length-1];
	};
	
	//------------------------------------------------------------------------
	//Active a doc:
	CCDoc.activeDoc=function(doc){
		let idx;
		idx=activeDocStack.indexOf(doc);
		if(idx>=0){
			activeDocStack.splice(idx,1);
		}
		activeDocStack.push(doc);
		hotDoc=doc;
		doc.checkModify();
		CCDoc.emitNotify("ActiveDoc");
	};
	
	//------------------------------------------------------------------------
	//Get the doc that is active for editing
	CCDoc.getHotDoc=function(){
		return hotDoc;
	};
	
	//------------------------------------------------------------------------
	//Get the active-doc-stack
	CCDoc.getActiveDocs=function(){
		return activeDocStack;
	};
	
	//------------------------------------------------------------------------
	//Set doc as confilict mode:
	__Proto.setBaseVersion=function(tgtDoc,baseText){
		this.isBaseVersion=true;
		this.text=baseText;
		this.saveVsn=this.editVsn=0;
		this.compareTgtDoc=tgtDoc;
	};
	
	//------------------------------------------------------------------------
	//Set doc as confilict mode:
	__Proto.setConflict=function(baseDoc){
		let tgtDoc;
		tgtDoc=baseDoc.compareTgtDoc;
		this.baseDoc=baseDoc;
		this.isConflict=true;
		this.compareTgtDoc=tgtDoc;
		this.compareText=tgtDoc.getCodeText();
		this.baseText=baseDoc.getCodeText();
	};
	
	//------------------------------------------------------------------------
	//Load doc text
	ccDoc.loadDoc=function(){
		let self,disk;
		self=this;
		disk=self.disk.diskObj;
		this.loadPMS=disk.loadText(self.path).then(async text=>{
			let path,orgPath;
			self.text=text;
			self.saveVsn=self.editVsn=0;
			this.emitNotify("Load");
			this.scanHint();
			path=this.path;
			orgPath=CCFile.getConflictDocName(path);
			if(orgPath){
				let baseDoc;
				baseDoc=await CCDoc.openDoc(this.appData,orgPath+".baseversion");
				this.setConflict(baseDoc);
			}
			return self;
		});
		return this.loadPMS;
	};
	
	//------------------------------------------------------------------------
	//Reload the doc, if there is an editor assigned, update it too.
	ccDoc.reloadDoc=async function(){
		let disk,text;
		disk=this.disk.diskObj;
		text=await disk.loadText(this.path);
		this.baseTime=await this.fileObj.getModifyTime();
		if(text!==this.text){
			this.text=text||"";
			if(this.editor){
				this.editor.OnDocChange();
				this.editor.markClean();
				this.saveVsn=this.editVsn=this.editor.getEditVsn();
			}else{
				this.saveVsn=this.editVsn=0;
			}
			setTimeout(()=>{
				if(this.docTab){
					this.docTab.showFace("saved");
				}
			},0);
			this.emitNotify("Load");
		}
	};
	
	//------------------------------------------------------------------------
	//Set doc related editor
	ccDoc.assignEditor=function(editor){
		this.editor=editor;
		if(editor){
			if(this.saveVsn===this.editVsn){
				this.saveVsn=this.editVsn=editor.getEditVsn();
			}else{
				this.saveVsn=0;
				this.editVsn=editor.getEditVsn();
			}
		}
	};

	//------------------------------------------------------------------------
	//Set doc's tab
	ccDoc.assignTab=function(tab){
		this.docTab=tab;
	};


	//------------------------------------------------------------------------
	//Get doc text:
	ccDoc.getCodeText=function(frmEditor){
		if(!frmEditor && this.editor){
			this.editor.updateDocCode();
		}
		return this.text;
	};
	
	//------------------------------------------------------------------------
	//Get line count:
	ccDoc.lineCount=function(){
		let editor=this.editor
		if(editor && editor.lineCount){
			return editor.lineCount();
		}
		let lines=this.getCodeText().split("\n");
		return lines.length;
	};

	//------------------------------------------------------------------------
	//Set text:
	ccDoc.setCodeText=function(text,fmEditor){
		let doc=this.compareTgtDoc;
		if(doc){
			this.compareText=text;
		}else{
			this.text=text;
		}
		if(!fmEditor){
			//TODO: Update editor?
		}
		if(this.editor){
			this.editVsn=this.editor.getEditVsn();
		}
	};
	
	//------------------------------------------------------------------------
	//Mark doc changed, call by editor:
	ccDoc.codeChanged=function(version){
		this.editVsn=version||(this.editor?this.editor.getEditVsn():this.editVsn++);
		if(this.docTab){
			if(this.editVsn!==this.saveVsn){
				this.docTab.showFace("changed");
			}else{
				this.docTab.showFace("saved");
			}
		}
	};
	
	//------------------------------------------------------------------------
	//check if the doc has unsaved changes:
	ccDoc.isCodeChanged=function(){
		if(this.editor){
			this.editVsn=this.editor.getEditVsn();
		}
		return this.editVsn!==this.saveVsn;
	};
	
	//------------------------------------------------------------------------
	//Save the file
	ccDoc.saveDoc=async function(){
		let self=this;
		if(self.editor){
			self.editor.updateDocCode();
		}
		let doc=this.compareTgtDoc;
		if(doc){
			//doc.saveDoc();
			await self.disk.diskObj.saveFile(doc.path,this.compareText);
			this.saveVsn=this.editVsn;
			self.baseTime=await this.fileObj.getModifyTime();
			if(self.docTab){
				self.docTab.showFace("saved");
			}
		}else{
			await self.disk.diskObj.saveFile(self.path,self.text);
			this.saveVsn=this.editVsn;
			self.baseTime=await this.fileObj.getModifyTime();
			if(self.docTab){
				self.docTab.showFace("saved");
			}
		}
		this.emitNotify("Save");
		this.scanHint();
	};
	
	//------------------------------------------------------------------------
	//Check if the file is modified outside the editor:
	ccDoc.checkModify=async function(){
		let mTime,reloaded;
		mTime=await this.fileObj.getModifyTime();
		if(mTime>this.baseTime){
			if(this.isCodeChanged()){
				reloaded=await this.app.OnDocModify(this);
				if(!reloaded){
					this.baseTime=mTime;
				}
			}else{
				this.reloadDoc();
				this.app.showStateText(`File "${this.path}" reloaded.`);
			}
		}
	};
	
	//------------------------------------------------------------------------
	//Get state:
	ccDoc.getState=function(codeName){
		return this.docStates[codeName];
	};

	//------------------------------------------------------------------------
	//Set state:
	ccDoc.setState=function(codeName,state){
		this.docStates[codeName]=state;
	}
	
	//************************************************************************
	//:Hint functions:
	//************************************************************************
	{
		let hintMode=null;
		let hintModeState=null;
		let CodeMirror=window.CodeMirror;

		//--------------------------------------------------------------------
		//Scan a file for hint:
		CCDoc.scanCodeHints=async function(codeText,doc){
			let lines,style,word;
			if(!hintModeState){
				hintMode = CodeMirror.getMode(CodeMirror.defaults, "javascript");
				hintModeState=CodeMirror.startState(hintMode);
			}
			lines= CodeMirror.splitLines(codeText);
			for (var i = 0, e = lines.length; i < e; ++i) {
				var stream = new CodeMirror.StringStream(lines[i], null, {
					lookAhead: function(n) { return lines[i + n] },
					baseToken: function() {}
				});
				while (!stream.eol()) {
					style = hintMode.token(stream, hintModeState);
					switch(style){
						case "property":
							word=stream.current();
							wordLib.addWord(word, style,doc);
							break;
						case "variable":
						case "variable-g":
						case "variable-o":
						case "variable-e":
						case "variable-2":
							word=stream.current();
							wordLib.addWord(word, "variable",doc);
							break;
					}
					stream.start = stream.pos;
				}
			}
		};
		
		//--------------------------------------------------------------------
		//Scan a file for hint:
		CCDoc.scanFileHints=async function(disk,path){
			let ext,text,lines;
			ext=pathLib.extname(path);
			if(ext!==".js" && ext!==".mjs"){
				return;
			}
			try{
				text=await disk.loadText(path);
				await CCDoc.scanCodeHints(text);
			}catch(e){
			}
		};
		
		//--------------------------------------------------------------------
		//Scan a live doc for hint:
		ccDoc.scanHint=async function(){
			let codeText;
			codeText=this.getCodeText();
			CCDoc.scanCodeHints(codeText,this);
		};
	}
	/*}#1FCN17IQQ0Functions*/
};

/*#{1FCN16S6G0ExCodes*/
/*}#1FCN16S6G0ExCodes*/
export {CCDoc};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"jaxId": "1FCN16S6G0", "def": "CdyFileDataClass", 
//			"attrs": {"fileName":"\"CCDoc\"","description":"\"\""}, 
//			"classObjs": {
//				"name": "classObjs", "type": "object", "def": "CdyDocObj", "jaxId": "1FCN16S6G1", 
//				"attrs": {
//					"CCDoc": {
//						"type": "object", "def": "CdyDataClass", "name": "CCDoc", "tip": "", "jaxId": "1FCN17IQQ0", 
//						"attrs": {}, 
//						"args": {
//							"name": "Arguments", "type": "object", "def": "ClassObjArgObj", "jaxId": "1FCN1JPUA0", 
//							"attrs": {
//								"superClass": "\"JAXDataObj\"", 
//								"file": {
//									"name": "file", "type": "object", "def": "CdyAttrMockupObj", "mockupDef": "MockupRef1FBS4FICA0", "mockupName": "jsfile", "tip": ""
//								}
//							}
//						}, 
//						"pptsObj": {
//							"name": "Properties", "type": "object", "def": "ClassObjPptObj", "jaxId": "1FCN1JPUA1", 
//							"attrs": {
//								"path": {
//									"type": "string", "valText": "#file.path", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"text": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"editBox": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}, 
//								"changed": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}, 
//								"editVsn": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"saveVsn": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"name": {
//									"type": "string", "valText": "#file.name", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"disk": {
//									"type": "auto", "valText": "#file.disk", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"diskPath": {
//									"type": "auto", "valText": "#file.diskPath", "initVal": "", "info": null, 
//									"tip": null
//								}
//							}
//						}, 
//						"funcsObj": {"jaxId":"1FCN1JPUB0","funcs":[]}, 
//						"mockObjs": {
//							"name": "Mockups", "type": "object", "def": "CdyDocObj", "jaxId": "1FCN1JPUB1", 
//							"attrs": {
//								"doc": {
//									"type": "object", "def": "MockupRef1FCN17IQQ0", "jaxId": "1FCN1JPUB2", 
//									"attrs": {
//										"path": {
//											"type": "string", "valText": "\"gear/lineFolder.js\"", "initVal": "", 
//											"info": null, "tip": null
//										}, 
//										"text": {
//											"type": "string", "valText": "\"import {JAXEnv} from \\\"/jaxweb/lib/JAXEnv.js\\\"\"", "initVal": "", 
//											"info": null, "tip": null
//										}, 
//										"editBox": {
//											"type": "auto", "valText": "null", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"changed": {"type":"auto","valText":"0","initVal":"","info":null,"tip":null}, 
//										"editVsn": {"type":"int","valText":"11","initVal":"","info":null,"tip":null}, 
//										"saveVsn": {"type":"int","valText":"11","initVal":"","info":null,"tip":null}, 
//										"name": {
//											"type": "string", "valText": "\"lineFolder.js\"", "initVal": "", 
//											"info": null, "tip": null
//										}, 
//										"disk": {
//											"type": "auto", "valText": "null", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"diskPath": {
//											"type": "auto", "valText": "\"ccedit:gear/lineFolder.js\"", "initVal": "", 
//											"info": null, "tip": null
//										}
//									}
//								}
//							}
//						}
//					}
//				}
//			}
//		}/*Doc}#*/;
//	}