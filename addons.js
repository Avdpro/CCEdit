import pathLib from "/@path";
import {TbxTip} from "./ui/TbxTip.js";
import {TbxFile} from "./ui/TbxFile.js";
import {TbxMenu} from "./ui/TbxMenu.js";
export default {
	naviBoxes:[],
	toolBoxes:[
		{
			codeName:"Tip",
			name:"CCEdit Tips",
			createUI:TbxTip,
			icon:"assets/help.svg"
		},
		{
			codeName:"File",
			name:"File Detail",
			createUI:TbxFile,
			icon:"assets/wenjian.svg",
			checkDoc(doc){
				return 10;
			},
		},
		{
			codeName:"Menu",
			name:"Toolbox Menu",
			createUI:TbxMenu,
			icon:"assets/tip.svg",
			checkDoc(doc){
				return 10;
			}
		},
		{
			codeName:"FindInFiles",
			name:"Find in Files",
			createUI:{file:"../ui/TbxFindFiles.js",func:"TbxFindFiles"},
			icon:"assets/findfiles.svg"
		},
		{
			codeName:"Marks",
			name:"Marks and Todos",
			createUI:{file:"../ui/TbxMarks.js",func:"TbxMarks"},
			icon:"assets/mark.svg",
			checkDoc(doc){
				let ext;
				ext=pathLib.extname(doc.path).toLowerCase();
				switch(ext){
					case ".mjs":
					case ".js":
						return 50;
				}
				return 0;
			}
		},		
		{
			codeName:"LintView",
			name:"Code Doctor",
			createUI:{file:"../ui/TbxLint.js",func:"TbxLint"},
			icon:"assets/tip.svg",
			checkDoc(doc){
				let ext;
				ext=pathLib.extname(doc.path).toLowerCase();
				if(ext===".js" || ext===".mjs" || ext===".json"|| ext===".html"|| ext===".htm"){
					return 50;
				}
				return 0;
			}
		},
		{
			codeName:"ViewMD",
			name:"View MarkDown",
			createUI:{file:"../ui/TbxMDView.js",func:"TbxMDView"},
			icon:"assets/filemd.svg",
			checkDoc(doc){
				let ext;
				ext=pathLib.extname(doc.path).toLowerCase();
				if(ext===".md"){
					return 100;
				}
				return 0;
			},
			ownBoxSize:true,
			initSize:300
		},
		{
			codeName:"ViewHtml",
			name:"View Html",
			createUI:{file:"../ui/TbxHtmlView.js",func:"TbxHtmlView"},
			icon:"assets/browser.svg",
			checkDoc(doc){
				let ext;
				ext=pathLib.extname(doc.path).toLowerCase();
				if(ext===".html"){
					return 100;
				}
				return 10;
			},
			ownBoxSize:true,
			initSize:300
		},
	],
	btmBoxes:[
		{
			codeName:"terminal",
			name:"Terminal",
			createUI:{file:"../ui/BBXTerminal.js",func:"BBXTerminal"},
			icon:"assets/help.svg"
		}
	],
};