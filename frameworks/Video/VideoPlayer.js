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

}

VideoPlayer.prototype.test = function()
{
    console.log("hello VideoPlayer");
};


module.exports = VideoPlayer;
