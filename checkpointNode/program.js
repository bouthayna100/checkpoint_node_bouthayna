const http = require( 'http' )
var str = ""
http.get( process.argv[ 2 ], ( resp ) => {
    resp.on( 'data', ( data ) => {
        str = str + data.toString();
    } )
    resp.on( 'end', (  ) => {
        console.log( str.length )

        console.log( str )    } )
    resp.on( 'error', ( error ) => {
        console.log( error.toString() )
    } )
   

} )
