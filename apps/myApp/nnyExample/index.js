require('../../../frameworks/style.css');
require(['../../../frameworks/core.js'], function (APP) {
	var THREE = APP.THREE;
	var dat = APP.dat;

	var scene = new THREE.Scene();
	console.log("SCENE", scene);
	console.log("DAT", dat);
});;