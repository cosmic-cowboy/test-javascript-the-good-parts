// 6_5_Confusion
var is_array_01 = function (value) {
	return value &&
		typeof value === 'object' &&
		value.constructor === Array;
};

var is_array = function (value) {
	return value &&
		typeof value === 'object'  &&
		typeof value.length === 'number'  &&
		typeof value.splice === 'function'  &&
		!(value.propertyIsEnumerable('length'));
};

// 6_6_Methods
// Array.method('reduce', function(f, value){
Array.prototype.reduce = function(f, value){
	var i;
	for (i = 0; i < this.length; i++) {
		value = f(this[i],value);
	}
	return value;
};