'use strict';

function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function askBar () {
  return new Promise(function (resolve, reject) {
    resolve('bar');
  });
}

function run (generator) {
  var it = generator()

  function go (result) {
    console.log(typeof result);
    if (result.done) return result.value;
    return result.value
      .then(value => go(it.next(value)))
      .catch(err => go(it.throw(err)))
  }

  go(it.next());

}

run(function* () {
  try {
    let foo = yield askFoo().then(val => val);
    let bar = yield askBar().then(val => foo + ' ' + val);
    console.log(foo);
    console.log(bar);
  } catch (err) {
    console.log(err);
  }
});
