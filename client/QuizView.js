var Backbone = require('backbone');

var QuestionCollection = require('./QuestionCollection')

var QuestionView = require('./QuestionView');
var QuizNavView = require('./QuizNavView');

var template = require('./templates/QuizView.hbs');


var QuizView = Backbone.View.extend({

  el: '.app-content',

  curQuestion: new QuestionView(),
  quizNavView: new QuizNavView(),

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(template());

    this.quizNavView = new QuizNavView({
      collection: this.collection,
      el: this.$el.find(".quiz-nav")
    });

    this.curQuestion = new QuestionView({
      model: this.collection.at(0),
      el: this.$el.find(".question")
    });
  }

});


module.exports = QuizView
