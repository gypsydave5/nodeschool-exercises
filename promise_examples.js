var Promise = require('bluebird');

function doit () {
  return new Promise(function (resolve, reject) {
    resolve('oops');
  });
}

Promise.resolve()
.then(function () {
  return doit();
})
.then(function (value) {
  console.log('value: ', value);
})
.catch(function (value) {
  console.log('fail: ', value);
});
