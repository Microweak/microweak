import module from "./lib/modules.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// First
global.__dirname = dirname(fileURLToPath(import.meta.url));
const { M, config: conf } = module;
global.M = M;

(async function () {
    conf(await (await M("path")).join(__dirname, "plugins"));
    
    /* [ get all object configuration ] */
    const config = await import(await (await M("path")).join(__dirname, "config.json"), {
        assert: {
            type: "json"
        }
    });
    const default_config = config.default ? config.default : config;
    const config_keys = Object.keys( default_config );
    const { port } = default_config;
    /* [ End object configuration ] */

    const express = await M("express")
    const app = express();
    app.use( "*", await M( "global_setting" ) )
    app.all("*", await M( "controller" ))

    app.listen( port.http );
    app.listen( port.https );
})();
