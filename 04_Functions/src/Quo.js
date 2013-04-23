// 4.3.3 Quoという名のコンストラクタ関数を生成

var Quo = function (string) {
	this.status = string;
};

// get_status というパブリックメソッド

Quo.prototype.get_status = function() {
	return this.status;
};