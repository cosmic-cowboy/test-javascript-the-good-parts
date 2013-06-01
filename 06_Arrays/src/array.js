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

// 6_7_dim
Array.dim = function(dimension, initial) {
	var a = [], i;
	for (i = 0; i < dimension; i++) {
		a[i] = initial;
	}
	return a;
};

// 6_7_matrix
Array.matrix = function (m, n, initial) {
	var a, i, j, mat = [];
	for (i = 0; i < m; i += 1) {
		a = [];
		for (j = 0; j < n; j += 1) {
			a[j] = initial;
		}
		mat[i] = a;
	}
	return mat;
};