
// create-assign @ npm, a combination of calling Object.create() then Object.assign().

var object_assign = Object.assign ||
	// polyfill Object.assign(), from https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	function (target, varArgs) {
		if (target === null || target === undefined) {
			throw new TypeError('Cannot convert undefined or null to object');
		}

		var to = Object(target);
		for (var index = 1; index < arguments.length; index++) {
			var nextSource = arguments[index];
			if (nextSource !== null && nextSource !== undefined) {
				for (var nextKey in nextSource) {
					// Avoid bugs when hasOwnProperty is shadowed
					if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
						to[nextKey] = nextSource[nextKey];
					}
				}
			}
		}
		return to;
	};

var create_assign = function (proto, properties /*, properties2, ...*/) {
	return object_assign.apply(Object, [Object.create(proto)].concat(Array.prototype.slice.call(arguments, 1)));
}

//module

module.exports = exports = create_assign;

exports.assign = object_assign;
exports.derive = create_assign;
