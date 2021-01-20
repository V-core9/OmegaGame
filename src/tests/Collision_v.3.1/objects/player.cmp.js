
function playerComponent(width, height, color, x, y, f) {

    this.width = width;
    this.height = height;
    this.speed = 0;
    this.angle = 0;
    this.moveAngle = 0;
    this.x = x;
    this.y = y;
    this.f = f;
    this.speedMax = 5;
    this.speedMaxB = -3;
    this.moveAngleMax = 5;
    this.draw = function() {
        ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        ctx.restore();    

        if (dbgGame == true){
            this.drawDbg(ctx);
        }
    }
    this.drawDbg = function(ctx){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'lime';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo( this.x - (this.speed * Math.sin(this.angle))*2, (this.speed * Math.cos(this.angle))*2 + this.y);
        ctx.stroke();
    }
    this.newPos = function() {
        if (!myGameArea.keys && (this.moveAngle > 0)){
            this.moveAngle--;
        }else if (!myGameArea.keys && (this.moveAngle < 0)){
            this.moveAngle++;
        }
        this.speed = this.speed * this.f;
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
    }
}