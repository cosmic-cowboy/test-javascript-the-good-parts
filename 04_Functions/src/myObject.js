// 4.3.1 メソッド呼び出しパターン
// incrementメソッドはパラメータを1つ持つ
// パラメータがあり、かつ数字であれば、それを加算する
// パラメータがない。数字はない場合は、1を加算する

var myObject = {
	value: 0,
	increment: function (inc) {
		this.value += typeof inc === 'number' ? inc :1;
	}
};