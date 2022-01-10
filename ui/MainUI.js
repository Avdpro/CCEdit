//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {editDock} from "../gear/editDock.js";
import {naviBox} from "../gear/naviBox.js";
import {toolDock} from "../gear/toolDock.js";
import {btnIcon} from "../gear/btnIcon.js";
import {tabBox} from "../gear/tabBox.js";
import {btmDock} from "../gear/btmDock.js";
/*#{1FBR233GG0Imports*/
import {CCDisk} from "../data/CCDisk.js";
import {CCFolder} from "../data/CCFolder.js";
import {CCFile} from "../data/CCFile.js";
import pathLib from "/@path";
import {fsPromises as fsp} from "/@fs";
//In-built tool boxes:
//import {TbxFile} from "./TbxFile.js";
//import {TbxTip} from "./TbxTip.js";
//import {TbxMenu} from "./TbxMenu.js";
//import {TbxFindFiles} from "./TbxFindFiles.js";
//import {TbxMarks} from "./TbxMarks.js";
//import {TbxLint} from "./TbxLint.js";
//import {TbxMDView} from "./TbxMDView.js";
//import {TbxHtmlView} from "./TbxHtmlView.js";
//import {BBXTerminal} from "./BBXTerminal.js";
/*}#1FBR233GG0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var MainUI=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FBR233GG1ExLocal*/
	let stateBoxes=[];
	let curStateBox=0;
	/*}#1FBR233GG1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FBR233GG3ExState*/
		/*}#1FBR233GG3ExState*/
	},);
	/*#{1FBR233GG1PostState*/
	/*}#1FBR233GG1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FBR233GG1", 
		"locked": 1, "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, 
		items: [
			{
				"type": editDock(app,"FW-"+(appCfg.size.naviBoxW+appCfg.size.toolBoxW),"FH-"+(appCfg.size.headerH+appCfg.size.stateBoxH),null),"jaxId": "1FCPIKCAQ0", 
				"locked": 0, "id": "EditDock", "x": appCfg.size.naviBoxW, "y": appCfg.size.headerH
			},
			{
				"type": "box", "jaxId": "1FBR2OKUF0", "id": "BoxNavi", "x": 0, "y": appCfg.size.headerH, "w": appCfg.size.naviBoxW, "h": "FH-"+(appCfg.size.headerH+appCfg.size.stateBoxH), 
				"autoLayout": 1, "color": appCfg.color.window, "shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": "box", "jaxId": "1FBR2FP3D0", "id": "Line", "x": "FW", "y": 0, "w": 1, "h": "FH", "autoLayout": 1, "uiEvent": -1, "color": 787878, "shadowColor": [0,0,0,0.5], 
						"zIndex": 6
					},
					{
						"type": "button", "jaxId": "1FBR2OKUG1", "id": "BtnSize", "x": "FW", "y": 0, "w": 4, "h": "FH", "autoLayout": 1, "cursor": "col-resize", "drag": 1, 
						"zIndex": 6, 
						"hudBtnUp": {
							"type": "box", "jaxId": "1FC1D5KPO0", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "color": [180,180,180,0], "shadowColor": [0,0,0,0.5]
						},
						"hudBtnDown": {
							"type": "box", "jaxId": "1FBR2OKUG4", "x": 0, "y": 0, "w": 4, "h": "FH", "autoLayout": 1, "color": [80,80,80,1], "shadowColor": [0,0,0,0.5]
						},
						"hudBtnOver": {
							"type": "box", "jaxId": "1FBR2L1EC0", "x": 0, "y": 0, "w": 4, "h": "FH", "autoLayout": 1, "shadowColor": [0,0,0,0.5]
						},
						//函数
						OnDragStart:function(e){
							/*#{1FC1AR2AR14Code*/
							this.ox=this.x;
							this.uiEvent=0;
							this.hudBtnUp.color=[0,0,0,0.5];
							/*}#1FC1AR2AR14Code*/
						},
						//函数
						OnDrag:function(e, dx, dy){
							/*#{1FC1ANQGI15Code*/
							let x;
							x=this.ox+dx;
							x=x<100?100:x;
							this.x=x;
							/*}#1FC1ANQGI15Code*/
						},
						//函数
						OnDragEnd:function(e, cancel, dx, dy){
							/*#{1FC1ANQGI17Code*/
							let w;
							w=this.ox+dx;
							w=w<100?100:w;
							this.uiEvent=1;
							w=jaxApp.setNaviBoxW(w);
							this.x=w;
							this.hudBtnUp.color=[0,0,0,0];
							this.state=0;
							/*}#1FC1ANQGI17Code*/
						}
					},
					{
						"type": "dock", "jaxId": "1FNGGU3PG0", "id": "DockNavi", "x": 0, "y": 0, "w": "FW", "h": "FH", "ui": 0, "autoLayout": 1, 
						items: [
							{
								"type": naviBox(app,null),"jaxId": "1FNGCTUGC0", 
								"locked": 0, "id": "naviBox", "x": 0, "y": 0
							}
						]
					}
				]
			},
			{
				"type": "box", "jaxId": "1FCKH97PF0", "id": "BoxTool", "x": "FW-"+appCfg.size.toolBoxW, "y": appCfg.size.headerH, "w": appCfg.size.toolBoxW, "h": "FH-"+(appCfg.size.headerH+appCfg.size.stateBoxH), 
				"autoLayout": 1, "color": appCfg.color.window, "shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": "box", "jaxId": "1FCKH97PH0", "id": "Line", "x": -1, "y": 0, "w": 1, "h": "FH", "autoLayout": 1, "uiEvent": -1, "color": 787878, "shadowColor": [0,0,0,0.5], 
						"zIndex": 6
					},
					{
						"type": "button", "jaxId": "1FCKH97PH2", "id": "BtnToolSize", "x": -3, "y": 0, "w": 4, "h": "FH", "autoLayout": 1, "cursor": "col-resize", "drag": 1, 
						"zIndex": 6, 
						"hudBtnUp": {
							"type": "box", "jaxId": "1FCKH97PJ0", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "color": [180,180,180,0], "shadowColor": [0,0,0,0.5]
						},
						"hudBtnDown": {
							"type": "box", "jaxId": "1FCKH97PJ2", "x": 0, "y": 0, "w": 4, "h": "FH", "autoLayout": 1, "color": [80,80,80,1], "shadowColor": [0,0,0,0.5]
						},
						"hudBtnOver": {
							"type": "box", "jaxId": "1FCKH97PJ4", "x": 0, "y": 0, "w": 4, "h": "FH", "autoLayout": 1, "shadowColor": [0,0,0,0.5]
						},
						//函数
						OnDragStart:function(e){
							/*#{1FCKH97PI0Code*/
							this.ox=this.x;
							this.ow=appCfg.size.toolBoxW;
							this.uiEvent=0;
							this.hudBtnUp.color=[0,0,0,0.5];
							/*}#1FCKH97PI0Code*/
						},
						//函数
						OnDrag:function(e, dx, dy){
							/*#{1FCKH97PI2Code*/
							let x,w;
							x=this.ox+dx;
							w=this.ow-dx;
							if(w<100){
								x-=100-w;
							}
							this.x=x;
							/*}#1FCKH97PI2Code*/
						},
						//函数
						OnDragEnd:function(e, cancel, dx, dy){
							/*#{1FCKH97PI4Code*/
							let w;
							w=appCfg.size.toolBoxW-dx;
							w=w<100?100:w;
							this.uiEvent=1;
							w=jaxApp.setToolBoxW(w);
							this.x=-3;
							this.hudBtnUp.color=[0,0,0,0];
							this.state=0;
							/*}#1FCKH97PI4Code*/
						}
					},
					{
						"type": toolDock(app,null),"jaxId": "1FNI2SRA80", 
						"locked": 0, "id": "DockTools", "x": 0, "y": 0, "autoLayout": 1
					}
				]
			},
			{
				"type": "box", "jaxId": "1FBR26ACL0", "id": "BoxHead", "x": 0, "y": 0, "w": "FW", "h": appCfg.size.headerH, "autoLayout": 1, "color": appCfg.color.headBox, 
				"shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": "box", "jaxId": "1FBR2C50N0", "id": "BtmLine", "x": 0, "y": appCfg.size.headerH, "w": "FW", "h": 1, "autoLayout": 1, "color": 787878, "shadowColor": [0,0,0,0.5]
					},
					{
						"type": "hud", "jaxId": "1FBR4H3UE0", "id": "BoxHeadNavi", "x": 0, "y": 0, "w": appCfg.size.naviBoxW, "h": "FH", 
						items: [
							{
								"type": "box", "jaxId": "1FBR4H3UF0", "x": 3, "y": 3, "w": 1, "h": "FH-6", "color": [150,150,150,1], "shadowColor": [0,0,0,0.5]
							},
							{
								"type": btnIcon(app,24,"fileadd.svg",null),"jaxId": "1FBR4H3UF3", 
								"locked": 0, "id": "BtnNewFile", "x": 6, "y": "(FH-24)/2", "tip": "Add new file", 
								//函数
								OnClick:function(){
									/*#{1FC2G7GMM0Code*/
									app.DoNewDoc();
									/*}#1FC2G7GMM0Code*/
								}
							},
							{
								"type": btnIcon(app,24,"save.svg",null),"jaxId": "1FC2R95CR0", 
								"locked": 0, "id": "BtnDownloadDisk", "x": 30, "y": "(FH-24)/2", "tip": "Save file", 
								//函数
								OnClick:function(){
									/*#{1FC2R95CR4Code*/
									app.DoSaveDoc();
									/*}#1FC2R95CR4Code*/
								}
							},
							{
								"type": btnIcon(app,24,"run.svg",null),"jaxId": "1FLRJLDE10", 
								"locked": 0, "id": "BtnRunPrj", "x": 54, "y": "(FH-24)/2", "tip": "Run project", 
								//函数
								OnClick:function(){
									/*#{1FLRJLDE14Code*/
									app.DoRunPrj();
									/*}#1FLRJLDE14Code*/
								}
							}
						]
					},
					{
						"type": "hud", "jaxId": "1FBR4QL5B0", "id": "BoxHeadEdit", "x": appCfg.size.naviBoxW, "y": 0, "w": "FW-"+(appCfg.size.naviBoxW+appCfg.size.toolBoxW), 
						"h": "FH", "autoLayout": 1, 
						items: [
							{
								"type": "box", "jaxId": "1FBR4QL5B2", "x": 0, "y": 3, "w": 1, "h": "FH-6", "color": [150,150,150,1], "shadowColor": [0,0,0,0.5]
							},
							{
								"type": btnIcon(app,20,"btncombo.svg",null),"jaxId": "1FCQ0T4GC0", 
								"locked": 0, "id": "BtnDocList", "x": "FW-25", "y": "(FH-20)/2", "autoLayout": 1, 
								//函数
								OnClick:function(){
									/*#{1FCTKERML0Code*/
									app.showSwitchDlg(this);
									return 1;
									/*}#1FCTKERML0Code*/
								}
							},
							{
								"type": tabBox(app,"FW-28",null),"jaxId": "1FCQ1CB6I0", 
								"locked": 0, "id": "TabBox", "x": 3, "y": 0, "autoLayout": 1
							}
						]
					},
					{
						"type": "hud", "jaxId": "1FCQ0NKC20", "id": "BoxHeadTool", "x": "FW-"+appCfg.size.toolBoxW, "y": 0, "w": appCfg.size.toolBoxW, "h": "FH", "autoLayout": 1, 
						items: [
							{
								"type": "box", "jaxId": "1FCQ0NKC31", "x": 0, "y": 3, "w": 1, "h": "FH-6", "color": [150,150,150,1], "shadowColor": [0,0,0,0.5]
							},
							{
								"type": btnIcon(app,20,"btncombo.svg",null),"jaxId": "1FMU6306Q0", 
								"locked": 0, "id": "BtnToolList", "x": "FW-25", "y": "(FH-20)/2", "autoLayout": 1, 
								//函数
								OnClick:function(){
									/*#{1FMU6306Q4Code*/
									app.showToolBox("Menu");
									/*}#1FMU6306Q4Code*/
								}
							},
							{
								"type": "text", "jaxId": "1FOGK74C40", "id": "TxtToolName", "x": "FW-130", "y": 5, "w": 100, "h": 20, "autoLayout": 1, "text": "Tool Name", "color": [0,0,0], 
								"alignH": 2, "alignV": 1, "fontSize": appCfg.txtSize.smallMid
							}
						]
					}
				]
			},
			{
				"type": "box", "jaxId": "1FBR439899", "id": "BoxState", "x": 0, "y": "FH", "w": "FW", "h": appCfg.size.stateBoxH, "anchorV": 2, "autoLayout": 1, "clip": 1, 
				"color": appCfg.color.stateBox, "shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": "box", "jaxId": "1FBR46FJ50", "id": "Line", "x": 0, "y": 0, "w": "FW", "h": 1, "autoLayout": 1, "color": [150,150,150,1], "shadowColor": [0,0,0,0.5]
					},
					{
						"type": "hud", "jaxId": "1FO3SH7IH0", "id": "BoxState1", "x": 28, "y": 4, "w": "FW-100", "h": "FH-6", "autoLayout": 1
					},
					{
						"type": "hud", "jaxId": "1FO3SH8P20", "id": "BoxState2", "x": 28, "y": 4, "w": "FW-100", "h": "FH-6", "autoLayout": 1
					},
					{
						"type": "text", "jaxId": "1FO3UTJII0", "id": "TxtCM", "x": "FW-10", "y": 0, "w": 100, "h": 24, "anchorH": 2, "autoLayout": 1, "text": "www.cokecodes.com", 
						"color": [120,120,120], "alignH": 2, "alignV": 1, "fontSize": appCfg.txtSize.small
					},
					{
						"type": "hud", "jaxId": "1FO90HKGL0", "id": "BoxBtnBtm", "x": 15, "y": 12, "w": 20, "h": 20, "anchorH": 1, "anchorV": 1, 
						items: [
							{
								"type": btnIcon(app,20,"btncombo.svg",null),"jaxId": "1FO90GE7H0", 
								"locked": 0, "id": "BtnBtm", "x": 0, "y": 0, "tip": "Show terminal", 
								//函数
								OnClick:function(){
									/*#{1FO90SMH40Code*/
									if(appCfg.ui.showBtmBox){
										app.hideBtmBox();
									}else{
										app.showBtmBox();
									}
									/*}#1FO90SMH40Code*/
								}
							}
						]
					}
				]
			},
			{
				"type": "box", "jaxId": "1FO7PUQCN0", "id": "BoxBtm", "x": 0, "y": "FH-"+(appCfg.size.stateBoxH+appCfg.size.btmBoxH), "w": "FW", "h": appCfg.size.btmBoxH, 
				"autoLayout": 1, "color": appCfg.color.window, "shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": "box", "jaxId": "1FO7PSTPV0", "id": "Line", "x": 0, "y": 0, "w": "FW", "h": 1, "color": [150,150,150,1], "shadowColor": [0,0,0,0.5]
					},
					{
						"type": "button", "jaxId": "1FO7PTS7K0", "id": "BtnSize", "x": 0, "y": 0, "w": "FW", "h": 4, "autoLayout": 1, "cursor": "row-resize", "drag": 1, 
						"zIndex": 6, 
						"hudBtnUp": {
							"type": "box", "jaxId": "1FO7PTS7K8", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, "color": [180,180,180,0], "shadowColor": [0,0,0,0.5]
						},
						"hudBtnDown": {
							"type": "box", "jaxId": "1FO7PTS7K10", "x": 0, "y": 0, "w": "FW", "h": 4, "color": [80,80,80,1], "shadowColor": [0,0,0,0.5]
						},
						"hudBtnOver": {
							"type": "box", "jaxId": "1FO7PTS7K12", "x": 0, "y": 0, "w": "FW", "h": 4, "shadowColor": [0,0,0,0.5]
						},
						//函数
						OnDragStart:function(e){
							/*#{1FO7PTS7K2Code*/
							this.oy=this.y;
							this.oh=self.BoxBtm.h;
							this.uiEvent=0;
							this.hudBtnUp.color=[0,0,0,0.5];
							self.BoxBtmDock.display=0;
							/*}#1FO7PTS7K2Code*/
						},
						//函数
						OnDrag:function(e, dx, dy){
							/*#{1FO7PTS7K4Code*/
							let y,h;
							y=this.oy+dy;
							h=this.oh-dy;
							if(h<50){
								y-=50-h;
							}
							this.y=y;
							/*}#1FO7PTS7K4Code*/
						},
						//函数
						OnDragEnd:function(e, cancel, dx, dy){
							/*#{1FO7PTS7K6Code*/
							let h;
							h=appCfg.size.btmBoxH-dy;
							h=h<50?50:h;
							this.uiEvent=1;
							jaxApp.setBtmBoxH(h);
							this.hudBtnUp.color=[0,0,0,0];
							this.y=0;
							this.state=0;
							self.BoxBtmDock.display=1;
							/*}#1FO7PTS7K6Code*/
						}
					},
					{
						"type": "box", "jaxId": "1FO94V7HU0", "id": "BoxBtmHead", "x": -2, "y": 0, "w": "FW+4", "h": 24, "autoLayout": 1, "color": appCfg.color.headBox, 
						"border": 1, "borderColor": [100,100,100,1], "shadowColor": [0,0,0,0.5], 
						items: [
							{
								"type": "text", "jaxId": "1FO9OM5HL0", "id": "TxtBtmName", "x": 5, "y": 2, "w": 100, "h": 20, "text": "Terminal", "color": [0,0,0], "alignV": 1, 
								"fontSize": appCfg.txtSize.smallMid
							}
						]
					},
					{
						"type": "hud", "jaxId": "1FOA3AUL80", "id": "BoxBtmDock", "x": 0, "y": 24, "w": "FW", "h": "FH-24", "autoLayout": 1, 
						items: [
							{
								"type": btmDock(app,null),"jaxId": "1FOA3AUL83", 
								"locked": 0, "id": "DockBtm", "x": 0, "y": 0
							}
						]
					}
				]
			}
		],
		faces: {
			"NaviOnDisk": {
				"$":function(vo){
					/*#{1FC2VF8JI0Func*/
					/*}#1FC2VF8JI0Func*/
				},
			},
			"NaviOnFolder": {
				"$":function(vo){
					/*#{1FC2VFQRA0Func*/
					/*}#1FC2VFQRA0Func*/
				},
			},
			"NaviOnNA": {
				"$":function(vo){
					/*#{1FC2VGK1V0Func*/
					/*}#1FC2VGK1V0Func*/
				},
			},
			"ListNoEntry": {
				"$":function(vo){
					/*#{1FC3NLOVO0Func*/
					/*}#1FC3NLOVO0Func*/
				},
			},
			"ListHasEntry": {
				"$":function(vo){
					/*#{1FC3NML120Func*/
					/*}#1FC3NML120Func*/
				},
			},
			"ListNoItem": {
				"$":function(vo){
					/*#{1FC3NN2S90Func*/
					/*}#1FC3NN2S90Func*/
				},
			},
			"ListHasItem": {
				"$":function(vo){
					/*#{1FC3NNNFA0Func*/
					/*}#1FC3NNNFA0Func*/
				},
			}
		},
		/*#{1FBR233GG1ExAttrs*/
		/*}#1FBR233GG1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FBR233GG1CreateFunc*/
			app.mainUI=this;
			this.showFace("NaviOnNA");
			this.showFace("ListNoEntry");
			this.showFace("ListNoItem");
			this.naviBox.OnHotChanged=this.OnNaviChanged.bind(this);
			this.BtnRunPrj.enable=false;
			stateBoxes[0]=this.BoxState1;
			stateBoxes[1]=this.BoxState2;
			stateBoxes[0].webObj.style.fontSize=appCfg.txtSize.smallMid+"px";
			stateBoxes[1].webObj.style.fontSize=appCfg.txtSize.smallMid+"px";
			//Init default tool box entry:
			if(!app.appParams.toolBox){
				//app.showToolBox("Tip");
			}
			self.BoxBtm.hold();
			self.BoxBtm.display=0;
			//self.removeChild(self.BoxBtm);
			self.BoxBtnBtm.rotate=180;
			/*}#1FBR233GG1CreateFunc*/
		
		}
	};
	/*#{1FBR233GG1ExViewDef*/

	//------------------------------------------------------------------------
	//Update button states
	cssVO.updateBtns=async function(){
		let prj,prjJSON;
		prj=app.appPrj;
		try{
			prjJSON=await fsp.readFile(`/${prj.diskName}/disk.json`,"utf8");
			prjJSON=JSON.parse(prjJSON);
			if(prjJSON.run){
				self.BtnRunPrj.enable=true;
			}else if(prjJSON.main){
				let ext;
				ext=pathLib.extname(prjJSON.main).toLowerCase();
				if(ext===".html" || ext===".htm" || ext===".js" || ext===".mjs"){
					self.BtnRunPrj.enable=true;
				}else{
					self.BtnRunPrj.enable=false;
				}
			}
		}catch(err){
			prjJSON=null;
			self.BtnRunPrj.enable=false;
		}
		//TODO: 
	};
	
	//------------------------------------------------------------------------
	//拖拽改变
	cssVO.relayout=function(){
		let naviW,toolW,btmH,showBtm,sizes;
		sizes=appCfg.size
		naviW=sizes.naviBoxW;
		toolW=sizes.toolBoxW;
		btmH=sizes.btmBoxH;
		showBtm=appCfg.ui.showBtmBox;

		//调整布局:
		self.BoxNavi.w=naviW;

		self.EditDock.x=naviW;
		self.EditDock.w="FW-"+(naviW+toolW);
		
		self.BoxTool.x="FW-"+appCfg.size.toolBoxW;
		self.BoxTool.w=appCfg.size.toolBoxW;

		//调整Header:
		self.BoxHeadNavi.w=naviW;
		self.BoxHeadEdit.x=naviW;
		self.BoxHeadEdit.w="FW-"+(naviW+toolW);
		self.BoxHeadTool.x="FW-"+toolW;
		self.BoxHeadTool.w=toolW;
		
		{
			let btmBox=self.BoxBtm;
			let editH;
			if(showBtm){
				btmBox.display=1;
				if(!btmBox.father){
					self.appendChild(btmBox);
				}
				editH=this.h-(sizes.stateBoxH+btmH+sizes.headerH);
				btmBox.y=this.h-(sizes.stateBoxH+btmH);
				btmBox.h=btmH;
			}else{
				btmBox.display=0;
				if(btmBox.father===self){
					//self.removeChild(btmBox);
				}
				btmH=0;
				editH=this.h-(sizes.stateBoxH+sizes.headerH);
			}
			self.EditDock.h=editH;
			self.BoxTool.h=editH;
			self.BoxNavi.h=editH;
		}
		
	};

	//------------------------------------------------------------------------
	//Navi选中项目改变
	cssVO.OnNaviChanged=function(item,hud,node){
		//TODO: Code this:
		if(item instanceof CCDisk){
			self.showFace("NaviOnDisk");
		}else if(item instanceof CCFolder){
			self.showFace("NaviOnFolder");
		}else{
			self.showFace("NaviOnNA");
		}
	};

	//------------------------------------------------------------------------
	//List入口目录改变
	cssVO.OnEntryChanged=function(item){
		if(!item){
			self.showFace("ListNoEntry");
		}else{
			self.showFace("ListHasEntry");
		}
	};

	//------------------------------------------------------------------------
	//List选中项目改变
	cssVO.OnListChanged=function(item,hud,node){
		if(!item){
			self.showFace("ListNoItem");
		}else{
			self.showFace("ListHasItem");
		}
	};
	
	//************************************************************************
	//:Dock Tool box related:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//Show named tool box:
		cssVO.showToolBox=async function(name){
			let ui;
			ui=await self.DockTools.showToolBox(name);
			if(ui){
				self.TxtToolName.text=ui.title||name;
			}else{
				self.TxtToolName.text="";
			}
		};
		
		//--------------------------------------------------------------------
		//ShowBottomBox:
		cssVO.showBtmBox=async function(name){
			let ui;
			ui=await self.DockBtm.showToolBox(name);
			if(ui){
				self.TxtBtmName.text=ui.title||name;
			}else{
				self.TxtBtmName.text="";
			}
		};
	}
	
	//************************************************************************
	//Bottom box related:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//Open BtmBox
		cssVO.openBtmBox=function(){
			appCfg.ui.showBtmBox=1;
			self.BoxBtnBtm.rotate=0;
			self.BtnBtm.tip="Close terminal";
			self.DockBtm.OnUIBoxOpen();
			self.relayout();
		};

		//--------------------------------------------------------------------
		//Close BtmBox
		cssVO.closeBtmBox=function(){
			appCfg.ui.showBtmBox=0;
			self.BoxBtnBtm.rotate=180;
			self.BtnBtm.tip="Open terminal";
			self.DockBtm.OnUIBoxClose();
			self.relayout();
		};

	}
	//************************************************************************
	//:StateBar functions:
	//************************************************************************
	{
		let clearTimer=null;
		//--------------------------------------------------------------------
		//Show a state text:
		cssVO.showStateText=function(text,time=5000,utext=null,func=null){
			let nxtBoxIdx,box;
			if(clearTimer){
				window.clearTimeout(clearTimer);
				clearTimer=null;
			}
			nxtBoxIdx=curStateBox?0:1;
			box=stateBoxes[nxtBoxIdx];
			box.webObj.innerText=text;
			if(utext){
				let span=document.createElement("span");
				span.style.textDecoration="underline";
				span.innerText=utext;
				box.webObj.appendChild(span);
			}
			if(func){
				box.OnTreeClick=func;
				box.cursor="pointer";
			}else{
				box.OnTreeClick=null;
				box.cursor="default";
			}
			stateBoxes[curStateBox].animate({type:"pose",y:-30,time:50});
			box.y=30;
			box.animate({type:"pose",y:4,time:50});
			if(time){
				clearTimer=window.setTimeout(()=>{
					self.showStateText("Ready.",0);
				},time);
			}
		};
		
	}
	/*}#1FBR233GG1ExViewDef*/
	
	return cssVO;
};

