var express = require('express');
var app = express();
var fs = require('fs');
var mongo = require('mongoskin');
var io = require('socket.io').listen(4000);

io.sockets.on('connection', function (socket) {
  setTimeout(function() {
    dbConnection.collection('stories').find().toArray(function (err, items) {
      if (err) return next(err);

      socket.emit('stories', items);

    });
  }, 5000);
});

var dbConnection = mongo.db('localhost:27017/gam', {
  safe: true
});

app.set('port', process.env.PORT || 8080);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/../deploy/'));

app.get('/stories', function(req, res, next) {

  dbConnection.collection('stories').find().toArray(function (err, items) {
    if (err) return next(err);

    res.json(items);

  });
});

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});