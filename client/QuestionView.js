var Backbone = require('backbone');
var QuestionModel = require('./QuestionModel')
var template = require('./QuestionView.hbs');

var QuestionView = Backbone.View.extend({

  model: new QuestionModel(),

  events:{
    'click .js-submit': 'grade'
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    var rendered = template(this.model.toJSON())
    this.$el.html(rendered);
  },

  grade: function(e){
    e.preventDefault();
    var val = this.$el.find('.js-response').val()
    this.model.response(val);
    this.render();
  }

});


module.exports = QuestionView
