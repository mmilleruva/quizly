var Backbone = require('backbone');
var template = require('./QuizNavItem.hbs');
var QuestionModel = require('./QuestionModel')

var QuizNavItemView = Backbone.View.extend({

  model: new QuestionModel(),
  className: 'quiz-nav-item',
  tagName: 'li',

  events:{
    'click .quiz-nav-item-content': 'select'
  },

  initialize: function(){
    this.render();
    this.listenTo(this.model, 'change', function(){
      this.render();
    });
  },

  render: function(){
    var rendered = template(this.model.toJSON());
    this.$el.html(rendered);
  },

  select: function(){
    this.model.select();
  }

});

module.exports = QuizNavItemView

