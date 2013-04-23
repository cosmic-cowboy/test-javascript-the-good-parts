// 4.4 引数
// データを足し合わせる関数

var sum = function () {
	var i, sum = 0;
	for(i = 0; i < arguments.length; i += 1){
		sum += arguments[i];
	}
	return sum;
};