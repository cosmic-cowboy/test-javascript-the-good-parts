// 4.10　クロージャ

var myObject_Closure = (function(){

	var value = 0;

	return {
		increment : function (inc) {
			value += (typeof inc === 'number') ? inc : 1;
		},
		getValue : function(){
			return value;
		}
	};
}());
