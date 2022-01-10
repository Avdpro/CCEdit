//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {JAXDataObj} from "/jaxweb/lib/JAXDataObj.js"
/*#{1FBS3RCE80Imports*/
import {JAXDisk} from "/jaxweb/lib/JAXDisk.js";
import {CCFolder} from "./CCFolder.js"
import {CCFile} from "./CCFile.js"
/*}#1FBS3RCE80Imports*/
/*DataClass*/
var CCDisk;
let __Proto;

//*****************************************************
/*CCDisk: Data object class*/
//*****************************************************
{
	CCDisk=function(appData, diskObj, diskName){
		var jaxEnv,app;
		/*#{1FBS4M8GE0Pre*/
		/*}#1FBS4M8GE0Pre*/
		if(!appData){return;}
		JAXDataObj.call(this,appData.jaxEnv);
		this.appData=appData;
		
		//Data attributes:
		this.type = "disk";
		this.name = "";
		this.cloudId = "";
		this.baseVersion = 0;
		this.modified = 0;
		this.modifiedTime = 0;
		/*#{1FBS4M8GE0Post*/
		this.diskObj=diskObj;
		this.name=diskName;
		this.path="";
		this.diskPath="/"+diskName;
		/*}#1FBS4M8GE0Post*/
	};
	__Proto=CCDisk.prototype={};
	
	//函数
	__Proto.getSubFolders=function(path){
		/*#{1FBTJMJG80Code*/
		let disk=this.diskObj;
		path=path?path:"";
		return disk.getEntries(path).then(list => {
			var dirList=[],item;
			for(item of list){
				item.disk=disk;
				item.path=path?(path+"/"+item.name):item.name;
				item.diskPath="/"+disk.name+"/"+item.path;
				if(item.dir){
					dirList.push(new CCFolder(app.appData,this,item));
				}
			}
			dirList.sort((v1,v2)=>{
				return v1.name>v2.name?1:(v1.name<v2.name?-1:0)
			});
			return dirList;
		});
		/*}#1FBTJMJG80Code*/
	};
	
	//函数
	__Proto.getSubItems=function(path, fileSet){
		/*#{1FBS4QOIB3Code*/
		let disk=this.diskObj;
		//处理单参数fileSet:
		if(path instanceof Set){
			fileSet=path;
			path="";
		}
		path=path?path:"";
		return disk.getEntries(path).then(list => {
			var dirList=[],item;
			for(item of list){
				if(fileSet && !fileSet.has(item.name)){
					continue;
				}
				item.disk=disk;
				item.path=path?(path+"/"+item.name):item.name;
				item.diskPath="/"+disk.name+"/"+item.path;
				if(item.dir){
					dirList.push(new CCFolder(app.appData,this,item));
				}else{
					dirList.push(new CCFile(app.appData,this,item));
				}
			}
			dirList.sort((v1,v2)=>{
				if(v1.isFolder && !v2.isFolder) return -1;
				if(!v1.isFolder && v2.isFolder) return 1;
				return v1.name>v2.name?1:(v1.name<v2.name?-1:0)
			});
			return dirList;
		});
		/*}#1FBS4QOIB3Code*/
	};
	
	//函数
	__Proto.checkInDisk=function(){
		/*#{1FBS4QOIC1Code*/
		/*}#1FBS4QOIC1Code*/
	};
	
	//函数
	__Proto.updateDisk=function(){
		/*#{1FBS4QOIC3Code*/
		/*}#1FBS4QOIC3Code*/
	};
	
	//函数
	__Proto.commitDisk=function(info){
		/*#{1FBS4QOIC5Code*/
		/*}#1FBS4QOIC5Code*/
	};
	
	
	/*#{1FBS4M8GE0Functions*/
	let diskMap={};
	let app=null;
	
	//------------------------------------------------------------------------
	//Init system
	CCDisk.init=function(app_){
		if(app){
			throw "Disk system is already inited!";
		}
		app=app_;
		return JAXDisk.init();
	};
	
	//------------------------------------------------------------------------
	//Get all disks in system.
	CCDisk.getDiskList=function(){
		return new Promise((resolve, reject) => {
			var disks,name,list=[];
			disks=JAXDisk.getDisks();
			for(name of disks){
				list.push(name);
			}
			list.sort((a,b)=>{
				if(a[0]==="-" && b[0]!=="-"){
					return 1;
				}else if(a[0]!=="-" && b[0]==="-"){
					return -1;
				}
				if(a>b){
					return 1;
				}else if(a<b){
					return -1;
				}else{
					return 0;
				}
			});
			resolve(list);
		});
	};
	
	//------------------------------------------------------------------------
	//Get CCDisk instance by name
	CCDisk.getDisk=async function(name){
		let disk,diskObj;
		disk=diskMap[name];
		if(disk){
			return disk;
		}
		diskObj=await JAXDisk.openDisk(name,0);
		if(diskObj){
			disk=new CCDisk(app.appData,diskObj,name);
			diskMap[name] = disk;
			return disk;
		}
		return null;
	};
	
	//------------------------------------------------------------------------
	//Get a I/O object based by fullPath
	CCDisk.getEntry=async function(diskPath){
		let pts,diskName,path,ccdisk,disk,item;
		if(diskPath.startsWith("/")){
			pts=diskPath.split("/");
			diskName=pts[1];
			pts=pts.slice(2);
			path=pts.join("/");
		}else{
			throw new Error("CCDisk.getEntry: illegal path: "+diskPath);
		}
		if(!diskName){
			return {name:"/",dir:1,root:1};
		}
		ccdisk=await CCDisk.getDisk(diskName);
		if(!ccdisk){
			return null;
		}
		disk=ccdisk.diskObj;
		if(!disk){
			return null;
		}
		item=await disk.getEntry(path);
		if(item){
			item.path=path;
			item.diskPath=diskPath;
			if(item.disk){
				//Disk:
				return new CCDisk(app.appData,ccdisk,item.name);
			}else if(item.dir){
				//Dir:
				return new CCFolder(app.appData,ccdisk,item);
			}
			//File:
			return new CCFile(app.appData,ccdisk,item);
		}
		return null;
	};

	//------------------------------------------------------------------------
	//Get a JAXDisk item entry based by fullPath
	CCDisk.getPathEntry=async function(diskPath){
		let pts,diskName,path,disk,item;
		if(diskPath.startsWith("/")){
			pts=diskPath.split("/");
			diskName=pts[1];
			pts=pts.slice(2);
			path=pts.join("/");
		}else{
			throw new Error("CCDisk.getEntry: illegal path: "+diskPath);
		}
		if(!diskName){
			return {name:"/",dir:1,root:1};
		}
		disk=await JAXDisk.openDisk(diskName,0);
		if(!disk){
			return null;
		}
		item=await disk.getEntry(path);
		return item;
	};

	//------------------------------------------------------------------------
	//Get a CCFile instance by path:
	__Proto.getFile=async function(path){
		let item;
		item=await this.diskObj.getEntry(path);
		if(!item){
			return null;
		}
		if(item.dir){
			return null;
		}
		item.disk=this.diskObj;
		item.path=path;
		item.diskPath="/"+this.name+"/"+path;
		return new CCFile(app.appData,this,item);
	};

	//------------------------------------------------------------------------
	//Create a new file in disk, return a CCFile:
	__Proto.newFile=async function(path,data){
		let item;
		
		item=await this.diskObj.getEntry(path);
		if(item){
			return null;
		}
		await this.diskObj.saveFile(path,data);
		item=await this.diskObj.getEntry(path);
		item.disk=this.diskObj;
		item.path=path;
		item.diskPath="/"+this.name+"/"+path;
		return new CCFile(app.appData,this,item);
	};

	//------------------------------------------------------------------------
	//Delete a set of items (files)
	__Proto.delItems=function(files){
		let pList,disk,i,n,path;
		disk=this.diskObj;
		pList=[];
		n=files.length;
		for(i=0;i<n;i++){
			path=files[i];
			pList.push(disk.del(path));
		}
		return Promise.allSettled(pList);
	};

	//------------------------------------------------------------------------
	//Get disk's version-contrl versionIdx:
	__Proto.getVersionIdx=async function(){
		let idx;
		idx=await JAXDisk.getDiskAttr(this.name,"versionIdx");
		this.versionIdx=idx>0?idx:0;
		return this.versionIdx;
	};
	
	/*}#1FBS4M8GE0Functions*/
};

