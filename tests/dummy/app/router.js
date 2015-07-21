import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('doit', function () {
		this.route('now');
	});
	this.route('fooit');
});

export default Router;
