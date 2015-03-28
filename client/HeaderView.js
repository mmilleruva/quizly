var Backbone = require('backbone');
var template = require('./Header.hbs');

var HeaderView = Backbone.View.extend({

  el: '.app-header',

  initialize: function(){
    this.render();
  },

  render: function(){
    var rendered = template();
    this.$el.html(rendered);
  }
});

module.exports = HeaderView;
