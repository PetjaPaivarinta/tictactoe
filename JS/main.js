import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyB-mZSczIvhhcJ8b6y3_ctUaEp8hVGVFyI",
    authDomain: "tictactoe-2f4a0.firebaseapp.com",
    databaseURL: "https://tictactoe-2f4a0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tictactoe-2f4a0",
    storageBucket: "tictactoe-2f4a0.appspot.com",
    messagingSenderId: "271571749323",
    appId: "1:271571749323:web:1ac2b0efe058fe5fcbce4e"
};
const main = initializeApp(firebaseConfig);

// blev halv färdig vid https://firebase.google.com/docs/web/module-bundling när de står npm run build, fick errorn:
/*
E:\tictactoe>npm run build

> your-package-name@1.0.0 build
> rollup -c rollup.config.js

(node:16592) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
[!] RollupError: Node tried to load your configuration file as CommonJS even though it is likely an ES module. To resolve this, change the extension of your configuration to ".mjs", set "type": "module" in your package.json file or pass the "--bundleConfigAsCjs" flag.

Original error: Cannot use import statement outside a module
https://rollupjs.org/command-line-interface/#bundleconfigascjs
E:\tictactoe\rollup.config.js:1
import { nodeResolve } from '@rollup/plugin-node-resolve';
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at internalCompileFunction (node:internal/vm:74:18)
    at wrapSafe (node:internal/modules/cjs/loader:1141:20)
    at Module._compile (node:internal/modules/cjs/loader:1182:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
    at Module.load (node:internal/modules/cjs/loader:1081:32)
    at Module._load (node:internal/modules/cjs/loader:922:12)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:169:29)
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)



E:\tictactoe>npm run build

> your-package-name@1.0.0 build
> rollup -c rollup.config.js


src/main.js → build/main.js...
[!] RollupError: Could not resolve entry module "src/main.js".
    at error (C:\Users\kovap\AppData\Roaming\npm\node_modules\rollup\dist\shared\rollup.js:271:30)
    at ModuleLoader.loadEntryModule (C:\Users\kovap\AppData\Roaming\npm\node_modules\rollup\dist\shared\rollup.js:24296:20)
    at async Promise.all (index 0)



E:\tictactoe>npm run build

> your-package-name@1.0.0 build
> rollup -c rollup.config.js

[!] Error: Cannot find module 'E:\tictactoe\rollup.config.js' imported from C:\Users\kovap\AppData\Roaming\npm\node_modules\rollup\dist\shared\loadConfigFile.js
Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'E:\tictactoe\rollup.config.js' imported from C:\Users\kovap\AppData\Roaming\npm\node_modules\rollup\dist\shared\loadConfigFile.js
    at new NodeError (node:internal/errors:400:5)
    at finalizeResolution (node:internal/modules/esm/resolve:326:11)
    at moduleResolve (node:internal/modules/esm/resolve:945:10)
    at defaultResolve (node:internal/modules/esm/resolve:1153:11)
    at nextResolve (node:internal/modules/esm/loader:163:28)
    at ESMLoader.resolve (node:internal/modules/esm/loader:842:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:424:18)
    at ESMLoader.import (node:internal/modules/esm/loader:525:22)
    at importModuleDynamically (node:internal/modules/cjs/loader:1151:29)
    at importModuleDynamicallyWrapper (node:internal/vm/module:438:21)



E:\tictactoe>npm run build

> your-package-name@1.0.0 build
> rollup -c rollup.config.mjs


src/main.js → build/main.js...
[!] RollupError: Could not resolve entry module "src/main.js".
    at error (C:\Users\kovap\AppData\Roaming\npm\node_modules\rollup\dist\shared\rollup.js:271:30)
    at ModuleLoader.loadEntryModule (C:\Users\kovap\AppData\Roaming\npm\node_modules\rollup\dist\shared\rollup.js:24296:20)
    at async Promise.all (index 0)



E:\tictactoe>
*/