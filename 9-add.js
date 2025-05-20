function add(a,b){
    return a + b;
}

const process = require('process')
const args = process.argv.slice(2);

if(isNaN(args[0]) || isNaN(args[1]) || args[0] === undefined){
    console.log("NaN");
}else{
    const result = add(parseInt(args[0]), parseInt(args[1]));
    console.log(result);
}