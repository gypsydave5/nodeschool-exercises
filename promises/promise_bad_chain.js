var q = require('q');

var defer = q.defer();

defer.promise.then(console.log);
defer.promise.then(console.log);
defer.promise.then(console.log);

defer.resolve("Hi");

var Promise = require('bluebird');

var promise = new Promise(function(resolve) {resolve ("Hello")} );

function promWrap (input) {
  return new Promise(function (resolve) {
    resolve(input);
  });
}

promise.then(console.log);

Promise.resolve('boom')
.then(console.log);

defer = Promise.defer();

defer.promise.then(console.log);
defer.promise.then(console.log);
defer.promise.then(console.log);


defer.resolve("Hi from BB");