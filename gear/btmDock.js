//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FO94OF5S0Imports*/
/*}#1FO94OF5S0Imports*/
//----------------------------------------------------------------------------
/*界面的堆叠坞站。*/
var btmDock=function (app, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FO94OF5S1ExLocal*/
	let boxLib={};
	let curBox=null;
	/*}#1FO94OF5S1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FO94OF5S3ExState*/
		/*}#1FO94OF5S3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FO94OF5S1Mid*/
	/*}#1FO94OF5S1Mid*/
	
	cssVO={
		"type": "dock", "jaxId": "1FO94OF5S1", "x": 0, "y": 0, "w": "FW", "h": "FH", "ui": -1, "autoLayout": 1, 
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FO94OF5S1CreateFunc*/
			/*}#1FO94OF5S1CreateFunc*/
		}
	};
	/*#{1FO94OF5S1ExViewDef*/

	//------------------------------------------------------------------------
	cssVO.OnUIBoxOpen=function(){
		let ui;
		ui=self.curUI;
		if(ui){
			ui.showUI&&ui.showUI(null);
		}else{
			self.showBox("terminal");
		}
	};
	
	//------------------------------------------------------------------------
	cssVO.OnUIBoxClose=function(){
		let ui;
		ui=self.curUI;
		if(ui){
			ui.coverUI&&ui.coverUI();
		}
	};
	
	//------------------------------------------------------------------------
	cssVO.showBox=async function(name){
		let ui,createUI;
		ui=boxLib[name];
		if(!ui){
			let def=appData.getBtmBox(name);
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
			boxLib[name]=ui;
		}else{
			ui=self.showUI(ui,{});
		}
		return ui;
	};
	/*}#1FO94OF5S1ExViewDef*/
	
	return cssVO;
};

/*#{1FO94OF5S0PostCode*/
/*}#1FO94OF5S0PostCode*/

export {btmDock};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "btmDock.js", "def": "CdyFileUIGear", "jaxId": "1FO94OF5S0", 
//			"attrs": {
//				"gearName": "\"btmDock\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FO94OF5T0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FO94OF5T2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudDock", "jaxId": "1FO94OF5S1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO94OF5S2", 
//					"attrs": {}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FO94OF5S3", 
//					"attrs": {}, "funcs": {"jaxId":"1FO94OF5T3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "ui": "-1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//					"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {"jaxId":"1FO94OF5T4","entrys":[]}, 
//				"funcs": {"jaxId":"1FO94OF5T6","funcs":[]}, "subs": []
//			}
//		}/*Doc}#*/;
//	}