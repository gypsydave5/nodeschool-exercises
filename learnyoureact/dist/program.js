"use strict";

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var DOM = React.DOM;
var body = DOM.body;
var div = DOM.div;
var script = DOM.script;

var browserify = require('browserify');

var express = require('express');
var app = express();

app.set('port', process.argv[2] || 3000);
app.set('view engine', 'js');
app.set('views', __dirname + '/views');
app.engine('js', require('express-react-views').createEngine({
  transformViews: false
}));

require('node-jsx').install();
var TodoBox = require('./views/index.js');

var data = [{ title: 'Shopping', detail: process.argv[3] || 'Milk' }, { title: 'Hair cut', detail: process.argv[4] || '14:00' }];

app.use('/bundle.js', function (req, res) {
  res.setHeader('content-type', 'application/javascript');
  browserify(__dirname + '/app.js').transform('reactify').bundle().pipe(res);
});

app.use('/', function (req, res) {
  var initialData = JSON.stringify(data);
  var markup = ReactDOMServer.renderToString(React.createElement(TodoBox, { data: data }));

  res.setHeader('Content-Type', 'text/html');

  var html = ReactDOMServer.renderToStaticMarkup(body(null, div({ id: 'app', dangerouslySetInnerHTML: { __html: markup } }), script({ id: 'initial-data',
    type: 'text/plain',
    'data-json': initialData
  }), script({ src: '/bundle.js' })));

  res.end(html);
});

app.listen(app.get('port'), function () {
  console.log('app running on http://localhost:' + app.get('port'));
});
//# sourceMappingURL=program.js.map