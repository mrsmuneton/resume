import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(/* transition */) {
   this.transitionTo('personality'); // Implicitly aborts the on-going transition.
 }
});
