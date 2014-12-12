// without bl library -- my solution

var http = require('http');
var url = process.argv[2];
var result = ""

http.get(url, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
        result += data.toString();
    });
    response.on('error', console.error);
    response.on('end', function(data) {
        console.log(result.length);
        console.log(result);
    });
});

// using bl library -- learnyounode solution

var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err)
        return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }));
});
