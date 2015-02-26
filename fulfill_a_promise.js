var q = require('q');
var Promise = require('bluebird');

// Q way
//var defer = q.defer();
//defer.promise.then(console.log);
//setTimeout(defer.resolve, 200, "RESOLVED!");

// bluebird way
function defer () {
  return new Promise(function (fulfill) {
    return fulfill("RESOLVED!")
  });
}
defer().then(console.log);
