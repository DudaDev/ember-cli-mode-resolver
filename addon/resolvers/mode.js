import Resolver from 'ember/resolver';

export
default Resolver.extend({
	resolveTemplate: function (parsedName) {
		var parsedNameClone,
			podsParsedNameClone,
			root = parsedName.root,
			resolverMode = root.get('resolverMode'),
			resolved;
		if (resolverMode) {
			var modePostfix = resolverMode.delim + resolverMode.id;
			
			parsedNameClone = $.extend({}, parsedName);
			parsedNameClone.name = parsedName.name + modePostfix;
			parsedNameClone.fullName = parsedName.fullName + modePostfix;
			parsedNameClone.fullNameWithoutType = parsedName.fullNameWithoutType + modePostfix;
			resolved = this._super(parsedNameClone);
			if (!resolved) {
				if (parsedName.name.includes("doit")){
					debugger;
				}
				podsParsedNameClone = $.extend({}, parsedName);
				podsParsedNameClone['modePostfix'] = modePostfix;
				resolved = this._super(podsParsedNameClone);

			}

		}
		if (!resolved){
			resolved = this._super(parsedName);
		}
		return resolved;
	},
	resolveOther : function (parsedName) {
		var parsedNameClone,
			podsParsedNameClone,
			root = parsedName.root,
			resolverMode = root.get('resolverMode'),
			resolved;
		if (resolverMode) {
			var modePostfix = resolverMode.delim + resolverMode.id;
			parsedNameClone = $.extend({}, parsedName);
			
			if (parsedNameClone.name === 'main'){
				parsedNameClone.type =  parsedName.type + modePostfix;
			} else {
				parsedNameClone.name = parsedName.name + modePostfix;
				parsedNameClone.fullName = parsedName.fullName + modePostfix;
				parsedNameClone.fullNameWithoutType = parsedName.fullNameWithoutType + modePostfix;

			}
			resolved = this._super(parsedNameClone);
			if (!resolved) {
				if (parsedName.name.includes("doit")){
					debugger;
				}
				podsParsedNameClone = $.extend({}, parsedName);
				podsParsedNameClone['modePostfix'] = modePostfix;
				resolved = this._super(podsParsedNameClone);
			}
		}
		if (!resolved){
			resolved = this._super(parsedName);
		}
		return resolved;
	},
	podBasedLookupWithPrefix: function(podPrefix, parsedName) {
		var modePostfix= parsedName['modePostfix'];
		var res = this._super(podPrefix, parsedName);
		if (parsedName.name.includes("doit")){
					debugger;
				}
		if (modePostfix) {
			return  res + modePostfix;
		} 
		return res;
	}
});
