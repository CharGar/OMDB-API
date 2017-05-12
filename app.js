var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require ('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

// serve static files
app.use(express.static('public'));
app.use(bodyParser.urlencoded( {extended:true}));
app.use(bodyParser.json());

//create mongoDb


//create mongoose Schema

// server index file
app.get('/info', function(req, res) {
    res.send("hello from the server");
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.get('/getAll/:id?', function (req, res){
  console.log(req.params.id);
  if (req.params.id == undefined){
    console.log('id is--> undefined');
    res.send(200);
  } else {
    console.log(req.params.id);
    res.send(200);
  }
});

app.listen(port, function() {
  console.log("server running, check localhost:3000");
});
