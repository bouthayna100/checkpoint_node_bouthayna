var http = require( 'http' );
const map = require( 'through2-map' )

const server = http.createServer( ( req, res ) => {

    if ( req.method === 'POST' ) {
        req.pipe( map( function ( chunk ) {
            return chunk.toString().toUpperCase()
        } ) ).pipe( res )
    } else response.writeHead( 405 )


} )

server.listen( process.argv[ 2 ], () => {
    console.log( 'server listen on port' + process.argv[ 2 ]
    )
} )
