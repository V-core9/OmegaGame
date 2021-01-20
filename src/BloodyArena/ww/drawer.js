// canvasworker.js

let canvas;
let ctx;

function animate() {
  // do some animations ...
  self.requestAnimationFrame(animate);
}

self.onmessage = function(ev) {
  if(ev.data.msg === 'init') {
    canvas = ev.data.canvas;
    ctx = canvas.getContext('2d');
    animate();
  }
}