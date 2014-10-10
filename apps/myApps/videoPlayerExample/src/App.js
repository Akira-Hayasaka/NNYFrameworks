require('../../../../frameworks/style.css');
require(['../../../../frameworks/core.js'], function (APP)
{

	var VideoPlayer = APP.VideoPlayer;
	var vidPlayer = new VideoPlayer();
	vidPlayer.test();

	// setup
	setup();

	// draw
	draw();

	function setup()
	{
		vidPlayer.loadMovie("./bin/data/movies/sintel.mp4");
	}

	function draw()
	{
		// srendering & updating
		requestAnimationFrame( draw );

		vidPlayer.update();
		vidPlayer.draw();
	}
});






