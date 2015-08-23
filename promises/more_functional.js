var _ = require('lodash');

var dbPath    = 'http://localhost:7001/';
var cachePath = 'http://localhost:7000';
var printJSON = _.compose(console.log, JSON.parse);
var dbIdRoute = _.bind(String.prototype.concat, dbPath);

//// Q way
// var http = require('q-io/http');
// var getFromId = _.compose(http.read, dbIdRoute);

// http.read(cachePath)
//   .then(getFromId)
//   .then(printJSON)
//   .catch(console.error)
//   .done();

//// bluebird
var Promise    = require('bluebird');
var request    = Promise.promisify(require('request'));
var dbIdRoute  = _.bind(String.prototype.concat, dbPath);

//// a little awkward as the promisified `request` returns an array
//// of `[response, body]` - perfect for the spread. While we would
//// normally be able to handle the first element of an array with
//// a `then()`, we can't get hold of the first, which in this case
//// is the one we want. And so our solutions look like this:
////
//// 1 - get the second element by destructuing the returned array as
//// arguments to the function with `spread()`, but only using the second
//// at the beginning of the composed function

var onlySecond = function (_, arg2) { return arg2 }
var printJSON  = _.compose(console.log, JSON.parse, onlySecond);
var getFromId  = _.compose(request, dbIdRoute, onlySecond);

// request(cachePath)
//   .spread(getFromId)
//   .spread(printJSON)
//   .catch(console.error)
//   .done()

//// 2 - take the array of returned arguments as an array using `then()`, but
//// only use the second one by returning it at the beginning of the
//// composed function

var onlySecond = function (array) {return (array[1])};

request(cachePath)
  .then(getFromId)
  .then(printJSON)
  .catch(console.error)
  .done()
