// 7.3　正規表現の構成要素

TestCase("07 Regular Expressions Test Elements", {
	"test reqular expressions sequence" : function () {

		var result = "into".match(/in|int/);
		assertEquals("in", result[0]);
	}
});