function decorateLogger (decoration) {
  return console.log.bind(console, decoration);
}

module.exports = decorateLogger