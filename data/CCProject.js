//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {JAXDataObj} from "/jaxweb/lib/JAXDataObj.js"
/*#{1FCVBRITQ0Imports*/
import {JAXDisk} from "/jaxweb/lib/JAXDisk.js";
import {appCfg} from "../cfg/appCfg.js";
import {CCDisk} from "./CCDisk.js";
import {CCDoc} from "./CCDoc.js";
/*}#1FCVBRITQ0Imports*/
/*DataClass*/
var CCProject;
let __Proto;

//*****************************************************
/*CCProject: Data object class*/
//*****************************************************
{
	CCProject=function(appData, disk, diskName){
		var jaxEnv,app;
		/*#{1FCVBSCDL0Pre*/
		/*}#1FCVBSCDL0Pre*/
		if(!appData){return;}
		JAXDataObj.call(this,appData.jaxEnv);
		this.appData=appData;
		
		//Data attributes:
		this.disk = disk;
		this.diskName = diskName;
		/*#{1FCVBSCDL0Post*/
		this.docDisk=null;
		this.prjDisk=null;
		this.prjCCDisk=null;
		this.prjOpenDocs=null;
		this.docStates={};
		this.tabDocs=[];
		this.editorCfg=null;
		this.inScanHint=false;
		this.naviBoxSize=200;
		this.toolBoxSize=280;
		this.toolBoxSizeMap={};
		/*}#1FCVBSCDL0Post*/
	};
	__Proto=CCProject.prototype={};
	
	
	/*#{1FCVBSCDL0Functions*/
	//------------------------------------------------------------------------
	//根据磁盘名称，创建/加载一个磁盘的Prj:
	CCProject.loadPrj=async function(appData,diskName){
		let disk,prj;
		disk=await CCDisk.getDisk(diskName);
		if(!disk){
			return null;
		}
		prj=new CCProject(appData,disk,diskName);
		await prj.loadPrj();
		return prj;
	};
	
	//------------------------------------------------------------------------
	//保存工程文件:
	__Proto.savePrj=async function(){
		let vo,text,list;
		//保存CCDoc打开的Doc状态，记录文本状态:
		if(!this.docDisk){
			return;
		}
		vo={};
		vo.naviW=this.naviBoxSize;
		vo.toolW=this.toolBoxSize;
		vo.toolBoxSizeMap=Object.assign({},this.toolBoxSizeMap);
		list=CCDoc.getActiveDocs();
		vo.tabDocs=this.tabDocs||[];
		this.prjOpenDocs=vo.openDocs=list.map(item=>{
			return item.path;
		});
		vo.docStates=Object.assign({},this.docStates);
		if(this.editorCfg){
			vo.editorCfg=this.editorCfg;
		}
		text=JSON.stringify(vo,null,"\t");
		return this.docDisk.diskObj.saveFile("ccedit/prj/"+this.diskName+".json",text);
	};
	
	//------------------------------------------------------------------------
	//读取工程文件:
	__Proto.loadPrj=async function(){
		let disk,vo,w,text;
		
		this.docDisk=await CCDisk.getDisk("doc",1);
		disk=this.docDisk.diskObj;
		text=await disk.loadText("ccedit/prj/"+this.diskName+".json");
		if(text){
			try{
				vo=JSON.parse(text);
				w=vo.naviW;
				if(w>=100 && w<500){
					this.naviBoxSize=w;
				}
				w=vo.toolW;
				if(w>=100 && w<500){
					this.toolBoxSize=w;
				}
				if(vo.toolBoxSizeMap){
					Object.assign(this.toolBoxSizeMap,vo.toolBoxSizeMap);
				}
				this.tabDocs=vo.tabDocs||[];
				this.docStates=vo.docStates|{};
				this.prjOpenDocs=vo.openDocs||[];
				this.editorCfg=vo.editorCfg||{};
			}catch(e){
				appCfg.size.naviBoxW=200;
				appCfg.size.toolBoxW=280;
				this.editorCfg={};
				this.naviBoxSize=200;
				this.toolBoxSize=280;
				this.toolBoxSizeMap={};
				this.docStates={};
				this.prjOpenDocs=[];
			}
		}
	};
	
	//------------------------------------------------------------------------
	//Update tool Box size:
	__Proto.updateToolBoxSize=function(name,w){
		if(name){
			this.toolBoxSizeMap[name]=w;
		}else{
			this.toolBoxSize=w;
		}
	};
	
	//------------------------------------------------------------------------
	//Scan all project files for code hint:
	__Proto.scanHints=async function(){
		let disk,entries,path;
		if(this.inScanHint){
			return;
		}
		this.inScanHint=true;
		disk=this.disk.diskObj;
		entries=await disk.getAllItemPath()
		for(path of entries){
			await CCDoc.scanFileHints(disk,path);
		}
		this.inScanHint=false;
	};
	/*}#1FCVBSCDL0Functions*/
};

/*#{1FCVBRITQ0ExCodes*/
/*}#1FCVBRITQ0ExCodes*/
export {CCProject};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"jaxId": "1FCVBRITQ0", "def": "CdyFileDataClass", 
//			"attrs": {"fileName":"\"CCProject\"","description":"\"\""}, 
//			"classObjs": {
//				"name": "classObjs", "type": "object", "def": "CdyDocObj", "jaxId": "1FCVBRITQ1", 
//				"attrs": {
//					"CCProject": {
//						"type": "object", "def": "CdyDataClass", "name": "CCProject", "tip": "", "jaxId": "1FCVBSCDL0", 
//						"attrs": {}, 
//						"args": {
//							"name": "Arguments", "type": "object", "def": "ClassObjArgObj", "jaxId": "1FCVBU1QO0", 
//							"attrs": {
//								"superClass": "\"JAXDataObj\"", 
//								"disk": {"type":"auto","valText":"null","info":null,"tip":null}, 
//								"diskName": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}
//							}
//						}, 
//						"pptsObj": {
//							"name": "Properties", "type": "object", "def": "ClassObjPptObj", "jaxId": "1FCVBU1QO1", 
//							"attrs": {
//								"disk": {
//									"type": "auto", "valText": "#disk", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"diskName": {
//									"type": "string", "valText": "#diskName", "initVal": "", "info": null, 
//									"tip": null
//								}
//							}
//						}, 
//						"funcsObj": {"jaxId":"1FCVBU1QO2","funcs":[]}, 
//						"mockObjs": {
//							"name": "Mockups", "type": "object", "def": "CdyDocObj", "jaxId": "1FCVBU1QO3", 
//							"attrs": {}
//						}
//					}
//				}
//			}
//		}/*Doc}#*/;
//	}