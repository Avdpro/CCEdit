//Auto genterated by Cody
/*#{AppImport*/
//JAX Lib：
import {JAXEnv} from "/jaxweb/lib/JAXEnv.js";
import {JAXApp} from "/jaxweb/lib/JAXApp.js";
import {JAXDisk} from "/jaxweb/lib/JAXDisk.js";
import {} from "/jaxweb/lib/JAXHudLib.js";
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js";
import {appCfg} from "./cfg/appCfg.js";
import {textLib} from "./text/textLib.js";
import {appData} from "./appData.js";
import {CCDisk} from "./data/CCDisk.js"
import {CCFolder} from "./data/CCFolder.js"
import {CCFile} from "./data/CCFile.js"
import {CCDoc} from "./data/CCDoc.js"
import {CCProject} from "./data/CCProject.js"
import wordLib from "./lib/ccjshint.js"

import {} from "./lib/CCEditorCM5.js"
import {} from "./lib/CCEditorCM5Conflict.js"
import {} from "./lib/CCEditorChanges.js"
import {editUI} from "./gear/editUI.js"
import {dlgDocList} from "./ui/dlgDocList.js"
import pathLib from "/@path";
import {fsPromises as fsp} from "/@fs";
import CokeEnv from "/jaxweb/lib/CokeEnv.js";
import addOnCfg from "./addons.js";
/*}#AppImport*/
import {MainUI} from "./ui/MainUI.js";
var entryUI=MainUI;
/*#{AppEnv-Pre*/
let jaxDiv=document.getElementById("JAXAppFrame");
var jaxApp,jaxEnv,appURL,docPath,diskPath,appPath,dirPath,appParams;
var hotBox=null;

jaxDiv.style.height=window.innerHeight+"px";
jaxDiv.style.background="#F0F0F0";

appPath=document.location.pathname;
if(appPath.startsWith("//")){
	appPath=appPath.substring(1);
}
docPath=appURL=document.location.href;
dirPath=pathLib.dirname(document.location.pathname);
if(dirPath.startsWith("//")){
	dirPath=dirPath.substring(1);
}
console.log("Dir Path: "+dirPath);

//----------------------------------------------------------------------------
//Parse URL params:
{
	let pos;
	let appURL=document.location.href;
	appParams={};
	pos=appURL.indexOf("?");
	if(pos<0){
		pos=appURL.indexOf("#");
	}
	if(pos>0){
		let ptext,list;
		ptext=appURL.substring(pos+1);
		list=ptext.split("&");
		list.forEach(item=>{
			let subs,key,val;
			subs=item.split("=");
			if(subs.length===2){
				key=decodeURIComponent(subs[0]);
				val=decodeURIComponent(subs[1]);
				appParams[key]=val;
			}
		});
	}
}

if(appParams.cokeExecCmd){
	let vo=JSON.parse(appParams.cokeExecCmd);
	let cmd=vo.cmd;
	let path=vo.path;
	let pts=cmd.split(" ");
	let filePath=pts[1];
	if(filePath[0]!=="/"){
		filePath=pathLib.join(vo.path,filePath);
	}
	CokeEnv.chdir(vo.path);
	appParams.disk=CokeEnv.diskName(filePath);
	appParams.file=CokeEnv.pathByDisk(filePath);
}
if(appParams.disk){
	document.title="CCEdit: "+appParams.disk;
}else{
	document.title="CCEdit";
}

//----------------------------------------------------------------------------
//Watch URL change:
document.location.hash="";
function locationHashChanged() {
	let newHash,list,params;
	newHash=document.location.hash;
	newHash=newHash?newHash.substring(1):"";
	params={};
	list=newHash.split("&");
	list.forEach(item=>{
		let subs,key,val;
		subs=item.split("=");
		if(subs.length===2){
			key=decodeURIComponent(subs[0]);
			val=decodeURIComponent(subs[1]);
			params[key]=val;
		}
	});
	if(params.file){
		jaxApp.openItem(params.file);
	}
	document.location.hash="";
};

window.onhashchange = locationHashChanged;

//Ask before close:
window.onbeforeunload=function (e) {
	// Cancel the event
	e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
	// Chrome requires returnValue to be set
	e.returnValue = 'Are you sure to close code editor? Unsaved changes will be lost.';
	return 'Are you sure to close code editor? Unsaved changes will be lost.';
};

