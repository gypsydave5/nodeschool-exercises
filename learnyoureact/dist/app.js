'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TodoBox = require('./views/index.js');

var data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDOM.render(React.createElement(TodoBox, { data: data }), document.getElementById("app"));
//# sourceMappingURL=app.js.map