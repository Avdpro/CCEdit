//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FCPT6UAC0Imports*/
import {docTab} from "./docTab.js"
import {CCDoc} from "../data/CCDoc.js"
/*}#1FCPT6UAC0Imports*/
//----------------------------------------------------------------------------
/*Hud控件节点，没有内容，可以有子节点*/
var tabBox=function (app, w, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FCPT6UAC1ExLocal*/
	let rowH;
	let tabs=[];
	let newTabRow=0;
	let curRow=0;
	let hotTab=null;
	let tabDock=null;
	let isPopUp=0;
	/*}#1FCPT6UAC1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FCPT6UAC3ExState*/
		/*}#1FCPT6UAC3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FCPT6UAC1Mid*/
	rowH=appCfg.size.haderH;
	/*}#1FCPT6UAC1Mid*/
	
	cssVO={
		"type": "hud", "jaxId": "1FCPT6UAC1", "x": 0, "y": 0, "w": w, "h": appCfg.size.headerH, "clip": 1, 
		items: [
			{
				"type": "hud", "jaxId": "1FCPTBUNK0", "id": "TabDock", "x": 0, "y": 0, "w": "FW", "h": appCfg.size.headerH
			}
		],
		"hudState": state, 
		faces: {
			"popUp": {
				"$":function(vo){
					/*#{1FCPUVR080Func*/
					/*}#1FCPUVR080Func*/
				},
			},
			"dockIn": {
				"$":function(vo){
					/*#{1FCPV046E0Func*/
					/*}#1FCPV046E0Func*/
				},
			}
		},
		OnCreate: function(){
			self=this;
			/*#{1FCPT6UAC1CreateFunc*/
			app.tabDockBox=this;
			tabDock=this.TabDock;
			self.webObj.onwheel=self.dockOnWheel;
			/*}#1FCPT6UAC1CreateFunc*/
		}
	};
	/*#{1FCPT6UAC1ExViewDef*/
	
	//------------------------------------------------------------------------
	//添加一个Tab:
	cssVO.addTab=function(doc){
		let tab,css,newX,newIdx,i,n,preTab;
		n=tabs.length;
		preTab=hotTab||tabs[n-1];
		if(preTab){
			//在当前Tab的右侧添加新的Tab:
			newX=preTab.x+preTab.w;
			newIdx=preTab.tabIdx+1;
		}else{
			newX=0;
			newIdx=0;
		}
		css={
			type:docTab(app,doc),x:newX,y:newTabRow*rowH,tabIdx:newIdx,row:newTabRow
		};
		tab=tabDock.appendNewChild(css);
		tabs.splice(newIdx,0,tab);
		newX=tab.x+tab.w;
		n=tabs.length;
		for(i=newIdx+1;i<n;i++){
			let tab;
			tab=tabs[i];
			tab.tabIdx=i;
			tab.x=newX;
			newX=tab.x+tab.w;
		}
		self.setHotTab(tab);
	};
	
	//------------------------------------------------------------------------
	//聚焦一个Tab:
	cssVO.setHotTab=function(tab){
		if(tab instanceof CCDoc){
			tab=tab.tabBox;
		}
		if(hotTab){
			hotTab.showFace("normal");
		}
		hotTab=tab;
		if(tab){
			tab.showFace("hot");
			if(-tabDock.x>tab.x){
				tabDock.x=-tab.x;
			}else if(-tabDock.x+tabDock.w<tab.x+tab.w){
				tabDock.x=-(tab.x+tab.w-tabDock.w);
			}
		}
	};
	
	//------------------------------------------------------------------------
	//得到当前的doc:
	cssVO.getHotTab=function(){
		return hotTab;
	};
	
	//------------------------------------------------------------------------
	//关闭一个Doc:
	cssVO.closeDoc=function(doc){
		let tab,i,n,x;
		tab=doc.docTab;
		if(!tab){
			return;
		}
		x=tab.x;
		n=tabs.length;
		tabs.splice(tab.tabIdx,1);
		n--;
		for(i=tab.tabIdx;i<n;i++){
			let tab;
			tab=tabs[i];
			tab.tabIdx=i;
			tab.x=x;
			x=tab.x+tab.w;
		}
		if(hotTab===tab){
			hotTab=null;
		}
		tabDock.removeChild(tab);
	};
	
	//------------------------------------------------------------------------
	//得到当前Tabs对应的doc列表:
	cssVO.getTabDocs=function(){
		return tabs.map(item=>{
			return item.doc;
		});
	};
	
	//************************************************************************
	//移动/拖拽Tab相关:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//滚轮消息:
		cssVO.dockOnWheel=function(e){
			let dx,dy,lastTab,x,lastX;
			lastTab=tabs[tabs.length-1];
			if(!lastTab){
				return;
			}
			if(e.deltaMode!==0){
				return;
			}
			dx=e.deltaX;
			dy=e.deltaY;
			if(dx===0 && dy){
				dy=dy>20?20:dy;
				dy=dy<-20?-20:dy;
				dx=-dy;
			}
			x=tabDock.x;
			x+=dx;
			x=x>0?0:x;
			lastX=lastTab.x+lastTab.w;
			if(lastX+x<self.w-100){
				x=self.w-100-lastX;
			}
			x=x>0?0:x;
			tabDock.x=x;
			e.stopPropagation();
			e.preventDefault();
		};
		
		//--------------------------------------------------------------------
		//开始拖拽
		cssVO.dragTabStart=function(dragTab){
			//Do nothing
		};

		//--------------------------------------------------------------------
		//拖拽
		cssVO.dragTab=function(dragTab,tabX){
			let tab,i,n,hotIdx,x;
			n=tabs.length;
			tabX=tabX<0?0:tabX;
			hotIdx=dragTab.tabIdx;
			x=0;
			for(i=0;i<n;i++){
				tab=tabs[i];
				if(dragTab!==tab && tab.x<tabX && tab.x+tab.w>=tabX){
					if((tab.x+tab.w*0.5)>tabX){
						hotIdx=i;
						x=tab.x;
					}else{
						hotIdx=i+1;
						x=tab.x+tab.w;
					}
					break;
				}
			}
			if(hotIdx!==dragTab.tabIdx){
				x+=dragTab.w;
				tabs.splice(dragTab.tabIdx,1);
				if(hotIdx>dragTab.tabIdx){
					//hotIdx--;
				}
				tabs.splice(hotIdx,0,dragTab);
				dragTab.tabIdx=hotIdx;
				x=0;
				for(i=0;i<n;i++){
					tab=tabs[i];
					if(tab!==dragTab){
						tab.x=x;
					}
					tab.tabIdx=i;
					x+=tab.w;
				}
			}
		};

		//--------------------------------------------------------------------
		//拖拽结束
		cssVO.dragTabEnd=function(dragTab){
			let i,n,tab,x;
			x=0;
			n=tabs.length;
			for(i=0;i<n;i++){
				tab=tabs[i];
				tab.x=x;
				tab.tabIdx=i;
				x+=tab.w;
			}
		}
	}
	/*}#1FCPT6UAC1ExViewDef*/
	
	return cssVO;
};

