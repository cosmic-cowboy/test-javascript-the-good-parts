// 7.1 正規表現

TestCase("07 Regular Expressions Test parse number", {
	"test parse number" : function () {

		// ^-? : 先頭に「-」が0,1回出現
		// d+(?:\.\d*)? : 数字が1回以上出現, 非キャプチャグループとして、「.」のあとに数字が0回以上
		// (?:e[+\-]?\d+)? : 非キャプチャグループとして、「e」、「+」もしくは「-」が0,1回、数字が1回以上
		// i:iフラグはアルファベットの大文字小文字を区別しない

		var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;

		assertTrue(parse_number.test('1'));
		assertTrue(parse_number.test('-2'));

		assertTrue(parse_number.test('5.'));
		assertFalse(parse_number.test('.7'));
		assertTrue(parse_number.test('10.0'));
		assertTrue(parse_number.test('123.01'));
		assertTrue(parse_number.test('1234.0123456788900'));
		assertFalse(parse_number.test('132.21.86.100'));

		assertTrue(parse_number.test('123e67'));
		assertTrue(parse_number.test('123e+67'));
		assertTrue(parse_number.test('123e-67'));
		assertFalse(parse_number.test('123e'));
		assertFalse(parse_number.test('123e+'));
		assertFalse(parse_number.test('123e-'));
		assertTrue(parse_number.test('123.45E-67'));
		assertFalse(parse_number.test('123.45D-67'));
		assertFalse(parse_number.test('number'));
	}
});