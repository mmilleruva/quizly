// Top level dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var QuizView = require('./QuizView');
var questionService = require('./data-services/questionService');
var HeaderView = require('./HeaderView');

var questions = questionService.getQuestionsById(1);

var header = new HeaderView();
var view = new QuizView({
  collection: questions
});
