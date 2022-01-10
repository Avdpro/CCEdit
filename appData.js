//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {JAXDataObj} from "/jaxweb/lib/JAXDataObj.js"
/*App的总数据文件*/
/*#{1FBOMFC1B4Imports*/
/*}#1FBOMFC1B4Imports*/

//----------------------------------------------------------------------------
/*App的入口文件*/
var appData={};

//App数据初始化函数:
appData.initData=function(jaxEnv){
	/*#{1FBOMFC1B4initPre*/
	/*}#1FBOMFC1B4initPre*/
	this.jaxEnv=jaxEnv;
	this.version="0.0.0";
	/*#{1FBOMFC1B4initPost*/
	this.app=jaxEnv.app;
	/*}#1FBOMFC1B4initPost*/
};
/*#{1FBOMFC1B4ExFuncs*/
var naviBoxRegs={
};
var toolBoxRegs={
};
var editBoxRegs={
};
var btmBoxRegs={
};

//****************************************************************************
//:Navi Box plug-in management:
//****************************************************************************
{
	//------------------------------------------------------------------------
	//Register a navibox
	appData.regNaviBox=function(vo){
		naviBoxRegs[vo.codeName]=vo;
	};

	//------------------------------------------------------------------------
	//Get a navibox register:
	appData.getNaviBox=function(codeName){
		return naviBoxRegs[codeName]
	};

	//------------------------------------------------------------------------
	//Get all naviBox type-def:
	appData.getNaviBoxRegs=function(){
		return Object.values(naviBoxRegs);
	};
}

//****************************************************************************
//:Edit Box plug-in management:
//****************************************************************************
{
	//------------------------------------------------------------------------
	//Register a eidtbox
	appData.regEditBox=function(vo){
		editBoxRegs[vo.codeName]=vo;
	};

	//------------------------------------------------------------------------
	//Get a editbox register:
	appData.getEditBox=function(codeName){
		return editBoxRegs[codeName]
	};

	//------------------------------------------------------------------------
	//Get all editBox type-def:
	appData.getEditBoxRegs=function(){
		return Object.values(editBoxRegs);
	};
}
//----------------------------------------------------------------------------
//Get a editBox type-def by doc:
appData.getEditBoxRegByDoc=function(doc){
	let list=Object.values(editBoxRegs);
	let maxDef,maxMatch,match;
	maxMatch=0;
	maxDef=null;
	for(let def of list){
		match=def.canEditDoc(doc)
		if(match>maxMatch){
			maxDef=def;
			maxMatch=match;
		}
	}
	return maxDef;
};

//****************************************************************************
//:Tool Box plug-in management:
//****************************************************************************
{
	//------------------------------------------------------------------------
	//Register a toolbox
	appData.regToolBox=function(vo){
		toolBoxRegs[vo.codeName]=vo;
	};

	//------------------------------------------------------------------------
	//Get a toolbox register:
	appData.getToolBox=function(codeName){
		return toolBoxRegs[codeName]
	};

	//------------------------------------------------------------------------
	//Get all toolBox type-def:
	appData.getToolBoxRegs=function(){
		return Object.values(toolBoxRegs);
	};

	//------------------------------------------------------------------------
	//Get toolBox by doc:
	appData.getToolBoxByDoc=function(doc){
		let list=Object.values(toolBoxRegs);
		let maxDef,maxMatch,match;
		maxMatch=0;
		maxDef=null;
		for(let def of list){
			if(def.checkDoc){
				match=def.checkDoc(doc);
			}else{
				match=10;
			}
			if(match>maxMatch){
				maxMatch=match;
				maxDef=def;
			}
		}
		return maxDef;
	};
}

//****************************************************************************
//:Bottom Box plug-in management:
//****************************************************************************
{
	//------------------------------------------------------------------------
	//Reigster a btmBox:
	appData.regBtmBox=function(vo){
		btmBoxRegs[vo.codeName]=vo;
	};
	
	//------------------------------------------------------------------------
	//Get a toolbox register:
	appData.getBtmBox=function(codeName){
		return btmBoxRegs[codeName]
	};

	//------------------------------------------------------------------------
	//Get all toolBox type-def:
	appData.getBtmBoxRegs=function(){
		return Object.values(btmBoxRegs);
	};
	
}
/*}#1FBOMFC1B4ExFuncs*/

export {appData};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"jaxId": "1FBOMFC1B4", "dataObj": {"version":"\"0.0.0\""}, 
//			"funcs": {"jaxId":"1FBOMFC1B5","funcs":[]}
//		}/*Doc}#*/;
//	}