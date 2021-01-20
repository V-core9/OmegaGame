
// var player_object_model 
var metal_hulk= {
    pname: 'PussyBreaker_69',
    relSiz: 1, //Player Relative Size....should only increase size of player...not ready for activ redrawing.
    posX: 0, // Player offset from the top of the canvas or the [ posX ]....should change to map pos X.
    posY: 0, // Basically same thing just Y...from top left corner 
    modW: 128, // Width of the object
    modH: 125, // Height of it
    DxSc: 0,
    DySc: 0,
    speedX: 0,
    speedY: 0,
    maxSpeed: 100,
    ldt: 0,
    delta: 0,
    anglDelta: 0,
    angl: 0, // Angle towards users cursor...pointer position
    sdt: 0, // Start Draw Time....uses performance.now() to get high definition time
    edt: 0, // Same thing...just for the End Draw Time...while calculated draw time is only displayed in info
    draw: function(){
      ctx.save();
      this.sdt = performance.now();
      
      
      appInp.keyPress.forEach(function(item, index, arr) {
        switch(item) {
          case 'w':
            // code block
            metal_hulk.speedY -= 10;
            break;
          case 's':
            // code block
            metal_hulk.speedY += 10;
            break;
          case 'a':
            // code block
            metal_hulk.speedX -= 10;
            break;
          case 'd':
            // code block
            metal_hulk.speedX += 10;
            break;
          default:
            // code block
        }
      })
      
      if ((this.speedX > this.maxSpeed)){
        this.speedX = this.maxSpeed;
      };
      if (this.speedX * (-1) > this.maxSpeed){
        this.speedX = -this.maxSpeed;
      }
          
      if(this.speedY > this.maxSpeed){
        this.speedY = this.maxSpeed;
      };
      if (this.speedY * (-1) > this.maxSpeed){
        this.speedY = -this.maxSpeed;
      };
      
      this.speedX = this.speedX*0.9;
      this.speedY = this.speedY*0.9;
      
      var delta = (performance.now() - this.edt)/1000;
      
      this.posY += Math.trunc( this.speedY * delta * 100 )/100;
      this.posX += Math.trunc( this.speedX * delta * 100 )/100;
      this.DxSc = ( (  ( mainApp.camEl.width / 2 ) - this.posX  ) /  mainApp.camEl.width )*20;
      this.DySc = ( ( ( mainApp.camEl.height / 2 ) - this.posY ) /  mainApp.camEl.height )*20;
      
      this.modW= 128*this.relSiz;
      this.modH= 125*this.relSiz;
      
      //legzzR
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0,0,255,.5)';
      ctx.fillStyle = 'rgba(0,0,255,.5)';
      ctx.lineWidth = this.modW*.04;
      ctx.moveTo(this.posX+this.modW/2, this.posY+this.modH/2);
      ctx.lineTo(this.posX+0.35*this.modW, this.posY+this.modH*0.95);
      ctx.lineTo(this.posX+0.25*this.modW, this.posY+this.modH*0.95);
      ctx.lineTo(this.posX+0.2*this.modW, this.posY+this.modH*0.75);
      ctx.lineTo(this.posX+0.5*this.modW, this.posY+this.modH*0.25);
      ctx.fill();
      ctx.stroke();
      
      //legzzL
      ctx.beginPath();
      ctx.moveTo(this.posX+this.modW/2, this.posY+this.modH/2);
      ctx.lineTo(this.posX+0.65*this.modW, this.posY+this.modH*0.95);
      ctx.lineTo(this.posX+0.75*this.modW, this.posY+this.modH*0.95);
      ctx.lineTo(this.posX+0.8*this.modW, this.posY+this.modH*0.75);
      ctx.lineTo(this.posX+0.5*this.modW, this.posY+this.modH*0.25);
      ctx.fill();
      ctx.stroke();
      
      //handsR
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0,255,0,.5)';
      ctx.fillStyle = 'rgba(0,255,0,.5)';
      ctx.moveTo(this.posX+this.modW*.4, this.posY+this.modH*.1);
      ctx.lineTo(this.posX+this.modW*.15, this.posY+this.modH*0.7);
      ctx.lineTo(this.posX+this.modW*.1, this.posY+this.modH*0.7);
      ctx.lineTo(this.posX+this.modW*.05, this.posY+this.modH*0.65);
      ctx.lineTo(this.posX+this.modW*.05, this.posY+this.modH*0.35);
      ctx.lineTo(this.posX+this.modW*.25, this.posY+this.modH*0.15);
      ctx.lineTo(this.posX+this.modW*.4, this.posY+this.modH*0.1);
      ctx.fill();
      ctx.stroke();
      
      //handsL
      ctx.beginPath();
      ctx.moveTo(this.posX+this.modW*.6, this.posY+this.modH*.1);
      ctx.lineTo(this.posX+this.modW*.85, this.posY+this.modH*0.7);
      ctx.lineTo(this.posX+this.modW*.9, this.posY+this.modH*0.7);
      ctx.lineTo(this.posX+this.modW*.95, this.posY+this.modH*0.65);
      ctx.lineTo(this.posX+this.modW*.95, this.posY+this.modH*0.35);
      ctx.lineTo(this.posX+this.modW*.75, this.posY+this.modH*0.15);
      ctx.lineTo(this.posX+this.modW*.6, this.posY+this.modH*0.1);
      ctx.fill();
      ctx.stroke();
      
      //torso
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,0,0,.5)';
      ctx.fillStyle = 'rgba(255,0,0,.5)';
      ctx.ellipse(this.posX+this.modW/2 , this.posY+this.modH*0.35 , this.modW*.4, this.modW*.25, 0, 0, 2 * Math.PI);
      ctx.ellipse(this.posX+this.modW/2 + Math.abs(this.DxSc), this.posY+this.modH*0.35 + Math.abs(this.DySc), this.modW*.225, this.modW*.25, 0, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
      ctx.stroke();
      
      //head
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0,0,255,.5)';
      ctx.fillStyle = 'rgba(0,0,255,.5)';
      ctx.lineWidth = this.modW*.02;
      ctx.moveTo(this.posX+this.modW/2, this.posY+this.modH/2);
      ctx.lineTo(this.posX+0.7*this.modW, this.posY);
      ctx.lineTo(this.posX+0.5*this.modW, this.posY+this.modH*0.2);
      ctx.lineTo(this.posX+0.4*this.modW, this.posY+this.modH*0.2);
      ctx.lineTo(this.posX+0.285*this.modW, this.posY+this.modH*0.05);
      ctx.lineTo(this.posX+this.modW*0.375, this.posY+this.modH/2);
      ctx.lineTo(this.posX+this.modW/2, this.posY+this.modH/2);
      ctx.fill();
      ctx.stroke();
      
      this.edt = performance.now();
    },
    drawAll: function(){
      ctx.save()
      
      //console.log(this.anglDelta - 90);
      ctx.translate(this.posX+this.modW/2, this.posY+this.modH/2);
      ctx.rotate( (this.anglDelta - 90) *  Math.PI / 180);
      ctx.translate(-(this.posX+this.modW/2), -(this.posY+this.modH/2));
      
      this.draw();
      this.drawDbgBox();
      this.drawObjInfo();
    },
    drawDbgBox: function(){
      ctx.save();
      ctx.restore();
      ctx.strokeStyle = '#00ff00';
      ctx.lineWidth = 1;
      ctx.strokeRect(this.posX, this.posY, this.modW, this.modH );
      
      //TL corner
      
      ctx.strokeStyle = '#0fa00f';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(this.posX, this.posY+(this.modH*0.2));
      ctx.lineTo(this.posX, this.posY);
      ctx.lineTo(this.posX+(this.modW*0.2), this.posY);
      ctx.stroke();
      //BL corner
      
      ctx.beginPath();
      ctx.moveTo(this.posX+(this.modW*.8), this.posY);
      ctx.lineTo(this.posX+this.modW, this.posY);
      ctx.lineTo(this.posX+this.modW, this.posY+this.modH*0.2);
      ctx.stroke();
      
      //BL corner
      ctx.beginPath();
      ctx.moveTo(this.posX, this.posY+this.modH*0.8);
      ctx.lineTo(this.posX, this.posY+this.modH);
      ctx.lineTo(this.posX+this.modW*.2, this.posY+this.modH);
      ctx.stroke();
      
      //BR corner
      ctx.beginPath();
      ctx.moveTo(this.posX+this.modW*.8, this.posY+this.modH);
      ctx.lineTo(this.posX+this.modW, this.posY+this.modH);
      ctx.lineTo(this.posX+this.modW, this.posY+this.modH*0.8);
      ctx.stroke();
      
      
      
      //Drawing direction of the object
      ctx.strokeStyle = '#00ff00';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(this.posX+this.modW*0.5, this.posY+this.modH*0.4);
      ctx.lineTo(this.posX+this.modW*0.5, this.posY+this.modH*0.6);
      ctx.lineTo(this.posX+this.modW*0.6, this.posY+this.modH*0.5);
      ctx.lineTo(this.posX+this.modW*0.4, this.posY+this.modH*0.5);
      ctx.lineTo(this.posX+this.modW*0.5, this.posY+this.modH*0.6);
      ctx.stroke();
      ctx.restore();
    },
    drawObjInfo: function(){
      ctx.restore();
      ctx.lineWidth = 1;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect( this.posX+this.modW*1.05, this.posY+this.modH*1.05, this.modW*3.5, this.modH*2 );
      ctx.font = 15*this.relSiz+"px monospace";
      ctx.fillStyle = 'lime';
      ctx.fillText(this.pname+" @ X:[ "+this.posX+' ]| Y:[ '+this.posY+' ]', this.posX+this.modW*1.15, this.posY+this.modH*1.25);
      ctx.fillText('Width:[ '+this.modW+'px ] | Height:[ '+this.modH+'px ]', this.posX+this.modW*1.15, this.posY+this.modH*1.45);
      ctx.fillText('RelativeSize:[ '+this.relSiz+' ]| Angle:[ '+this.angl+'deg ]', this.posX+this.modW*1.15, this.posY+this.modH*1.65);
      ctx.fillText('SDT:[ '+this.sdt+' ]', this.posX+this.modW*1.15, this.posY+this.modH*1.85);
      ctx.fillText('EDT:[ '+this.edt+'deg ]', this.posX+this.modW*1.15, this.posY+this.modH*2.05);
      ctx.fillText('TimeTakenDrawing:[ '+Math.round((this.edt - this.sdt)*1000)+' µs ]', this.posX+this.modW*1.15, this.posY+this.modH*2.25);
      
      ctx.fillText('Distance from Screen Center:', this.posX+this.modW*1.15, this.posY+this.modH*2.45);
      // DxSc -> Distance X[from LEFT edge of canvas] from Screen Center
      // DYSc -> Distance Y[from TOP edge of canvas] from Screen Center
      ctx.fillText('DxSc:[ '+this.DxSc+' % ] | DySc:[ '+this.DySc+' % ]', this.posX+this.modW*1.15, this.posY+this.modH*2.65);
      
      ctx.restore();
    }
  }
  