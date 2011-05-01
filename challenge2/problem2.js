
/**
 * Module dependencies.
 */

var connect = require('./node_modules/connect/');

connect.createServer(function(req, res){
  var body = 'Andrew Yee';
  res.setHeader('Content-Length', body.length);
  res.end(body);
}).listen(8000);
