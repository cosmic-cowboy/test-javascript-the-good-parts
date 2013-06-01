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
	"test_6_3_Delete" : function () {
		var numbers = ["zero",	"one", "two", 'shi', 'go'];

		delete numbers[2];
		jstestdriver.console.log(numbers);
		assertUndefined(numbers[2]);

		numbers = ["zero",	"one", "two", 'shi', 'go'];

		numbers.splice(2,1);
		jstestdriver.console.log(numbers);
		assertEquals('shi', numbers[2]);

	},
	"test_6_4_Enumeration" : function () {
		var i;
		var myArray = ["zero",	"one", "two", "three", "four"];

		for (i = 0; i < myArray.length; i++) {
			jstestdriver.console.log(myArray[i]);

			if(i === 0){
				assertEquals("zero", myArray[i]);
			} else if(i === 1){
				assertEquals("one", myArray[i]);
			} else if(i === 2){
				assertEquals("two", myArray[i]);
			} else if(i === 3){
				assertEquals("three", myArray[i]);
			} else if(i === 4){
				assertEquals("four", myArray[i]);
			}
		}
	},
	"test_6_5_Confusion" : function () {
		var myArray = ["zero",	"one", "two", "three", "four"];

		jstestdriver.console.log(typeof myArray);
		jstestdriver.console.log(myArray.constructor);
		jstestdriver.console.log(myArray.length);
		jstestdriver.console.log(myArray.splice);
		jstestdriver.console.log(myArray.propertyIsEnumerable('length'));

		assertTrue(is_array(myArray));
		assertTrue(is_array_01(myArray));

	},
	"test_6_6_Methods" : function () {
		var data = [4, 8, 15, 16, 23, 42];

		var add = function(a,b){
			return a + b;
		};

		var mult = function(a,b){
			return a * b;
		};
		jstestdriver.console.log(data.reduce(add, 0));
		jstestdriver.console.log(data.reduce(mult, 1));

		assertEquals(108, data.reduce(add, 0));
		assertEquals(7418880, data.reduce(mult, 1));

	},
	"test_6_7_Dimensions" : function () {
		var myArray = Array.dim(10, "a");
		assertEquals(["a","a","a","a","a","a","a","a","a","a"], myArray);
	},
	"test_6_7_Matrix" : function () {
		var myMatrix = Array.matrix(4, 4, 0);
		assertEquals(0, (myMatrix[3][3]));
	}
});