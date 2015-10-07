var inputs = process.argv.slice(2);
var result = inputs.map(str => str[0])
                   .reduce((mem, str) => mem + str);

console.log(`[${inputs}] becomes "${result}"`);
