// Top level dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var QuizView = require('./QuizView');
var QuizModel = require('./QuizModel');
var questionService = require('./data-services/questionService');
var HeaderView = require('./HeaderView');

var quiz = questionService.getQuizById(1);

var header = new HeaderView();
var view = new QuizView({
  model: quiz
});
