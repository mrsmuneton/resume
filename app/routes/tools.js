import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.filter('skill', {}, function(skill) {
	  return skill.get('type') === 'tool';
    });
  }
});
