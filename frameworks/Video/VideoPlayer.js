/*
    //needs implementing
    virtual bool                loadMovie(string name) = 0;
    virtual void                close() = 0;
    virtual void                update() = 0;

    virtual void                play() = 0;
    virtual void                stop() = 0;

    virtual bool                isFrameNew() = 0;
    virtual unsigned char *     getPixels() = 0;
    virtual ofTexture *         getTexture(){return NULL;};

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
}

VideoPlayer.prototype.test = function()
{
    console.log("hello VideoPlayer");
};

VideoPlayer.prototype.loadMovie = function(path)
{
    this.video = window.document.createElement('video');
    window.document.body.appendChild(this.video);
    this.video.style.display = 'none';
    this.video.preload = "none";
    this.video.src = path;
    this.video.load();
    this.video.play();
    this.video.autoplay = true;

    this.container = window.document.createElement('div');
    window.document.body.appendChild(this.container);

    this.camera = new THREE.OrthographicCamera(-window.innerWidth/2, window.innerWidth/2,
                                                window.innerHeight/2, -window.innerHeight/2,
                                                1, 10000);
    this.camera.position.set(0, 0, 1);

    this.scene = new THREE.Scene();

    this.image = window.document.createElement('canvas');
    this.image.width = 480;
    this.image.height = 204;

    this.imageContext = this.image.getContext('2d');
    this.imageContext.fillStyle = '#000000';
    this.imageContext.fillRect( 0, 0, 480, 204 );

    this.texture = new THREE.Texture(this.image);
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;

    var material = new THREE.MeshBasicMaterial({map: this.texture, overdraw: 0.5});
    var plane = new THREE.PlaneGeometry(480, 204, 4, 4);
    this.mesh = new THREE.Mesh(plane, material);
    this.scene.add(this.mesh);

    this.renderer = new THREE.CanvasRenderer();
    this.renderer.setClearColor(0xf0f0f0);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);
};

VideoPlayer.prototype.update = function()
{
    if (this.video.readyState === this.video.HAVE_ENOUGH_DATA)
    {
        this.imageContext.drawImage(this.video, 0, 0);
        if (this.texture)
            this.texture.needsUpdate = true;
    }
    else
    {
        console.log('no enough data');
    }
};

VideoPlayer.prototype.draw = function()
{
    this.renderer.render(this.scene, this.camera);
};

module.exports = VideoPlayer;



