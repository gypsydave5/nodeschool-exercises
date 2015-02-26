var q = require('q');
var Promise = require('bluebird');

function logError(error) {
  console.log(error.message);
}

// Q way
//var defer = q.defer();
//defer.promise.then(console.log, console.log);
//defer.resolve("I FIRED");
//defer.reject("I DID NOT FIRE");

// bluebird way
function defer () {
  return new Promise(function (fulfill, reject) {
    fulfill("I FIRED");
    reject("I DID NOT FIRE");
  });
}

defer().then(console.log, console.log);