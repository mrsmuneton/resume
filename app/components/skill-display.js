import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    click: function(someskill) {
		$( ".right-side" ).html(someskill);
    }
  }
});
