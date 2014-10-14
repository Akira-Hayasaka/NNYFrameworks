// Variable
var container, camera, scene, renderer;
var keyboard;
var W, H;
var geometry, meterial, mesh;
var spotlight;

var oscLFOSine;
var oscOneDrop;

var osc = require('../../../node_modules/node-osc/index.js');
var oscServer = new osc.Server(12345, '127.0.0.1');

oscServer.on("message", function (msg, rinfo) {
    if(msg[0] == "/FromVDMX/002") {
        // console.log("TUIO message:");
        // console.log(msg[1]);
        oscLFOSine = msg[1];
    } else if (msg[0] == "/FromVDMX/OneDrop") {
        // console.log("TUIO message:");
        // console.log(msg[1]);
        oscOneDrop = msg[1];
    } 
});


// GUI
var params = { speed: 70 };

function initialize() {
    setup();
    draw();
}

/* ------------------------------------
    setup
------------------------------------*/

function setup() {
    // common setting
    init();

    var boxW = 200;

    // geometry
    geometry = new THREE.BoxGeometry(boxW, boxW, boxW);
    material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('./bin/data/jacket.jpg')
      });
    mesh = new THREE.Mesh(geometry, material);
    mesh.overdraw = true;
    scene.add(mesh);

    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight(0xbbbbbb);
    scene.add(ambientLight);

    // directional lighting
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);
}

/* ------------------------------------
    draw
------------------------------------*/

function draw() {
    var time = Date.now();
    time *= params.speed / 100000;

    mesh.scale.set(1, 1 + 5 * oscOneDrop, 1);
    mesh.rotation.x = Math.sin(time);
    mesh.rotation.z = Math.cos(time);
    // popMatrix();

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

    // spotlight = new THREE.SpotLight(0xffff00);
    // spotlight.position.set(-600,1000,-30);
    // spotlight.shadowCameraVisible = true;
    // spotlight.shadowDarkness = 0.95;
    // spotlight.intensity = 2;
    // // must enable shadow casting ability for the light
    // spotlight.castShadow = true;
    // scene.add(spotlight);

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


// APP.initialize = {
//   console.log("Hello, I'm " + THREE);
// }
// APP.prototype.initialize = function() {
//   console.log("Hello, I'm " + THREE);
// };

// define([
//   'THREE'
// ], function (THREE) {
//   var initialize = function(){
//     console.log(THREE);

//   };

//   return {
//     initialize: initialize
//     };
// });