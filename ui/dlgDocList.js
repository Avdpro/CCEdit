//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {btnIcon} from "../gear/btnIcon.js";
/*#{1FCSQ8K1V0Imports*/
import {appCfg} from "../cfg/appCfg.js";
import {CCDisk} from "../data/CCDisk.js"
import {CCDoc} from "../data/CCDoc.js"
import {switchDocItem} from "../gear/switchDocItem.js"
/*}#1FCSQ8K1V0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var dlgDocList=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FCSQ8K1V1ExLocal*/
	let showVO,treeBox,docNodes,docIdx,mode;
	/*}#1FCSQ8K1V1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FCSQ8K1V3ExState*/
		/*}#1FCSQ8K1V3ExState*/
	},);
	/*#{1FCSQ8K1V1PostState*/
	/*}#1FCSQ8K1V1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FCSQ8K1V1", 
		"locked": 0, "x": "(FW-360)/2", "y": "(FH-450)/2-50", "w": 360, "h": 450, 
		items: [
			{
				"type": "box", "jaxId": "1FCTJAELE0", "id": "BG", "x": 0, "y": 0, "w": 360, "h": 450, "color": appCfg.color.window, "border": 2, "coner": 6, "shadow": 1, 
				"shadowColor": [0,0,0,0.5]
			},
			{
				"type": "text", "jaxId": "1FCTJAELE3", "id": "Title", "x": 8, "y": 10, "w": 100, "h": 20, "text": "Switch document:", "color": [0,0,0], "fontSize": 16, 
				"bold": 1
			},
			{
				"type": "box", "jaxId": "1FCTJAELE6", "id": "Frame", "x": 10, "y": 32, "w": "FW-20", "h": 400, "color": appCfg.color.window, "border": 1, "shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": "tree", "jaxId": "1FCTJAELE9", "id": "ListBox", "x": 0, "y": 0, "w": "FW", "h": "FH", "multiSelect": 0, 
						//函数
						nodeCSS:function(item, node){
							/*#{1FCTJAELF0Code*/
							return switchDocItem(app,item,node,self);
							/*}#1FCTJAELF0Code*/
						},
						//函数
						getSubObjs:function(){
							/*#{1FCTJAELF2Code*/
							return [];
							/*}#1FCTJAELF2Code*/
						}
					}
				]
			},
			{
				"type": btnIcon(app,24,"close.svg",null),"jaxId": "1FCTQEEBU0", 
				"locked": 0, "id": "BtnClose", "x": "FW-32", "y": 5, 
				//函数
				OnClick:function(){
					/*#{1FCTQEEBU5Code*/
					app.closeDlg(self);
					return 1;
					/*}#1FCTQEEBU5Code*/
				}
			}
		],
		faces: {
			"ByKey": {
				/*Title*/"#1FCTJAELE3": {
					"text": "Switch document"
				},
				/*BtnClose*/"#1FCTQEEBU0": {
					"display": 0
				},
			},
			"ByBtn": {
				/*Title*/"#1FCTJAELE3": {
					"text": "Switch document"
				},
				/*BtnClose*/"#1FCTQEEBU0": {
					"display": 1
				},
			},
			"ByDisk": {
				/*Title*/"#1FCTJAELE3": {
					"text": "Choose project disk"
				},
				/*BtnClose*/"#1FCTQEEBU0": {
					"display": 0
				},
			}
		},
		/*#{1FCSQ8K1V1ExAttrs*/
		showDlgBGMask:0,
		/*}#1FCSQ8K1V1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FCSQ8K1V1CreateFunc*/
			treeBox=this.ListBox;
			treeBox.dlg=this;
			/*}#1FCSQ8K1V1CreateFunc*/
		
		}
	};
	/*#{1FCSQ8K1V1ExViewDef*/
	//***********************************************************************
	//函数定义
	//***********************************************************************
	{
		//-------------------------------------------------------------------
		//初始化/显示对话框，考虑到CSS会发生变化，需要每次都重新初始化选项
		cssVO.showDlg=function(showVO_){
			let list,i,n,vo,node,btn,x,y;
			showVO=showVO_;
			treeBox.clear();
			if(showVO.mode==="disk"){
				//TODO: Code this:
				self.showFace("ByDisk");
				mode="Disk";
				self.x=appCfg.size.naviBoxW+80;
				self.y="(FH-450)/2-80";

				CCDisk.getDiskList().then(async (diskList)=>{
					let i,n,disk;
					n=diskList.length;
					for(i=0;i<n;i++){
						disk=await CCDisk.getDisk(diskList[i]);
						node=treeBox.addNode(disk);
						node.disk=disk.name;
					}
				});
			}else{
				docNodes=[];
				list=CCDoc.getActiveDocs();
				if(list) {
					n = list.length;
					for (i = n-1; i >=0; i--) {
						vo=list[i];
						node=treeBox.addNode(list[i]);
						node.docIdx=docNodes.length;
						docNodes.push(node);
					}
				}
				btn=showVO.btn;
				if(btn){
					[x,y]=btn.findRelatedPos(btn.w,btn.h);
					x-=360;
					y+=2;
					self.x=x;
					self.y=y;
					self.showFace("ByBtn");
					mode="Btn";
				}else{
					self.x="(FW-360)/2";
					self.y="(FH-450)/2-80";
					self.showFace("ByKey");
					mode="Key";
					n=docNodes.length;
					if (n > 1) {
						docIdx = 1;
						treeBox.setHotNode(docNodes[docIdx]);
					} else if (n > 0) {
						docIdx = 0;
						treeBox.setHotNode(docNodes[docIdx]);
					}
				}
			}
		};

		//-------------------------------------------------------------------
		//下一个文件:
		cssVO.nextFile=function(){
			let n,node;
			n=docNodes.length;
			docIdx++;
			if(docIdx>=n){
				docIdx=0;
			}
			node=docNodes[docIdx];
			treeBox.setHotNode(node);
		};

		//-------------------------------------------------------------------
		//前一个文件:
		cssVO.preFile=function(){
			let n,node;
			n=docNodes.length;
			docIdx--;
			if(docIdx<0){
				docIdx=n-1;
			}
			node=docNodes[docIdx];
			treeBox.setHotNode(node);
		};

		//-------------------------------------------------------------------
		//点击node
		cssVO.clickNode=function(node,doc){
			if(mode==="Btn"){
				app.focusDoc(doc);
				app.closeDlg(self);
			}else if(mode==="Disk"){
				treeBox.setHotNode(node);
				app.closeDlg(self);
				showVO.func&&showVO.func(node.disk);
			}else{
				treeBox.setHotNode(node);
				docIdx=node.docIdx>=0?node.docIdx:0;
			}
		};

		//-------------------------------------------------------------------
		//当前选中的文件:
		cssVO.getCurDoc=function(){
			let node;
			if(docNodes && docIdx>=0) {
				node=docNodes[docIdx];
				return node?node.nodeObj:null;
			}
			return null;
		};
		
		cssVO.OnBGClick=function(){
			if(mode==="Btn"){
				app.closeDlg(self);
			}
		};

	}
	/*}#1FCSQ8K1V1ExViewDef*/
	
	return cssVO;
};

