/**
 * NNYAppBase
 * 
 * @author xxxxx / http://xxxx.co
 */

// super class
function NNYAppBase( a, b, target )
{
    this.a = a;
    this.b = b;

    // this.target = target;
    // console.log(this.target + "BASE1!");

	NNYAppBase.target = target;
	// console.log(NNYAppBase.prototype.target + "BASE1111!");

    NNYAppBase.target.prototype.setup();
    NNYAppBase.target.prototype.draw();
}

NNYAppBase.prototype.setup = function() {
	console.log("SETUP1!");
}

NNYAppBase.prototype.draw = function() {
	console.log("DRAW!" + Math.random() * 10);
    // console.log(NNYAppBase.target + "BASE100!");

	requestAnimationFrame( NNYAppBase.target.prototype.draw );
}