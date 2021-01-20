console.log('Inside tests->test.run.js.');

//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: test.run.js                                                      ║
//║ ↔ Location: <: public_root :>/tests                                           ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 20.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝



class baseObj {
    constructor( args ) {
        this.x = args.posX;
        this.y = args.posY;
        this.vx = parseInt(args.velocityX);
        this.vy = parseInt(args.velocityY);
        this.fr = parseFloat(args.friction);
        this.wght = parseInt(args.weight);
        this.ang = parseInt(args.angle);
        this.cp = args.colisionPath;
    }

    get v() {
        return [this.vx, this.vy];
    }

    update(canvas, mapObjs, start) {
        for (var i = start + 1; i < mapObjs.length; i++) {
            var other = mapObjs[i];
            //console.log(other);
        }
        if (this.x <= 0) {
            this.x = 0;
        } 
        if (this.x >= canvas.width) {
            this.x = canvas.width ;
        }
        if ((this.x <= 0 && this.vx < 0) || (this.x >= canvas.width && this.vx > 0)) {
            this.vx = -this.vx;
        }
        if (this.y <= 0) {
            this.y = 0;
        }
        if (this.y >= canvas.height) {
            this.y = canvas.height;
        }
        if ((this.y <= 0 && this.vy < 0) || (this.y >= canvas.height && this.vy > 0)) {
            this.vy = -this.vy;
        }

        this.x += this.vx;
        this.y += this.vy;
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'orange';
        ctx.moveTo((parseInt(this.cp[0].split(',')[0]) + this.x), (parseInt(this.cp[0].split(',')[1]) + this.y));
        var hL = this.cp.length;
        var i = 1;
        for ( i=1; i < hL; i++){
            ctx.lineTo((parseInt(this.cp[i].split(',')[0]) + this.x), (parseInt(this.cp[i].split(',')[1]) + this.y));
        }
        ctx.fill();
    }
  
    drawDbg(ctx) {    
        this.draw(ctx);

        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = 'lime';
        ctx.moveTo((parseInt(this.cp[0].split(',')[0]) + this.x), (parseInt(this.cp[0].split(',')[1]) + this.y));
        var hL = this.cp.length;
        var i = 1;
        for ( i=1; i < hL; i++){
            ctx.lineTo((parseInt(this.cp[i].split(',')[0]) + this.x), (parseInt(this.cp[i].split(',')[1]) + this.y));
        }
        ctx.stroke();
        
        
        for ( i=0; i < hL; i++){
            ctx.lineTo((parseInt(this.cp[i].split(',')[0]) + this.x), (parseInt(this.cp[i].split(',')[1]) + this.y));
            ctx.beginPath();
            ctx.arc((parseInt(this.cp[i].split(',')[0]) + this.x), (parseInt(this.cp[i].split(',')[1]) + this.y),2,0,2*Math.PI);
            ctx.fillStyle = 'lime';
            ctx.fill()
        }

        ctx.font = "15px monospace";
        ctx.fillText("X: "+this.x+"; Y: "+this.y,   this.x, this.y);
    }
}