var split = require('split');
var through = require('through2');
var zlib = require('zlib')
var combine = require('stream-combiner')

module.exports = function () {
  var booksByGenre;
  var collectBooksByGenre = through(gatherGenres,
                                    lastGenre);
  return combine(
    split(),
    collectBooksByGenre,
    zlib.createGzip()
  )

  function lastGenre (data, _, next) {
    if (data.length === 0) { return next() }

    var row = JSON.parse(data);

    if (row.type == 'genre') {
      if (booksByGenre) {
        this.push(JSON.stringify(booksByGenre) + '\n');
      }
      booksByGenre = { name: row.name, books: [] };
    } else if (row.type === 'book') {
      booksByGenre.books.push(row.name);
    }
    next();
  }

  function gatherGenres (done) {
    if (booksByGenre) {
      this.push(JSON.stringify(booksByGenre) + '\n');
    }
    done()
  }
}
