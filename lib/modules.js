import { read, readdirSync } from "fs";

let config_;
const config = function( local_modules ) {
    config_ = {
        local : local_modules ? local_modules : "../plugins"
    }
};

/**
 * Get local modules
 * @param { String } Module
 * [ Belum dibuat ] @param { String } extension, filter duplicate string extension like tes.js and tes.json
 */
const M_local = async function(Module, extension) {
    try {
        const get_all_files = await readdirSync( config_.local );
        const filtered_file = get_all_files?.map(e => e.indexOf( Module ) !== -1 ? e : false)?.filter(e=>e);
        const module = await import(`${ config_.local }/${ filtered_file[0] }`);
        const default_module = module.default? module.default : module;
        return default_module;
    } catch (error) {
        throw new Error(`${error}`);
    }
}

const M = async function (...Module) {
    try {
        const module = await import(Module);
        const default_module = module.default ? module.default : module;
        return default_module;
    } catch (error) {
        return await M_local(Module);
    }
}

export default {M, config};