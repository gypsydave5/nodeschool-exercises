var q = require('q');
var Promise = require('bluebird');

function attachTitle(name) {
  return "DR. " + name;
}

//Q way
//var defer = q.defer();

//defer.promise
//.then(attachTitle)
//.then(console.log);

//defer.resolve("MANHATTAN");

//bluebird way
function defer (name) {
  return new Promise(function (fulfill) {
    fulfill(name);
  });
}

//defer("MANHATTAN").then(attachTitle).then(console.log);
//
//or
//
Promise.resolve("MANHATTAN").then(attachTitle).then(console.log);