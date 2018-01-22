import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var skills = this.store.filter('skill', {}, function(skill) {
	  return skill.get('type') === 'language';
    });
		return skills;
  }
});
