// 名前空間用オブジェクト
var NNY = { REVISION: '1' };

NNY.setup = function() {
	console.log("SETUP");
}

NNY.update = function() {
	console.log("UPDATE");
}

NNY.draw = function() {
	console.log("NNY DRAW");
}

// NS のプロパティに設定しているのでこれ以上グローバル汚染をしない。
// NNY.hello = require('./lib');


// (function() {
//     // var $ = require('jquery');
//     var hello = require('./lib');
//     // console.log($().jquery);  // version 番号
//     // from_lib();

//     // var hello = require('./hello');  // 追記
//     console.log(hello("katamati"));
// })();