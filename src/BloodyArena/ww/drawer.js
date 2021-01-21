console.log('Worker_Drawer: Message received from main script - Reporting ONLINE');

var cnvWorker = null;
var ctxWorker = null;
var objToDraw = [];

// Waiting to receive the OffScreenCanvas
self.onmessage = function(e) {
    objToDraw = e.data.scObj;
    cnvWorker = e.data.canvas;
    ctxWorker = cnvWorker.getContext("2d");
    startDrawing();
};

// Start the counter for Canvas B
var counter = fps = 0;
function startDrawing() {
  //Start Animating
  requestAnimationFrame(redrawCnvWorker);
  //Reset FPS counter
  setInterval(function() { fps = counter; counter = 0;  }, 1000);

}

// Redraw Canvas A text
function redrawCnvWorker() {
  //BASICALLY CODE TO REDRAW//
  ctxWorker.clearRect(0, 0, cnvWorker.width, cnvWorker.height);

  // MOVE AND REDRAW!!!SPACE FOR CODE!!!!
  for (var i = 0; i < objToDraw.length; i++){
    ctx.beginPath();
    ctx.arc(objToDraw[i].x, objToDraw[i].y, 5, 0, 2 * Math.PI);
    ctx.stroke();
  }
  ctxWorker.fillText('FPS: [ '+fps+' ]', 10, 10);
  
  counter++;
  console.log(fps);
  requestAnimationFrame(redrawCnvWorker);
}
