//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FNHSEUAJ0Imports*/
import {CCDoc} from "../data/CCDoc.js";
/*}#1FNHSEUAJ0Imports*/
//----------------------------------------------------------------------------
/*界面的堆叠坞站。*/
var toolDock=function (app, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FNHSEUAJ1ExLocal*/
	let toolBoxLib={};
	let curToolBox=null;
	/*}#1FNHSEUAJ1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FNHSEUAJ3ExState*/
		/*}#1FNHSEUAJ3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FNHSEUAJ1Mid*/
	/*}#1FNHSEUAJ1Mid*/
	
	cssVO={
		"type": "dock", "jaxId": "1FNHSEUAJ1", "id": "DockTools", "x": 0, "y": 0, "w": "FW", "h": "FH", "ui": 0, "autoLayout": 1, 
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FNHSEUAJ1CreateFunc*/
			app.toolDock=this;
			//
			CCDoc.onNotify("ActiveDoc",()=>{
				let ui,doc,def,oldToolUI,score,oldScore;
				doc=CCDoc.getHotDoc();
				oldToolUI=doc.editToolBox;
				ui=this.curUI;
				if(ui && doc){
					score=ui.workWithDoc(doc);
					if(!score){
						if(oldToolUI){
							self.showToolBox(oldToolUI.toolDef.codeName);
						}else{
							def=appData.getToolBoxByDoc(doc);
							if(def){
								self.showToolBox(def.codeName);
							}
						}
					}else if(oldToolUI && oldToolUI!==ui){
						//Compare current UI and old dock;
						oldScore=oldToolUI.workWithDoc(doc);
						if(oldScore>score){
							self.showToolBox(oldToolUI.toolDef.codeName);
						}else{
							doc.editToolBox=ui;
						}
					}
				}
			},this);
			/*}#1FNHSEUAJ1CreateFunc*/
		}
	};
	/*#{1FNHSEUAJ1ExViewDef*/
	
	//------------------------------------------------------------------------
	//Show named tool box:
	cssVO.showToolBox=async function(name){
		let ui,doc,def,w,prj,createUI;
		doc=CCDoc.getHotDoc();
		ui=toolBoxLib[name];
		if(!ui){
			def=appData.getToolBox(name);
			if(!def){
				return null;
			}
			createUI=def.createUI;
			if(createUI instanceof Function){
				ui=self.showNewUI(createUI(app),{});
			}else{
				try{
					createUI=(await import(createUI.file))[createUI.func];
					ui=self.showNewUI(createUI(app),{});
				}catch(err){
					app.showStateText(`Error: show tool box "${name}" error: ${err}`);
					return null;
				}
			}
			ui.toolDef=def;
			ui.title=def.name;
			toolBoxLib[name]=ui;
		}else{
			ui=self.showUI(ui,{});
			def=ui.toolDef;
		}
		if(doc){
			doc.editToolBox=ui;
		}
		this.curToolDef=def;
		if(def){
			prj=app.appPrj;
				if(prj){
				w=prj.toolBoxSize;
				if(def.ownBoxSize){
					w=prj.toolBoxSizeMap[name];
					if(!w){
						w=def.initSize;
					}
				}
			}
		}
		if(w>100){
			appCfg.size.toolBoxW=w;
		}
		app.mainUI.relayout();
		return ui;
	};

	//------------------------------------------------------------------------
	cssVO.getToolCodeName=function(){
		if(this.curUI){
			return this.curUI.toolDef.codeName;
		}
		return "";
	};
	
	//------------------------------------------------------------------------
	//Choose a best tool for doc:
	cssVO.toolForDoc=function(doc){
		
	};
	/*}#1FNHSEUAJ1ExViewDef*/
	
	return cssVO;
};

/*#{1FNHSEUAJ0PostCode*/
/*}#1FNHSEUAJ0PostCode*/

export {toolDock};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "toolDock.js", "def": "CdyFileUIGear", "jaxId": "1FNHSEUAJ0", 
//			"attrs": {
//				"gearName": "\"toolDock\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FNHSEUAJ4", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FNHSEUAJ6","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudDock", "jaxId": "1FNHSEUAJ1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNHSEUAJ2", 
//					"attrs": {}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FNHSEUAJ3", 
//					"attrs": {}, "funcs": {"jaxId":"1FNHSEUAJ7","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"DockTools\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "ui": "0", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//					"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {"jaxId":"1FNHSEUAJ8","entrys":[]}, 
//				"funcs": {"jaxId":"1FNHSEUAJ10","funcs":[]}, "subs": []
//			}
//		}/*Doc}#*/;
//	}