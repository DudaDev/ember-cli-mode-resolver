# ember-cli Mode Resolver
[![npm version](https://badge.fury.io/js/ember-cli-mode-resolver.svg)](http://badge.fury.io/js/ember-cli-mode-resolver)
[![Build Status](https://travis-ci.org/DudaDev/ember-cli-mode-resolver.svg)](https://travis-ci.org/DudaDev/ember-cli-mode-resolver) 
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-mode-resolver.svg)](http://emberobserver.com/addons/ember-cli-mode-resolver)

Custom resolver to allow the same route to be resolved as different modes of the application.
Mode is determined by configuration.
(A common use case would be a/b testing) 

## Installation

```sh
ember install ember-cli-mode-resolver`
```
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
In order to have a module used when a certain mode is configure, add a the concatenation of **mode delimiter** and **mode id** as a postfix to the module file name. 
For example if the mode configration is:
```javascript 
 resolverMode: {
  	id: "a",
  	delimiter: "~"
  }
```
and we have a **'fooit'** route module at `/routes/fooit.js`, we can add an altenative **'fooit'** route module that will be resolved in when mode **'a'** id configured - `/routes/fooit~a.js`.
#### Pods
The equaivalent case when using pods would be an alrenative to `/fooit/route.js`.
In this case we will create an alternative **'fooit'** pod folder named **'fooit~a'** and place the alternative **'route.js'** module file there so alternative route module file will be at `/fooit~a/route.js`. 

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
