var express = require('express');
var app = express();
var path = require('path');


app.set('port', (process.env.PORT || 5000));


app.set('trust proxy', 'loopback');
app.use('/scripts/', express.static(__dirname + '/scripts/'));

app.use('/styles/', express.static(__dirname + '/styles/'));

app.use('/images/', express.static(__dirname + '/images/'));


app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '/')
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
