export default async function( file, engine, req ) {
  switch (engine) {
    case "ejs":
      const ejs = await M( "ejs" )
      return ejs.render( file, req );
    break;
  }
}