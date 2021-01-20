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
        this.color = 'orange';
        this.marked = false;
        this.cc = 0;
        var maxC = 0;
        var testC = 0;
        for (var i=0; i<args.colisionPath.length; i++){

            testC = Math.sqrt(parseInt(args.colisionPath[i].split(',')[0])*parseInt(args.colisionPath[i].split(',')[0]) + parseInt(args.colisionPath[i].split(',')[1])*parseInt(args.colisionPath[i].split(',')[1]))
            if (maxC < testC){
                maxC = testC;
            } 
            
        }
        this.cc = maxC;
    }

    dis(other) {
        var dx = this.x - other.x;
        var dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    get v() {
        return [this.vx, this.vy];
    }

    update(canvas, mapObjs, start) {

        for (var i = start + 1; i < mapObjs.length; i++) {
            var other = mapObjs[i];
            //console.log(other);
            if (other.marked != true){
                if (this.dis(other) < (this.cc + other.cc)) {
                    this.marked = true;
                    other.marked = true;
                }
            } 
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
        if (this.marked){
            this.color = 'red';
        } else {
            this.color = 'orange';
        }
        ctx.fillStyle = this.color;
        ctx.moveTo((parseInt(this.cp[0].split(',')[0]) + this.x), (parseInt(this.cp[0].split(',')[1]) + this.y));
        var hL = this.cp.length;
        var i = 1;
        for ( i=1; i < hL; i++){
            ctx.lineTo((parseInt(this.cp[i].split(',')[0]) + this.x), (parseInt(this.cp[i].split(',')[1]) + this.y));
        }
        ctx.fill();

        if (dbgGame == true){
            this.drawDbg(ctx);
        }
    }
  
    drawDbg(ctx) {    

        ctx.beginPath();
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = 'lime';
        ctx.moveTo((parseInt(this.cp[0].split(',')[0]) + this.x), (parseInt(this.cp[0].split(',')[1]) + this.y));
        var hL = this.cp.length;
        var i = 1;
        for ( i=1; i < hL; i++){
            ctx.lineTo((parseInt(this.cp[i].split(',')[0]) + this.x), (parseInt(this.cp[i].split(',')[1]) + this.y));
        }
        ctx.stroke();
        
        
        for ( i=0; i < hL; i++){
            ctx.beginPath();
            ctx.arc((parseInt(this.cp[i].split(',')[0]) + this.x), (parseInt(this.cp[i].split(',')[1]) + this.y),.5,0,2*Math.PI);
            ctx.fillStyle = 'blue';
            ctx.fill()
            
        }

        ctx.lineTo(this.x, this.y);
        ctx.beginPath();
        ctx.arc(this.x, this.y,this.cc,0,2*Math.PI);
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = 'rgba(0,250,0,0.5)';
        ctx.stroke()
        
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'white';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.vx*2 + this.x, this.vy*2 + this.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.x, this.y,1,0,2*Math.PI);
        ctx.fillStyle = 'lime';
        ctx.fill()

        ctx.font = "10px monospace";
        ctx.fillText("X: "+this.x+"; Y: "+this.y,   this.x, this.y);


    }
}