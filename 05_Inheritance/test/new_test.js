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
		prototypeCat.get_name = function() {
			return this.says() + ' ' + this.name + ' ' + this.says();
		};
		assertEquals('meow', prototypeCat.says());
		assertEquals('r-r-r-r-r', prototypeCat.purr(5));
		assertEquals('meow Henrietta meow', prototypeCat.get_name());

	},
	// 5.4 Functional
	"test 5.4 Functional" : function () {

		var functionalCat = function (spec) {
			spec.saying = spec.saying || 'meow';
			var that =	fun_mammal(spec);
			that.purr = function (n) {
				var i, s = '';
				for (i = 0; i < n; i += 1) {
					if(s){
						s += '-';
					}
					s += 'r';
				}
				return s;
			};
			that.get_name = function() {
				return this.says() + ' ' + spec.name + ' ' + this.says();
			};

			return that;
		};

		var myFunctionalCat = functionalCat({name:'Henrietta'});

		assertEquals('meow', myFunctionalCat.says());
		assertEquals('r-r-r-r-r', myFunctionalCat.purr(5));
		assertEquals('meow Henrietta meow', myFunctionalCat.get_name());

		// test 5.4 Functional call parent method"

		var coolCat = function (spec) {
			var that =	functionalCat(spec),
				super_get_name = that.superior('get_name');
			that.get_name = function() {
				return 'like ' + super_get_name() + ' bady';
			};

			return that;
		};

		var myCoolCat = coolCat({name:'Bix'});

		assertEquals('meow', myCoolCat.says());
		assertEquals('r-r-r-r-r', myCoolCat.purr(5));
		assertEquals('like meow Bix meow bady', myCoolCat.get_name());

	}
});


















