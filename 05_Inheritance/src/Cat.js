// 5.1 Pseudoclassical

		var Cat = function (name) {
			this.name = name;
			this.saying = 'meow';
		};

		// Cat.prototypeを新しいManmmalのインスタンスで置き換える
		Cat.prototype = new Mammal();

		// 新しいプロトタイプを追加
		Cat.prototype.purr = function(n) {
			var i, s = '';
			for (i = 0; i < n; i += 1) {
				if(s){
					s += '-';
				}
				s += 'r';
			}
			return s;
		};

		// メソッドのオーバーライド
		Cat.prototype.get_name = function() {
			return this.says() + ' ' + this.name + ' ' + this.says();
		};