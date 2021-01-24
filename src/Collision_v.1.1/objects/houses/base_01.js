class gameHouse {
    constructor(type, x, y, r, vx, vy, color, hp) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.r = r;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.hp = hp;
        this.hpMax = hp*2;
      
      /*
        //CREATE IMG PART GENERATOR
        var posX = 0;
        var posY= 0;
        var mod = 3*this.r;
        if ( this.type == 'player' ) {   
          ctxGEN.strokeStyle = 'lime';
        } else if ( this.type == 'enemy' ) {    
          ctxGEN.strokeStyle = 'red';
        } else if ( this.type == 'bullet' ){
          ctxGEN.strokeStyle = 'black';
        } else if ( this.type == 'heal'){
          ctxGEN.strokeStyle = 'yellow';
        }
        ctxGEN.background = 'transparent';
        ctxGEN.clearRect(0,0,mod*2,mod*2);
        ctxGEN.beginPath();
        ctxGEN.lineWidth = 1;
        ctxGEN.beginPath();
        ctxGEN.arc(mod/2,mod/2,mod/2,0,2*Math.PI);
        ctxGEN.fillStyle = this.color;
        ctxGEN.fill()
        ctxGEN.stroke();
      
        this.imgData = ctxGEN.getImageData(0, 0, mod, mod);
        //IMG GEN END*/
    }
    get mass() {
        var density = 2.4;
        return density*Math.PI*this.r*this.r;
    }
    get v() {
        return [this.vx, this.vy];
    }
    
    dis(other) {
        var dx = this.x - other.x;
        var dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    update(canvas, mapObjs, start) {
        for (var i = start + 1; i < mapObjs.length; i++) {
            var other = mapObjs[i];
            if (this.dis(other) < this.r + other.r) {
                //collison code goes here
                var res = [this.vx - other.vx, this.vy - other.vy];
                if (res[0] *(other.x - this.x) + res[1] * (other.y - this.y) >= 0 ) {
                    var m1 = this.mass
                    var m2 = other.mass
                    var theta = -Math.atan2(other.y - this.y, other.x - this.x);
                    var v1 = rotate(this.v, theta);
                    var v2 = rotate(other.v, theta);
                    var u1 = rotate([v1[0] * (m1 - m2)/(m1 + m2) + v2[0] * 2 * m2/(m1 + m2), v1[1]], -theta);
                    var u2 = rotate([v2[0] * (m2 - m1)/(m1 + m2) + v1[0] * 2 * m1/(m1 + m2), v2[1]], -theta);
                    
                    this.vx = u1[0];
                    this.vy = u1[1];
                    other.vx = u2[0];
                    other.vy = u2[1];
                    if ((this.type == 'player') || (other.type == 'player')){
                      if ((this.type == 'enemy') || (other.type == 'enemy')){
                        this.hp = this.hp - 10;
                        other.hp = other.hp - 10;
                        //console.log('Collided with Enemy')
                      }
                      if ((this.type == 'bullet') || (other.type == 'bullet')){
                        this.hp = this.hp - 20;
                        other.hp = other.hp - 20;
                        //console.log('Collided with Enemy')
                      }
                      if ((this.type == 'heal') || (other.type == 'heal')){
                        this.hp = this.hp + 20;
                        other.hp = other.hp + 20;
                        //console.log('Collided with Enemy')
                      }
                    }
                  
                    if ((this.type == 'enemy') || (other.type == 'enemy')){
                      if ((this.type == 'player') || (other.type == 'player')){
                        this.hp = this.hp - 10;
                        other.hp = other.hp - 10;
                        //console.log('Collided with Enemy')
                      }
                      if ((this.type == 'bullet') || (other.type == 'bullet')){
                        this.hp = this.hp - 20;
                        other.hp = other.hp - 20;
                        //console.log('Collided with Enemy')
                      }
                    }
                  
                  
                    if (this.hp < 0){
                      this.hp = 0;
                    }
                    if (other.hp < 0){
                      other.hp = 0;
                    }

                    if (this.hp > this.hpMax){
                      this.hp = this.hpMax;
                    }
                    if (other.hp > other.hpMax){
                      other.hp = other.hpMax;
                    }
                }
            }
        }
        if (this.x - this.r <= 0) {
            this.x = this.r;
        } 
        if (this.x + this.r >= canvas.width) {
            this.x = canvas.width - this.r;
        }
        if ((this.x - this.r <= 0 && this.vx < 0) || (this.x + this.r >= canvas.width && this.vx > 0)) {
            this.vx = -this.vx;
        }
        if (this.y - this.r <= 0) {
            this.y = this.r;
        }
        if (this.y + this.r >= canvas.height) {
            this.y = canvas.height - this.r;
        }
        if ((this.y - this.r <= 0 && this.vy < 0) || (this.y + this.r >= canvas.height && this.vy > 0)) {
            this.vy = -this.vy;
        }
        this.x += this.vx
        this.y += this.vy
    }
    
    draw(ctx) {

       // ctx.putImageData(this.imgData, this.x, this.y);
        if ( this.type == 'player' ) {   
          ctx.strokeStyle = 'lime';
        } else if ( this.type == 'enemy' ) {    
          ctx.strokeStyle = 'red';
        } else if ( this.type == 'bullet' ){
          ctx.strokeStyle = 'black';
        } else if ( this.type == 'heal'){
          ctx.strokeStyle = 'yellow';
        }
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill()
        ctx.stroke();
      
        if ((this.type == 'player')) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(0,0,0,0.5)';
          ctx.rect(this.x+20, this.y+20, this.hpMax/2, 10);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.fillStyle = 'rgba(0,250,0,0.5)';
          ctx.rect(this.x+20, this.y+20, this.hp/2, 10);
          ctx.fill()
        }
    }
  
    drawDbg(ctx) {
        if ( this.type == 'player' ) {        
          ctx.fillStyle = 'lime';
          ctx.strokeStyle = 'red';
        } else if ( this.type == 'enemy' ) {    
          ctx.fillStyle = 'red';
          ctx.strokeStyle = 'green';
        } else if ( this.type == 'bullet' ){
          ctx.fillStyle = 'black';
          ctx.strokeStyle = 'orange';
        } else if ( this.type == 'heal'){
          ctx.fillStyle = 'orange';
          ctx.strokeStyle = 'yellow';
        }
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.fill()
        ctx.stroke();
      
        if ((this.type == 'enemy')) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(0,0,0,0.15)';
          ctx.rect(this.x+20, this.y+20, this.hpMax/4, 5);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.fillStyle = 'rgba(200,200,200,0.5)';
          ctx.rect(this.x+20, this.y+20, this.hp/4 , 5);
          ctx.fill()
        }
      
        if ((this.type == 'player')) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(0,0,0,0.5)';
          ctx.rect(this.x+20, this.y+20, this.hpMax/2, 10);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.fillStyle = 'rgba(0,250,0,0.5)';
          ctx.rect(this.x+20, this.y+20, this.hp/2, 10);
          ctx.fill()
        }
    }
}