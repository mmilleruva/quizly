
var QuestionCollection = require('../QuestionCollection');

var getQuestionsById = function(id){
  var questions = new QuestionCollection();
  questions.add({prompt:"What is 1 + 1", answer: '2'});
  questions.add({prompt:"What is 2 + 2", answer: '4'});
  questions.add({prompt:"What is 3 + 3", answer: '6'});
  questions.add({prompt:"What is 4 + 4", answer: '8'});
  return questions;
}

module.exports = {
  getQuestionsById: getQuestionsById
};




