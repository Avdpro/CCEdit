import {JAXDisk} from "/jaxweb/lib/JAXDisk.js";

//****************************************************************************
//:FindFile: File entry of found items:
//****************************************************************************
let FindFile=function(path){
	this.path=path;
	this.lines=[];
};
//****************************************************************************
//:FindLine: Line entry of found items:
//****************************************************************************
let FindLine=function(file,lineIdx,lineText){
	this.file=file;
	this.line=lineIdx;
	this.text=lineText;
};

//****************************************************************************
//:FindInFiles: Find text in file:
//****************************************************************************
let FindInFiles=async function(disk,text,options,callback){
	let useCase,useWord,useRegExp,filterText,filters,files;
	let regExpCheck=null;
	function checkFile(path){
		let i,n;
		if(!filters)
			return true;
		n=filters.length;
		for(i=0;i<n;i++){
			if(path.endsWith(filters[i])){
				return true;
			}
		}
		return false;
	}
	function checkLine(lineText){
		if(useRegExp){
			//TODO: Support regEx:
		}else{
			if(!useCase){
				lineText=lineText.toLowerCase();
			}
			if(lineText.indexOf(text)>=0){
				return true;
			}
		}
		return false;
	}
	//Read options:
	useCase=options.useCase||false;
	useWord=options.useWord||false;
	useRegExp=options.useRegExp||false;
	if(useRegExp){
		regExpCheck=new RegExp(text);
	}else if(!useCase){
		text=text.toLowerCase();
	}
	//Build filter:
	filterText=options.filter||"";
	if(filterText){
		let i,n,item;
		filters=filterText.split(";");
		n=filters.length;
		for(i=0;i<n;i++){
			item=filters[i];
			if(item.startsWith("*.")){
				item=item.substring(1);
				filters[i]=item;
			}else if(item[0]!=="."){
				item="."+item;
				filters[i]=item;
			}
		}
	}else{
		filters=null;
	}
	//2nd, check file entries:
	{
		let i,n,filePath,fileText;
		let lines,l,ln,lineText;
		let file,line;
		files=[];
		let allItems=await disk.getAllItemPath();
		n=allItems.length;
		for(i=0;i<n;i++){
			filePath=allItems[i];
			if(!checkFile(filePath)){
				continue;
			}
			fileText=await disk.loadText(filePath);
			if(!fileText){
				continue;
			}
			file=null;
			lines=fileText.split("\n");
			ln=lines.length;
			for(l=0;l<ln;l++){
				lineText=lines[l];
				if(checkLine(lineText)){
					if(!file){
						file=new FindFile(filePath);
						files.push(file);
					}
					line=new FindLine(file,l+1,lineText);
					file.lines.push(line);
					//callback&&callback(line);
				}
			}
			if(file){
				callback&&callback(file);
			}
		}
	}
	return files;
};


export {FindInFiles,FindFile,FindLine};