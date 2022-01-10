//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {BtnStd} from "../gear/BtnStd.js";
/*#{1FMU3P8P60Imports*/
import {appData} from "../appData.js";
import {CCDisk} from "../data/CCDisk.js";
import {CCDoc} from "../data/CCDoc.js";
import pathLib from "/@path";
/*}#1FMU3P8P60Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var TbxFile=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FMU3P8P61ExLocal*/
	let curDoc=null;
	/*}#1FMU3P8P61ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FMU3P8P63ExState*/
		/*}#1FMU3P8P63ExState*/
	},);
	/*#{1FMU3P8P61PostState*/
	/*}#1FMU3P8P61PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FMU3P8P61", 
		"locked": 0, "x": 0, "y": 0, "w": "FW", "h": "FH", "title": "File detail", 
		items: [
			{
				"type": "text", "jaxId": "1FMU3S91C0", "id": "TxtPath", "x": 15, "y": 15, "w": 347, "h": 20, "text": "Path: /coke/disk.json", "color": [0,0,0], "fontSize": appCfg.txtSize.mid
			},
			{
				"type": "text", "jaxId": "1FMU3SBCK0", "id": "TxtSize", "x": 15, "y": 40, "w": 347, "h": 20, "text": "Size: 1808", "color": [0,0,0], "fontSize": appCfg.txtSize.mid
			},
			{
				"type": "text", "jaxId": "1FMU4279B0", "id": "TxtTime", "x": 15, "y": 65, "w": 347, "h": 20, "text": "Update time : 1900", "color": [0,0,0], "fontSize": appCfg.txtSize.mid
			},
			{
				"type": "text", "jaxId": "1FMU43SBV0", "id": "TxtVersionIdx", "x": 15, "y": 90, "w": 347, "h": 20, "text": "Base version-idx: NA", "color": [0,0,0], 
				"fontSize": appCfg.txtSize.mid
			},
			{
				"type": "text", "jaxId": "1FMU483K20", "id": "TxtModified", "x": 15, "y": 115, "w": 347, "h": 20, "text": "Modified: yes", "color": [0,0,0], "fontSize": appCfg.txtSize.mid
			},
			{
				"type": BtnStd(app,150,"Edit Changes",null),"jaxId": "1FMU4LU916", 
				"locked": 0, "id": "BtnEdChange", "x": 15, "y": 145, 
				//函数
				OnClick:function(){
					/*#{1FNKIF2OA0Code*/
					self.openChanges();
					/*}#1FNKIF2OA0Code*/
				}
			}
		],
		faces: {
		},
		/*#{1FMU3P8P61ExAttrs*/
		/*}#1FMU3P8P61ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FMU3P8P61CreateFunc*/
			app.onNotify("FocusBox",()=>{
				//TODO: Code this:
			},self);
			app.onNotify("FocusDoc",()=>{
				let doc,path,dock;
				dock=this.father;
				if(dock && dock.curUI===this){
					doc=CCDoc.getHotDoc();
					if(!doc){
						return;
					}
					self.switchDoc(doc);
				}
			},self);
			/*}#1FMU3P8P61CreateFunc*/
		
		}
	};
	/*#{1FMU3P8P61ExViewDef*/
	//------------------------------------------------------------------------
	//Show UI:
	cssVO.showUI=function(vo){
		let doc;
		//TODO: Code this:
		if(vo.doc){
			doc=vo.doc;
		}else{
			doc=CCDoc.getHotDoc();
		}
		if(!doc){
			return;
		}
		self.switchDoc(doc);
	};
	
	//------------------------------------------------------------------------
	//Switch current editing doc:
	cssVO.switchDoc=async function(doc){
		let path,item,disk,ext;
		curDoc=doc;
		path=doc.path;
		ext=pathLib.extname(path);
		switch(ext){
			case ".conflict":
			case ".baseversion":
			case ".codydesign":
				path=path.substring(0,path.length-ext.length);
				break;
		}
		disk=app.appPrj.disk.diskObj;
		self.TxtPath.text=path;
		item=await disk.getEntry(path);
		if(item){
			self.TxtSize.text="Size: "+(item.size>=0?item.size:"NA");
			if(item.modifyTime>0){
				let date=new Date(item.modifyTime);
				self.TxtTime.text=`Time: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
				
			}else{
				self.TxtTime.text="Time: NA";
			}
			if(item.baseVersionIdx>0){
				self.TxtVersionIdx.text="Base version-idx: "+item.baseVersionIdx;
				self.TxtModified.text="Modified: "+(item.modified?"Yes":"No");
				self.BtnEdChange.enable=item.modified;
			}else{
				self.TxtVersionIdx.text="Base version-idx: NA";
				self.TxtModified.text="New file";
				self.BtnEdChange.enable=false;
			}
			if(ext===".conflict"){
				//TODO: Code this:
			}
		}
	}
	
	//------------------------------------------------------------------------
	//Check if a doc is compatible with a doc:
	cssVO.workWithDoc=function(doc){
		if(doc.path){
			return 10;
		}
		return 0;
	};
	
	//------------------------------------------------------------------------
	//Open changes vs base-version view:
	cssVO.openChanges=function(){
		if(!curDoc){
			return;
		}
		if(curDoc.isBaseVersion){
			return;
		}
		if(curDoc.isConflict){
			return;
		}
		app.openItem(curDoc.path+".baseversion");
	};
	/*}#1FMU3P8P61ExViewDef*/
	
	return cssVO;
};

/*#{1FMU3P8P60PostCode*/
//----------------------------------------------------------------------------
//:Register tool box:
/*appData.regToolBox({
	codeName:"File",
	name:"File Detail",
	createUI:TbxFile,
	icon:"assets/wenjian.svg"
});*/
/*}#1FMU3P8P60PostCode*/

export {TbxFile};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "TbxFile.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FMU3P8P60", 
//			"attrs": {
//				"viewName": "\"TbxFile\"", "device": "iPhone 375x750", "w": "375", "h": "750", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FMU3P8P61", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMU3P8P62", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FMU3P8P63", 
//						"attrs": {}, "funcs": {"jaxId":"1FMU3P8P64","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", 
//						"title": {"type":"auto","valText":"\"File detail\"","info":null,"tip":null}
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FMU3P8P66","entrys":[]}, 
//					"funcs": {"jaxId":"1FMU3P8P67","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "HudTxt", "jaxId": "1FMU3S91C0", 
//							"attrs": {
//								"locked": "1", "id": "\"TxtPath\"", "x": "15", "y": "15", "w": "347", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Path: /coke/disk.json\"", "color": "[0,0,0]", 
//								"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "#appCfg.txtSize.mid", 
//								"bold": "0", "italic": "0", "underline": "0"
//							}, 
//							"funcs": {"jaxId":"1FMU3S91C2","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "HudTxt", "jaxId": "1FMU3SBCK0", 
//							"attrs": {
//								"locked": "1", "id": "\"TxtSize\"", "x": "15", "y": "40", "w": "347", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Size: 1808\"", "color": "[0,0,0]", "autoSizeW": "0", 
//								"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "#appCfg.txtSize.mid", 
//								"bold": "0", "italic": "0", "underline": "0"
//							}, 
//							"funcs": {"jaxId":"1FMU3SBCL0","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "HudTxt", "jaxId": "1FMU4279B0", 
//							"attrs": {
//								"locked": "1", "id": "\"TxtTime\"", "x": "15", "y": "65", "w": "347", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Update time : 1900\"", "color": "[0,0,0]", 
//								"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "#appCfg.txtSize.mid", 
//								"bold": "0", "italic": "0", "underline": "0"
//							}, 
//							"funcs": {"jaxId":"1FMU4279B1","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "HudTxt", "jaxId": "1FMU43SBV0", 
//							"attrs": {
//								"locked": "1", "id": "\"TxtVersionIdx\"", "x": "15", "y": "90", "w": "347", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Base version-idx: NA\"", 
//								"color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", 
//								"fontSize": "#appCfg.txtSize.mid", "bold": "0", "italic": "0", "underline": "0"
//							}, 
//							"funcs": {"jaxId":"1FMU43SBV1","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "HudTxt", "jaxId": "1FMU483K20", 
//							"attrs": {
//								"locked": "1", "id": "\"TxtModified\"", "x": "15", "y": "115", "w": "347", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Modified: yes\"", "color": "[0,0,0]", 
//								"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "#appCfg.txtSize.mid", 
//								"bold": "0", "italic": "0", "underline": "0"
//							}, 
//							"funcs": {"jaxId":"1FMU483K21","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "Gear1FDAETMLJ0", "jaxId": "1FMU4LU916", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMU4LU917", 
//								"attrs": {
//									"w": {"type":"int","valText":"150","initVal":0,"info":null,"tip":null}, 
//									"text": {
//										"type": "string", "valText": "\"Edit Changes\"", "initVal": "", 
//										"info": null, "tip": null
//									}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMU4LU918", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnEdChange\"", "x": "15", "y": "145", "autoLayout": "Off"
//							}, 
//							"faces": null, 
//							"funcs": {
//								"jaxId": "1FMU4LU9110", 
//								"funcs": [
//									{
//										"jaxId": "1FNKIF2OA0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNKIFEB57", 
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
//					"type": "object", "def": "HudNote", "jaxId": "1FMU3P8P68", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FMU3P8P610","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}