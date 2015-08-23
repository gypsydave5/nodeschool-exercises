var fileSelector = require('./modular-module.js')

fileSelector(process.argv[2], process.argv[3], function(error, files) {
    files.forEach( function(file) {
        console.log(file);
    });
});
