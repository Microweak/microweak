export default async function( req, res, next ) {
  try {
    req.array_params = req.params[0]?.split("/").filter(e => e)
    next();
  } catch ( e ) {
    throw new Error( e )
  }
}