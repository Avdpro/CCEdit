var CCWordLibCatalog,CCWordLib;
var wordLib,jaxApp;
//****************************************************************************
//:CCWordLib: The word regiser and look up lib:
//****************************************************************************
{
	const chCodeA="A".charCodeAt(0);
	const chCodeZ="Z".charCodeAt(0);
	const chCodea="a".charCodeAt(0);
	const chCodez="z".charCodeAt(0);
	const chCode0="0".charCodeAt(0);
	const chCode9="9".charCodeAt(0);
	
	
	function charCode(char){
		let ch=char?char.charCodeAt(0):0;
		if(ch>=chCodeA && ch<=chCodeZ){
			return ch-chCodeA;
		}else if(ch>=chCodea && ch<=chCodez){
			return ch-chCodea;
		}else if(ch>=chCode0 && ch<=chCode9){
			return ch-chCode0+26;
		}else{
			return 36;
		}
	}
	
	function getCharCodeType(ch){
		if(ch>=chCodeA && ch<=chCodeZ){
			return "A";
		}else if(ch>=chCodea && ch<=chCodez){
			return "a";
		}else if(ch>=chCode0 && ch<=chCode9){
			return "0";
		}else{
			return "_";
		}
	}
	
	function idxText(text){
		let ch1=charCode(text[0]);
		let ch2=charCode(text[1]);
		return ch1*39+ch2;
	}
	
	function camelText(text){
		let i,n,ch,curType,type,result,curLength,lastCh;
		n=text.length;
		ch=text.charCodeAt(0);
		curType=getCharCodeType(ch);
		result=text[0];
		curLength=1;
		for(i=1;i<n;i++){
			lastCh=ch;
			ch=text.charCodeAt(i);
			type=getCharCodeType(ch);
			if(type!==curType){
				if(curType==="A" && type==="a"){
					if(curLength>1){
						result+=lastCh;
					}
				}else{
					result+=text[i];
				}
				curLength=1;
			}else{
				curLength+=1;
			}
		}
		return result.toLowerCase();
	}
	
	//------------------------------------------------------------------------
	//Lib for one catalog
	CCWordLibCatalog=function(name){
		let theTable=[];
		let theMap=new Map();
		let words2Exec=[];
		let execTimer=null;
		let tempSet=new Set();
		let allText=[];
		this.name=name;
		
		for(let i=0;i<39*39;i++){
			theTable[i]=[];
		}
		
		function execOneWord(){
			let stub,word,i,n,ch1,ch2,code;
			tempSet.clear();
			execTimer=null;
			stub=words2Exec.shift();
			if(!stub){
				return;
			}
			word=stub.text;
			tempSet.add(stub.textIdx);
			n=word.length;
			for(i=1;i<n-1;i++){
				ch1=word[i];
				ch2=word[i+1];
				code=charCode(ch1)*39+charCode(ch2);
				if(!tempSet.has(code)){
					theTable[code].push(stub);
					tempSet.add(code);
				}
			}
			word=camelText(word);
			stub.camel=word;
			n=word.length;
			for(i=0;i<n-1;i++){
				ch1=word[i];
				ch2=word[i+1];
				code=charCode(ch1)*39+charCode(ch2);
				if(!tempSet.has(code)){
					theTable[code].push(stub);
					tempSet.add(code);
				}
			}
			execTimer=setTimeout(execOneWord,0);
		}

		this.addWord=function(text,doc=null){
			let textIdx,list,stub;
			if(!text){
				return;
			}
			stub=theMap.has(text);
			if(stub){
				return;
			}
			textIdx=idxText(text);
			stub={
				text:text,
				camel:null,
				textIdx:textIdx
			};
			theMap.set(text,stub);
			list=theTable[textIdx];
			list.push(stub);
			allText.push(text);
			words2Exec.push(stub);
			if(!execTimer){
				execTimer=setTimeout(execOneWord,0);
			}
		};
		
		this.getHints=function(lead,results){
			let textIdx,text,camel,list,item;
			if(lead===""){
				if(allText.length>1024){
					return false;
				}
				for(text of allText){
					results.push(text);
				}
			}else if(lead.length===1){
				let start=charCode(lead[0])*39;
				let end=start+36;
				for(let t=start;t<end;t++){
					list=theTable[t];
					for(item of list){
						text=item.text;
						camel=item.camel;
						if(text.indexOf(lead)>=0){
							results.push(text);
						}else if(camel && camel.indexOf(lead)>=0){
							results.push(text);
						}
					}
					if(results.length>1024){
						return false;
					}
				}
			}else if(lead.length>1){
				textIdx=idxText(lead);
				list=theTable[textIdx];
				for(item of list){
					text=item.text;
					camel=item.camel;
					if(text.indexOf(lead)>=0){
						results.push(text);
					}else if(camel && camel.indexOf(lead)>=0){
						results.push(text);
					}
				}
			}
			return true;
		};
		
	};
	
	//------------------------------------------------------------------------
	//Constructor:
	CCWordLib=function(){
		let catalogs={};
		
		//--------------------------------------------------------------------
		//Add a word into lib:
		this.addWord=function(text,type,doc){
			let catalog;
			type=type||"_";
			if(type==="variable" && doc){
				catalog=doc.getState("VarWordLib");
				if(!catalog){
					catalog=new CCWordLibCatalog(type);
					doc.setState("VarWordLib",catalog);
				}
				catalog.addWord(text,doc);
				return;
			}
			catalog=catalogs[type];
			if(!catalog){
				catalog=new CCWordLibCatalog(type);
				catalogs[type]=catalog;
			}
			catalog.addWord(text,doc);
		};
		
		//--------------------------------------------------------------------
		//Add a array of words into lib:
		this.addWordsArray=function(list,type,doc){
			let catalog;
			type=type||"_";
			catalog=catalogs[type];
			if(!catalog){
				catalog=new CCWordLibCatalog(type);
				catalogs[type]=catalog;
			}
			for(let text of list){
				catalog.addWord(text,doc);
			}
		};
		

		//--------------------------------------------------------------------
		//Get hints from lead:
		this.getHints=function(lead,type,list=null){
			let catalog,results;
			type=type||"_";
			catalog=catalogs[type];
			if(!catalog){
				return [];
			}
			results=list||[];
			if(!catalog.getHints(lead,results)){
				return null;
			}
			return results;
		};
	};
	
	wordLib=new CCWordLib();
}

