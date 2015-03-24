/**
 * NNYApp
 * 
 * @author xxxxx / http://xxxx.co
 */

// sub class
function NNYApp( a, b, c )
{
    // スーパークラスのコンストラクタを呼び出し、スーパークラスのプロパティを初期化する
    NNYAppBase.call( this, a, b, NNYApp );

    // 新しいプロパティを追加する
    this.c = c;
}

// スーパークラスのサブクラスとなるように、プロトタイプオブジェクトを生成する\
NNYApp.prototype = Object.create( NNYApp.prototype );
// サブクラスのコンストラクタが参照されるように、既定のconstructorプロパティを書き換える
NNYApp.prototype.constructor = NNYApp;

// NNYApp.prototype.clone = function ( a ) {
// 	NNYAppBase.prototype.clone.call( this, a );
// 	console.log(a + "kkkk");
// };

/* -----------------------
	setup
----------------------- */

NNYApp.prototype.setup = function() {
	// inheritence
	NNYAppBase.prototype.setup.call(this);

	// code here
	console.log("setup2");
}

/* -----------------------
	draw
----------------------- */

NNYApp.prototype.draw = function() {
	// code here
	console.log("draw2" + Math.random() * 10);

	// inheritence (draw loop)
	NNYAppBase.prototype.draw.call(this);
}

var app = new NNYApp(10, 20, 30);
// console.log(app.a + "DDAFDDF");

// app.setup();
// app.draw();

// var APP = {};

// // App.init();

// NNY.setup();
// NNY.update();
// NNY.draw();




