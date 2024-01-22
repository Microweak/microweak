export default async function( req, res, next, e ) {
  try {
    if(e) {
      await( await Model( "error_500" ) )( req, res, e )
      res.send( await View( "error_500", req ) )
      console.log
    } else {
      await( await Model( "error_404" ) )( req, res )
      res.send( await View( "error_404", req ) )
    }
  } catch( e ) {
    await( await Model( "error_500" ) )( req, res, e )
    res.send( await View( "error_500", req ) )
  }
}