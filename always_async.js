var Q = require('q');
var Promise = require('bluebird');

//Q way
//var defer = Q.defer();
//defer.promise.then(console.log);
//defer.resolve("SECOND");
//console.log("FIRST");

//bluebird way
function defer () {
  return new Promise(function (fulfill) {
    fulfill("SECOND");
  });
}
defer().then(console.log);
console.log("FIRST");