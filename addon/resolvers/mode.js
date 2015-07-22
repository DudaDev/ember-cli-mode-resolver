import Resolver from 'ember/resolver';
import assign from '../utils/object-assign';

export
default Resolver.extend({
	resolveTemplate: function (parsedName) {
		var parsedNameClone,
			root = parsedName.root,
			resolverMode = root.get('resolverMode'),
			resolved;
		if (resolverMode) {
			var modePosfix = resolverMode.delimiter + resolverMode.id;
			
			parsedNameClone = assign({}, parsedName);
			parsedNameClone.name = parsedName.name + modePosfix;
			parsedNameClone.fullName = parsedName.fullName + modePosfix;
			parsedNameClone.fullNameWithoutType = parsedName.fullNameWithoutType + modePosfix;
			resolved = this._super(parsedNameClone);
		}
		if (!resolved){
			resolved = this._super(parsedName);
		}
		return resolved;
	},
	resolveOther : function (parsedName) {
		var parsedNameClone,
			root = parsedName.root,
			resolverMode = root.get('resolverMode'),
			resolved;
		if (resolverMode) {
			var modePosfix = resolverMode.delimiter + resolverMode.id;
			parsedNameClone = assign({}, parsedName);
			if (parsedNameClone.name === 'main'){
				parsedNameClone.type =  parsedName.type + modePosfix;
			} else {
				parsedNameClone.name = parsedName.name + modePosfix;
				parsedNameClone.fullName = parsedName.fullName + modePosfix;
				parsedNameClone.fullNameWithoutType = parsedName.fullNameWithoutType + modePosfix;
			}
			resolved = this._super(parsedNameClone);
		}
		if (!resolved){
			resolved = this._super(parsedName);
		}
		return resolved;
	}
});
