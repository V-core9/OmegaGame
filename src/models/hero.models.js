console.log('human_male.model.js');

var human_male = {
  pname: 'HM_userDemoNae',
  relSiz: 1, //Player Relative Size....should only increase size of player...not ready for activ redrawing.
  posX: 450, // Player offset from the top of the canvas or the [ posX ]....should change to map pos X.
  posY: 250, // Basically same thing just Y...from top left corner 
  modW: 250, // Width of the object
  modH: 250, // Height of it
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
  draw: function () {
    ctxWorker.save();
    this.sdt = performance.now();

    var delta = (performance.now() - this.edt) / 1000;

    this.posY += Math.trunc(this.speedY * delta * 100) / 100;
    this.posX += Math.trunc(this.speedX * delta * 100) / 100;
    this.DxSc = (((cnvWorker.width / 2) - this.posX) / cnvWorker.width) * 20;
    this.DySc = (((cnvWorker.height / 2) - this.posY) / cnvWorker.height) * 20;

    this.modW = 128 * this.relSiz;
    this.modH = 125 * this.relSiz;

    //legzzR
    ctxWorker.beginPath();
    //ctxWorker.strokeStyle = 'rgba(0,0,255,.5)';
    //ctxWorker.fillStyle = 'rgba(0,0,255,.5)';
    ctxWorker.strokeStyle = 'rgba(250,60,60,.5)';
    ctxWorker.fillStyle = 'rgba(250,60,60,.5)';
    ctxWorker.lineWidth = this.modW * .04;
    ctxWorker.moveTo(this.posX + this.modW / 2, this.posY + this.modH / 2);
    ctxWorker.lineTo(this.posX + 0.35 * this.modW, this.posY + this.modH * 0.95);
    ctxWorker.lineTo(this.posX + 0.25 * this.modW, this.posY + this.modH * 0.95);
    ctxWorker.lineTo(this.posX + 0.2 * this.modW, this.posY + this.modH * 0.75);
    ctxWorker.lineTo(this.posX + 0.5 * this.modW, this.posY + this.modH * 0.25);
    ctxWorker.fill();
    ctxWorker.stroke();

    //legzzL
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX + this.modW / 2, this.posY + this.modH / 2);
    ctxWorker.lineTo(this.posX + 0.65 * this.modW, this.posY + this.modH * 0.95);
    ctxWorker.lineTo(this.posX + 0.75 * this.modW, this.posY + this.modH * 0.95);
    ctxWorker.lineTo(this.posX + 0.8 * this.modW, this.posY + this.modH * 0.75);
    ctxWorker.lineTo(this.posX + 0.5 * this.modW, this.posY + this.modH * 0.25);
    ctxWorker.fill();
    ctxWorker.stroke();

    //handsR
    ctxWorker.beginPath();
    //ctxWorker.strokeStyle = 'rgba(0,255,0,.5)';
    //ctxWorker.fillStyle = 'rgba(0,255,0,.5)';
    ctxWorker.strokeStyle = 'rgba(250,40,40,.5)';
    ctxWorker.fillStyle = 'rgba(250,40,40,.5)';
    ctxWorker.moveTo(this.posX + this.modW * .4, this.posY + this.modH * .1);
    ctxWorker.lineTo(this.posX + this.modW * .15, this.posY + this.modH * 0.7);
    ctxWorker.lineTo(this.posX + this.modW * .1, this.posY + this.modH * 0.7);
    ctxWorker.lineTo(this.posX + this.modW * .05, this.posY + this.modH * 0.65);
    ctxWorker.lineTo(this.posX + this.modW * .05, this.posY + this.modH * 0.35);
    ctxWorker.lineTo(this.posX + this.modW * .25, this.posY + this.modH * 0.15);
    ctxWorker.lineTo(this.posX + this.modW * .4, this.posY + this.modH * 0.1);
    ctxWorker.fill();
    ctxWorker.stroke();

    //handsL
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX + this.modW * .6, this.posY + this.modH * .1);
    ctxWorker.lineTo(this.posX + this.modW * .85, this.posY + this.modH * 0.7);
    ctxWorker.lineTo(this.posX + this.modW * .9, this.posY + this.modH * 0.7);
    ctxWorker.lineTo(this.posX + this.modW * .95, this.posY + this.modH * 0.65);
    ctxWorker.lineTo(this.posX + this.modW * .95, this.posY + this.modH * 0.35);
    ctxWorker.lineTo(this.posX + this.modW * .75, this.posY + this.modH * 0.15);
    ctxWorker.lineTo(this.posX + this.modW * .6, this.posY + this.modH * 0.1);
    ctxWorker.fill();
    ctxWorker.stroke();

    //torso
    ctxWorker.beginPath();
    //ctxWorker.strokeStyle = 'rgba(255,0,0,.5)';
    //ctxWorker.fillStyle = 'rgba(255,0,0,.5)';
    ctxWorker.strokeStyle = 'rgba(250,20,20,.5)';
    ctxWorker.fillStyle = 'rgba(250,20,20,.5)';
    ctxWorker.ellipse(this.posX + this.modW / 2, this.posY + this.modH * 0.35, this.modW * .4, this.modW * .25, 0, 0, 2 * Math.PI);
    ctxWorker.ellipse(this.posX + this.modW / 2 + Math.abs(this.DxSc), this.posY + this.modH * 0.35 + Math.abs(this.DySc), this.modW * .225, this.modW * .25, 0, 0, 2 * Math.PI);
    ctxWorker.stroke();
    ctxWorker.fill();
    ctxWorker.stroke();

    //head
    ctxWorker.beginPath();
    //ctxWorker.strokeStyle = 'rgba(0,0,255,.5)';
    //ctxWorker.fillStyle = 'rgba(0,0,255,.5)';
    ctxWorker.strokeStyle = 'rgba(250,0,0,.5)';
    ctxWorker.fillStyle = 'rgba(250,0,0,.5)';
    ctxWorker.lineWidth = this.modW * .02;
    ctxWorker.moveTo(this.posX + this.modW / 2, this.posY + this.modH / 2);
    ctxWorker.lineTo(this.posX + 0.7 * this.modW, this.posY);
    ctxWorker.lineTo(this.posX + 0.5 * this.modW, this.posY + this.modH * 0.2);
    ctxWorker.lineTo(this.posX + 0.4 * this.modW, this.posY + this.modH * 0.2);
    ctxWorker.lineTo(this.posX + 0.285 * this.modW, this.posY + this.modH * 0.05);
    ctxWorker.lineTo(this.posX + this.modW * 0.375, this.posY + this.modH / 2);
    ctxWorker.lineTo(this.posX + this.modW / 2, this.posY + this.modH / 2);
    ctxWorker.fill();
    ctxWorker.stroke();

    this.edt = performance.now();
  },
  drawAll: function () {
    ctxWorker.save()

    //console.log(this.anglDelta - 90);
    //ctxWorker.translate(this.posX+this.modW/2, this.posY+this.modH/2);
    //ctxWorker.rotate( (this.anglDelta - 90) *  Math.PI / 180);
    //ctxWorker.translate(-(this.posX+this.modW/2), -(this.posY+this.modH/2));

    this.draw();
    this.drawDbgBox();
    this.drawObjInfo();
  },
  drawDbgBox: function () {
    ctxWorker.save();
    ctxWorker.restore();
    ctxWorker.strokeStyle = '#00ff00';
    ctxWorker.lineWidth = 1;
    ctxWorker.strokeRect(this.posX, this.posY, this.modW, this.modH);

    //TL corner

    ctxWorker.strokeStyle = '#0fa00f';
    ctxWorker.lineWidth = 3;
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX, this.posY + (this.modH * 0.2));
    ctxWorker.lineTo(this.posX, this.posY);
    ctxWorker.lineTo(this.posX + (this.modW * 0.2), this.posY);
    ctxWorker.stroke();
    //BL corner

    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX + (this.modW * .8), this.posY);
    ctxWorker.lineTo(this.posX + this.modW, this.posY);
    ctxWorker.lineTo(this.posX + this.modW, this.posY + this.modH * 0.2);
    ctxWorker.stroke();

    //BL corner
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX, this.posY + this.modH * 0.8);
    ctxWorker.lineTo(this.posX, this.posY + this.modH);
    ctxWorker.lineTo(this.posX + this.modW * .2, this.posY + this.modH);
    ctxWorker.stroke();

    //BR corner
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX + this.modW * .8, this.posY + this.modH);
    ctxWorker.lineTo(this.posX + this.modW, this.posY + this.modH);
    ctxWorker.lineTo(this.posX + this.modW, this.posY + this.modH * 0.8);
    ctxWorker.stroke();



    //Drawing direction of the object
    ctxWorker.strokeStyle = '#00ff00';
    ctxWorker.lineWidth = 1;
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX + this.modW * 0.5, this.posY + this.modH * 0.4);
    ctxWorker.lineTo(this.posX + this.modW * 0.5, this.posY + this.modH * 0.6);
    ctxWorker.lineTo(this.posX + this.modW * 0.6, this.posY + this.modH * 0.5);
    ctxWorker.lineTo(this.posX + this.modW * 0.4, this.posY + this.modH * 0.5);
    ctxWorker.lineTo(this.posX + this.modW * 0.5, this.posY + this.modH * 0.6);
    ctxWorker.stroke();
    ctxWorker.restore();
  },
  drawObjInfo: function () {
    ctxWorker.restore();
    ctxWorker.lineWidth = 1;
    ctxWorker.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctxWorker.fillRect(this.posX + this.modW * 1.05, this.posY + this.modW * 1.05, this.modW * 3.5, this.modH * 2);
    ctxWorker.font = 15 * this.relSiz + "px monospace";
    ctxWorker.fillStyle = 'lime';
    ctxWorker.fillText(this.pname + " @ X:[ " + this.posX + ' ]| Y:[ ' + this.posY + ' ]', this.posX + this.modW * 1.15, this.posY + this.modH * 1.25);
    ctxWorker.fillText('Width:[ ' + this.modW + 'px ] | Height:[ ' + this.modH + 'px ]', this.posX + this.modW * 1.15, this.posY + this.modH * 1.45);
    ctxWorker.fillText('RelativeSize:[ ' + this.relSiz + ' ]| Angle:[ ' + this.angl + 'deg ]', this.posX + this.modW * 1.15, this.posY + this.modH * 1.65);
    ctxWorker.fillText('SDT:[ ' + this.sdt + ' ]', this.posX + this.modW * 1.15, this.posY + this.modH * 1.85);
    ctxWorker.fillText('EDT:[ ' + this.edt + 'deg ]', this.posX + this.modW * 1.15, this.posY + this.modH * 2.05);
    ctxWorker.fillText('TimeTakenDrawing:[ ' + Math.round((this.edt - this.sdt) * 1000) + ' µs ]', this.posX + this.modW * 1.15, this.posY + this.modH * 2.25);

    ctxWorker.fillText('Distance from Screen Center:', this.posX + this.modW * 1.15, this.posY + this.modH * 2.45);
    // DxSc -> Distance X[from LEFT edge of canvas] from Screen Center
    // DYSc -> Distance Y[from TOP edge of canvas] from Screen Center
    ctxWorker.fillText('DxSc:[ ' + this.DxSc + ' % ] | DySc:[ ' + this.DySc + ' % ]', this.posX + this.modW * 1.15, this.posY + this.modH * 2.65);

    ctxWorker.restore();
  }
}

