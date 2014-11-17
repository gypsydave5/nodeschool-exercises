var fs = require('fs');
var path = require('path')

module.exports = function(directory, extension, callback) {

    fs.readdir(directory, function (error, files) {
        if (error) { return callback(error) };

        var result = files.filter( function(file) {
            return (path.extname(file) === '.' + extension);
        });

        callback(null, result);
    });
};

