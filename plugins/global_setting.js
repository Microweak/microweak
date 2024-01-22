export default async function(req, res, next) {
  try {
    req.array_params = req.params[0]?.split("/").filter(e => e)
    global.Controller = async function(Name) {
      try {
        const dir = await (await M("path")).join(__dirname, "controller");
        const get_all_files = await (await M("fs")).readdirSync(dir);
        const filtered_file = get_all_files?.map(e => e.indexOf(Name) !== -1 ? e : false)?.filter(e => e);
        const controller = await import(`${ dir }/${ filtered_file[0] }`);
        const default_controller = controller.default ? controller.default : controller;
        return default_controller;
      } catch (error) {
        throw new Error(`${error}`);
      }
    }

    global.Model = async function(Name) {
      try {
        const dir = await (await M("path")).join(__dirname, "model");
        const get_all_files = await (await M("fs")).readdirSync(dir);
        const filtered_file = get_all_files?.map(e => e.indexOf(Name) !== -1 ? e : false)?.filter(e => e);
        const model = await import(`${ dir }/${ filtered_file[0] }`);
        const default_model = model.default ? model.default : model;
        return default_model;
      } catch (error) {
        throw new Error(`${error}`);
      }
    }
    
    global.View = async function(Name, req) {
      try {
        const fs = await M("fs");
        const dir = await (await M("path")).join(__dirname, "view");
        const get_all_files = await fs.readdirSync(dir);
        const filtered_file = get_all_files?.map(e => e.indexOf(Name) !== -1 ? e : false)?.filter(e => e);
        const get_file = filtered_file.length?await fs.readFileSync(`${dir}/${filtered_file[0]}`, { encoding: 'utf8', flag: 'r' }):"";
        return await ( await M("render-template") )( get_file, template_engine.admin, req)
      } catch (error) {
        throw new Error(`${error}`);
      }
    }
    next();
  } catch (e) {
    throw new Error(e)
  }
}