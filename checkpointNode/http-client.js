const http = require( 'http' )
http.get( process.argv[ 2 ], (resp) => {
    resp.on( 'data', ( data ) => {
        console.log(data.toString())
    } )
    resp.on( 'error', ( error ) => {
        console.log( error.toString() )
    } )
})