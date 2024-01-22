export default async function(req, res, next) {
  try {
    switch (req.array_params[0]) {
      case "install":
        await (await Controller( "start" ))( req, res, next )
        break;
        
      default:
        await (await Controller( "error" ))( req, res, next )
    }
  } catch ( e ) {
        await (await Controller( "error" ))( req, res, next, e )
  }
}