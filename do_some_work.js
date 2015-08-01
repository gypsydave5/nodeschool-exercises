// Q way

//var http = require('q-io/http');

//http.read('http://localhost:7000')
//.then(function (id) {
  //return http.read('http://localhost:7001/' + id)
//})
//.then(JSON.parse)
//.then(console.log)
//.catch(console.error)
//.done();

// bluebird

var Promise = require('bluebird');
var request = Promise.promisify(require('request'));

//function returnBody () { return arguments[1] }

//request('http://localhost:7000')
//.spread(returnBody)
//.then(function (id) {
  //return request('http://localhost:7001/' + id).spread(returnBody);
//})
//.then(JSON.parse)
//.then(console.log)
//.catch(console.error)
//.done();

// another way with bluebird

function requestBody (uri) {
  return request(uri)
    .spread(function (_, body) { return body });
};

requestBody('http://localhost:7000')
  .then(function (id) {
    return requestBody('http://localhost:7001/' + id); })
  .then(JSON.parse)
  .then(console.log)
  .catch(console.error)
    .done();
