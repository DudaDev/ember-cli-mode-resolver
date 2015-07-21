import Resolver from 'ember/resolver';

export
default Resolver.extend({
	resolveTemplate: function (parsedName) {
		var parsedNameClone,
			root = parsedName.root,
			resolverMode = root.get('resolverMode'),
			resolved;
		if (resolverMode) {
			var modePosfix = resolverMode.delimiter + resolverMode.id;
			
			parsedNameClone = $.extend({}, parsedName);
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
			parsedNameClone = $.extend({}, parsedName);
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
