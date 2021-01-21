console.log('Worker_Drawer: Message received from main script - Reporting ONLINE');

var cnvWorker = null;
var ctxWorker = null;
var objToDraw = [];

// Waiting to receive the OffScreenCanvas
self.onmessage = function(e) {
    console.log('Worker_Drawer_onmessage');
    cnvWorker = e.data.canvas;
    ctxWorker = cnvWorker.getContext("2d");
    objToDraw = e.data.scObj;
    startDrawing();
};

// Start the counter for Canvas B
var counter = fps = 0;

function startDrawing() {
  console.log('Worker_Drawer_startDrawing');
  //Start Animating
  requestAnimationFrame(redrawCnvWorker);
  //Reset FPS counter
  setInterval(function() { fps = counter; counter = 0;  }, 1000);

}

// Redraw Canvas A text
function redrawCnvWorker() {
  console.log('Worker_Drawer_redrawCnvWorker');
  //BASICALLY CODE TO REDRAW
  ctxWorker.clearRect(0, 0, cnvWorker.width, cnvWorker.height);

  // MOVE AND REDRAW - SPACE FOR CODE
  for (var z = 0; z < objToDraw.length; z++){
    console.log('Should Draw Something HERE');
    ctxWorker.beginPath();
    ctxWorker.arc(objToDraw[z].x, objToDraw[z].y, 5, 0, 2 * Math.PI);
    ctxWorker.stroke();
  }
  ctxWorker.fillText('FPS: [ '+fps+' ]', 10, 10);
  
  counter++;
  console.log(fps);
  requestAnimationFrame(redrawCnvWorker);
}