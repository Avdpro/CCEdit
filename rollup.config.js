import { terser } from "rollup-plugin-terser";
import alias from '@rollup/plugin-alias';

export default {
	input:"./app.js",
	output:{
		file:"bd.js",
		format:"es",
	},
	plugins:[
		alias({
			entries: [
				{ find: '/jaxweb/lib/JAXEnv.js', replacement: '/Users/avdpro/sdk/cchome/home/jaxweb/lib/JAXHudLib.js' },
				{ find: '/jaxweb/lib/JAXApp.js', replacement: '/Users/avdpro/sdk/cchome/home/jaxweb/lib/JAXHudLib.js' },
				{ find: '/jaxweb/lib/JAXDisk.js', replacement: '/Users/avdpro/sdk/cchome/home/jaxweb/lib/JAXHudLib.js' },
				{ find: '/jaxweb/lib/JAXHudLib.js', replacement: '/Users/avdpro/sdk/cchome/home/jaxweb/lib/JAXHudLib.js' },
				{ find: '/jaxweb/lib/JAXDataObj.js', replacement: '/Users/avdpro/sdk/cchome/home/jaxweb/lib/JAXHudLib.js' },
				{ find: '/jaxweb/lib/JAXHudObj.js', replacement: '/Users/avdpro/sdk/cchome/home/jaxweb/lib/JAXHudLib.js' },
				{ find: '/jaxweb/lib/JAXHudState.js', replacement: '/Users/avdpro/sdk/cchome/home/jaxweb/lib/JAXHudLib.js' },
				{ find: '/jaxweb/extern/idb-keyval.js', replacement: '/Users/avdpro/sdk/cchome/home/jaxweb/extern/idb-keyval.js' },
		  	]
		}),
		//terser(),
   	]
}