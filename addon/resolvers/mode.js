import Resolver from 'ember/resolver';
import assign from '../utils/object-assign';

export
default Resolver.extend({
	resolveTemplate: function (parsedName) {
		var root = parsedName.root,
			resolverMode = root.get('resolverMode'),
			resolved;
		if (resolverMode) {
			resolved = this._resolveTemplate(parsedName, resolverMode.delimiter + resolverMode.id);
			if (!resolved) {
				if (resolverMode.fallbackId) {
					resolved = this._resolveTemplate(parsedName,resolverMode.delimiter + resolverMode.fallbackId);
				}
			}
		}
		if (!resolved){
			resolved = this._super(parsedName);
		}
		return resolved;
	},

	resolveOther : function (parsedName) {
		var root = parsedName.root,
			resolverMode = root.get('resolverMode'),
			resolved;
		if (resolverMode) {
			resolved = this._resolveOther(parsedName,resolverMode.delimiter + resolverMode.id);
			if (!resolved) {
				if (resolverMode.fallbackId) {
					resolved = this._resolveOther(parsedName,resolverMode.delimiter + resolverMode.fallbackId);
				}
			}
		}


		if (!resolved){
			resolved = this._super(parsedName);
		}
		return resolved;
	},
	_resolveTemplate: function (parsedName,modePostfix) {
			var parsedNameClone = assign({}, parsedName);
			parsedNameClone.name = parsedName.name + modePostfix;
			parsedNameClone.fullName = parsedName.fullName + modePostfix;
			parsedNameClone.fullNameWithoutType = parsedName.fullNameWithoutType + modePostfix;
			return  this._super(parsedNameClone);
	},
	_resolveOther: function(parsedName,modePostfix) {
			var parsedNameClone = assign({}, parsedName);
			if (parsedNameClone.name === 'main'){
				parsedNameClone.type =  parsedName.type + modePostfix;
			} else {
				parsedNameClone.name = parsedName.name + modePostfix;
				parsedNameClone.fullName = parsedName.fullName + modePostfix;
				parsedNameClone.fullNameWithoutType = parsedName.fullNameWithoutType + modePostfix;
			}
			return this._super(parsedNameClone);
	}
});
