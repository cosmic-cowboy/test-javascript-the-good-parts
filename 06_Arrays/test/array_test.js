TestCase("Chapter6_Arrays", {

	// 6_1
	"test_6_1_Array_Literals" : function () {

		// Array_Literals
		var empty = [];
		var numbers = [
			"zero",	"one", "two", "three", "four",
			"five", "six", "seven", "eight", "nine"
		];

		jstestdriver.console.log(empty);
		jstestdriver.console.log(numbers);

		assertUndefined(empty[1]);
		assertEquals("one", numbers[1]);

		assertEquals(0,  empty.length);
		assertEquals(10, numbers.length);

		// Object_Literals
		var numbers_object = {
			'0':'zero',	'1':'one', '2':'two',   '3':'thre',  '4':'four',
			'5':'five',	'6':'six', '7':'seven', '8':'eight', '9':'nine'
		};

		var counter = 0;
		for(var number in numbers_object){
			counter++;
		}
		jstestdriver.console.log(numbers_object);
		assertEquals(10, counter);

		// Array_Literals
		var misc = [
			'string', 98.6,
			true, false,
			null, undefined,
			['nested', 'array'], {object : true},
			NaN, Infinity
		];

		jstestdriver.console.log(misc);
		assertEquals(10, misc.length);

	},
	// 6_2
	"test_6_2_Length" : function () {

		var myArray = [];
		jstestdriver.console.log(myArray);
		assertEquals(0,  myArray.length);

		myArray[1000000] = true;
		jstestdriver.console.log(myArray[1000000]);
		assertEquals(1000001,  myArray.length);
		assertUndefined(myArray[0]);
		assertTrue(myArray[1000000]);

		var numbers = ["zero",	"one", "two"];
		jstestdriver.console.log(numbers);
		assertEquals(3, numbers.length);

		numbers[numbers.length] = 'shi';
		jstestdriver.console.log(numbers);
		assertEquals(4, numbers.length);

		numbers.push('go');
		jstestdriver.console.log(numbers);
		assertEquals(5, numbers.length);

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