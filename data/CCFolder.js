//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {JAXDataObj} from "/jaxweb/lib/JAXDataObj.js"
/*#{1FBS3RGMN0Imports*/
/*}#1FBS3RGMN0Imports*/
/*DataClass*/
var CCFolder;
let __Proto;

//*****************************************************
/*CCFolder: Data object class*/
//*****************************************************
{
	CCFolder=function(appData, disk, item){
		var jaxEnv,app;
		/*#{1FBS4ID2E0Pre*/
		/*}#1FBS4ID2E0Pre*/
		if(!appData){return;}
		JAXDataObj.call(this,appData.jaxEnv);
		this.appData=appData;
		
		//Data attributes:
		this.type = "folder";
		this.disk = null;
		this.isFolder = 1;
		this.path = "";
		this.name = "";
		this.baseName = "";
		this.baseVersion = 0;
		this.modified = 0;
		this.modifiedTime = 0;
		/*#{1FBS4ID2E0Post*/
		this.folderItem=item;
		this.disk=disk;
		this.name=item.name;
		this.path=item.path;
		this.diskPath=item.diskPath;
		this.modified=item.modified?1:0;
		this.modifiedTime=item.modifiedTime||0;
		/*}#1FBS4ID2E0Post*/
	};
	__Proto=CCFolder.prototype={};
	
	//函数
	__Proto.getSubItems=function(fileSet){
		/*#{1FBS4TI4Q0Code*/
		return this.disk.getSubItems(this.path,fileSet?fileSet:null);
		/*}#1FBS4TI4Q0Code*/
	};
	
	//函数
	__Proto.getSubFolders=function(){
		/*#{1FBTKC9RB0Code*/
		return this.disk.getSubFolders(this.path);
		/*}#1FBTKC9RB0Code*/
	};
	
	
	/*#{1FBS4ID2E0Functions*/
	__Proto.rename=function(newName){
		let path;
		this.name=newName;
		path=JAXEnv.getPathDir(this.path);
		this.path=JAXEnv.genFilePath(path,newName);
		this.diskPath="/"+this.disk.name+":"+this.path;
	};
	/*}#1FBS4ID2E0Functions*/
};

/*#{1FBS3RGMN0ExCodes*/
/*}#1FBS3RGMN0ExCodes*/
export {CCFolder};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"jaxId": "1FBS3RGMN0", "def": "CdyFileDataClass", 
//			"attrs": {"fileName":"\"CCFolder\"","description":"\"\""}, 
//			"classObjs": {
//				"name": "classObjs", "type": "object", "def": "CdyDocObj", "jaxId": "1FBS3RGMN1", 
//				"attrs": {
//					"CCFolder": {
//						"type": "object", "def": "CdyDataClass", "name": "CCFolder", "tip": "", "jaxId": "1FBS4ID2E0", 
//						"attrs": {}, 
//						"args": {
//							"name": "Arguments", "type": "object", "def": "ClassObjArgObj", "jaxId": "1FBS4J1BK0", 
//							"attrs": {
//								"superClass": "\"JAXDataObj\"", 
//								"disk": {
//									"name": "disk", "type": "object", "def": "CdyAttrMockupObj", "mockupDef": "NewObj1FBS4M8GE0", 
//									"mockupObj": {
//										"type": "object", "def": "NewObj1FBS4M8GE0", "jaxId": "1FP1F21HD0", 
//										"args": {
//											"name": "Arguments", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FP1F21HD1", 
//											"attrs": {
//												"superClass": {"type":"auto","valText":"\"JAXDataObj\"","info":"","tip":""}, 
//												"diskObj": {"type":"auto","valText":"null","info":"","tip":""}, 
//												"diskName": {"type":"auto","valText":"\"\"","info":"","tip":""}
//											}
//										}, 
//										"attrs": {
//											"type": {
//												"type": "string", "valText": "\"disk\"", "initVal": "", "info": "", "tip": ""
//											}, 
//											"name": {
//												"type": "string", "valText": "\"\"", "initVal": "", "info": "", "tip": ""
//											}, 
//											"cloudId": {
//												"type": "string", "valText": "\"\"", "initVal": "", "info": "", "tip": ""
//											}, 
//											"baseVersion": {"type":"int","valText":"0","initVal":"","info":"","tip":""}, 
//											"modified": {"type":"int","valText":"0","initVal":"","info":"","tip":""}, 
//											"modifiedTime": {"type":"int","valText":"0","initVal":"","info":"","tip":""}
//										}
//									}, 
//									"tip": ""
//								}, 
//								"item": {"type":"auto","valText":"null","info":null,"tip":null}
//							}
//						}, 
//						"pptsObj": {
//							"name": "Properties", "type": "object", "def": "ClassObjPptObj", "jaxId": "1FBS4J1BK1", 
//							"attrs": {
//								"type": {
//									"type": "string", "valText": "\"folder\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"disk": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}, 
//								"isFolder": {"type":"int","valText":"1","initVal":"","info":null,"tip":null}, 
//								"path": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"name": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"baseName": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"baseVersion": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"modified": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"modifiedTime": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}
//							}
//						}, 
//						"funcsObj": {
//							"jaxId": "1FBS4J1BK2", 
//							"funcs": [
//								{
//									"jaxId": "1FBS4TI4Q0", "type": "object", "def": "CdyFunc", "name": "getSubItems", "info": "函数", "tip": "", 
//									"args": {
//										"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBS4TI4Q1", 
//										"attrs": {
//											"fileSet": {
//												"type": "auto", "valText": "null", "initVal": "", "info": null, 
//												"tip": null
//											}
//										}
//									}, 
//									"attrs": {"Mockup Result":"\"\""}
//								},
//								{
//									"jaxId": "1FBTKC9RB0", "type": "object", "def": "CdyFunc", "name": "getSubFolders", "info": "函数", "tip": "", 
//									"args": {
//										"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBTKC9RB1", 
//										"attrs": {}
//									}, 
//									"attrs": {"Mockup Result":"\"\""}
//								}
//							]
//						}, 
//						"mockObjs": {
//							"name": "Mockups", "type": "object", "def": "CdyDocObj", "jaxId": "1FBS4J1BK3", 
//							"attrs": {
//								"gear": {
//									"type": "object", "def": "MockupRef1FBS4ID2E0", "jaxId": "1FBSBMUHA0", 
//									"attrs": {
//										"disk": {
//											"type": "auto", "valText": "null", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"isFolder": {"type":"int","valText":"1","initVal":"","info":null,"tip":null}, 
//										"path": {
//											"type": "string", "valText": "\"gear\"", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"name": {
//											"type": "string", "valText": "\"gear\"", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"baseName": {
//											"type": "string", "valText": "\"gear\"", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"baseVersion": {"type":"int","valText":"123","initVal":"","info":null,"tip":null}, 
//										"modified": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//										"modifiedTime": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//										"type": {
//											"type": "string", "valText": "\"folder\"", "initVal": "", "info": null, 
//											"tip": null
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