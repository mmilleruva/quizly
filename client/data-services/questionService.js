
var QuizModel = require('../QuizModel');

var getQuizById = function(id){
  var questions = new QuizModel({
    questions: [
      {prompt:"What is 1 + 1", answer: '2'},
      {prompt:"What is 2 + 2", answer: '4'},
      {prompt:"What is 3 + 3", answer: '6'},
      {prompt:"What is 4 + 4", answer: '8'},
      {prompt:"What is the capital of Virginia", answer: 'Richmond'},
      {prompt:"What is my address?", answer: '4007'},
    ]
  });
  return questions;
}

module.exports = {
  getQuizById: getQuizById
};




