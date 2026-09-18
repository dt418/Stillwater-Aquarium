import {build} from 'esbuild';
import {readFile,writeFile,readdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('.',import.meta.url));
const assets={};for(const name of await readdir(root+'scenes/riverscape/assets'))assets[name]='data:image/jpeg;base64,'+(await readFile(root+'scenes/riverscape/assets/'+name)).toString('base64');
await writeFile(root+'scenes/riverscape/src/texture-assets.js','// Generated offline asset map. Rebuild with npm run build.\nexport const textureAssets='+JSON.stringify(assets)+';\n');
await build({absWorkingDir:root,entryPoints:['scenes/riverscape/src/main.js'],outfile:'aquarium.js',bundle:true,format:'iife',target:['chrome110'],minify:true,legalComments:'eof',alias:{three:root+'vendor/three.module.js'}});
console.log('Built offline file:// bundle with embedded texture assets.');
