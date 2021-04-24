const fs = require( 'fs' )
var path = require( 'path' )
fs.readdir( process.argv[ 2 ], ( err, items ) => {
    if(err) console.log(err)
    items.filter( elt => path.extname( elt ) === '.' + process.argv[ 3 ] && console.log( elt ) )
} );
