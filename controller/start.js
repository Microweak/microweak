export default async function( req, res, next ) {
  try {
    res.send("hadeh")
  } catch( e ) {
    throw new Error( e )
  }
}