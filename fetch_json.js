// q (io) way

//var http = require('q-io/http');

//http.read('http://localhost:1337')
//.then(JSON.parse)
//.then(console.log)
//.catch(console.error)
//.done();

// bluebird way

var Promise = require('bluebird');
var request = Promise.promisify(require('request'));

function iWantYourBody (_, body) { return body };

request('http://localhost:1337', {json: true })
    .spread(iWantYourBody)
    .then(console.log)
    .catch(console.error)
	.done();
