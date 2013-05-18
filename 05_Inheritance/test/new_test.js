TestCase("05_Inheritance Test",{

	// 5.1 Pseudoclassical
	"test inherited by Object" : function () {
		var newObject = Object.new();
		assertEquals("object", typeof newObject);
	},
	"test inherited by Mammal" : function () {
		var sub_Mammal = Mammal.new;
		assertNotEquals("object", typeof sub_Mammal);
	}


});
