var http = require('http');
var through2 = require('through2');
var trumpet = require('trumpet');

var tr = trumpet();

// the main pipeline - stdin goes through a trumpet stream
process.stdin.pipe(tr).pipe(process.stdout);

// the 'inner' pipeline - the inner html of anything in the main
// stream that has the class `.loud` is passed into the upcase
// function and passed back in - apparently in the same place!
var loudClassStream = tr.select('.loud').createStream(); 
var upcaseStream = through2(function (buffer, _, callback) {
  callback(null, buffer.toString().toUpperCase());
});

loudClassStream.pipe(upcaseStream).pipe(loudClassStream);
