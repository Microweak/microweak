export default async function( req, res, next ) {
  try {
    await( await Model( "start" ) )( req );
    res.send( await View( "start", req ) )
  } catch( e ) {
    throw new Error( e )
  }
}