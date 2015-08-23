var q = require('q');
var Promise = require('bluebird');

//Q way

//q.fcall(JSON.parse, process.argv[2])
//.catch(console.log);

//bluebird way

Promise.method(JSON.parse)(process.argv[2])
.catch(console.log);