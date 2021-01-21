console.log('Worker_Drawer: Message received from main script - Reporting ONLINE');

var canvasW = null;
var ctxWorker = null;
var objToDraw = [];

// Waiting to receive the OffScreenCanvas
self.onmessage = function(e) {
    console.log('Worker_Drawer_onmessage');
    if (e.data.canvas !== undefined){
      canvasW = e.data.canvas;
      ctxWorker = canvasW.getContext("2d");
    }

    if (e.data.scObj !== undefined){
      objToDraw = e.data.scObj;
      console.log(objToDraw.length);
    }
    startDrawing();
};
// Start the counter for Canvas B
var counter = fps = 0;

function startDrawing() {
  requestAnimationFrame(redrawCnvWorker);
  //Reset FPS counter
  setInterval(function() { fps = counter; counter = 0; console.log(fps); }, 1000);
}

// Redraw Canvas A text
function redrawCnvWorker() {
  //console.log(objToDraw.length);
  // MOVE AND REDRAW - SPACE FOR CODE
  for (var z = 0; z < objToDraw.length; z++){
    //console.log('Should Draw Something HERE');
    ctxWorker.beginPath();
    ctxWorker.lineWIdth = 5;
    ctxWorker.strokeStyle = 'red';
    ctxWorker.arc(objToDraw[z].x, objToDraw[z].y, 5, 0, 2 * Math.PI);
    ctxWorker.stroke();
  }

  ctxWorker.beginPath();
  ctxWorker.strokeStyle = 'red';
  ctxWorker.strokeText('FPS: [ '+fps+' ]', 10, 10);
  
  counter++;
  
  
  requestAnimationFrame(redrawCnvWorker);
}