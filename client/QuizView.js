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
    var _this = this;
    this.listenTo(this.model.questionCollection,'change', function(){
      _this.render();
    });
  },

  render: function(){
    this.$el.html(template());
    this.quizNavView = new QuizNavView({
      collection: this.model.questionCollection,
      el: this.$el.find(".quiz-nav")
    });

    this.curQuestion = new QuestionView({
      model: this.model.curQuestionModel,
      el: this.$el.find(".question")
    });
  }

});


module.exports = QuizView
