// 4.2 add という変数を定義し、２つの値を加算する関数を格納する
// 4.6 例外

var add = function (a,b) {

	if(typeof a !== 'number' || typeof b !== 'number'){
		throw {
			name:'TypeError',
			message : 'add needs numbers'
		};
	}

	return a + b;
};