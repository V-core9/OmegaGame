console.log('[- Reporting ONLINE - Worker_Drawer : Message received from main script -]');

var canvasW = null;
var ctxWorker = null;
var objToDraw = [];
var counter = fps = 0;
var fpsInterval;

// Waiting to receive the OffScreenCanvas
self.onmessage = function(e) {
    //console.log('Worker_Drawer_onmessage');
    if (e.data.canvas !== undefined){
      canvasW = e.data.canvas;
      ctxWorker = canvasW.getContext("2d");
    }

    if (e.data.scObj !== undefined){
      objToDraw = e.data.scObj;
      //console.log(objToDraw.length);
    }

    // Redraw Canvas A text
    function redrawCnvWorker() {
      console.log('Should Draw Something HERE...OBJnum: '+objToDraw.length);
      // MOVE AND REDRAW - SPACE FOR CODE
      for (var z = 0; z < objToDraw.length; z++){
        //console.log(z);
      }
      requestAnimationFrame(redrawCnvWorker);
    }

    requestAnimationFrame(redrawCnvWorker);
};
