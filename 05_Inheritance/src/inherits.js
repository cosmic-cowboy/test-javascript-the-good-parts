// 5.1 Pseudoclassical
// 疑似クラス作成のためのinheritメソッドを追加

Function.method('inherits', function (Parent) {
	this.prototype = new Parent();
	return this;
});