
  // Main View
  var RecipeView = Backbone.View.extend({

    className: "recipe"

    initialize: function(){
      this.render();
    },

    render: function(){
      this.$el.append('<p>Hello World</p>');
    },
  });