/*#{1FCPT6UAC0PostCode*/
/*}#1FCPT6UAC0PostCode*/

export {tabBox};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "tabBox.js", "def": "CdyFileUIGear", "jaxId": "1FCPT6UAC0", 
//			"attrs": {
//				"gearName": "\"tabBox\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FCPT6UAG0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FCPT6UAG2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudObj", "jaxId": "1FCPT6UAC1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCPT6UAC2", 
//					"attrs": {
//						"w": {
//							"type": "string", "valText": "\"FW\"", "initVal": "", "info": null, 
//							"tip": null
//						}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FCPT6UAC3", 
//					"attrs": {}, "funcs": {"jaxId":"1FCPT6UAH0","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "#w", "h": "#appCfg.size.headerH", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//					"display": "Show", "clip": "On", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {
//					"jaxId": "1FCPT6UAH1", 
//					"entrys": [
//						{
//							"jaxId": "1FCPUVR080", "attrs": {"Face Name":"\"popUp\"","Face Function":"1"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCPV0JRB0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FCPV046E0", "attrs": {"Face Name":"\"dockIn\"","Face Function":"1"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCPV0JRB1", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						}
//					]
//				}, 
//				"funcs": {"jaxId":"1FCPT6UAH3","funcs":[]}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudObj", "jaxId": "1FCPTBUNK0", 
//						"attrs": {
//							"locked": "0", "id": "\"TabDock\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "#appCfg.size.headerH", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FCPTFKME1","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}