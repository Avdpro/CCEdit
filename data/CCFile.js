//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {JAXDataObj} from "/jaxweb/lib/JAXDataObj.js"
/*#{1FBS3RLI00Imports*/
/*}#1FBS3RLI00Imports*/
/*DataClass*/
var CCFile;
let __Proto;

//*****************************************************
/*CCFile: Data object class*/
//*****************************************************
{
	CCFile=function(appData, disk, item){
		var jaxEnv,app;
		/*#{1FBS4FICA0Pre*/
		/*}#1FBS4FICA0Pre*/
		if(!appData){return;}
		JAXDataObj.call(this,appData.jaxEnv);
		this.appData=appData;
		
		//Data attributes:
		this.type = "file";
		this.isFolder = 0;
		this.path = "";
		this.name = "";
		this.baseName = "";
		this.baseVersionIdx = 0;
		this.modified = 0;
		this.size = 0;
		this.modifyTime = 0;
		this.disk = null;
		/*#{1FBS4FICA0Post*/
		this.path=item.path;
		this.name=item.name;
		this.size=item.size;
		this.diskPath=item.diskPath;
		this.baseVersionIdx=item.baseVersionIdx;
		this.modified=item.modified;
		this.disk=disk;
		this.modifyTime=item.modifyTime;
		this.fileExt=JAXEnv.getFileExt(item.name).toLowerCase();
		/*}#1FBS4FICA0Post*/
	};
	__Proto=CCFile.prototype={};
	
	
	/*#{1FBS4FICA0Functions*/
	//------------------------------------------------------------------------
	//Check if a file name is represent a conflicted file:
	CCFile.isConflictFileName=function(fname){
		if(fname.endsWith(".conflict")){
			return true;
		}
		return false;
	};
	
	//------------------------------------------------------------------------
	//Get the conflict-target file's name:
	CCFile.getConflictDocName=function(cname){
		let idx,list;
		if(!cname.endsWith(".conflict")){
			return null;
		}
		list=cname.split(".");
		if(list.length<3){
			return null;
		}
		list.pop();//"conflict"
		list.pop();//version-idx
		return list.join(".");
	};
	
	//------------------------------------------------------------------------
	//Get file modify time:
	__Proto.getModifyTime=async function(){
		let entry;
		entry=await this.disk.diskObj.getEntry(this.path);
		if(!entry){
			return 0;
		}
		return entry.modifyTime||0;
	};
	/*}#1FBS4FICA0Functions*/
};

/*#{1FBS3RLI00ExCodes*/
//Avdpro
/*}#1FBS3RLI00ExCodes*/
export {CCFile};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"jaxId": "1FBS3RLI00", "def": "CdyFileDataClass", 
//			"attrs": {"fileName":"\"CCFile\"","description":"\"\""}, 
//			"classObjs": {
//				"name": "classObjs", "type": "object", "def": "CdyDocObj", "jaxId": "1FBS3RLI01", 
//				"attrs": {
//					"CCFile": {
//						"type": "object", "def": "CdyDataClass", "name": "CCFile", "tip": "", "jaxId": "1FBS4FICA0", 
//						"attrs": {}, 
//						"args": {
//							"name": "Arguments", "type": "object", "def": "ClassObjArgObj", "jaxId": "1FBS4J1BL0", 
//							"attrs": {
//								"superClass": "\"JAXDataObj\"", 
//								"disk": {
//									"name": "disk", "type": "object", "def": "CdyAttrMockupObj", "mockupDef": "MockupRef1FBS4M8GE0", "mockupName": "game", "tip": ""
//								}, 
//								"item": {"type":"auto","valText":"null","info":null,"tip":null}
//							}
//						}, 
//						"pptsObj": {
//							"name": "Properties", "type": "object", "def": "ClassObjPptObj", "jaxId": "1FBS4J1BL1", 
//							"attrs": {
//								"type": {
//									"type": "string", "valText": "\"file\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"isFolder": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
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
//								"baseVersionIdx": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"modified": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"size": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"modifyTime": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"disk": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}
//							}
//						}, 
//						"funcsObj": {"jaxId":"1FBS4J1BL2","funcs":[]}, 
//						"mockObjs": {
//							"name": "Mockups", "type": "object", "def": "CdyDocObj", "jaxId": "1FBS4J1BL3", 
//							"attrs": {
//								"jsfile": {
//									"type": "object", "def": "MockupRef1FBS4FICA0", "jaxId": "1FBSB4R530", 
//									"attrs": {
//										"isFolder": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//										"path": {
//											"type": "string", "valText": "\"gear/textSmall.js\"", "initVal": "", 
//											"info": null, "tip": null
//										}, 
//										"baseName": {
//											"type": "string", "valText": "\"textSmall.js\"", "initVal": "", 
//											"info": null, "tip": null
//										}, 
//										"modified": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//										"size": {
//											"type": "int", "valText": "3202", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"name": {
//											"type": "string", "valText": "\"textSmall.js\"", "initVal": "", 
//											"info": null, "tip": null
//										}, 
//										"disk": {
//											"type": "auto", "valText": "null", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"type": {
//											"type": "string", "valText": "\"file\"", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"modifyTime": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//										"baseVersionIdx": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}
//									}
//								}
//							}
//						}
//					}
//				}
//			}
//		}/*Doc}#*/;
//	}