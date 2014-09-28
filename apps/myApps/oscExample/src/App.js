require('css');
// require('./test');
require(['core'], function (APP) {

	// console.log(OSC);
	require('./test');
	
	// Variable
	var container, camera, scene, renderer;
	var keyboard;
	var W, H;
	var geometry, meterial, mesh;

	// GUI
	var params = { speed: 70 };

	// setup
	setup();

	// draw
	draw();

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
		setupGUI();
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
});