///////////////////////////
//////////////////////////
//////////////////////////

var metal_hulk = {
  pname: 'PussyBreaker_69',
  relSiz: 1, //Player Relative Size....should only increase size of player...not ready for activ redrawing.
  posX: 0, // Player offset from the top of the canvas or the [ posX ]....should change to map pos X.
  posY: 0, // Basically same thing just Y...from top left corner 
  modW: 250, // Width of the object
  modH: 250, // Height of it
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
  draw: function () {
    ctxWorker.save();
    this.sdt = performance.now();

    var delta = (performance.now() - this.edt) / 1000;

    this.posY += Math.trunc(this.speedY * delta * 100) / 100;
    this.posX += Math.trunc(this.speedX * delta * 100) / 100;
    this.DxSc = (((cnvWorker.width / 2) - this.posX) / cnvWorker.width) * 20;
    this.DySc = (((cnvWorker.height / 2) - this.posY) / cnvWorker.height) * 20;

    this.modW = 128 * this.relSiz;
    this.modH = 125 * this.relSiz;

    //legzzR
    ctxWorker.beginPath();
    ctxWorker.strokeStyle = 'rgba(0,0,255,.5)';
    ctxWorker.fillStyle = 'rgba(0,0,255,.5)';
    ctxWorker.lineWidth = this.modW * .04;
    ctxWorker.moveTo(this.posX + this.modW / 2, this.posY + this.modH / 2);
    ctxWorker.lineTo(this.posX + 0.35 * this.modW, this.posY + this.modH * 0.95);
    ctxWorker.lineTo(this.posX + 0.25 * this.modW, this.posY + this.modH * 0.95);
    ctxWorker.lineTo(this.posX + 0.2 * this.modW, this.posY + this.modH * 0.75);
    ctxWorker.lineTo(this.posX + 0.5 * this.modW, this.posY + this.modH * 0.25);
    ctxWorker.fill();
    ctxWorker.stroke();

    //legzzL
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX + this.modW / 2, this.posY + this.modH / 2);
    ctxWorker.lineTo(this.posX + 0.65 * this.modW, this.posY + this.modH * 0.95);
    ctxWorker.lineTo(this.posX + 0.75 * this.modW, this.posY + this.modH * 0.95);
    ctxWorker.lineTo(this.posX + 0.8 * this.modW, this.posY + this.modH * 0.75);
    ctxWorker.lineTo(this.posX + 0.5 * this.modW, this.posY + this.modH * 0.25);
    ctxWorker.fill();
    ctxWorker.stroke();

    //handsR
    ctxWorker.beginPath();
    ctxWorker.strokeStyle = 'rgba(0,255,0,.5)';
    ctxWorker.fillStyle = 'rgba(0,255,0,.5)';
    ctxWorker.moveTo(this.posX + this.modW * .4, this.posY + this.modH * .1);
    ctxWorker.lineTo(this.posX + this.modW * .15, this.posY + this.modH * 0.7);
    ctxWorker.lineTo(this.posX + this.modW * .1, this.posY + this.modH * 0.7);
    ctxWorker.lineTo(this.posX + this.modW * .05, this.posY + this.modH * 0.65);
    ctxWorker.lineTo(this.posX + this.modW * .05, this.posY + this.modH * 0.35);
    ctxWorker.lineTo(this.posX + this.modW * .25, this.posY + this.modH * 0.15);
    ctxWorker.lineTo(this.posX + this.modW * .4, this.posY + this.modH * 0.1);
    ctxWorker.fill();
    ctxWorker.stroke();

    //handsL
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX + this.modW * .6, this.posY + this.modH * .1);
    ctxWorker.lineTo(this.posX + this.modW * .85, this.posY + this.modH * 0.7);
    ctxWorker.lineTo(this.posX + this.modW * .9, this.posY + this.modH * 0.7);
    ctxWorker.lineTo(this.posX + this.modW * .95, this.posY + this.modH * 0.65);
    ctxWorker.lineTo(this.posX + this.modW * .95, this.posY + this.modH * 0.35);
    ctxWorker.lineTo(this.posX + this.modW * .75, this.posY + this.modH * 0.15);
    ctxWorker.lineTo(this.posX + this.modW * .6, this.posY + this.modH * 0.1);
    ctxWorker.fill();
    ctxWorker.stroke();

    //torso
    ctxWorker.beginPath();
    ctxWorker.strokeStyle = 'rgba(255,0,0,.5)';
    ctxWorker.fillStyle = 'rgba(255,0,0,.5)';
    ctxWorker.ellipse(this.posX + this.modW / 2, this.posY + this.modH * 0.35, this.modW * .4, this.modW * .25, 0, 0, 2 * Math.PI);
    ctxWorker.ellipse(this.posX + this.modW / 2 + Math.abs(this.DxSc), this.posY + this.modH * 0.35 + Math.abs(this.DySc), this.modW * .225, this.modW * .25, 0, 0, 2 * Math.PI);
    ctxWorker.stroke();
    ctxWorker.fill();
    ctxWorker.stroke();

    //head
    ctxWorker.beginPath();
    ctxWorker.strokeStyle = 'rgba(0,0,255,.5)';
    ctxWorker.fillStyle = 'rgba(0,0,255,.5)';
    ctxWorker.lineWidth = this.modW * .02;
    ctxWorker.moveTo(this.posX + this.modW / 2, this.posY + this.modH / 2);
    ctxWorker.lineTo(this.posX + 0.7 * this.modW, this.posY);
    ctxWorker.lineTo(this.posX + 0.5 * this.modW, this.posY + this.modH * 0.2);
    ctxWorker.lineTo(this.posX + 0.4 * this.modW, this.posY + this.modH * 0.2);
    ctxWorker.lineTo(this.posX + 0.285 * this.modW, this.posY + this.modH * 0.05);
    ctxWorker.lineTo(this.posX + this.modW * 0.375, this.posY + this.modH / 2);
    ctxWorker.lineTo(this.posX + this.modW / 2, this.posY + this.modH / 2);
    ctxWorker.fill();
    ctxWorker.stroke();

    this.edt = performance.now();
  },
  drawAll: function () {
    ctxWorker.save()

    console.log(this.anglDelta - 90);
    //ctxWorker.translate(this.posX+this.modW/2, this.posY+this.modH/2);
    //ctxWorker.rotate( (this.anglDelta - 90) *  Math.PI / 180);
    //ctxWorker.translate(-(this.posX+this.modW/2), -(this.posY+this.modH/2));

    this.draw();
    this.drawDbgBox();
    this.drawObjInfo();
  },
  drawDbgBox: function () {
    ctxWorker.save();
    ctxWorker.restore();
    ctxWorker.strokeStyle = '#00ff00';
    ctxWorker.lineWidth = 1;
    ctxWorker.strokeRect(this.posX, this.posY, this.modW, this.modH);

    //TL corner

    ctxWorker.strokeStyle = '#0fa00f';
    ctxWorker.lineWidth = 3;
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX, this.posY + (this.modH * 0.2));
    ctxWorker.lineTo(this.posX, this.posY);
    ctxWorker.lineTo(this.posX + (this.modW * 0.2), this.posY);
    ctxWorker.stroke();
    //BL corner

    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX + (this.modW * .8), this.posY);
    ctxWorker.lineTo(this.posX + this.modW, this.posY);
    ctxWorker.lineTo(this.posX + this.modW, this.posY + this.modH * 0.2);
    ctxWorker.stroke();

    //BL corner
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX, this.posY + this.modH * 0.8);
    ctxWorker.lineTo(this.posX, this.posY + this.modH);
    ctxWorker.lineTo(this.posX + this.modW * .2, this.posY + this.modH);
    ctxWorker.stroke();

    //BR corner
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX + this.modW * .8, this.posY + this.modH);
    ctxWorker.lineTo(this.posX + this.modW, this.posY + this.modH);
    ctxWorker.lineTo(this.posX + this.modW, this.posY + this.modH * 0.8);
    ctxWorker.stroke();



    //Drawing direction of the object
    ctxWorker.strokeStyle = '#00ff00';
    ctxWorker.lineWidth = 1;
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX + this.modW * 0.5, this.posY + this.modH * 0.4);
    ctxWorker.lineTo(this.posX + this.modW * 0.5, this.posY + this.modH * 0.6);
    ctxWorker.lineTo(this.posX + this.modW * 0.6, this.posY + this.modH * 0.5);
    ctxWorker.lineTo(this.posX + this.modW * 0.4, this.posY + this.modH * 0.5);
    ctxWorker.lineTo(this.posX + this.modW * 0.5, this.posY + this.modH * 0.6);
    ctxWorker.stroke();
    ctxWorker.restore();
  },
  drawObjInfo: function () {
    ctxWorker.restore();
    ctxWorker.lineWidth = 1;
    ctxWorker.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctxWorker.fillRect(this.posX + this.modW * 1.05, this.posY + this.modW * 1.05, this.modW * 3.5, this.modH * 2);
    ctxWorker.font = 15 * this.relSiz + "px monospace";
    ctxWorker.fillStyle = 'lime';
    ctxWorker.fillText(this.pname + " @ X:[ " + this.posX + ' ]| Y:[ ' + this.posY + ' ]', this.posX + this.modW * 1.15, this.posY + this.modH * 1.25);
    ctxWorker.fillText('Width:[ ' + this.modW + 'px ] | Height:[ ' + this.modH + 'px ]', this.posX + this.modW * 1.15, this.posY + this.modH * 1.45);
    ctxWorker.fillText('RelativeSize:[ ' + this.relSiz + ' ]| Angle:[ ' + this.angl + 'deg ]', this.posX + this.modW * 1.15, this.posY + this.modH * 1.65);
    ctxWorker.fillText('SDT:[ ' + this.sdt + ' ]', this.posX + this.modW * 1.15, this.posY + this.modH * 1.85);
    ctxWorker.fillText('EDT:[ ' + this.edt + 'deg ]', this.posX + this.modW * 1.15, this.posY + this.modH * 2.05);
    ctxWorker.fillText('TimeTakenDrawing:[ ' + Math.round((this.edt - this.sdt) * 1000) + ' µs ]', this.posX + this.modW * 1.15, this.posY + this.modH * 2.25);

    ctxWorker.fillText('Distance from Screen Center:', this.posX + this.modW * 1.15, this.posY + this.modH * 2.45);
    // DxSc -> Distance X[from LEFT edge of canvas] from Screen Center
    // DYSc -> Distance Y[from TOP edge of canvas] from Screen Center
    ctxWorker.fillText('DxSc:[ ' + this.DxSc + ' % ] | DySc:[ ' + this.DySc + ' % ]', this.posX + this.modW * 1.15, this.posY + this.modH * 2.65);

    ctxWorker.restore();
  }
}