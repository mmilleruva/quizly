var Backbone = require('backbone');
var template = require('./QuestionView.hbs');
var QuizNavItemView = require('./QuizNavItemView');
var QuestionCollection = require('./QuestionCollection');

var QuizNavView = Backbone.View.extend({

  collection: new QuestionCollection(),

  initialize: function(){
    this.render();
  },

  render: function(){
    var _this = this;
    this.collection.each(function(question, index){
      question.index(index + 1);
      var navItemView = new QuizNavItemView({model: question});
      _this.$el.append(navItemView.$el);
    })
  }

});


module.exports = QuizNavView
