require.config({
    baseUrl: "./",
    paths: {
        'THREE': "../../../node_modules/three/three.min"
    },
    shim: {
        'THREE': {
            exports: 'THREE'  // エイリアスを書く
        }
    }//,
    // waitSeconds: 15
  });

// require( ['THREE', 'dat'], function(THREE, dat) {
require( ['THREE'], function(THREE) {
	// console.log(THREE);
	// APP.Initialize();
	initialize();
});