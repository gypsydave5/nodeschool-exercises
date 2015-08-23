var q = require('q');
var Promise = require('bluebird');

// Q way

var defer1 = q.defer();
var defer2 = q.defer();

function all (promise1, promise2) {
  var allPromise = q.defer();
  var counter = 0;
  var result1, result2;

  promise1.then(function (result) {
    result1 = result
    ++counter;
    if (counter === 2) allPromise.resolve([result1, result2]);
  })
  .catch(allPromise.reject)
  .done();

  promise2.then(function (result) {
    result2 = result
    ++counter;
    if (counter === 2) allPromise.resolve([result1, result2]);
  })
  .catch(allPromise.reject)
  .done();

  return allPromise.promise;
}

setTimeout(function () {
  defer1.resolve("PROMISES");
  defer2.resolve("FTW");
}, 200);

//all(defer1.promise, defer2.promise)
//.then(console.log);

// Q built in all

//q.all([defer1.promise, defer2.promise])
  //.spread(function (a, b) { console.log([a, b]); });
//.then(console.log);

// Q spread
q.all([defer1.promise, defer2.promise])
  .spread(function (a, b) { console.log([a, b]); });

// bluebird way

//Promise.all([Promise.resolve("PROMISES"), Promise.resolve("FTW")])
//.then(console.log);
