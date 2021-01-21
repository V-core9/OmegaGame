class wallObj {
    
    constructor( args ) {
        this.x = args.posX;
        this.y = args.posY;
        this.vx = 0;
        this.vy = 0;
        this.frs = 0.5;
        this.frm = 0.985;
        this.wght = parseInt(args.weight);
        this.ang = parseInt(args.angle);
        this.cp = args.colisionPath;
        this.color = args.color;
        this.orCol = args.color;
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

    draw(ctx) {
        ctx.beginPath();
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
    
}