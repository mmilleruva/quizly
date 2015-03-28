var Backbone = require('backbone');
var template = require('./QuizNavItem.hbs');
var QuestionModel = require('./QuestionModel')

var QuizNavItemView = Backbone.View.extend({

  model: new QuestionModel(),
  className: 'quiz-nav-item',
  tagName: 'li',

  initialize: function(){
    this.render();
  },

  render: function(){
    var rendered = template(this.model.toJSON());
    this.$el.html(rendered);
  }

});

module.exports = QuizNavItemView

