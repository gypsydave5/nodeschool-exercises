var request = require('request');
var url = 'http://localhost:8099' 
var requestPost = request.post(url);

process.stdin.pipe(requestPost).pipe(process.stdout);
