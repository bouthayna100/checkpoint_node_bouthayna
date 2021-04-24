const fs = require( 'fs' )
let nb =0
fs.readFileSync( process.argv[ 2 ] ).toString().split('').forEach( elt =>
     elt === '\n' && nb++ )
console.log(nb)