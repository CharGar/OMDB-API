var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require ('body-parser');
var mongoose = require('mongoose');
var movies = require( './models/movSchema.js' );
var port = process.env.PORT || 5000;

//  static files
app.use(express.static('public'));
app.use(bodyParser.urlencoded( {extended:true}));
app.use(bodyParser.json());

//  index file
app.get('/', function( req, res ) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
}); // end GET

//GET start
app.get('/', function ( req, res ){
  console.log(req.params.id);
  if (req.params.id){
    movies.find().then(function( data ) {
      res.send( data );
    }); // end
  } else {
    console.log( req.params.id );
  }
});//GET end
//POST start
app.post( '/favs', function ( req, res ) {
  console.log( 'ServerSide POST says:', req.body );
  var newMov = movies(req.body);
  newMov.save().then(function(){
    res.sendStatus(200);
  }); // end
}); // POST end

//GET start
app.get('/getfavs',function(req,res){
  console.log('In ServerSide GET');
  movies.find().then(function(data){
    console.log(data);
  res.send(data);
  });
});//GET end

//listen start
app.listen(port, function() {
  console.log("server running, check localhost:5000");
});
//listen end

//notes from millie
app.get('/*',function(req,res){
  res.sendFile(path.resolve('public/views/index.html'));
});
