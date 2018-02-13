import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tech');
  this.route('personality');
  this.route('person');
  this.route('languages');
  this.route('tools');
  this.route('concepts');
});

export default Router;