//****************************************************************************
//:hintJS: The CodeMirror hint call-entry
//****************************************************************************
{
	var Pos = CodeMirror.Pos;
	var stringProps = ("charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight " +
					   "toUpperCase toLowerCase split concat match replace search").split(" ");
	var arrayProps = ("length concat join splice push pop shift unshift slice reverse sort indexOf " +
					  "lastIndexOf every some filter forEach map reduce reduceRight ").split(" ");
	var funcProps = "prototype apply call bind".split(" ");
	var javascriptKeywords = ("break case catch class const continue debugger default delete do else export extends false finally for function " +
							  "if in import instanceof new null return super switch this throw true try typeof var void while with yield").split(" ");
	
	function getCompletions(doc,token, context, keywords, options) {
		let list,docVars;
		var found = [], start = token.string, global = options && options.globalScope || window;
		if (context && context.length) {
			if(!wordLib.getHints(start,"property",found)){
				//TODO: code this:
				if(!jaxApp){
					jaxApp=window.jaxApp;
				}
				jaxApp.showStateText("Hint need more words clue...");
				found.splice(0);
			}
		} else {
			wordLib.getHints(start,"keyword",found);
			docVars=doc.getState("VarWordLib");
			if(docVars){
				list=docVars.getHints(start,found);
			}
		}
		return found.sort();
	}

	function scriptHint(editor, keywords, getToken, options) {
		// Find the token at the cursor
		var cur = editor.getCursor(), token = getToken(editor, cur);
		var editUI=editor.uiCCEdit;
		var doc=editUI.cdyDoc;
		var context;
		if (/\b(?:string|comment)\b/.test(token.type)) return;
		var innerMode = CodeMirror.innerMode(editor.getMode(), token.state);
		if (innerMode.mode.helperType === "json") return;
		token.state = innerMode.state;

		// If it's not a 'word-style' token, ignore the token.
		if (!/^[\w$_]*$/.test(token.string)) {
			token = {start: cur.ch, end: cur.ch, string: "", state: token.state,
					 type: token.string === "." ? "property" : null};
		} else if (token.end > cur.ch) {
			token.end = cur.ch;
			token.string = token.string.slice(0, cur.ch - token.start);
		}

		var tprop = token;
		// If it is a property, find out what it is a property of.
		while (tprop.type === "property") {
			tprop = getToken(editor, Pos(cur.line, tprop.start));
			if (tprop.string !== ".") return;
			tprop = getToken(editor, Pos(cur.line, tprop.start));
			if (!context) context = [];
			context.push(tprop);
		}
		return {list: getCompletions(doc,token, context, keywords, options),
				from: Pos(cur.line, token.start),
				to: Pos(cur.line, token.end)};
	}
	
	function javascriptHint(editor, options) {
		return scriptHint(editor, javascriptKeywords,
						  function (e, cur) {return e.getTokenAt(cur);},
						  options);
	}
	CodeMirror.registerHelper("hint", "javascript", javascriptHint);
	
	wordLib.addWordsArray(stringProps,"property");
	wordLib.addWordsArray(arrayProps,"property");
	wordLib.addWordsArray(funcProps,"property");
	wordLib.addWordsArray(javascriptKeywords,"keyword");
}

export default wordLib;