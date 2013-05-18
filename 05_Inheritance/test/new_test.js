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

	}


});