/*#{1FBR233GG0PostCode*/
/*}#1FBR233GG0PostCode*/

export {MainUI};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "MainUI.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FBR233GG0", 
//			"attrs": {
//				"viewName": "\"MainUI\"", "device": "iPad 1024x768", "w": "1024", "h": "768", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FBR233GG1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR233GG2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FBR233GG3", 
//						"attrs": {}, "funcs": {"jaxId":"1FBR233GG4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "1", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "autoLayout": "On"
//					}, 
//					"faces": null, 
//					"viewFaces": {
//						"jaxId": "1FBR233GG6", 
//						"entrys": [
//							{
//								"jaxId": "1FC2VF8JI0", 
//								"attrs": {"Face Name":"\"NaviOnDisk\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2VI60B0", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FC2VFQRA0", 
//								"attrs": {"Face Name":"\"NaviOnFolder\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2VI60B1", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FC2VGK1V0", 
//								"attrs": {"Face Name":"\"NaviOnNA\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2VI60B2", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FC3NLOVO0", 
//								"attrs": {"Face Name":"\"ListNoEntry\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC3NO7DJ0", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FC3NML120", 
//								"attrs": {"Face Name":"\"ListHasEntry\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC3NO7DJ1", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FC3NN2S90", 
//								"attrs": {"Face Name":"\"ListNoItem\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC3NO7DJ2", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FC3NNNFA0", 
//								"attrs": {"Face Name":"\"ListHasItem\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC3NO7DJ3", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							}
//						]
//					}, 
//					"funcs": {"jaxId":"1FBR233GG7","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "Gear1FCN3UDVQ0", "jaxId": "1FCPIKCAQ0", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCPIKCAQ1", 
//								"attrs": {
//									"w": {
//										"type": "string", "valText": "#\"FW-\"+(appCfg.size.naviBoxW+appCfg.size.toolBoxW)", "initVal": "", 
//										"info": null, "tip": null
//									}, 
//									"h": {
//										"type": "string", "valText": "#\"FH-\"+(appCfg.size.headerH+appCfg.size.stateBoxH)", "initVal": "", 
//										"info": null, "tip": null
//									}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCPIKCAQ2", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"EditDock\"", "x": "#appCfg.size.naviBoxW", "y": "#appCfg.size.headerH", "autoLayout": "Off", 
//								"display": "On"
//							}, 
//							"faces": null, "funcs": {"jaxId":"1FCPIKCAQ4","funcs":[]}
//						},
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FBR2OKUF0", 
//							"attrs": {
//								"locked": "1", "id": "\"BoxNavi\"", "x": "0", "y": "#appCfg.size.headerH", "w": "#appCfg.size.naviBoxW", "h": "#\"FH-\"+(appCfg.size.headerH+appCfg.size.stateBoxH)", 
//								"anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", "clip": "Off", "uiEvent": "On", "color": "#appCfg.color.window", "border": "0", 
//								"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", 
//								"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FBR2OKUF2","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FBR2FP3D0", 
//									"attrs": {
//										"locked": "1", "id": "\"Line\"", "x": "\"FW\"", "y": "0", "w": "1", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//										"clip": "Off", "uiEvent": "TreeOff", "color": "#787878", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", 
//										"shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", 
//										"cursor": "\"\"", "zIndex": "6"
//									}, 
//									"funcs": {"jaxId":"1FBR2FP3E0","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudBtn", "jaxId": "1FBR2OKUG1", 
//									"attrs": {
//										"locked": "1", "id": "\"BtnSize\"", "x": "\"FW\"", "y": "0", "w": "4", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"col-resize\"", "drag": "Move out", "enable": "On", 
//										"zIndex": "6"
//									}, 
//									"funcs": {
//										"jaxId": "1FBR2OKUG3", 
//										"funcs": [
//											{
//												"jaxId": "1FC1AR2AR14", "type": "object", "def": "OnDragStart", "name": "OnDragStart", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC1AR2AR15", 
//													"attrs": {"e":{"type":"auto","valText":"0","info":null,"tip":null}}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											},
//											{
//												"jaxId": "1FC1ANQGI15", "type": "object", "def": "OnDrag", "name": "OnDrag", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC1ANQGI16", 
//													"attrs": {
//														"e": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dx": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dy": {"type":"auto","valText":"0","info":null,"tip":null}
//													}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											},
//											{
//												"jaxId": "1FC1ANQGI17", "type": "object", "def": "OnDragEnd", "name": "OnDragEnd", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC1ANQGI18", 
//													"attrs": {
//														"e": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"cancel": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dx": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dy": {"type":"auto","valText":"0","info":null,"tip":null}
//													}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}, 
//									"btnHuds": {
//										"hudBtnUp": {
//											"type": "object", "def": "HudBox", "jaxId": "1FC1D5KPO0", 
//											"attrs": {
//												"locked": "1", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "color": "[180,180,180,0]", "border": "0", "borderStyle": "Solid", 
//												"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//												"shadowColor": "[0,0,0,0.5]", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FC1D5KPO2","funcs":[]}, "subs": []
//										}, 
//										"hudBtnDown": {
//											"type": "object", "def": "HudBox", "jaxId": "1FBR2OKUG4", 
//											"attrs": {
//												"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "4", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[80,80,80,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", 
//												"shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", 
//												"cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR2OKUG6","funcs":[]}, "subs": []
//										}, 
//										"hudBtnOver": {
//											"type": "object", "def": "HudBox", "jaxId": "1FBR2L1EC0", 
//											"attrs": {
//												"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "4", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[180,180,180,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//												"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//												"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR2L1EC2","funcs":[]}, "subs": []
//										}
//									}, 
//									"subs": []
//								},
//								{
//									"type": "object", "def": "HudDock", "jaxId": "1FNGGU3PG0", 
//									"attrs": {
//										"locked": "0", "id": "\"DockNavi\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "ui": "0", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FNGH1GQN9","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "Gear1FBS9Q16V0", "jaxId": "1FNGCTUGC0", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNGCTUGC1", 
//												"attrs": {}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNGCTUGC2", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"naviBox\"", "x": "0", "y": "0", "autoLayout": "Off"
//											}, 
//											"faces": null, "funcs": {"jaxId":"1FNGCTUGC3","funcs":[]}
//										}
//									]
//									
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FCKH97PF0", 
//							"attrs": {
//								"locked": "1", "id": "\"BoxTool\"", "x": "#\"FW-\"+appCfg.size.toolBoxW", "y": "#appCfg.size.headerH", "w": "#appCfg.size.toolBoxW", "h": "#\"FH-\"+(appCfg.size.headerH+appCfg.size.stateBoxH)", 
//								"anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", "clip": "Off", "uiEvent": "On", "color": "#appCfg.color.window", "border": "0", 
//								"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", 
//								"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FCKH97PG0","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FCKH97PH0", 
//									"attrs": {
//										"locked": "1", "id": "\"Line\"", "x": "-1", "y": "0", "w": "1", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//										"clip": "Off", "uiEvent": "TreeOff", "color": "#787878", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", 
//										"shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", 
//										"cursor": "\"\"", "zIndex": "6"
//									}, 
//									"funcs": {"jaxId":"1FCKH97PH1","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudBtn", "jaxId": "1FCKH97PH2", 
//									"attrs": {
//										"locked": "1", "id": "\"BtnToolSize\"", "x": "-3", "y": "0", "w": "4", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"col-resize\"", "drag": "Move out", "enable": "On", 
//										"zIndex": "6"
//									}, 
//									"funcs": {
//										"jaxId": "1FCKH97PH3", 
//										"funcs": [
//											{
//												"jaxId": "1FCKH97PI0", "type": "object", "def": "OnDragStart", "name": "OnDragStart", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCKH97PI1", 
//													"attrs": {"e":{"type":"auto","valText":"0","info":null,"tip":null}}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											},
//											{
//												"jaxId": "1FCKH97PI2", "type": "object", "def": "OnDrag", "name": "OnDrag", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCKH97PI3", 
//													"attrs": {
//														"e": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dx": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dy": {"type":"auto","valText":"0","info":null,"tip":null}
//													}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											},
//											{
//												"jaxId": "1FCKH97PI4", "type": "object", "def": "OnDragEnd", "name": "OnDragEnd", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCKH97PI5", 
//													"attrs": {
//														"e": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"cancel": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dx": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dy": {"type":"auto","valText":"0","info":null,"tip":null}
//													}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}, 
//									"btnHuds": {
//										"hudBtnUp": {
//											"type": "object", "def": "HudBox", "jaxId": "1FCKH97PJ0", 
//											"attrs": {
//												"locked": "1", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "color": "[180,180,180,0]", "border": "0", "borderStyle": "Solid", 
//												"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//												"shadowColor": "[0,0,0,0.5]", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FCKH97PJ1","funcs":[]}, "subs": []
//										}, 
//										"hudBtnDown": {
//											"type": "object", "def": "HudBox", "jaxId": "1FCKH97PJ2", 
//											"attrs": {
//												"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "4", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[80,80,80,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", 
//												"shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", 
//												"cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FCKH97PJ3","funcs":[]}, "subs": []
//										}, 
//										"hudBtnOver": {
//											"type": "object", "def": "HudBox", "jaxId": "1FCKH97PJ4", 
//											"attrs": {
//												"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "4", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[180,180,180,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//												"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//												"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FCKH97PJ5","funcs":[]}, "subs": []
//										}
//									}, 
//									"subs": []
//								},
//								{
//									"type": "object", "def": "Gear1FNHSEUAJ0", "jaxId": "1FNI2SRA80", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNI2SRA81", 
//										"attrs": {}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FNI2SRA82", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"DockTools\"", "x": "0", "y": "0", "autoLayout": "On"
//									}, 
//									"faces": null, "funcs": {"jaxId":"1FNI2SRA84","funcs":[]}
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FBR26ACL0", 
//							"attrs": {
//								"locked": "1", "id": "\"BoxHead\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "#appCfg.size.headerH", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "color": "#appCfg.color.headBox", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", 
//								"coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", 
//								"alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FBR26ACL2","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FBR2C50N0", 
//									"attrs": {
//										"locked": "1", "id": "\"BtmLine\"", "x": "0", "y": "#appCfg.size.headerH", "w": "\"FW\"", "h": "1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "color": "#787878", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//										"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//										"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR2C50N2","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudObj", "jaxId": "1FBR4H3UE0", 
//									"attrs": {
//										"locked": "1", "id": "\"BoxHeadNavi\"", "x": "0", "y": "0", "w": "#appCfg.size.naviBoxW", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", 
//										"autoLayout": "Off", "display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR4H3UE2","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudBox", "jaxId": "1FBR4H3UF0", 
//											"attrs": {
//												"locked": "1", "id": "\"\"", "x": "3", "y": "3", "w": "1", "h": "\"FH-6\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[150,150,150,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//												"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//												"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR4H3UF2","funcs":[]}, "subs": []
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FBR4H3UF3", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4H3UF4", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "24", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"fileadd.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4H3UF5", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnNewFile\"", "x": "6", "y": "\"(FH-24)/2\"", 
//												"tip": {
//													"type": "auto", "valText": "\"Add new file\"", "initVal": undefined, 
//													"info": null, "tip": null
//												}, 
//												"autoLayout": "Off"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FBR4H3UF7", 
//												"funcs": [
//													{
//														"jaxId": "1FC2G7GMM0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2G8P0U0", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FC2R95CR0", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2R95CR1", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "24", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"save.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2R95CR2", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnDownloadDisk\"", "x": "30", "y": "\"(FH-24)/2\"", 
//												"tip": {"type":"auto","valText":"\"Save file\"","info":null,"tip":null}, "autoLayout": "Off"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FC2R95CR3", 
//												"funcs": [
//													{
//														"jaxId": "1FC2R95CR4", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2R95CR5", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FLRJLDE10", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FLRJLDE11", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "24", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"run.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FLRJLDE12", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnRunPrj\"", "x": "54", "y": "\"(FH-24)/2\"", 
//												"tip": {
//													"type": "auto", "valText": "\"Run project\"", "initVal": undefined, 
//													"info": null, "tip": null
//												}, 
//												"autoLayout": "Off"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FLRJLDE13", 
//												"funcs": [
//													{
//														"jaxId": "1FLRJLDE14", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FLRJLDE15", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										}
//									]
//									
//								},
//								{
//									"type": "object", "def": "HudObj", "jaxId": "1FBR4QL5B0", 
//									"attrs": {
//										"locked": "1", "id": "\"BoxHeadEdit\"", "x": "#appCfg.size.naviBoxW", "y": "0", "w": "#\"FW-\"+(appCfg.size.naviBoxW+appCfg.size.toolBoxW)", 
//										"h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", 
//										"cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR4QL5B1","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudBox", "jaxId": "1FBR4QL5B2", 
//											"attrs": {
//												"locked": "1", "id": "\"\"", "x": "0", "y": "3", "w": "1", "h": "\"FH-6\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[150,150,150,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//												"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//												"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR4QL5C0","funcs":[]}, "subs": []
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FCQ0T4GC0", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCQ0T4GC1", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "20", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"btncombo.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCQ0T4GC2", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnDocList\"", "x": "\"FW-25\"", "y": "\"(FH-20)/2\"", "autoLayout": "On"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FCQ0T4GC4", 
//												"funcs": [
//													{
//														"jaxId": "1FCTKERML0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCTKERML1", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										},
//										{
//											"type": "object", "def": "Gear1FCPT6UAC0", "jaxId": "1FCQ1CB6I0", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCQ1CB6I1", 
//												"attrs": {
//													"w": {
//														"type": "string", "valText": "\"FW-28\"", "initVal": "", "info": null, 
//														"tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCQ1CB6I2", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"TabBox\"", "x": "3", "y": "0", "autoLayout": "On"
//											}, 
//											"faces": null, "funcs": {"jaxId":"1FCQ1CB6I4","funcs":[]}
//										}
//									]
//									
//								},
//								{
//									"type": "object", "def": "HudObj", "jaxId": "1FCQ0NKC20", 
//									"attrs": {
//										"locked": "1", "id": "\"BoxHeadTool\"", "x": "#\"FW-\"+appCfg.size.toolBoxW", "y": "0", "w": "#appCfg.size.toolBoxW", "h": "\"FH\"", "anchorH": "Left", 
//										"anchorV": "Top", "autoLayout": "On", "display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FCQ0NKC30","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudBox", "jaxId": "1FCQ0NKC31", 
//											"attrs": {
//												"locked": "1", "id": "\"\"", "x": "0", "y": "3", "w": "1", "h": "\"FH-6\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[150,150,150,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//												"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//												"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FCQ0NKC32","funcs":[]}, "subs": []
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FMU6306Q0", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMU6306Q1", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "20", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"btncombo.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMU6306Q2", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnToolList\"", "x": "\"FW-25\"", "y": "\"(FH-20)/2\"", "autoLayout": "On"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FMU6306Q3", 
//												"funcs": [
//													{
//														"jaxId": "1FMU6306Q4", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FMU6306Q5", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										},
//										{
//											"type": "object", "def": "HudTxt", "jaxId": "1FOGK74C40", 
//											"attrs": {
//												"locked": "0", "id": "\"TxtToolName\"", "x": "\"FW-130\"", "y": "5", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//												"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Tool Name\"", "color": "[0,0,0]", 
//												"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Right", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//												"bold": "0", "italic": "0", "underline": "0"
//											}, 
//											"funcs": {"jaxId":"1FOGK74C41","funcs":[]}, "subs": []
//										}
//									]
//									
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FBR439899", 
//							"attrs": {
//								"locked": "1", "id": "\"BoxState\"", "x": "0", "y": "\"FH\"", "w": "\"FW\"", "h": "#appCfg.size.stateBoxH", "anchorH": "Left", "anchorV": "Bottom", 
//								"autoLayout": "On", "display": "Show", "clip": "On", "uiEvent": "On", "color": "#appCfg.color.stateBox", "border": "0", "borderStyle": "Solid", 
//								"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//								"shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FBR4398911","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FBR46FJ50", 
//									"attrs": {
//										"locked": "1", "id": "\"Line\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "color": "[150,150,150,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//										"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//										"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR46FJ52","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudObj", "jaxId": "1FO3SH7IH0", 
//									"attrs": {
//										"locked": "0", "id": "\"BoxState1\"", "x": "28", "y": "4", "w": "\"FW-100\"", "h": "\"FH-6\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FO3SH7IH2","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudObj", "jaxId": "1FO3SH8P20", 
//									"attrs": {
//										"locked": "0", "id": "\"BoxState2\"", "x": "28", "y": "4", "w": "\"FW-100\"", "h": "\"FH-6\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FO3SH8P21","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FO3UTJII0", 
//									"attrs": {
//										"locked": "0", "id": "\"TxtCM\"", "x": "\"FW-10\"", "y": "0", "w": "100", "h": "24", "anchorH": "Right", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"www.cokecodes.com\"", 
//										"color": "[120,120,120]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Right", "alignV": "Center", 
//										"font": "\"\"", "fontSize": "#appCfg.txtSize.small", "bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FO3UTJII2","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudObj", "jaxId": "1FO90HKGL0", 
//									"attrs": {
//										"locked": "0", "id": "\"BoxBtnBtm\"", "x": "15", "y": "12", "w": "20", "h": "20", "anchorH": "Center", "anchorV": "Center", "autoLayout": "Off", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FO90HP5P1","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FO90GE7H0", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO90GE7H1", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "20", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"btncombo.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO90GE7H2", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnBtm\"", "x": "0", "y": "0", "autoLayout": "Off", 
//												"tip": {
//													"type": "auto", "valText": "\"Show terminal\"", "initVal": undefined, 
//													"info": null, "tip": null
//												}
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FO90GE7I0", 
//												"funcs": [
//													{
//														"jaxId": "1FO90SMH40", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO90TDFD0", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										}
//									]
//									
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FO7PUQCN0", 
//							"attrs": {
//								"locked": "0", "id": "\"BoxBtm\"", "x": "0", "y": "#\"FH-\"+(appCfg.size.stateBoxH+appCfg.size.btmBoxH)", "w": "\"FW\"", "h": "#appCfg.size.btmBoxH", 
//								"anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", 
//								"zIndex": "0", "color": "#appCfg.color.window", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", 
//								"shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//							}, 
//							"funcs": {"jaxId":"1FO7PUQCN2","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FO7PSTPV0", 
//									"attrs": {
//										"locked": "1", "id": "\"Line\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "color": "[150,150,150,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//										"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//										"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FO7PSTPV1","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudBtn", "jaxId": "1FO7PTS7K0", 
//									"attrs": {
//										"locked": "1", "id": "\"BtnSize\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "4", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"row-resize\"", "drag": "Move out", "enable": "On", "zIndex": "6"
//									}, 
//									"funcs": {
//										"jaxId": "1FO7PTS7K1", 
//										"funcs": [
//											{
//												"jaxId": "1FO7PTS7K2", "type": "object", "def": "OnDragStart", "name": "OnDragStart", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO7PTS7K3", 
//													"attrs": {"e":{"type":"auto","valText":"0","info":null,"tip":null}}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											},
//											{
//												"jaxId": "1FO7PTS7K4", "type": "object", "def": "OnDrag", "name": "OnDrag", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO7PTS7K5", 
//													"attrs": {
//														"e": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dx": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dy": {"type":"auto","valText":"0","info":null,"tip":null}
//													}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											},
//											{
//												"jaxId": "1FO7PTS7K6", "type": "object", "def": "OnDragEnd", "name": "OnDragEnd", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FO7PTS7K7", 
//													"attrs": {
//														"e": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"cancel": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dx": {"type":"auto","valText":"0","info":null,"tip":null}, 
//														"dy": {"type":"auto","valText":"0","info":null,"tip":null}
//													}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}, 
//									"btnHuds": {
//										"hudBtnUp": {
//											"type": "object", "def": "HudBox", "jaxId": "1FO7PTS7K8", 
//											"attrs": {
//												"locked": "1", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "color": "[180,180,180,0]", "border": "0", "borderStyle": "Solid", 
//												"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//												"shadowColor": "[0,0,0,0.5]", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FO7PTS7K9","funcs":[]}, "subs": []
//										}, 
//										"hudBtnDown": {
//											"type": "object", "def": "HudBox", "jaxId": "1FO7PTS7K10", 
//											"attrs": {
//												"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "4", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[80,80,80,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", 
//												"shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", 
//												"cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FO7PTS7K11","funcs":[]}, "subs": []
//										}, 
//										"hudBtnOver": {
//											"type": "object", "def": "HudBox", "jaxId": "1FO7PTS7K12", 
//											"attrs": {
//												"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "4", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[180,180,180,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//												"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//												"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FO7PTS7L0","funcs":[]}, "subs": []
//										}
//									}, 
//									"subs": []
//								},
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FO94V7HU0", 
//									"attrs": {
//										"locked": "0", "id": "\"BoxBtmHead\"", "x": "-2", "y": "0", "w": "\"FW+4\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.headBox", 
//										"border": "1", "borderStyle": "Solid", "borderColor": "[100,100,100,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", 
//										"shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//									}, 
//									"funcs": {"jaxId":"1FO94V7HU2","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudTxt", "jaxId": "1FO9OM5HL0", 
//											"attrs": {
//												"locked": "0", "id": "\"TxtBtmName\"", "x": "5", "y": "2", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//												"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Terminal\"", "color": "[0,0,0]", 
//												"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//												"bold": "0", "italic": "0", "underline": "0"
//											}, 
//											"funcs": {"jaxId":"1FO9OM5HL2","funcs":[]}, "subs": []
//										}
//									]
//									
//								},
//								{
//									"type": "object", "def": "HudObj", "jaxId": "1FOA3AUL80", 
//									"attrs": {
//										"locked": "0", "id": "\"BoxBtmDock\"", "x": "0", "y": "24", "w": "\"FW\"", "h": "\"FH-24\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FOA3AUL82","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "Gear1FO94OF5S0", "jaxId": "1FOA3AUL83", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOA3AUL84", 
//												"attrs": {}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOA3AUL85", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"DockBtm\"", "x": "0", "y": "0", "autoLayout": "Off"
//											}, 
//											"faces": null, "funcs": {"jaxId":"1FOA3AUL87","funcs":[]}
//										}
//									]
//									
//								}
//							]
//							
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FBR233GG8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FBR233GG10","entrys":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "NoteSpot", "jaxId": "1FLRKM9790", 
//							"attrs": {
//								"locked": "0", "id": "\"\"", "x": "76", "y": "29", "text": "\"0\"", "color": "[220,150,30,1]"
//							}, 
//							"funcs": {"jaxId":"1FLRKM9792","funcs":[]}, "subs": []
//						}
//					]
//				}
//			}
//		}/*Doc}#*/;
//	}