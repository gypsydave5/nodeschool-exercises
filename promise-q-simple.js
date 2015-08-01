var q = require('q');
var http = require('http');

function promisedHttpGet (url) {
  var deferred = q.defer();
  var responseObject = {statusCode: null, body: ''};

  http.get(url, function(response) {
    responseObject.statusCode = response.statusCode;
    response.on('data', function (buffer) {
      responseObject.body = buffer.toString();
      if (responseObject.statusCode !== 200) {
	deferred.reject(responseObject);
      }
      deferred.resolve(responseObject);
    })
  }).on('error', function(error) {
    deferred.reject(error);
  });
  return deferred.promise;

}

promisedHttpGet('http://foaas.com/thanks/dave')
  .then(function (item) {
    console.log(item.body);
  })
  .catch(function (error) {
    console.log(error);
  });

