// 7.1 正規表現

TestCase("07 Regular Expressions Test", {
	"test regular expressions url" : function () {
		var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
		var url = "http://www.ora.com:80/goodparts?q#fragment";
		var result = parse_url.exec(url);

		var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
		var blanks = ' ';
		var i;

		// for (i = 0; i < names.length; i += 1) {
		// 	document.writeln(names[i] + ':' +
		// 	blanks.substring(names[i].length), result[i]);
		// }
		assertEquals("http://www.ora.com:80/goodparts?q#fragment", result[0]);
		assertEquals("http", result[1]);
		assertEquals("//", result[2]);
		assertEquals("www.ora.com", result[3]);
		assertEquals("80", result[4]);
		assertEquals("goodparts", result[5]);
		assertEquals("q", result[6]);
		assertEquals("fragment", result[7]);
	},

	// /正規表現/:「/」は正規表現リテラルの合図（new RegExp("正規表現")という書き方もある）
	// ^:先頭
	// (?:...):非キャプチャグループ
	// (...):キャプチャグループ[マッチした文字列をコピーし結果を配列に格納]
	// ?:0,1回出現
	// +:1回以上出現
	// : 「:」にマッチする
	// $:最後
	"test regular expressions scheme" : function () {
		var parse_url = /^(?:([A-Za-z]+):)$/;
		var scheme = "http:";
		var result = parse_url.exec(scheme);

		assertEquals("http:", result[0]);
		assertEquals("http", result[1]);
	},

	// \/:「/」にマッチする（「\」はエスケープ文字）
	// {0,3}:0,1,2,3回出現する
	"test regular expressions slash" : function () {
		var parse_url = /^(\/{0,3})$/;
		var slash = "//";
		var result = parse_url.exec(slash);

		assertEquals("//", result[0]);
		assertEquals("//", result[1]);
	},
	// 英数字とハイフン
	// /-:「-」にマッチする（「\」はエスケープ文字）
	"test regular expressions host" : function () {
		var parse_url = /^([0-9.\-A-Za-z]+)$/;
		var host = "www.ora.com";
		var result = parse_url.exec(host);

		assertEquals("www.ora.com", result[0]);
		assertEquals("www.ora.com", result[1]);
	},

	// (?:...):非キャプチャグループ
	// ():キャプチャーグループ
	// \d:数字
	// +:1回以上出現
	"test regular expressions port" : function () {
		var parse_url = /^(?::(\d+))?$/;
		var port = ":80";
		var result = parse_url.exec(port);

		assertEquals(":80", result[0]);
		assertEquals("80", result[1]);
	},

	// (?:...):非キャプチャグループ
	// ():キャプチャーグループ
	// \/:「/」にマッチする（「\」はエスケープ文字）
	// [^...]:文字の集合の否定または補集合
	// [^?#]:「?」「#」以外の文字列
	"test regular expressions path" : function () {
		var parse_url = /^(?:\/([^?#]*))?$/;
		var path = "/goodparts";
		var result = parse_url.exec(path);

		assertEquals("/goodparts", result[0]);
		assertEquals("goodparts", result[1]);
	},

	// (?:...):非キャプチャグループ
	// ():キャプチャーグループ
	// 「\?」:「?」にマッチする（「\」はエスケープ文字）
	// [^#]:「#」以外の文字列
	"test regular expressions query" : function () {
		var parse_url = /^(?:\?([^#]*))?$/;
		var query = "?q";
		var result = parse_url.exec(query);

		assertEquals("?q", result[0]);
		assertEquals("q", result[1]);
	},

	// (?:...):非キャプチャグループ
	// ():キャプチャーグループ
	// 「#」:#
	// .:改行文字以外のすべての文字
	"test regular expressions hash" : function () {
		var parse_url = /^(?:#(.*))?$/;
		var hash = "#fragment";
		var result = parse_url.exec(hash);

		assertEquals("#fragment", result[0]);
		assertEquals("fragment", result[1]);
	}

});