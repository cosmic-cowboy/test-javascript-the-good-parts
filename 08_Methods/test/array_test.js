// 8章　メソッド　chapter08 method

// how to test

TestCase("ArrayTest", {
  // 自分自身と引数の要素を連結して新しいコピーを作る
  // 自分自身は変わらない
  "test array concat": function () {

    var a = ['a', 'b', 'c'];
    var b = ['x', 'y', 'z'];
    var c = a.concat(b, true);

    // アサーション
    assertEquals(['a', 'b', 'c','x', 'y', 'z',true], c);
    assertEquals(['a', 'b', 'c'], a);
    assertEquals(['x', 'y', 'z'], b);
  },

  // 配列から文字列を生成
  // デフォルトセパレーターは[,]
  "test array join": function () {

    var a = ['a', 'b', 'c'];
    a.push('d');
    var c = a.join('');
    var d = a.join('_');
    var e = a.join();

    // ログ出力 log
    // jstestdriver.console.log(c);

    // アサーション assertion
    assertEquals('abcd', c);
    assertEquals('a_b_c_d', d);
    assertEquals('a,b,c,d', e);
    assertEquals(['a', 'b', 'c', 'd'], a);
  },

  // 配列から最後の要素を削除してそれを返す
  "test array pop": function () {

    var a = ['a', 'b', 'c'];
    var c = a.pop();
    assertEquals(['a', 'b'], a);
    assertEquals(['c'], c);

    // undefinedの確認
    var d = [];
    var e = d.pop();
    assertEquals(undefined, e);
  },

  // 配列の最後に要素を追加 実行した配列を書き換える
  // 返却値は要素追加後の配列のサイズ
  "test array push": function () {

    var a = ['a', 'b', 'c'];
    var b = ['x', 'y', 'z'];
    var c = a.push(b, true);

    assertEquals(['a', 'b', 'c',['x', 'y', 'z'],true], a);
    assertEquals(5, c);
  },

  // 配列の要素を逆に置き換える
  // 返却値も逆になった配列
  "test array reverse": function () {

    var a = ['a', 'b', 'c'];
    var c = a.reverse();

    assertEquals(['c', 'b', 'a'], a);
    assertEquals(['c', 'b', 'a'], c);
  },

  // 配列の先頭要素を削除、それを返す。

  "test array shift": function () {

    var a = ['a', 'b', 'c'];
    var c = a.shift();

    assertEquals(['b', 'c'], a);
    assertEquals('a', c);

    var d = [];
    var e = d.shift();

    // undefinedの確認
    assertEquals(undefined, e);
  },

  // 配列の一部からコピーを作成する
  "test array slice": function () {

    var a = ['a', 'b', 'c'];
    var b = a.slice(0,1);
    var c = a.slice(1);
    var d = a.slice(1,2);

    assertEquals(['a', 'b', 'c'], a);
    assertEquals(['a'], b);
    assertEquals(['b', 'c'], c);
    assertEquals(['b'], d);
  },

  // 配列の中身をソートしたものに書き換える
  "test array sort": function () {

    var n = [4, 8, 15, 16, 23, 42];
    n.sort();

    assertEquals([ 15, 16, 23, 4, 42, 8], n);

  },
  // 配列の中身をソートしたものに書き換える
  "test array sort02": function () {

    var n = [4, 8, 15, 16, 23, 42];
    n.sort(function(a, b){
        return a - b;
    });

    assertEquals([4, 8, 15, 16, 23, 42], n);

  },
  "test splice " : function(){
    var addItem_1 = 'ache';
    var addItem_2 = 'bug';
    var a = ['a','b','c'];

    var r = a.splice(1,1, addItem_1, addItem_2);

    assertEquals(['b'], r);
    assertEquals(['a','ache','bug','c'], a);

  },
  "test unshift " : function(){
    var a = ['a','b','c'];
    var r = a.unshift('?','@');

    assertEquals(['?','@','a','b','c'], a);
    assertEquals(5, r);

  }

});

TestCase("FunctionTest", {
  "test bind " : function(){
    var values = function () {
      return this.value;
    }.bind({
      value : 666
    });
    assertEquals(666, values());
  },
  "test apply " : function(){
    var values = function () {
      return this.value;
    };
    values.binds = function (that) {
      var method = this;
      var slice = Array.prototype.slice;
      var args  = slice.apply(arguments, [1]);
      return method.apply(that, args.concat(slice.apply(arguments, [0])));
    };

    var a = values.binds({
      value : 666
    });
    assertEquals(666, a);
  }

});