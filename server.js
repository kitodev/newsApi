
var bodyParser = require("body-parser");
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/app/index.html");
});

app.listen(4000 , function () {
    console.log('Server is running on Port: 4000');
});

