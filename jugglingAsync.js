
var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]]
var result  = ["", "", ""];
var flags = [false, false, false];

urls.forEach(function (url, index) {
  http.get(url, function (response) {
    _result = "";
    response.setEncoding('utf8');
    response.on('data', function(data) {
      result[index] += data.toString();
    });
    response.on('error', console.error);
    response.on('end', function() {
      flags[index] = true;
      if (flags.indexOf(false) == -1) {
        result.forEach(function (data) {
          console.log(data);
        })
      }
    });
  });
});

//loop1:
  //for ( ; ; ) {
    //while (result.indexOf(false)) {
      //result.forEach(function (data) {
        //console.log(data);
      //})
      //break loop1
    //}
  //}

