export default async function( req, res, next ) {
  req.array_params = req.params[0]?.split("/").filter(e => e)
  next();
}