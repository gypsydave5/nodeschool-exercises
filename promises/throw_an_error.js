var q = require('q');
var Promise = require('bluebird');

//Q way
function parsePromise(json) {
  var deferred = q.defer();
  try {
    defer.resolve(JSON.parse(json));
  } catch (error) {
    defer.reject(error);
  }
  return deferred.promise
}

//bluebird way
function parsePromise (json) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(JSON.parse(json));
    } catch (error) {
      reject(error);
    }
  });
}

parsePromise(process.argv[2]).catch(console.log);