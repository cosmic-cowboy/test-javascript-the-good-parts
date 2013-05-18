// 4.7 変数型の拡張
// Function.prototypeを拡張して、すべての関数で利用できるメソッドを追加

Function.prototype.method = function(name, func) {
	if(!this.prototype[name]){
		this.prototype[name] = func;
		return this;
	}
};