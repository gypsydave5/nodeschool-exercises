var q = require('q');
var Promise = require('bluebird');

function throwMyGod () {
  throw new Error('OH NOES');
}

function iterate (integer) {
  console.log(integer);
  return ++integer
}

//Q way
//q.fcall(iterate, 1)
//.then(iterate)
//.then(iterate)
//.then(iterate)
//.then(iterate)
//.then(throwMyGod)
//.then(iterate)
//.then(iterate)
//.then(iterate)
//.then(iterate)
//.then(iterate)
//.catch(console.log);

//bluebird way
Promise.method(iterate)(1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(console.log);