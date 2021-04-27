var http = require( 'http' );
var fs = require( 'fs' );
const server = http.createServer(  ( req, res )=> {
   
    var readStream = fs.createReadStream( process.argv[ 3 ] ).on( 'open', function () {
        readStream.pipe( res );
    } )
} )

server.listen( process.argv[ 2 ], () => {
    console.log( 'server listen on port' + process.argv[ 2 ]
    )
    })