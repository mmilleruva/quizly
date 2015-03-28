var Backbone = require('backbone');
var GetSetMixin = require('../mixins/GetSet');

var QuestionModel = require('./QuestionModel');
var QuestionCollection = require('./QuestionCollection');

var QuizModel = Backbone.Model.extend({

  defaults:{
    questions: []
  },

  initialize: function(){
    this.questionCollection = new QuestionCollection(this.get('questions'));

    if (this.questionCollection.length > 0) {
      this.curQuestionModel = this.questionCollection.at(0);
      this.curQuestionModel.curQuestion(true);
    }
    _this = this;
    this.listenTo(this.questionCollection, QuestionModel.triggers.SELECTED, function(model){
      _this.setCurQuestion(model);
    });
  },

  setCurQuestion: function(model){
    this.curQuestionModel.curQuestion(false);
    this.curQuestionModel = model;
    this.curQuestionModel.curQuestion(true);
  }


});

module.exports = QuizModel;
