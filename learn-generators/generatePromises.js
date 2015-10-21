'use strict';

function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run (generator) {
  var genny = generator()

  genny.next().value.then(result => genny.next(result))
    .catch(err => genny.throw(err))

}

run(function* () {
  try {
    let foo = yield askFoo();
    console.log(foo);
  } catch (err) {
    console.log(err);
  }
});
