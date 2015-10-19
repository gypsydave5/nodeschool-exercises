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

// this is all rather clever
// 1. We define run, a function that takes a single argument, a generator function
// 2. `it` (terrible name) is defined as the executed generator, with the argument of `go`
// 3. then we define go, as a simple Nodey function that, when called, calls the
//    next() function of the `it` generator with the result
// 4. We then execute go - that is what happens when we run `run`

// So then we run `run`, and the generator is anonymous, and takes an argument called `done`
// This done will then be translated into the go function
// We define a generator, and we say what it will do with its done function
// and then we say, you done function, you are now `go` - and you make the next yield of the
// generator the result callback.
