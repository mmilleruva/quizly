var Backbone = require('backbone');
var GetSetMixin = require('../mixins/GetSet')

var QuestionModel = Backbone.Model.extend({
  defaults: {
    "prompt":  "",
    "answer": "",
    "response":""
  },

  answer:   GetSetMixin("answer"),
  response: GetSetMixin("response"),
  prompt:   GetSetMixin("prompt"),
  index:    GetSetMixin("index"),
  curQuestion:    GetSetMixin("curQuestion"),

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
  },

  select: function(){
    this.trigger(QuestionModel.triggers.SELECTED, this);
  }
});

QuestionModel.triggers = {
  SELECTED: "questionModel:selected"
};


module.exports = QuestionModel;
