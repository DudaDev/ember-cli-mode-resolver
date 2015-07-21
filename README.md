# ember-cli Mode Resolver

Custom resolver to allow the same route to be resolved as different modes of the application.
Mode is determined by configuration.
(A common use case would be a/b testing)

[![Build Status](https://travis-ci.org/DudaDev/ember-cli-mode-resolver.svg)](https://travis-ci.org/DudaDev/ember-cli-mode-resolver) 

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Usage
### Configuration
In your app root (`app.js`) add import of the mode resolver module: 
```javascript
import ModeResolver from 'ember-cli-mode-resolver/resolvers/mode'
```
Then oveveride the default resolver with mode resolver and define mode configuration:
```javascript
var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  //override resolver
  Resolver: ModeResolver,
  //current mode configuration
  resolverMode: {
  	id: "a",
  	delimiter: "~"
  }
});
```
### Naming Convention

#### Pods

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
