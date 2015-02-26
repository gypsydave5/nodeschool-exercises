var q = require('q');
var Promise = require('bluebird');

//Q way
function parsePromise(json) {
  var defer = q.defer();
  try {
    defer.resolve(JSON.parse(json));
  } catch (e) {
    defer.reject(e);
  }
  return defer.promise
}

//bluebird way
function parsePromise (json) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
}

parsePromise(process.argv[2]).catch(console.log);