var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require ('body-parser');
var mongoose = require('mongoose');
var assignments = require( './models/assSchema.js' );

var port = process.env.PORT || 3000;

// serve static files
app.use(express.static('public'));
app.use(bodyParser.urlencoded( {extended:true}));
app.use(bodyParser.json());

// server index file
app.get('/', function( req, res ) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
}); // end base GET

app.get('/assignments/:id?', function ( req, res ){
  console.log(req.params.id);
  if (req.params.id == undefined){
    console.log('id is--> undefined');
    assignments.find().then(function( data ) {
      res.send( data );
    }); // end find all
  } else {
    console.log( req.params.id );
    assignments.find({ _id:req.params.id }).then(function( data ) {
      res.send( data );
    }, function( err ) {
      res.sendStatus( 500 );
    }); // end find by id
  } // end if else
}); // assignments GET

app.post( '/assignments', function ( req, res ) {
  console.log( 'in assignments POST route:', req.body );
  var newAssIn = assignments(req.body);
  newAssIn.save().then(function(){
    res.sendStatus(200);
  }); // end save
}); // end assignments POST

app.listen(port, function() {
  console.log("server running, check localhost:3000");
}); // end listen
