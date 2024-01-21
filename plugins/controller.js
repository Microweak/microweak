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