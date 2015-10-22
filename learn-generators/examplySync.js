var fs = require('fs');

function run (generator) {
  var it = generator(go);

  function go (err, result) {
    it.next(result);
  }

  go();
}

run(function* (done) {
  var exercises = yield fs.readdir('../learn-generators', done);
  console.log(exercises);
});

// This is all rather clever
// 1. We define run, a function that takes a single argument, a generator function
// 2. `it` (terrible name) is defined as the executed generator, with the argument of `go`
// 3. then we define go, as a simple Nodey function that, when called, calls the
//    next() function of the `it` generator with the result
// 4. We then execute go - that is what happens when we run `run`
//
// So then we run `run`, and the generator is anonymous, and takes an argument called `done`
// This done will then be translated into the go function
// We define a generator, and we say what it will do with its done function
// and then we say - inside the definition of `run` - , you done function, you
// are now `go` - and you make the next yield of generator the result of that
// callback.
//
// So, in other words, we yield to `fs.readdir()`, when it returns it calls
// `done`. `done` is `go`, which takes its `result` arg and uses it as the arg
// to `next` on the generator. Which is then the result of the `yield` - and so
// gets assigned to `exercises`.
//
// The key thing is (probably) the way that we only call `next()` when we're
// done - there's only a value coming from the yield when the async function
// returns.
//

// function run (generator) {
//   var activeGenerator = generator(resultToNext);

//   function resultToNext (err, result) {
//     activeGenerator.next(result);
//   }

//   activeGenerator.next();

//   //resultToNext();
// }

// run(function* (callback) {
//   var exercises = yield fs.readdir('../learn-generators', callback);
//   console.log(exercises);
// });

// 1. `run` receives a generator function as an argument. This generator is
//    uninitialized. When it is executed it will yield once to `fs.readdir`,
//    offering that function the function the generator is initialized
//    with as a callback. It assigns the result of that yield - the generator's next - to the
//    var `exercises`, which it logs out.
// 2. When `run` is executed, it initializes the generator with a concrete
//    callback function, which above I have called `resultToNext`. This makes
//    that function available to the body of the generator function. This function
//    follows the node pattern for all callbacks, namely is takes two arguments
//    - an error and a result.
// 3. Within the `resultToNext` function, we call `next(result)` on the
//    activeGenerator. We basically tell it that it here it can yield, and what
//    it yields back is the result.
