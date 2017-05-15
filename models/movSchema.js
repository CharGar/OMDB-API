var mongoose = require( 'mongoose' );

//create mongoDb
mongoose.connect( 'localhost:27017/movies' );

//create mongoose Schema
var movieSchema = mongoose.Schema({
  title: String,
  year: Number,
  poster: String
}); // end Schema


var movies = mongoose.model( 'movies', movieSchema );

module.exports = movies;
