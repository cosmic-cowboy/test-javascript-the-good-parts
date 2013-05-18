// 5-3 Prototypal
// プロトタイプ型継承
// 新しいオブジェクトが古いオブジェクトのプロパティを継承

var myMammal = {
	name : 'Herb the Mammal',
	get_name : function () {
		return this.name;
	},
	says : function () {
		return this.saying || '';
	}
};
