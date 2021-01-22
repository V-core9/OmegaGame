postMessage("I\'m working before postMessage(\'ali\').");
var cnvWorker = null;
var ctxWorker = null;

self.onmessage = function (e) {
  cnvWorker = e.data.canvas;
  ctxWorker = cnvWorker.getContext("2d");
  startDrawing();
};

var counter = fps = 0;

function startDrawing() {
  requestAnimationFrame(redrawcnvWorker);
  setInterval(function () {
    fps = counter;
    counter = 0;
  }, 1000);
}

function redrawcnvWorker() {
  ctxWorker.clearRect(0, 0, cnvWorker.width, cnvWorker.height);
  metal_hulk.drawAll();
  drawFpsNumber();
  counter++;
  requestAnimationFrame(redrawcnvWorker);
}

function drawFpsNumber() {
  ctxWorker.font = ctxWorker.width / 50 + "px Verdana";
  ctxWorker.textAlign = "center";
  ctxWorker.fillText("FPS: " + fps, cnvWorker.width * 0.9, cnvWorker.height * 0.1);
}

;
var metal_hulk = {
  pname: 'PussyBreaker_69',
  relSiz: 5,
  posX: 0,
  posY: 0,
  modW: 250,
  modH: 250,
  DxSc: 0,
  DySc: 0,
  speedX: 0,
  speedY: 0,
  maxSpeed: 100,
  ldt: 0,
  delta: 0,
  anglDelta: 0,
  angl: 0,
  sdt: 0,
  edt: 0,
  draw: function () {
    ctxWorker.save();
    this.sdt = performance.now();
    var delta = (performance.now() - this.edt) / 1000;
    this.posY += Math.trunc(this.speedY * delta * 100) / 100;
    this.posX += Math.trunc(this.speedX * delta * 100) / 100;
    this.DxSc = (cnvWorker.width / 2 - this.posX) / cnvWorker.width * 20;
    this.DySc = (cnvWorker.height / 2 - this.posY) / cnvWorker.height * 20;
    this.modW = 128 * this.relSiz;
    this.modH = 125 * this.relSiz;
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
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX + this.modW / 2, this.posY + this.modH / 2);
    ctxWorker.lineTo(this.posX + 0.65 * this.modW, this.posY + this.modH * 0.95);
    ctxWorker.lineTo(this.posX + 0.75 * this.modW, this.posY + this.modH * 0.95);
    ctxWorker.lineTo(this.posX + 0.8 * this.modW, this.posY + this.modH * 0.75);
    ctxWorker.lineTo(this.posX + 0.5 * this.modW, this.posY + this.modH * 0.25);
    ctxWorker.fill();
    ctxWorker.stroke();
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
    ctxWorker.beginPath();
    ctxWorker.strokeStyle = 'rgba(255,0,0,.5)';
    ctxWorker.fillStyle = 'rgba(255,0,0,.5)';
    ctxWorker.ellipse(this.posX + this.modW / 2, this.posY + this.modH * 0.35, this.modW * .4, this.modW * .25, 0, 0, 2 * Math.PI);
    ctxWorker.ellipse(this.posX + this.modW / 2 + Math.abs(this.DxSc), this.posY + this.modH * 0.35 + Math.abs(this.DySc), this.modW * .225, this.modW * .25, 0, 0, 2 * Math.PI);
    ctxWorker.stroke();
    ctxWorker.fill();
    ctxWorker.stroke();
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
    ctxWorker.save();
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
    ctxWorker.strokeStyle = '#0fa00f';
    ctxWorker.lineWidth = 3;
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX, this.posY + this.modH * 0.2);
    ctxWorker.lineTo(this.posX, this.posY);
    ctxWorker.lineTo(this.posX + this.modW * 0.2, this.posY);
    ctxWorker.stroke();
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX + this.modW * .8, this.posY);
    ctxWorker.lineTo(this.posX + this.modW, this.posY);
    ctxWorker.lineTo(this.posX + this.modW, this.posY + this.modH * 0.2);
    ctxWorker.stroke();
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX, this.posY + this.modH * 0.8);
    ctxWorker.lineTo(this.posX, this.posY + this.modH);
    ctxWorker.lineTo(this.posX + this.modW * .2, this.posY + this.modH);
    ctxWorker.stroke();
    ctxWorker.beginPath();
    ctxWorker.moveTo(this.posX + this.modW * .8, this.posY + this.modH);
    ctxWorker.lineTo(this.posX + this.modW, this.posY + this.modH);
    ctxWorker.lineTo(this.posX + this.modW, this.posY + this.modH * 0.8);
    ctxWorker.stroke();
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
    ctxWorker.fillText('DxSc:[ ' + this.DxSc + ' % ] | DySc:[ ' + this.DySc + ' % ]', this.posX + this.modW * 1.15, this.posY + this.modH * 2.65);
    ctxWorker.restore();
  }
};
//# sourceMappingURL=drawer.js.map