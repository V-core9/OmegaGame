//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: inputs.js                                                        ║
//║ ↔ Location: <: public_root :>/ logic / general / inputs.js                    ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 22.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝

//console.log('[ LoadingFile >> logic/general/inputs.js ]');

// Keys Pressed Array
var keysPressed = [];

// Create InputsWorker...webWorking....
var inputsWorker = new Worker('webWorkers/inputs.js');

// Getting message from webworker
inputsWorker.onmessage = function (oEvent) {
  console.log('Worker said : ' + oEvent.data);
};

// Handler function for events
function handle(e) {
  e.preventDefault();
  console.log(e);
  inputsWorker.postMessage(JSON.stringify({
    type: e.type,
    key: e.key,
    code: e.code,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    altKey: e.altKey,
    metaKey: e.metaKey,
    repeat: e.repeat
  }));
}

// Actually adding Events to window...and passing that to worker...
window.onkeydown = window.onkeyup = window.onkeypress = handle;
