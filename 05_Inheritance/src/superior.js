// 5.4 Functional
// 継承元のメソッドを呼び出す

Object.method('superior', function (name) {
	var that = this,
		method = that[name];
		return function () {
			return method.apply(that, arguments);
		};
});