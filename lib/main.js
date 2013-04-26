var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  fs.readFile(__dirname + '/../public/index.html', function(error, content) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content.toString());
  });
}).listen(process.env.PORT);
console.log('Listening! Yeah!');