export {dlgDocList};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "dlgDocList.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FCSQ8K1V0", 
//			"attrs": {
//				"viewName": "\"dlgDocList\"", "device": "iPad 1024x768", "w": "1024", "h": "768", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FCSQ8K1V1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCSQ8K1V2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FCSQ8K1V3", 
//						"attrs": {}, "funcs": {"jaxId":"1FCSQ8K1V4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "\"(FW-360)/2\"", "y": "\"(FH-450)/2-50\"", "w": "360", "h": "450"
//					}, 
//					"faces": null, 
//					"viewFaces": {
//						"jaxId": "1FCSQ8K1V6", 
//						"entrys": [
//							{
//								"jaxId": "1FCTQH17C0", "attrs": {"Face Name":"\"ByKey\"","Face Function":"0"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCTQI4H90", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FCTQHOLT0", "attrs": {"Face Name":"\"ByBtn\"","Face Function":"0"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCTQI4H91", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FD1JQP4P0", 
//								"attrs": {"Face Name":"\"ByDisk\"","Face Function":"0"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FD1JTF8B0", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							}
//						]
//					}, 
//					"funcs": {"jaxId":"1FCSQ8K1V7","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FCTJAELE0", 
//							"attrs": {
//								"locked": "1", "id": "\"BG\"", "x": "0", "y": "0", "w": "360", "h": "450", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.window", "border": "2", "borderStyle": "Solid", 
//								"borderColor": "[0,0,0,1]", "coner": "6", "gradient": "\"\"", "shadow": "1", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//								"shadowColor": "[0,0,0,0.5]"
//							}, 
//							"funcs": {"jaxId":"1FCTJAELE2","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "HudTxt", "jaxId": "1FCTJAELE3", 
//							"attrs": {
//								"locked": "1", "id": "\"Title\"", "x": "8", "y": "10", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Switch document:\"", "color": "[0,0,0]", 
//								"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "16", 
//								"bold": "1", "italic": "0", "underline": "0"
//							}, 
//							"faces": {
//								"jaxId": "1FD1JQ1532", 
//								"entrys": [
//									{
//										"jaxId": "1FD1JTF8B1", "entryId": "1FD1JQP4P0", "faceName": "ByDisk", 
//										"attrs": {"text":"\"Choose project disk\""}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FD1JTF8B2", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FD1JTF8B3", "entryId": "1FCTQH17C0", "faceName": "ByKey", 
//										"attrs": {"text":"\"Switch document\""}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FD1JTF8B4", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FD1JTF8B5", "entryId": "1FCTQHOLT0", "faceName": "ByBtn", 
//										"attrs": {"text":"\"Switch document\""}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FD1JTF8B6", 
//											"attrs": []
//										}
//										
//									}
//								]
//							}, 
//							"funcs": {"jaxId":"1FCTJAELE5","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FCTJAELE6", 
//							"attrs": {
//								"locked": "1", "id": "\"Frame\"", "x": "10", "y": "32", "w": "\"FW-20\"", "h": "400", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.window", 
//								"border": "1", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", 
//								"shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//							}, 
//							"funcs": {"jaxId":"1FCTJAELE8","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudTreeBox", "jaxId": "1FCTJAELE9", 
//									"attrs": {
//										"locked": "0", "id": "\"ListBox\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "headSpace": "0", "endSpace": "50", 
//										"nodeGap": "0", "intend": "30", "multiSelect": "0"
//									}, 
//									"funcs": {
//										"jaxId": "1FCTJAELE11", 
//										"funcs": [
//											{
//												"jaxId": "1FCTJAELF0", "type": "object", "def": "CdyFunc", "name": "nodeCSS", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCTJAELF1", 
//													"attrs": {
//														"item": {
//															"type": "auto", "valText": "null", "initVal": "", "info": null, 
//															"tip": null
//														}, 
//														"node": {
//															"type": "auto", "valText": "null", "initVal": "", "info": null, 
//															"tip": null
//														}
//													}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											},
//											{
//												"jaxId": "1FCTJAELF2", "type": "object", "def": "CdyFunc", "name": "getSubObjs", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCTJAELF3", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}, 
//									"subs": []
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FCTQEEBU0", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCTQEEBU1", 
//								"attrs": {
//									"w": {"type":"int","valText":"24","initVal":0,"info":null,"tip":null}, 
//									"image": {
//										"type": "string", "valText": "\"close.svg\"", "initVal": "", "info": null, 
//										"tip": null
//									}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCTQEEBU2", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnClose\"", "x": "\"FW-32\"", "y": "5", "autoLayout": "Off"
//							}, 
//							"faces": {
//								"jaxId": "1FCTQEEBU3", 
//								"entrys": [
//									{
//										"jaxId": "1FCTQI4H92", "entryId": "1FCTQH17C0", "faceName": "ByKey", 
//										"attrs": {"display":"Off"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCTQI4HA0", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FCTQI4HA1", "entryId": "1FCTQHOLT0", "faceName": "ByBtn", 
//										"attrs": {"display":"On"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FCTQI4HA2", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FD1JVFJK0", "entryId": "1FD1JQP4P0", "faceName": "ByDisk", 
//										"attrs": {"display":"Off"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FD1JVFJK1", 
//											"attrs": []
//										}
//										
//									}
//								]
//							}, 
//							"funcs": {
//								"jaxId": "1FCTQEEBU4", 
//								"funcs": [
//									{
//										"jaxId": "1FCTQEEBU5", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCTQEEBU6", 
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
//					"type": "object", "def": "HudNote", "jaxId": "1FCSQ8K1V8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FCSQ8K1V10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}