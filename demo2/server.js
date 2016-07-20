var express = require('express');
var app = express();

app.use('/lib', express.static(__dirname + '/node_modules'));
app.use('/', express.static(__dirname + '/public'));

var server = app.listen(8000, () => {
    console.log('Server listening on port 8000');
});
