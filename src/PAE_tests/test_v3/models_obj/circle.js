
// Circle object
function Circle(x,y,rad,color) {
	var _this = this;

	// constructor
	(function() {
		_this.x = x || null;
		_this.y = y || null;
		_this.radius = rad || null;
		_this.color = color || null;
    })();
  
   this.update = function() {
     _this.x += 0.5;
    // _this.y += 0.5;
     if(_this.x > 496+_this.radius) _this.x = 0-_this.radius;
    // if(_this.y > 200+_this.radius) _this.y = 0-_this.radius;
   }

	this.draw = function(ctx) {
		if(!_this.x || !_this.y || !_this.radius || !_this.color) {
			//console.error('Circle requires an x, y, radius and color');
			return;
		}
		ctx.beginPath();
		ctx.arc(_this.x, _this.y, _this.radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = _this.color;
		ctx.fill();
	};
}