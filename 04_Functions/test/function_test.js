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

		var sum = add(3,4);

		assertEquals(7, sum);
	},

	"test workaround":function () {
		myObject.double();
		assertEquals(6, myObject.value);
	},

	// 4.3.3 コンストラクタ呼び出しパターン
	"test Constructor Invocation Pattern" : function () {
		var myQuo = new Quo("confused");
		assertEquals("confused", myQuo.get_status());
	}
});

