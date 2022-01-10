//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {JAXDataObj} from "/jaxweb/lib/JAXDataObj.js"
/*#{1FBS3MVJS0Imports*/
/*}#1FBS3MVJS0Imports*/
/*DataClass*/
var CCUser;
let __Proto;

//*****************************************************
/*CCUser: Data object class*/
//*****************************************************
{
	CCUser=function(appData){
		var jaxEnv,app;
		/*#{1FBS3N7TK0Pre*/
		/*}#1FBS3N7TK0Pre*/
		if(!appData){return;}
		JAXDataObj.call(this,appData.jaxEnv);
		this.appData=appData;
		
		//Data attributes:
		this.userId = "10001";
		this.userName = "Guest";
		this.photo = "";
		this.loginToken = "";
		this.loginTime = 0;
		/*#{1FBS3N7TK0Post*/
		/*}#1FBS3N7TK0Post*/
	};
	__Proto=CCUser.prototype={};
	
	//函数
	__Proto.loadLoginInfo=function(){
		/*#{1FBS3S1RN3Code*/
		/*}#1FBS3S1RN3Code*/
	};
	
	
	/*#{1FBS3N7TK0Functions*/
	/*}#1FBS3N7TK0Functions*/
};

/*#{1FBS3MVJS0ExCodes*/
/*}#1FBS3MVJS0ExCodes*/
export {CCUser};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"jaxId": "1FBS3MVJS0", "def": "CdyFileDataClass", 
//			"attrs": {"fileName":"\"CCUser\"","description":"\"\""}, 
//			"classObjs": {
//				"name": "classObjs", "type": "object", "def": "CdyDocObj", "jaxId": "1FBS3MVJT0", 
//				"attrs": {
//					"CCUser": {
//						"type": "object", "def": "CdyDataClass", "name": "CCUser", "tip": "", "jaxId": "1FBS3N7TK0", 
//						"attrs": {}, 
//						"args": {
//							"name": "Arguments", "type": "object", "def": "ClassObjArgObj", "jaxId": "1FBS3S1RN0", 
//							"attrs": {"superClass":"\"JAXDataObj\""}
//						}, 
//						"pptsObj": {
//							"name": "Properties", "type": "object", "def": "ClassObjPptObj", "jaxId": "1FBS3S1RN1", 
//							"attrs": {
//								"userId": {
//									"type": "string", "valText": "\"10001\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"userName": {
//									"type": "string", "valText": "\"Guest\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"photo": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"loginToken": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"loginTime": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}
//							}
//						}, 
//						"funcsObj": {
//							"jaxId": "1FBS3S1RN2", 
//							"funcs": [
//								{
//									"jaxId": "1FBS3S1RN3", "type": "object", "def": "CdyFunc", "name": "loadLoginInfo", "info": "函数", "tip": "", 
//									"args": {
//										"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBS3S1RN4", 
//										"attrs": {}
//									}, 
//									"attrs": {"Mockup Result":"\"\""}
//								}
//							]
//						}, 
//						"mockObjs": {
//							"name": "Mockups", "type": "object", "def": "CdyDocObj", "jaxId": "1FBS3S1RN5", 
//							"attrs": {}
//						}
//					}
//				}
//			}
//		}/*Doc}#*/;
//	}