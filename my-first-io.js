var fs = require('fs');

var file = fs.readFileSync(process.argv[2]).toString();
var string = file.toString();

console.log(string.split('\n').length - 1)