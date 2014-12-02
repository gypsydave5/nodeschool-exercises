var http = require('http');
var urls = process.argv.slice(2);
var results = [];
var streamsComplete = 0;

function printResults(results) {
  results.forEach(function (data) {
    console.log(data);
  })
}

function updateResults(results, index, data){
  if (results[index]) {
    results[index] += data.toString();
  } else {
    results[index] = data.toString();
  }
}

function completeStream(urls, results) {
  streamsComplete ++;
  if (streamsComplete == urls.length) {
    printResults(results);
  }
}

urls.forEach(function (url, index) {
  http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on('error', console.error);
    response.on('data', function(data) {
      updateResults(results, index, data);
    });
    response.on('end', function() {
      completeStream(urls, results);
    });
  });
});