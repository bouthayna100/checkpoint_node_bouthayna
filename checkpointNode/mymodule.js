const fnModule = require( './make-it-modular' )
fnModule( process.argv[ 2 ], process.argv[ 3 ], (err,data) => {
    err === null && console.log( "errreur"+err ) 
    data.forEach(element => {
      console.log(element)
    });
} )

