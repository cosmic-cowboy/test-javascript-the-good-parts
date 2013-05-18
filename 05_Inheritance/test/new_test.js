TestCase("05_Inheritance Test",{

	// 5.1 Pseudoclassical
	"test use new method, inherited by Object" : function () {
		var newObject = Object.new();
		assertEquals("object", typeof newObject);
	},

	"test use new method,  inherited by Mammal" : function () {
		var sub_Mammal = Mammal.new;
		assertNotEquals("object", typeof sub_Mammal);
	},

	"test create instance" : function () {
		var mammal_instance = new Mammal('Herb the Mammal');
		assertEquals('Herb the Mammal', mammal_instance.get_name());
	},

	"test create Pseudoclass" : function () {

		var myCat = new Cat('Henrietta');
		assertEquals('meow', myCat.says());
		assertEquals('r-r-r-r-r', myCat.purr(5));
		assertEquals('meow Henrietta meow', myCat.get_name());

	},

	"test use inherit method, create Pseudoclass" : function () {

		// var inherit_Cat = new CatInherit('Inherietta');
		// assertEquals('meow', inherit_Cat.says());
		// assertEquals('r-r-r-r-r-r-r', inherit_Cat.purr(7));
		// assertEquals('meow Inherietta meow', inherit_Cat.get_name());

	},

	// 5.2 Object Specifiers
	"test 5.2 Object Specifiers" : function () {
		var myObject = maker({
			first : "f",
			last : "l",
			middle : "m",
			state : "s",
			city : "c"
		});
		assertEquals('f', myObject.first);
		assertEquals('l', myObject.last);
		assertEquals('m', myObject.middle);
		assertEquals('s', myObject.state);
		assertEquals('c', myObject.city);

	},

	// 5.3 Prototypal
	"test 5.3 Prototypal" : function () {
		var prototypeCat = Object.create(myMammal);
		prototypeCat.name = 'Henrietta';
		prototypeCat.saying = 'meow';
		prototypeCat.purr = function (n) {
			var i, s = '';
			for (i = 0; i < n; i += 1) {
				if(s){
					s += '-';
				}
				s += 'r';
			}
			return s;
		};
		assertEquals('meow', prototypeCat.says());
		assertEquals('r-r-r-r-r', prototypeCat.purr(5));
		assertEquals('Henrietta', prototypeCat.get_name());

	}


});


















