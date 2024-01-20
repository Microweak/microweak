async function Controller( Name ) {
  try {
    const dir = await(await M("path")).join(__dirname, "controller");
    const get_all_files = await (await M("fs")).readdirSync( dir );
    const filtered_file = get_all_files?.map(e => e.indexOf( Name ) !== -1 ? e : false)?.filter(e=>e);
    const controller = await import(`${ dir }/${ filtered_file[0] }`);
    const default_controller = controller.default? controller.default : controller;
    return default_controller;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
export default async function(req, res, next) {
  try {
    switch (req.array_params[0]) {
      case "install":
        await (await Controller( "start.js" ))( req, res, next )
        break;
    }
  } catch ( e ) {
    throw new Error( e )
  }
}