/*#{1FBS3RCE80ExCodes*/
/*}#1FBS3RCE80ExCodes*/
export {CCDisk};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"jaxId": "1FBS3RCE80", "def": "CdyFileDataClass", 
//			"attrs": {"fileName":"\"CCDisk\"","description":"\"\""}, 
//			"classObjs": {
//				"name": "classObjs", "type": "object", "def": "CdyDocObj", "jaxId": "1FBS3RCE81", 
//				"attrs": {
//					"CCDisk": {
//						"type": "object", "def": "CdyDataClass", "name": "CCDisk", "tip": "", "jaxId": "1FBS4M8GE0", 
//						"attrs": {}, 
//						"args": {
//							"name": "Arguments", "type": "object", "def": "ClassObjArgObj", "jaxId": "1FBS4QOIB0", 
//							"attrs": {
//								"superClass": "\"JAXDataObj\"", 
//								"diskObj": {"type":"auto","valText":"null","info":null,"tip":null}, 
//								"diskName": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}
//							}
//						}, 
//						"pptsObj": {
//							"name": "Properties", "type": "object", "def": "ClassObjPptObj", "jaxId": "1FBS4QOIB1", 
//							"attrs": {
//								"type": {
//									"type": "string", "valText": "\"disk\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"name": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"cloudId": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"baseVersion": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"modified": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"modifiedTime": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}
//							}
//						}, 
//						"funcsObj": {
//							"jaxId": "1FBS4QOIB2", 
//							"funcs": [
//								{
//									"jaxId": "1FBTJMJG80", "type": "object", "def": "CdyFunc", "name": "getSubFolders", "info": "函数", "tip": "", 
//									"args": {
//										"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBTJMJG81", 
//										"attrs": {
//											"path": {
//												"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//												"tip": null
//											}
//										}
//									}, 
//									"attrs": {"Mockup Result":"\"\""}
//								},
//								{
//									"jaxId": "1FBS4QOIB3", "type": "object", "def": "CdyFunc", "name": "getSubItems", "info": "函数", "tip": "", 
//									"args": {
//										"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBS4QOIC0", 
//										"attrs": {
//											"path": {
//												"type": "auto", "valText": "null", "initVal": "", "info": null, 
//												"tip": null
//											}, 
//											"fileSet": {
//												"type": "auto", "valText": "null", "initVal": "", "info": null, 
//												"tip": null
//											}
//										}
//									}, 
//									"attrs": {"Mockup Result":"\"\""}
//								},
//								{
//									"jaxId": "1FBS4QOIC1", "type": "object", "def": "CdyFunc", "name": "checkInDisk", "info": "函数", "tip": "", 
//									"args": {
//										"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBS4QOIC2", 
//										"attrs": {}
//									}, 
//									"attrs": {"Mockup Result":"\"\""}
//								},
//								{
//									"jaxId": "1FBS4QOIC3", "type": "object", "def": "CdyFunc", "name": "updateDisk", "info": "函数", "tip": "", 
//									"args": {
//										"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBS4QOIC4", 
//										"attrs": {}
//									}, 
//									"attrs": {"Mockup Result":"\"\""}
//								},
//								{
//									"jaxId": "1FBS4QOIC5", "type": "object", "def": "CdyFunc", "name": "commitDisk", "info": "函数", "tip": "", 
//									"args": {
//										"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBS4QOIC6", 
//										"attrs": {
//											"info": {
//												"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//												"tip": null
//											}
//										}
//									}, 
//									"attrs": {"Mockup Result":"\"\""}
//								}
//							]
//						}, 
//						"mockObjs": {
//							"name": "Mockups", "type": "object", "def": "CdyDocObj", "jaxId": "1FBS4QOIC7", 
//							"attrs": {
//								"game": {
//									"type": "object", "def": "MockupRef1FBS4M8GE0", "jaxId": "1FBSBKU3L0", 
//									"attrs": {
//										"type": {
//											"type": "string", "valText": "\"disk\"", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"name": {
//											"type": "string", "valText": "\"game\"", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"cloudId": {
//											"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"baseVersion": {"type":"int","valText":"123","initVal":"","info":null,"tip":null}, 
//										"modified": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//										"modifiedTime": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}
//									}
//								}
//							}
//						}
//					}
//				}
//			}
//		}/*Doc}#*/;
//	}