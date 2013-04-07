TestCase("Chapter6_Arrays", {

	"test_Array_Literals" : function () {

		var empty = [];
		var numbers = [
			"zero",	"one", "two", "three", "four",
			"five", "six", "seven", "eight", "nine"
		];

		assertUndefined(empty[1]);
		assertEquals("one", numbers[1]);

		assertEquals(0,  empty.length);
		assertEquals(10, numbers.length);

		var numbers_object = {
			'0':'zero',	'1':'one', '2':'two',   '3':'thre',  '4':'four',
			'5':'five',	'6':'six', '7':'seven', '8':'eight', '9':'nine'
		};

		var counter = 0;
		for(var number in numbers_object){
			counter++;
		}
		assertEquals(10, counter);

		var misc = [
			'string', 98.6,
			true, false,
			null, undefined,
			['nested', 'array'], {object : true},
			NaN, Infinity
		];

		assertEquals(10, misc.length);

	},
	"test_Length" : function () {
		// body...
	},
	"test_Delete" : function () {
		// body...
	},
	"test_Enumeration" : function () {
		// body...
	},
	"test_Confusion" : function () {
		// body...
	},
	"test_Methods" : function () {
		// body...
	},
	"test_Dimensions" : function () {
 		// body...
	}
});