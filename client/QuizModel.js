var Backbone = require('backbone');
var GetSetMixin = require('../mixins/GetSet')

var QuizModel = Backbone.Model.extend({
  defaults: {
    "prompt":  "",
    "answer": "",
    "response":""
  },

  answer:   GetSetMixin("answer"),
  response: GetSetMixin("response"),
  prompt:   GetSetMixin("prompt"),
  index:    GetSetMixin("index"),

  isCorrect: function(){
    return (this.response() == this.answer())
  },

  feedBack: function(){
    if (this.isCorrect()) {
      return "Correct!"
    };
    return "Oops, try again."
  },

  toJSON: function(){
    var props = Backbone.Model.prototype.toJSON.apply(this);
    props.isCorrect = this.isCorrect();
    props.feedback = this.feedBack();
    return props;
  }
});

module.exports = QuestionModel;
