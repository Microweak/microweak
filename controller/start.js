export default async function( req, res, next ) {
  try {
    const model_start = await( await Model( "start" ) )( req );
    const view_start = await View( "start", req );
    res.send( view_start )
  } catch( e ) {
    throw new Error( e )
  }
}