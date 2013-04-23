// 4.3.1 メソッド呼び出しパターン

TestCase("myObject Test",{
	"test increment method":function () {
		myObject.increment();
		assertEquals(1, myObject.value);

		myObject.increment(2);
		assertEquals(3, myObject.value);
	}
})
