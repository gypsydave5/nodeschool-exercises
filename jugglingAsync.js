var http = require('http');
var urls = process.argv.slice(2);
var results = [];
var streamsComplete = 0;

function printResults(results) {
  results.forEach(function (data) {
    console.log(data);
  })
}

urls.forEach(function (url, index) {
  http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      if (results[index]) {results[index] += data.toString();}
      else {results[index] = data.toString();}
    });
    response.on('error', console.error);
    response.on('end', function() {
      streamsComplete ++;
      if (streamsComplete == urls.length) {
        printResults(results);
      }
    });
  });
});