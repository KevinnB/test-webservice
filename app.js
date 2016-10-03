var express = require('express'),
	winston = require('winston'),
	http	= require('http');
var app = express();

app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 8000;




/**
 * Creates the server for the pinpoint web service
 * @param {int} port: Port for the server to run on
 */
exports.createServer = function (port) {  
  var server = http.createServer(function (request, response) {
    var data = '';

    winston.info('Incoming Request', { url: request.url });

    request.on('data', function (chunk) {
      data += chunk;
    });

    response.writeHead(501, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ message: 'not implemented' }));
  });

  if (port) {
    server.listen(port);
  }

  return server;
};




app.listen(port);