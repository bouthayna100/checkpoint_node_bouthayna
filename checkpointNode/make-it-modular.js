
const fs = require( 'fs' )
const path = require( 'path' )


module.exports =  fnModule = ( dir, ext, filter ) => {
    fs.readdir( dir,  ( err, items ) =>{
    if(err)  return filter( err )
        return filter( null, items.filter( elt => path.extname( elt ) === '.' + ext ) )
    } );
}

