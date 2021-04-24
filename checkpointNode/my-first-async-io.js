const fs = require( 'fs' )
var nb = 0
fs.readFile( process.argv[ 2 ], 'utf8', ( err, data ) => {
     err && console.log( err )
    data.toString().split( '' ).forEach( elt => elt === '\n' && nb++ )
    
    console.log( nb )

} )
