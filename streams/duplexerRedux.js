var duplex = require('duplexer');
var through = require('through')
var through2 = require('through2');

module.exports = function (counter) {
  var countryCount = {};
  var countryCountStream = through(countCountries,
                                    setCount);

  return duplex(countryCountStream, counter);

  function countCountries (data) {
    var countryCode = data.country;
    var count = countryCount[countryCode] || 0;
    countryCount[countryCode] = count + 1;
  }

  function setCount () {
    counter.setCounts(countryCount);
    countryCount = {};
  }
}

// through 2 requires two changes, namely
// 1. That we set the stream to an object stream (this can also be done using
//   the through2.obj function)
// 2. We call the callback on the transform function to let the stream know that
//    we're done with this chunk of data and that we need the next one - here
//    the callback function has been named `next` to fit with the semantics, but
//    we could also imagine it being called `done` or `iCanHazNext`

module.exports = function (counter) {
  var countryCount = {};
  var countryCountStream = through2({ objectMode: true },
                                    countCountries,
                                    setCount);

  return duplex(countryCountStream, counter);

  function countCountries (data, _, next) {
    var countryCode = data.country;
    var count = countryCount[countryCode] || 0;
    countryCount[countryCode] = count + 1;
    next();
  }

  function setCount () {
    counter.setCounts(countryCount);
    countryCount = {};
  }
}

// we can refactor this by extracting out the transform and the flush functionsa
// from the body of the exported function, injecting any dependencies in.

module.exports = function (counter) {
  var countryCount = {};
  var countryCountStream = through2.obj(countCountries(countryCount),
                                        setCount(countryCount, counter));
  return duplex(countryCountStream, counter);
}

function countCountries (countryCount) {
  return function (data, _, next) {
    var countryCode = data.country;
    var count = countryCount[countryCode] || 0;
    countryCount[countryCode] = count + 1;
    next();
  }
}

function setCount (countryCount, counter) {
  return function () {
    counter.setCounts(countryCount);
    countryCount = {};
  }
}
