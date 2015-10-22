'use strict';

function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run (generator) {
  var it = generator()

  function go (result) {
    if (result.done) return result.value;
    return result.value
      .then(value => go(it.next(value)))
      .catch(err => go(it.throw(err)))
  }

  go(it.next());

}

run(function* () {
  try {
    let foo = yield askFoo();
    console.log(foo);
  } catch (err) {
    console.log(err);
  }
});
