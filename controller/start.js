export default async function( req, res, next ) {
  try {
    res.send( await( await Model( "start" ) )( req, res, next ) )
  } catch( e ) {
    throw new Error( e )
  }
}