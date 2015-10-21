'use strict';

const fs = require('fs');

function run (generator) {
  var it = generator(go);

  function go (err, result) {
    if (err)  it.throw(result);
    it.next(err);
  }

  go();

}

run(function* (done) {
  let firstFile;
  try {
    var dirFiles = yield fs.readdir('NoNoNoNo', done);
    firstFile = dirFiles[0];
  } catch (err) {
    firstFile = null;
  }

  console.log(firstFile);
});
