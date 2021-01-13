console.log('app.js');


var cWorker = document.getElementById("mainApp").transferControlToOffscreen();
var drawer = new Worker("ww.drawer.js");
drawer.postMessage({ canvas: cWorker }, [cWorker]);