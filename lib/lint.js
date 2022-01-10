import pathLib from "/@path";

//----------------------------------------------------------------------------
//Lint result for a doc:
let LintResult=function(doc,result){
	this.doc=doc;
	this.result=result;
	this.time=Date.now();
};

//----------------------------------------------------------------------------
//Lint a doc based on it's type:
let LintDoc=async function(doc){
	let path,ext;
	path=doc.path;
	ext=pathLib.extname(path).toLowerCase();
	switch(ext){
		case ".js":
		case ".mjs":
			return await HintJavascript(doc);
		case ".json":
			return await LintJSON(doc);
		case ".html":
		case ".htm":
			return await HintHTML(doc);
	}
};

//----------------------------------------------------------------------------
//Lint whole project on disk:
let LintPrj=async function(disk,callback){
	let files=[];
	//2nd, check file entries:
	{
		let i,n,filePath,fileText,ext;
		let lines,l,ln,lineText;
		let file,line,result;
		files=[];
		let allItems=await disk.getAllItemPath();
		n=allItems.length;
		for(i=0;i<n;i++){
			filePath=allItems[i];
			ext=pathLib.extname(filePath).toLowerCase();
			fileText=await disk.loadText(filePath);
			if(!fileText){
				continue;
			}
			file=null;
			result=null;
			switch(ext){
				case ".js":
				case ".mjs":
					result=(await HintJavascript(fileText,filePath)).result;
					break;
				case ".json":
					result=(await LintJSON(fileText,filePath)).result;
					break;
				case ".html":
				case ".htm":
					result=(await HintHTML(fileText,filePath)).result;
					break;
			}
			if(result && (result.errors.length>0 || result.warnings.length>0)){
				file={
					path:filePath,
					errors:result.errors,
					warnings:result.warnings,
				};
				callback&&callback(file);
				files.push(file);
			}
		}
	}
	return files;
};

//----------------------------------------------------------------------------
//JSHint a javascript file:
let HintJavascript=async function(doc,path){
	let mod,JSHINT;
	let source,globals,options,result;
	let slist,i,n,dwlist,delist,item;
	mod=await import("/@jshint");
	JSHINT=mod.default;
	globals={"jaxApp":false,"crypto":false};
	options={browser:true,esversion:8,eqeqeq:true,latedef:false,undef:true,unused:true};
	if(typeof(doc)==="string"){
		source=doc;
		doc=path;
	}else{
		source=doc.getCodeText(doc);
	}
	JSHINT(source, options, globals);
	slist=JSHINT.errors;
	dwlist=[];
	delist=[];
	n=slist.length;
	for(i=0;i<n;i++){
		item=slist[i];
		if(item.code && item.code.startsWith("W")){
			dwlist.push({doc:doc,line:item.line,message:item.reason,type:"warning"});
		}else{
			delist.push({doc:doc,line:item.line,message:item.reason,type:"error"});
		}
	}
	result={
		doc:doc,
		path:path||doc.path,
		errors:delist,
		warnings:dwlist
	};
	return new LintResult(doc,result);
};

//----------------------------------------------------------------------------
//jsonlint a json file:
let LintJSON=async function(doc,path){
	let mod,jsonlint;
	let source,result;
	let delist;

	if(typeof(doc)==="string"){
		source=doc;
		doc=path;
	}else{
		source=doc.getCodeText(doc);
	}

	mod=await import("/@jsonlint");
	jsonlint=mod.default;
	jsonlint=jsonlint.parser||jsonlint;
	jsonlint.parseError=function(str,hash){
		var loc;
		loc=str.lastIndexOf("\n");
		str=str.substring(loc+1);
		loc=hash.loc;
		delist.push({doc:doc,line:loc.first_line,chr:loc.first_column,message:str,type:"error"});
	};
	delist=[];
	try{
		jsonlint.parse(source);
	}catch(error){}
	result={
		doc:doc,
		path:path||doc.path,
		errors:delist,
		warnings:[]
	};
	return new LintResult(doc,result);
};

//----------------------------------------------------------------------------
//htmlHint a html file:
let HintHTML=async function(doc,path){
	let mod,HTMLHint;
	let source,result;
	let delist,dwlist;
	
	let defaultRules = {
		"tagname-lowercase": true,
		"attr-lowercase": true,
		"attr-value-double-quotes": true,
		"doctype-first": false,
		"tag-pair": true,
		"spec-char-escape": true,
		"id-unique": true,
		"src-not-empty": true,
		"attr-no-duplication": true
	};
	
	if(typeof(doc)==="string"){
		source=doc;
		doc=path;
	}else{
		source=doc.getCodeText(doc);
	}
	
	mod=await import("/@htmlhint");
	HTMLHint=mod.default;
	if(HTMLHint && !HTMLHint.verify && HTMLHint.HTMLHint){
		HTMLHint=HTMLHint.HTMLHint;
	}
	
	delist=[];
	dwlist=[];

	let messages = HTMLHint.verify(source, defaultRules);
	for (var i = 0; i < messages.length; i++) {
		var msg = messages[i];
		if(msg.type==="error"){
			delist.push({
				doc:doc,line:msg.line,ch:msg.col,message:msg.message,type:"error"
			});
		}else{
			dwlist.push({
				doc:doc,line:msg.line,ch:msg.col,message:msg.message,type:"warning"
			});
		}
	}
	result={
		doc:doc,
		path:path||doc.path,
		errors:delist,
		warnings:dwlist
	};
	return new LintResult(doc,result);
};

export default LintDoc;
export {LintResult,LintDoc,LintPrj,HintJavascript,LintJSON,HintHTML};