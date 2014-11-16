TestCase("StringTest",{

	"test string charAt " : function () {
		var name = "Curly";
		assertEquals("C", name.charAt(0));
		assertEquals("C", name.slice(0, 1));
	},

	"test string charCodeAt " : function () {
		var name = "Curly";
		assertEquals(67, name.charCodeAt(0));
	},

	"test string concat " : function () {
		var name = "C";
		assertEquals("Cat", name.concat("a","t"));
	},

	"test string indexOf " : function () {
		var name = "aizuwakamatsu";
		assertEquals(0, name.indexOf("a"));
		assertEquals(5, name.indexOf("a",3));
		assertEquals(7, name.indexOf("a",6));
		assertEquals(9, name.indexOf("a",8));
		assertEquals(-1, name.indexOf("a",10));
	},

	"test string lastIndexOf " : function () {
		var name = "aizuwakamatsu";
		assertEquals(9, name.lastIndexOf("a"));
		assertEquals(0, name.lastIndexOf("a",3));
		assertEquals(5, name.lastIndexOf("a",6));
		assertEquals(7, name.lastIndexOf("a",8));
		assertEquals(9, name.lastIndexOf("a",10));
	},

	"test string match " : function () {
		var text = '<html><body bgcolor=linen><p>This is <b>bold<\/b>!<\/p><\/body><\/html>';
		var tags = /[^<>]+|<([\/]?)([A-Za-z]+)([^<>]*)>/g;
		var a = text.match(tags);
		var i;
		assertEquals("<html>", a[0]);

		for(i = 0; i < a.length; i++){
			console.log(a[i]);
		}
	},

	"test string replace " : function () {
		var text = "mother_in_law";
		var result = text.replace("_","-");
		
		assertEquals("mother-in_law", result);

		var oldareacode = /\(([\d]{3})\)/g;
		var p = '(555)666-1212';
		var r = p.replace(oldareacode, '$1-');
		assertEquals('555-666-1212', r);

		var p2 = '(55)666-1212';
		var r2 = p2.replace(oldareacode, '$1-');
		assertEquals("(55)666-1212", r2);

		var p3 = '(555)666-(555)1212';
		var r3 = p3.replace(oldareacode, '$1-');
		assertEquals("555-666-555-1212", r3);

		var content = "/dialy/2014/08/12/100/";
		// 最初を削除
		assertEquals("dialy/2014/08/12/100/", content.replace(/^\//,''));

		// 最後を削除
		assertEquals("/dialy/2014/08/12/100", content.replace(/\/$/,''));

	},

	"test string replace second " : function () {


		var oldareacode = /\(([\d]{3})\)/;
		var p = '03-(555)666-1212';

		// $を挿入
		var r1 = p.replace(oldareacode, '$$-');
		assertEquals("03-$-666-1212",r1);

		// キャプチャーグループ1を挿入
		var r2 = p.replace(oldareacode, '$1-');
		assertEquals("03-555-666-1212",r2);

		// マッチしたテキストを挿入
		var r3 = p.replace(oldareacode, '$&-');
		assertEquals("03-(555)-666-1212",r3);

		// マッチした前方のテキストを挿入
		var r4 = p.replace(oldareacode, '$`');
		assertEquals("03-03-666-1212",r4);

		// マッチした後方のテキストを挿入
		var r5 = p.replace(oldareacode, '$\'');
		assertEquals("03-666-1212666-1212",r5);

	},

	"test string search " : function () {
		var name = 'aizu "wakamatsu';
		assertEquals(5, name.search(/"/));
	},

	"test string slice " : function () {
		var text = 'and in it he says "Any damn fool could';

		assertEquals('"Any damn fool could', text.slice(18));
		assertEquals('and', text.slice(0,3));
		assertEquals('could', text.slice(-5));
		assertEquals('Any damn fool', text.slice(19,32));
	},

	"test string split" : function () {
		var digits = '0123456789';
		assertEquals(['0','1','2','3','4'], digits.split('', 5));

		var ip = '192.168.1.0';
		assertEquals(['192','168','1','0'], ip.split('.'));
		assertEquals(['192','168'], ip.split('.',2));
		
	},

	"test string substring" : function () {
	},

	"test string toLocaleLowerCase" : function () {
		var text = "aBcDeFgHi";
		assertEquals("abcdefghi",text.toLocaleLowerCase());
	},

	"test string toLocaleUpperCase" : function () {
		var text = "aBcDeFgHi";
		assertEquals("ABCDEFGHI",text.toLocaleUpperCase());
	},

	"test string toLowerCase" : function () {
		var text = "aBcDeFgHi";
		assertEquals("abcdefghi",text.toLowerCase());
	},

	"test string toUpperCase" : function () {
		var text = "aBcDeFgHi";
		assertEquals("ABCDEFGHI",text.toUpperCase());
	},

	"test string fromCharCode" : function () {
		assertEquals("Cat",String.fromCharCode(67, 97, 116));
	}
});