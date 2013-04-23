TestCase("04_Funcitons Test",{

	// 4.2 add.jsをテスト

	"test add a b" : function () {
		assertEquals(4, add(1,3));
	},

	// 4.3.1 メソッド呼び出しパターン

	"test Method Invocation Pattern":function () {
		myObject.increment();
		assertEquals(1, myObject.value);

		myObject.increment(2);
		assertEquals(3, myObject.value);
	},

	// 4.3.2 関数呼び出しパターン

	"test Function Invocation Pattern":function () {

		var sum4_3_2 = add(3,4);

		assertEquals(7, sum4_3_2);
	},

	"test workaround":function () {
		myObject.double();
		assertEquals(6, myObject.value);
	},

	// 4.3.3 コンストラクタ呼び出しパターン

	"test Constructor Invocation Pattern" : function () {
		var myQuo = new Quo("confused");
		assertEquals("confused", myQuo.get_status());
	},

	// 4.3.4 apply呼び出しパターン

	"test Apply Invocation Pattern" : function () {
		// 2つの数値からなる配列をつくり、それらを足し合わせる

		var array = [3,4];
		var sum4_3_4 = add.apply(null, array);
		assertEquals(7, sum4_3_4);

		//
		var statusObject = {
			status: "A-OK"
		};
		var status = Quo.prototype.get_status.apply(statusObject);
		assertEquals("A-OK", status);
	},


	// 4.4 引数
	"test Arguments" : function () {
		assertEquals(108, sum(4,8,15,16,23,42));
	},

	// 4.6 例外
	"test Exception" : function () {
		try{
			add("seven");
		} catch(e){
			assertEquals('TypeError', e.name);
			assertEquals('add needs numbers', e.message);
		}
	}
});

