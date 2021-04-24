let c =0
process.argv.forEach( elt => parseInt( elt ) ? c = c + parseInt( elt ):"" )
console.log(c )