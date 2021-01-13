var cnvWorker = null;
var ctxWorker = null;

// Waiting to receive the OffScreenCanvas
self.onmessage = function(e) {
    cnvWorker = e.data.canvas;
    ctxWorker = cnvWorker.getContext("2d");
    startDrawing();
};

// Start the counter for Canvas B
var counter = fps = 0;
function startDrawing() {
  requestAnimationFrame(redrawcnvWorker);
  setInterval(function() {
    fps = counter;
    counter = 0;
  }, 1000);
}

// Redraw Canvas A text
function redrawcnvWorker() {
  //BASICALLY CODE TO REDRAW//
  ctxWorker.clearRect(0, 0, cnvWorker.width, cnvWorker.height);

  demoDrawing();
  drawFpsNumber();
  counter++;
  requestAnimationFrame(redrawcnvWorker);
}

function drawFpsNumber(){
  ctxWorker.font = "16px Verdana";
  ctxWorker.textAlign = "center";
  ctxWorker.fillText("FPS: " + fps, cnvWorker.width*0.9, cnvWorker.height*0.1 );
};



function demoDrawing(){

 //head
 ctxWorker.beginPath();
 ctxWorker.strokeStyle = 'rgba(0,0,255,.5)';
 ctxWorker.fillStyle = 'rgba(0,0,255,.5)';
 ctxWorker.lineWidth = 200*.02;
 ctxWorker.moveTo(150+200/2, 150+150/2);
 ctxWorker.lineTo(150+0.7*200, 150);
 ctxWorker.lineTo(150+0.5*200, 150+150*0.2);
 ctxWorker.lineTo(150+0.4*200, 150+150*0.2);
 ctxWorker.lineTo(150+0.285*200, 150+150*0.05);
 ctxWorker.lineTo(150+200*0.375, 150+150/2);
 ctxWorker.lineTo(150+200/2, 150+150/2);
 ctxWorker.fill();
 ctxWorker.stroke();
}