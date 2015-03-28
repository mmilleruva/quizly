var Backbone = require('backbone');
var QuestionModel = require('./QuestionModel');

var QuestionCollection = Backbone.Collection.extend({
  model: QuestionModel
});

module.exports = QuestionCollection;
