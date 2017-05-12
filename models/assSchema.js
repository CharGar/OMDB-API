var mongoose = require( 'mongoose' );

//create mongoDb
mongoose.connect( 'localhost:27017/groupWeek5' );

//create mongoose Schema
var assSchema = mongoose.Schema({
  assignment_name: String,
  student_name: String,
  score: Number,
  date_completed: Date // "2017-05-12"
}); // end assSchema

var assignments = mongoose.model( 'assignments', assSchema );

module.exports = assignments;
