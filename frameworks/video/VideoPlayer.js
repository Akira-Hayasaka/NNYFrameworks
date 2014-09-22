/*
    //needs implementing
    virtual bool                loadMovie(string name) = 0;
    virtual void                close() = 0;
    virtual void                update() = 0;

    virtual void                play() = 0;
    virtual void                stop() = 0;

    virtual bool                isFrameNew() = 0;
    virtual unsigned char *     getPixels() = 0;
    virtual ofTexture *         getTexture(){return NULL;}; // if your videoplayer needs to implement seperate texture and pixel returns for performance, implement this function to return a texture instead of a pixel array. see iPhoneVideoGrabber for reference

    virtual float               getWidth() = 0;
    virtual float               getHeight() = 0;

    virtual bool                isPaused() = 0;
    virtual bool                isLoaded() = 0;
    virtual bool                isPlaying() = 0;

    virtual bool                setPixelFormat(ofPixelFormat pixelFormat) = 0;
    virtual ofPixelFormat       getPixelFormat() = 0;

    //should implement!
    virtual float               getPosition();
    virtual float               getSpeed();
    virtual float               getDuration();
    virtual bool                getIsMovieDone();

    virtual void                setPaused(bool bPause);
    virtual void                setPosition(float pct);
    virtual void                setVolume(float volume); // 0..1
    virtual void                setLoopState(ofLoopType state);
    virtual void                setSpeed(float speed);
    virtual void                setFrame(int frame);  // frame 0 = first frame...

    virtual int                 getCurrentFrame();
    virtual int                 getTotalNumFrames();
    virtual ofLoopType          getLoopState();

    virtual void                firstFrame();
    virtual void                nextFrame();
    virtual void                previousFrame();
*/

function VideoPlayer()
{
    var camera;
    var scene;
    var video;
    var image;
    var imageContext;
    var texture;
    var mesh;
    var renderer;

    function loadMovie(THREE, path)
    {
        container = window.document.createElement('div');
        window.document.body.appendChild(container);

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 1000;

        scene = new THREE.Scene();

        video = window.document.createElement('video');
        video.src = "bin/data/movies/sintel.mp4";
        video.autoplay = true;

        image = window.document.createElement('canvas');
        image.width = 480;
        image.height = 204;

        imageContext = image.getContext('2d');
        imageContext.fillStyle = '#000000';
        imageContext.fillRect( 0, 0, 480, 204 );

        texture = new THREE.Texture(image);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        var material = new THREE.MeshBasicMaterial({map: texture, overdraw: 0.5});
        var plane = new THREE.PlaneGeometry(480, 204, 4, 4);
        mesh = new THREE.Mesh(plane, material);
        scene.add(mesh);

        renderer = new THREE.CanvasRenderer();
        renderer.setClearColor(0xf0f0f0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);
    }

    function update()
    {
        if (video.readyState === video.HAVE_ENOUGH_DATA)
        {
            imageContext.drawImage(video, 0, 0);
            if (texture)
                texture.needsUpdate = true;
        }
    }

    function draw()
    {
        renderer.render(scene, camera);
    }

    this.loadMovie = loadMovie;
    this.update = update;
    this.draw = draw;
}

module.exports = VideoPlayer;
