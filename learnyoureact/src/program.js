"use strict";

const express = require('express');
const app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'js');
app.set('views', __dirname + '/views');
app.engine('js', require('express-react-views').createEngine({
  transformViews: false
}));

require('node-jsx').install();

const data = [
  {title: 'Shopping', detail: process.argv[3] || 'Milk'},
  {title: 'Hair cut', detail: process.argv[4] || '14:00'}
]

app.use('/', (req, res) => {
  res.render('index', {data: data})
});

app.listen(app.get('port'), () => {
  console.log('app running on http://localhost:' + app.get('port'));
});
