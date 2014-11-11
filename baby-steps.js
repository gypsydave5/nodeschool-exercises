
// my solution
console.log(process.argv.slice(2).reduce(function(memo, value) {
    return +memo + +value;
}));


// official solution (for reference)
var result;
for (i = 2; i < process.argv.length; i ++) {
    result += +process.argv[i]
}
console.log(result);


