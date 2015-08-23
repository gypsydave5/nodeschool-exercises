var crypto = require('crypto');
var gunzipStream = require('zlib').createGunzip();
var tarParser = require('tar').Parse();
var through = require('through2');

var cypherName = process.argv[2];
var cypherPassword = process.argv[3];

process.stdin
  .pipe(crypto.createDecipher(cypherName, cypherPassword))
  .pipe(gunzipStream)
  .pipe(tarParser)

tarParser.on('entry', function (entry) {
  if (entry.type !== 'File') { return }
  entry
    .pipe(crypto.createHash('md5', { encoding: 'hex'}))
    .pipe(through(function (hash, _, next) {
      console.log(hash + ' ' + entry.path);
      next();
    }));
});


// exciting lesson: these are equivalent -
// console.log(hash + ' ' + entry.path);
// process.stdout.write(hash + ' ' + entry.path + '\n');
// although JS is horribly verbose, it's got some of the same funky bits
