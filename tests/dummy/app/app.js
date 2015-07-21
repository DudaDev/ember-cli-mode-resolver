import Ember from 'ember';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import ModeResolver from 'ember-cli-mode-resolver/resolvers/mode';
// import Resolver from 'ember/resolver' ;
var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: ModeResolver,
  resolverMode: {
  	id: "a",
  	delimiter: "~"
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
