postMessage("I\'m working before postMessage(\'ali\').");

importScripts('../models/hero.models.js');

var cnvWorker = null;
var ctxWorker = null;
var counter = 0;
var fps = 0;
var appMode = "pro";

// Waiting to receive the OffScreenCanvas
self.onmessage = function (e) {
  cnvWorker = e.data.canvas;
  ctxWorker = cnvWorker.getContext("2d");
  if (e.data.appMode !== "pro") {
    appMode = e.data.appMode;
  }
  startDrawing();
};

// Start the counter for Canvas B
function startDrawing() {
  requestAnimationFrame(redrawcnvWorker);
  setInterval(function () {
    fps = counter;
    counter = 0;
  }, 1000);
}

// Redraw Canvas A text
function redrawcnvWorker() {
  //BASICALLY CODE TO REDRAW//
  ctxWorker.clearRect(0, 0, cnvWorker.width, cnvWorker.height);

  // MOVE AND REDRAW
  if (appMode !== "pro") {
    metal_hulk.drawAll();
    human_male.drawAll();
  } else {
    metal_hulk.draw();
    human_male.draw();
  };
  drawFpsNumber();
  counter++;
  requestAnimationFrame(redrawcnvWorker);
}

function drawFpsNumber() {
  ctxWorker.font = (ctxWorker.width / 50) + "px Verdana";
  ctxWorker.textAlign = "center";
  ctxWorker.fillText("FPS: " + fps, cnvWorker.width * 0.9, cnvWorker.height * 0.1);
};