//----------------------------------------------------------------------------
//Init JAXEnv and app:
jaxEnv=new JAXEnv(jaxDiv);
window.jaxApp=jaxApp=jaxEnv.createApp();

//First, init JAXDisk system, when done, start the App:
CCDisk.init(jaxApp).then(()=>{
	jaxApp.appParams=appParams;
	jaxApp.dirPath=dirPath;
	jaxApp.appPath=appPath;
	jaxApp.appCfg=appCfg;
	jaxApp.textLib=textLib["EN"];
	jaxApp.appData=appData;
	initData();
	/*appData.initData(diskPath).then(()=>{
		startApp();
	});*/
});
//----------------------------------------------------------------------------
//Init data:
function initData(){
	let result;
	result=appData.initData(jaxEnv);
	if(result instanceof Promise){
		result.then(startApp,(error)=>{jaxEnv.logError(error)});
	}else{
		startApp();
	}
	//TODO: Code this:
	
}

//----------------------------------------------------------------------------
//Focus lose callback:
window.addEventListener("blur",()=>{
});

//----------------------------------------------------------------------------
//Focus gain callback:
window.addEventListener("focus",()=>{
	let doc=CCDoc.getHotDoc();
	if(doc){
		doc.checkModify();
	}
});

//----------------------------------------------------------------------------
//Start the app:
function startApp() {
	var appDef, isShowDlg, appState;
	var dlgList = [];

	appState=jaxHudState(jaxEnv,{
/*}#AppEnv-Pre*/
/*#{AppEnv-Mid*/
	});
	
	//************************************************************************
	//:Load addons:
	//************************************************************************
	{
		let defs=addOnCfg.toolBoxes;
		for(let i=0,n=defs.length;i<n;i++){
			appData.regToolBox(defs[i]);
		}
		defs=addOnCfg.naviBoxes;
		for(let i=0,n=defs.length;i<n;i++){
			appData.regNaviBox(defs[i]);
		}
		defs=addOnCfg.btmBoxes;
		for(let i=0,n=defs.length;i<n;i++){
			appData.regBtmBox(defs[i]);
		}
	}

	//************************************************************************
	//App actions:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//New doc:
		jaxApp.DoNewDoc=async function(){
			let curDoc,path,doc;
			curDoc=CCDoc.getHotDoc();
			if(curDoc){
				path=pathLib.dirname(curDoc.path);
				if(path==="."){
					path="newfile.txt";
				}else if(path){
					path=path+"/newfile.txt";
				}else{
					path="newfile.txt";
				}
			}else{
				path="newfile.txt";
			}
			path=window.prompt("New doc file",path);
			if(path===null){
				return;
			}
			doc=await CCDoc.newDoc(jaxApp.appData,path,"");
			CCDoc.activeDoc(doc);
			jaxApp.editDock.showNewUI(editUI(jaxApp),{doc:doc});
			jaxApp.tabDockBox.addTab(doc);
			jaxApp.setFocusBox(jaxApp.editDock);

			jaxApp.showStateText(`New file ${doc.path} created.`);

			//Update new navi item:
			let node=await jaxApp.naviBox.showItemByDiskPath(doc.diskPath,1,1);
			if(node){
				node.updateMark();
			}
		};
		
		//--------------------------------------------------------------------
		//Save doc, save edit state too
		jaxApp.DoSaveDoc=async function(){
			let doc,text;
			doc=CCDoc.getHotDoc();
			if(doc){
				await doc.saveDoc();
			}
			if(jaxApp.appPrj){
				let list;
				list=jaxApp.tabDockBox.getTabDocs().map(item=>item.path);
				jaxApp.appPrj.tabDocs=list;
				jaxApp.appPrj.editorCfg={
					naviBoxW:appCfg.size.naviBoxW,
					toolBoxW:appCfg.size.toolBoxW,
					toolBox:jaxApp.toolDock.getToolCodeName(),
				};
				jaxApp.appPrj.savePrj();
			}
			if(doc){
				jaxApp.showStateText(`File ${doc.path} and project edit state saved.`);
				//Update new navi item:
				let node=await jaxApp.naviBox.showItemByDiskPath(doc.diskPath,1,1);
				if(node){
					node.updateMark();
				}
			}else{
				jaxApp.showStateText(`Project edit state saved.`);
			}
		};
		
		//--------------------------------------------------------------------
		//Save current doc as another file, save edit state too
		jaxApp.DoSaveAsDoc=async function(){
			let curDoc,path,doc,ext,text;
			curDoc=CCDoc.getHotDoc();
			if(!curDoc){
				return;
			}
			text=curDoc.getCodeText();
			path=pathLib.dirname(curDoc.path);
			ext=pathLib.extname(curDoc.path);
			if(path==="."){
				path="newfile"+ext;
			}else{
				path=path+"/newfile"+ext;
			}
			path=window.prompt("Save doc file as:",path);
			if(path===null){
				return;
			}
			doc=await CCDoc.newDoc(jaxApp.appData,path,text);
			CCDoc.activeDoc(doc);
			jaxApp.editDock.showNewUI(editUI(jaxApp),{doc:doc});
			jaxApp.tabDockBox.addTab(doc);
			jaxApp.setFocusBox(jaxApp.editDock);

			if(jaxApp.appPrj){
				let list;
				list=jaxApp.tabDockBox.getTabDocs().map(item=>item.path);
				jaxApp.appPrj.tabDocs=list;
				jaxApp.appPrj.editorCfg={
					naviBoxW:appCfg.size.naviBoxW,
					toolBoxW:appCfg.size.toolBoxW,
					toolBox:jaxApp.toolDock.getToolCodeName(),
				};
				jaxApp.appPrj.savePrj();
			}

			//New navi item:
			jaxApp.naviBox.showItemByDiskPath(doc.diskPath,1,1);
			jaxApp.showStateText(`New file ${doc.path} created.`);
		};

		//--------------------------------------------------------------------
		//Reload edior env by prj
		jaxApp.DoReloadEditor=async function(){
			let list,i,n,prj,cfg,lastDoc,toolName;
			prj=jaxApp.appPrj;
			list=prj.tabDocs;
			if(list){
				n=list.length;
				for(i=0;i<n;i++){
					await jaxApp.litOpenFile(list[i]);
				}
			}
			list=prj.prjOpenDocs;
			if(list){
				n=list.length;
				for(i=0;i<n;i++){
					lastDoc=await jaxApp.litOpenFile(list[i]);
				}
			}
			//Open the URL's file
			if(appParams.file){
				await jaxApp.openItem(appParams.file);
				let doc=CCDoc.getHotDoc();
				if(doc){
					await jaxApp.focusDoc(doc,1);
				}
			}else{
				let doc=CCDoc.getHotDoc();
				await jaxApp.focusDoc(doc,1);
			}
			cfg=prj.editorCfg;
			if(cfg){
				if(cfg.naviBoxW>0){
					jaxApp.setNaviBoxW(cfg.naviBoxW);
				}
				if(cfg.toolBoxW){
					jaxApp.setToolBoxW(cfg.toolBoxW);
				}
				toolName=cfg.toolBox||"Tip";
			}else{
				toolName="Tip";
			}
			if(appParams.toolBox && appParams.flie){
				toolName=appParams.toolBox;
				appParams.toolBox=null;
			}
			let toolUI=await jaxApp.toolDock.showToolBox(toolName);
			if(!toolUI){
				jaxApp.toolDock.showToolBox("Tip");
			}
			
			jaxApp.mainUI.updateBtns();
			jaxApp.showStateText(`Project "${prj.diskName}" loaded.`);
			prj.scanHints();
		};
		
		//--------------------------------------------------------------------
		//Run disk project by /diskName/disk.json
		jaxApp.DoRunPrj=async function(){
			let url,prj,prjJSON,runVO;
			prj=jaxApp.appPrj;
			try{
				prjJSON=await fsp.readFile(`/${prj.diskName}/disk.json`,"utf8");
				prjJSON=JSON.parse(prjJSON);
				runVO=prjJSON.run;
				if(runVO && runVO.main){
					let ext,args;
					ext=pathLib.extname(runVO.main);
					args=runVO.args||"";
					if(ext===".html" || ext===".htm"){
						url=document.location.origin+`//${prj.diskName}/${prjJSON.main}`;
						if(args){
							url+="?"+args;
						}
						window.open(url,"CCEditRun-"+prj.diskName);
					}else if(ext===".js" || ext===".mjs"){
						let execVO={
							path:"/"+prj.diskName,
							cmds:`coke ${runVO.main} ${args}`
						};
						url=document.location.origin+`/@terminal?cokeExecCmd=${encodeURIComponent(JSON.stringify(execVO))}`;
						window.open(url,"CCEditRun-"+prj.diskName);
					}
				}else if(prjJSON.main){
					let ext;
					ext=pathLib.extname(prjJSON.main).toLowerCase();
					if(ext===".html" || ext===".htm"){
						url=document.location.origin+`//${prj.diskName}/${prjJSON.main}`;
						window.open(url,"CCEditRun-"+prj.diskName);
					}else{
						let execVO={
							path:"/"+prj.diskName,
							cmds:`coke ${prjJSON.main}`
						};
						url=document.location.origin+`/@terminal?cokeExecCmd=${encodeURIComponent(JSON.stringify(execVO))}`;
						window.open(url,"CCEditRun-"+prj.diskName);
					}
				}
			}catch(err){
				prjJSON=null;
				self.BtnRunPrj.enable=false;
			}
		};
		
		//--------------------------------------------------------------------
		//Resolve conflict, delete the conflict file:
		jaxApp.DoResolveConflict=async function(doc){
			if(doc!==CCDoc.getHotDoc()){
				return;
			}
			if(!doc.compareTgtDoc){
				return;
			}
			if(doc.isCodeChanged()){
				window.alert(`Edit conflict "${doc.compareTgtDoc.path}" has unsaved changes. Please save before resolve.`);
				return;
			}
			if(window.confirm(`Are you sure resolved conflict in "${doc.compareTgtDoc.path}"? Resolve will delete the conflict file.`)){
				let node,naviBox,disk;
				this.closeDoc(doc);
				disk=jaxApp.appPrj.disk.diskObj;
				await disk.del(doc.path);
				await disk.setEntryInfo(doc.compareTgtDoc.path,{conflict:false});

				naviBox=jaxApp.naviBox;
				node=await naviBox.nodeByDiskPath(doc.diskPath);
				if(node){
					naviBox.removeNode(node);
				}
				return;
			}
		};
	}
	
	//************************************************************************
	//APP appearence functions:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//Set focus box
		jaxApp.setFocusBox=function(box){
			if(box===hotBox){
				return;
			}
			if(hotBox){
				hotBox.OnAppBlur();
			}
			hotBox=box;
			if(hotBox){
				hotBox.OnAppFocus();
			}
			this.emitNotify("FocusBox");
		};
		
		//--------------------------------------------------------------------
		//In NaviBox, user selected a item:
		jaxApp.naviToItem=function(item,hud,node){
			if(jaxApp.naviBox.hotNode!==node){
				jaxApp.naviBox.setHotNode(node);
			}
			//Set app-hot-box
			jaxApp.setFocusBox(jaxApp.naviBox);
		};
		
		//--------------------------------------------------------------------
		//Open a item, if item is a doc, open editor, if item is a folder, open it in naviBox:
		jaxApp.openItem=async function(item,hud,node){
			if((typeof(item)==="string")||(item instanceof CCFile)){
				return CCDoc.openDoc(jaxApp.appData,item).then(async doc=>{
					jaxApp.focusDoc(doc,0);
				});
			}else if(item.getSubItems){
				return item.getSubItems().then((list)=>{
					if(list && list.length>0){
						hud.showFace("hasSub");
						node.subItems=list;
						jaxApp.naviBox.openNode(node);
					}else{
						hud.showFace("noSub");
					}
				});
			}
		};
		
		//--------------------------------------------------------------------
		//Open a file, if line param is >=0, focus that line:
		jaxApp.openFile=async function(item,line){
			if((typeof(item)==="string")||(item instanceof CCFile)){
				return CCDoc.openDoc(jaxApp.appData,item).then(async doc=>{
					jaxApp.focusDoc(doc,0,line);
				});
			}
		};

		//--------------------------------------------------------------------
		//Open a file, init it's tab, but don't create editUI, this can speed up start app.
		jaxApp.litOpenFile=async function(item,line){
			let doc;
			if((typeof(item)==="string")||(item instanceof CCFile)){
				doc=await CCDoc.openDoc(jaxApp.appData,item);
				CCDoc.activeDoc(doc);
				if(!doc.docTab){
					jaxApp.tabDockBox.addTab(doc);
				}
				return doc;
			}
		};
		
		//--------------------------------------------------------------------
		//Close a Doc:
		jaxApp.closeDoc=function(doc){
			let nxtDoc;
			if(!doc){
				let tab;
				tab=jaxApp.tabDockBox.getHotTab();
				if(tab){
					doc=tab.doc;
				}
			}
			if(!doc){
				return;
			}
			if(doc.isCodeChanged()){
				if(!window.confirm("File may changed, are you sure to close edit without saving?")){
					return;
				}
			}
			nxtDoc=CCDoc.closeDoc(doc);
			jaxApp.tabDockBox.closeDoc(doc);
			jaxApp.editDock.closeDoc(doc);
			if(nxtDoc){
				jaxApp.focusDoc(nxtDoc);
			}
		};
		
		//--------------------------------------------------------------------
		//Show a Doc:
		jaxApp.focusDoc=function(doc,naviShow=1,line){
			if(!doc)
				return;
			CCDoc.activeDoc(doc);
			if(!doc.editor){
				let uiDef,vo;
				//Use appData to get editor:
				uiDef=appData.getEditBoxRegByDoc(doc);
				vo={doc:doc};
				if(uiDef){
					jaxApp.editDock.showNewUI(editUI(jaxApp,uiDef),vo);
				}else{
					jaxApp.editDock.showNewUI(editUI(jaxApp),vo);
				}
			}
			if(!doc.docTab){
				jaxApp.tabDockBox.addTab(doc);
			}
			jaxApp.editDock.showDoc(doc,line);
			jaxApp.tabDockBox.setHotTab(doc.docTab);
			jaxApp.setFocusBox(jaxApp.editDock);
			//NaviBox focus doc's node:
			if(naviShow){
				jaxApp.naviBox.showItemByDiskPath(doc.diskPath,1);
			}
			this.emitNotify("FocusDoc");
		};
		
		//--------------------------------------------------------------------
		//Show switchDoc dialog:
		jaxApp.showSwitchDlg=function(btn){
			jaxApp.showDlg(dlgDocList,{btn:btn});
		};
		
		//--------------------------------------------------------------------
		//Set NaviBox width size
		jaxApp.setNaviBoxW=function(w){
			appCfg.size.naviBoxW=w;
			jaxApp.mainUI.relayout(w);
			return w;
		};

		//--------------------------------------------------------------------
		//Set ToolBox width size
		jaxApp.setToolBoxW=function(w){
			let def,name;
			appCfg.size.toolBoxW=w;
			jaxApp.mainUI.relayout(w);
			def=jaxApp.toolDock.curToolDef;
			if(def){
				if(def.ownBoxSize){
					name=def.codeName;
				}else{
					name=null;
				}
				jaxApp.appPrj.updateToolBoxSize(name,w);
			}
			return w;
		};
		
		//--------------------------------------------------------------------
		//Set BtmBox height size
		jaxApp.setBtmBoxH=function(h){
			appCfg.size.btmBoxH=h;
			jaxApp.mainUI.relayout(h);
			return h;
		};
		
		//--------------------------------------------------------------------
		//Show BtmBox
		jaxApp.showBtmBox=function(){
			appCfg.ui.showBtmBox=1;
			jaxApp.mainUI.openBtmBox();
		};

		//--------------------------------------------------------------------
		//Hide BtmBox
		jaxApp.hideBtmBox=function(){
			appCfg.ui.showBtmBox=0;
			jaxApp.mainUI.closeBtmBox();
		};

		//--------------------------------------------------------------------
		//Doc modified outside editor:
		jaxApp.OnDocModify=async function(doc){
			if(window.confirm(`File ${doc.fileObj.diskPath} has modified out of CCEdit, current doc has unsaved changes, do you want to load the modified contents?`)){
				await doc.reloadDoc();
				jaxApp.showStateText(`File ${doc.path} reloaded.`);
				let node=await jaxApp.naviBox.showItemByDiskPath(doc.diskPath,1,1);
				if(node){
					node.updateMark();
				}
				return true;
			}
			return false;
		};
	}
	
	//************************************************************************
	//Dock actions:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//Show a tool box by name:
		jaxApp.showToolBox=function(name){
			jaxApp.mainUI.showToolBox(name);
		};
		
		//--------------------------------------------------------------------
		//Show a navi box by name:
		jaxApp.showNaviBox=function(name){
			//TODO: Code this:
		}
	}

	//************************************************************************
	//StateBar
	//************************************************************************
	{
		jaxApp.showStateText=function(text,time,utext,func){
			jaxApp.mainUI.showStateText(text,time,utext,func);
		};
	}

	//************************************************************************
	//Dialog related:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//Show dialog:
		jaxApp.showDlg=function(dlgFunc,vo,shared=1){
			var dlgHud,dlgCSS,curDlg,checkBG;

			//Show dialog BG:
			if(!isShowDlg) {
				this.DlgLayer.attachLayer();
				isShowDlg = 1;
				checkBG=1;
			}
			//If there is a dialog, make it mute to user input. New dialog will be on top of it:
			curDlg=dlgList.length>0?dlgList[dlgList.length-1]:null;
			if(curDlg){
				curDlg.uiEvent=-1;
			}

			//If dialog is sharing instance, try use shared instance:
			if(shared){
				dlgHud=dlgFunc.sharedDlg;
				if(!dlgHud) {
					dlgCSS = dlgFunc(jaxApp);
					dlgHud = this.DlgBGBox.appendNewChild(dlgCSS);
					if (shared) {
						dlgFunc.sharedDlg = dlgHud;
						dlgHud.hold();
					}
				}else{
					this.DlgBGBox.appendChild(dlgHud);
				}
			}else{
				dlgCSS = dlgFunc(jaxApp);
				dlgHud = this.DlgBGBox.appendNewChild(dlgCSS);
				if (shared) {
					dlgFunc.sharedDlg = dlgHud;
				}
			}
			if(checkBG) {
				if (dlgHud.showDlgBGMask === 0) {
					this.DlgBGBox.color = [0, 0, 0, 0];
				} else {
					this.DlgBGBox.color = [0, 0, 0, 0.5];
				}
			}
			dlgHud.uiEvent=1;
			dlgHud.showDlg(vo);
			dlgList.push(dlgHud);
			return dlgHud;
		};

		//--------------------------------------------------------------------
		//Close dialog:
		jaxApp.closeDlg=function(dlg){
			var idx,preDlg;
			if(!dlg){
				idx=dlgList.length-1;
				dlg=dlgList[idx];
			}else{
				idx=dlgList.indexOf(dlg);
			}
			if(idx<0){
				//The dialog is hiding
				return;
			}
			this.DlgBGBox.removeChild(dlg);
			if(idx===dlgList.length-1){
				//This is the last one:
				preDlg=dlgList[idx-1];
				if(preDlg){
					preDlg.uiEvent=1;
				}
			}
			dlgList.splice(idx,1);
			//If no more dialog is showing, close dialog BG and layer:
			if(dlgList.length===0){
				this.DlgLayer.detachLayer();
				isShowDlg=0;
			}
		};
		
		//--------------------------------------------------------------------
		//Dialog BG been clicked:
		jaxApp.OnDlgBGClick=function(){
			let idx,dlg;
			idx=dlgList.length-1;
			dlg=dlgList[idx];
			if(dlg && dlg.OnBGClick){
				dlg.OnBGClick();
			}
		};
	}

	//************************************************************************
	//Tip related:
	//************************************************************************
	{
		let isTipShowing,tgtTipHud,tipTimer;
		let tipHud=null;
		const TIP_TIME=500;
		
		var cssTipBox;

		cssTipBox=function(jaxEnv,x,y,id,text)
		{
			var cssText,txtName;
			var tipAlignH=1,tipAlignV=0;
			cssText={
				type:"text",id:"txtName",x:0,y:0,w:"FW",h:"FH",autoLayout:1,
				text:text,fontSize:12,color:[255,255,255],bold:0,
				alignH:1,alignV:1
			};
			return {
				type:"box",id:id,x:x,y:y,w:200,h:20,display:0,anchorH:0,anchorV:0,
				color:[0,0,0,1],coner:3,shadow:1,
				items:[cssText],
				faces:{},
				OnCreate:function(){
					txtName=this.txtName;
				},
				show:function(x,y,text,alignH=1,alignV=0){
					tipAlignH=alignH;
					tipAlignV=alignV;
					this.x=x;
					this.y=y;
					this.text=text;
					this.display=1;
					this.animate({
						type:"html",
						keyframes:[
							{opacity:0},
							{opacity:1},
						],
						duration:200,
					});
				},
				hide:function(){
					this.display=0;
				},
				get "%text"(){return text;},
				set "%text"(newText){
					var w,h;
					text=newText;
					if(txtName) {
						txtName.text = text;
						w=txtName.textW;
						txtName.w=w+12;
						w=this.w=w+12;
						h=this.h;
						switch(tipAlignH){
							case 0:
								break;
							case 1:
								this.x-=w/2;
								break;
							case 2:
								this.x-=w;
								break;
						}
						switch(tipAlignV){
							case 0:
								break;
							case 1:
								this.y-=h/2;
								break;
							case 2:
								this.y-=h;
								break;
						}
						x=this.x;y=this.y;
						if(x<10){
							x=this.x=10;
						}
						if(x+w*0.5+10>=jaxEnv.jaxDiv.offsetWidth){
							x=this.x=jaxEnv.jaxDiv.offsetWidth-10-w*0.5;
						}
						if(y<10){
							y=this.y=10;
						}
						if(y+h+10>=jaxEnv.jaxDiv.offsetHeight){
							y=this.y=jaxEnv.jaxDiv.offsetHeight-10-h;
						}
					}
				}
			};
		};
		
		//--------------------------------------------------------------------
		//About to show tip
		jaxApp.showTip=function(hud,tip,x,y,ah,av,time=TIP_TIME){
			let webObj;
			if(hud===tgtTipHud){
				return;
			}
			if(isTipShowing){
				this.hideTip();
			}
			if(tipTimer){
				window.clearTimeout(tipTimer);
			}
			tgtTipHud=hud;
			if(!hud)
				return;
			tipTimer=window.setTimeout(()=>{
				//Show tip:
				tipTimer=null;
				if(x===undefined){
					let w,h;
					w=hud.w;h=hud.h;
					x=w/2;y=h+5;
				}

				webObj=hud.webObj;
				/*if(webObj.offsetParent){
					let cw,w,scale,rect;
					rect=webObj.getBoundingClientRect();
					w=rect.width;
					cw=webObj.offsetWidth;
					scale=cw>0?w/cw:1;
					x*=scale;y*=scale;
					x+=rect.x+window.scrollX;
					y+=rect.y+window.scrollY;
				}else{
					[x,y]=hud.findRelatedPos(x,y);
				}*/					
				[x,y]=hud.findRelatedPos(x,y);

				if(!tipHud){
					tipHud=jaxApp.TipBox;
				}
				tipHud.show(x,y,tip,ah,av);
				isTipShowing=1;
			},time);
		};

		//--------------------------------------------------------------------
		//Cancel about-showing tip:
		jaxApp.abortTip=function(hud){
			if(hud!==tgtTipHud){
				return;
			}
			if(tipTimer){
				window.clearTimeout(tipTimer);
				tipTimer=null;
			}
			tgtTipHud=null;
			if(isTipShowing){
				this.hideTip();
			}
		};

		//--------------------------------------------------------------------
		//Hide current showing tip
		jaxApp.hideTip=function(){
			if(isTipShowing){
				tipHud.display=0;
				isTipShowing=0;
			}
		};
	}

	//************************************************************************
	//Key-shortcuts related:
	//************************************************************************
	{
		let switchDocing=0,switchDlg;
		let switchKeyCtrl=false;
		//-------------------------------------------------------------------*
		//Handle key down events:
		jaxApp.OnKeyDown=function(e){
			var key,list,item,i,n,hotView;

			hotView=hotBox;
			function checkShortcut(item){
				if(item.altKey!==e.altKey){
					return 0;
				}
				if(item.ctrlKey!==e.ctrlKey){
					return 0;
				}
				if(item.metaKey!==e.metaKey){
					return 0;
				}
				if(item.shiftKey!==e.shiftKey){
					return 0;
				}
				return 1;
			}
			key=e.code;
			list=appCfg.shortCuts[key];
			if(!list){
				key=""+e.keyCode;
				list=appCfg.shortCuts[key];
			}
			if(list) {
				if (Array.isArray(list)) {
					n = list.length;
					for (i = 0; i < n; i++) {
						item = list[i];
						if (checkShortcut(item)) {
							//Handle shortcut:
							if(hotView && hotView.handleShortcut){
								if(hotView.handleShortcut(item.action)){
									return 1;
								}
							}
							//TODO: Handle app shortcut here:
							return 0;
						}
					}
				} else {
					item = list;
					if (checkShortcut(item)) {
						if(hotView && hotView.handleShortcut){
							if(hotView.handleShortcut(item.action)){
								return 1;
							}
						}
						//TODO: Handle app shortcut here:
						return 0;
					}
				}
			}

			//Handle alt-tab switch doc:
			if(e.key==="Tab" || e.key==="`"){
				if((e.ctrlKey || e.altKey) && !e.metaKey){
					//See if we can switch doc:
					if(switchDocing){
						if(e.shiftKey){
							switchDlg.preFile();
						}else {
							switchDlg.nextFile();
						}
						return 1;
					}
					if(!isShowDlg){
						switchDocing=1;
						//Show the switch doc dialog:
						switchDlg=jaxApp.showDlg(dlgDocList,{});
						switchKeyCtrl=e.ctrlKey;
						return 1;
					}
				}
			}

			return 0;
		};
		
		//-------------------------------------------------------------------
		//Handle key-up events:
		jaxApp.OnKeyUp=function(e,appMajor){
			if(switchDocing && ((!switchKeyCtrl && e.key==="Alt")||(switchKeyCtrl && e.key==="Control"))){
				let doc;
				doc=switchDlg.getCurDoc();
				jaxApp.closeDlg(switchDlg);
				switchDocing=0;
				if(doc) {
					jaxApp.focusDoc(doc);
				}
				return 1;
			}
		};
	}
