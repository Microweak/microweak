export default async function( req, res, next ) {
  req.array_params = req.params[0]?.split("/")
  console.log(req.array_params)
  next();
}