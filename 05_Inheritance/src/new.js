// 5.1 Pseudoclassical

Function.method('new', function () {

	// コンストラクタのprototypeを継承した新しいオブジェクト生成
	var that = Object.create(this.prototype);

	// this に新しいオブジェクトをセットした上でコンストラクタを呼び出す
	var other = this.apply(that, arguments);

	// もし戻り値がオブジェクトでなければ、新しいオブジェクトに置き換える
	return (typeof other === 'object' && other) || that;

});