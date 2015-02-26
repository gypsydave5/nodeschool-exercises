var q = require('q');
var Promise = require('bluebird');

function logError(error) {
  console.log(error.message);
}

// Q way
//var defer = q.defer();
//defer.promise.then(null, logError);
//setTimeout(defer.reject, 200, new Error("REJECTED!"));

// bluebird way
function defer () {
  return new Promise(function (fulfill, reject) {
    return reject(new Error("REJECTED!"));
  });
}
defer().then(null, logError);