/*}#AppEnv-Mid*/
/*#{AppEnv-Post*/
	appDef={
		layers: [
			{
				appState:appState,
				id: "UILayer", x: 0, y: 0, w: "FW", h: "FH",
				items: [
					{
						type:"dock",id:"appDock",x:0,y:0,w:"FW",h:"FH",autoLayout:1,
						ui:entryUI(jaxApp)
					},					
				]
			},
			{
				id:"DlgLayer",x:0,y:0,w:"FW",h:"FH",
				items:[
					{
						type:"box",id:"DlgBGBox",x:0,y:0,w:"FW",h:"FH",color:[0,0,0,0.5],zIndex:10,
						OnClick:function(){
							jaxApp.OnDlgBGClick();
						}
					}
				]
			},
			{
				id:"TipLayer",x:0,y:0,w:"FW",h:"FH",uiEvent:-1,
				items:[
					{type:cssTipBox(jaxEnv,0,0,"TipBox","Some tips"),zIndex:20}
				]
			}
		],
		UILayer:null,DlgLayer:null,TipLayer:null,TipBox:null,
		DlgBGBox:null,
		OnCreate:function(){
			this.DlgLayer.detachLayer();
			isShowDlg=0;
			jaxEnv.addOnKeyDown(this.OnKeyDown.bind(this));
			jaxEnv.addOnKeyUp(this.OnKeyUp.bind(this));
			
			if(appParams.disk){
				CCProject.loadPrj(appData,appParams.disk).then(prj=>{
					jaxApp.appPrj=prj;
					jaxApp.naviBox.initList(appParams.disk).then(()=>{
						//Open last time docs:
						jaxApp.DoReloadEditor();
					});
				});
				document.title="CCEdit: "+appParams.disk;
			}else{
				//Show disk select dialog
				jaxApp.showDlg(dlgDocList,{mode:"disk",func:(diskName)=>{
					appParams.disk=diskName;
					document.title="CCEdit: "+appParams.disk;
					CCProject.loadPrj(appData,appParams.disk).then(prj=>{
						jaxApp.appPrj=prj;
						jaxApp.naviBox.initList(diskName).then(()=>{
						//Open last time docs:
							jaxApp.DoReloadEditor();
						});
					});
				}});
				jaxApp.showStateText("Choose project",0);
			}
		}
	};
	
	{
		let listUI=null;
		let infoUI=null;
		jaxApp.showUI=function(){
			listUI=jaxApp.appDock.showNewUI(CountersUI(jaxApp));
			listUI.hold();
		};

		jaxApp.dismissUI=function(ui){
			jaxApp.appDock.dismissUI(ui);
		};
	}
	
	jaxEnv.initApp(appDef);
/*}#AppEnv-Post*/
/*#{AppEnv-End*/
}
/*}#AppEnv-End*/

//Auto genterated by Cody
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"jaxId": "1FBOMFC1C0", "args": {"entryUI":"\"MainUI\"","language":"EN"}
//		}/*Doc}#*/;
//	}