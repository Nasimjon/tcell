var exec = require('child_process').exec;


function start(response) {
    console.log("Request handler 'start' was called.");
    var content = "empty";
    exec("Is -lah", function (error, stdout, stderr) {
      response.writeHead(200, {"Content-type": "text/plan"});
      response.write(stdout);
      response.end();
      //content = stdout;
    });
    //return content;
  }
   /* function sleep(milliSeconds) {
      var startTime = new Date().getTime();
      while (new Date().getTime() < startTime + milliSeconds);
    }
    sleep(10000);
    return "Hello Start";
  }
  */
  
function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-type": "text/plan"});
    response.write("Hello Upload");
    response.end();
    //return "Hello Upload";
  }

exports.start = start;
exports.upload = upload;
  