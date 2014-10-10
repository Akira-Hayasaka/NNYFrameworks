// GLOBAL
// TRHEE, dat, osc;

// var nny = require('../../../frameworks/core.js');

// var scene = new THREE.Scene();
// console.log(scene);

// Variable
var container, camera, scene, renderer;
var keyboard;
var W, H;
var geometry, meterial, mesh;

// GUI
var params = { speed: 70 };

var fs = require('fs');
var Promise = require('../../../frameworks/node_modules/bluebird/js/main/bluebird.js');
Promise.promisifyAll(fs);

// global.THREE;
// var THREE;

var THREE = require('../../../frameworks/node_modules/three/three.js');

fs.readFileAsync("../../../frameworks/node_modules/three/three.js", 'utf-8').then(function(val) {
// fs.readFileAsync('../../../frameworks/core.js', 'utf-8').then(function(val) {
    // console.log(THREE + "value");
    scene = new THREE.Scene();
    geometry = new THREE.BoxGeometry(200, 200, 200);
    console.log(scene);
    // setup
    // setup();

    // // draw
    // draw();


    //W = window.innerWidth, H = window.innerHeight;
    // W = window.innerWidth, H = window.innerHeight;

    // // renderer
    renderer = new THREE.WebGLRenderer();
    // renderer.setClearColor(0x000000, 1);
    // renderer.setSize( W, H );
    // // enable shadows on the renderer
    // renderer.shadowMapEnabled = true;

    // // scene
    // scene = new THREE.Scene();

    // // camera
    // resetCamera();

    // // Container
    // container = document.getElementById( 'threeJs' );
    // container.appendChild( renderer.domElement );

})
.catch(SyntaxError, function(e) {
    console.error("invalid json in file");
})
.catch(function(e){
    console.error("unable to read file")
});


/*fs.readFileAsync('../../../frameworks/node_modules/three/three.min.js', 'utf-8').then(function(THREE) {
// fs.readFileAsync('../../../frameworks/core.js', 'utf-8').then(function(value) {
 //    module.exports.THREE = value;
    // THREE = value;
    // var scene = new THREE.Scene();
    console.log(new THREE.Scene());
    // THREE = THREE;

    // scene = new THREE.Scene();
    // console.log("KKKK");

    // setup
    // setup();

    // // draw
    // draw();

    // console.log(value);
}, function(error) {
    console.error(error);
});*/

// // setup
// setup();

// // draw
// draw();

/* ------------------------------------
    setup
------------------------------------*/

function setup() {
    // common setting
    init();

    // geometry
    geometry = new THREE.BoxGeometry(200, 200, 200);
    material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading});
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
}

/* ------------------------------------
    draw
------------------------------------*/

function draw() {
    var time = Date.now();
    time *= params.speed / 100000;

    mesh.rotation.x = Math.sin(time);
    mesh.rotation.z = Math.cos(time);

    // rendering & updating
    requestAnimationFrame( draw );
    renderer.render( scene, camera );
}

/* ------------------------------------
    init
------------------------------------*/

function init() {
    //W = window.innerWidth, H = window.innerHeight;
    W = window.innerWidth, H = window.innerHeight;

    // renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1);
    renderer.setSize( W, H );
    // enable shadows on the renderer
    renderer.shadowMapEnabled = true;

    // scene
    scene = new THREE.Scene();

    // camera
    resetCamera();

    // Container
    container = document.getElementById( 'threeJs' );
    container.appendChild( renderer.domElement );

    // GUI
    // setupGUI();
}

/* ------------------------------------
    reset a camera
------------------------------------*/

function resetCamera() {
    var near = 1;
    var far = 10000;
    camera = new THREE.PerspectiveCamera( 40, W/H, near, far );
    camera.position.set(0, 1000, 500);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
}

/* ------------------------------------
    GUI
------------------------------------*/

function setupGUI() {
    var gui = new dat.GUI();
    gui.add( params, 'speed', 0, 100 ).name('speed');
    gui.open();
}

// console.log(osc);


// var fs = require('fs');
// var Promise = require('bluebird');
// Promise.promisifyAll(fs);

// fs.readFileAsync('node_modules/three/three.min.js', 'utf-8').then(function(value) {
//     module.exports.THREE = value;
//     console.log(value);
// }, function(error) {
//     console.error(error);
// });

// console.log("APP");