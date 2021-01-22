//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: debugger.js                                                      ║
//║ ↔ Location: <: public_root :>/ logic / general / debugger.js                  ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 22.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝

//console.log('[ LoadingFile >> logic/general/debugger.js ]');

var dbg = {

  elem: "",

  data: {
    toggled: false,
    log: []
  },

  start: function () {
    document.body.innerHTML += "<div id='dbgTool'><div id='dbgToolContent'></div><button id='toggleDbgToolSize' onclick='toggleVisibleDBG()'></button></div><link rel='stylesheet' href='style/debugger.css'>";
    this.elem = document.getElementById("dbgTool");
  },

  toggleVisibleDBG: function () {
    this.data.toggled = !this.data.toggled;
    if (this.data.toggled) {
      this.elem.classList.add('bigInfo');
    } else {
      this.elem.classList.remove('bigInfo');
    }
  },

  log: function (msg) {
    this.data.log.push(msg);
    console.log('%c [ dbg.log() => MSG:" ' + msg + ' "; ]', 'background: #202020; color: #03A9F4');
  }
}

// Helper Functions that are being called from DOM and passing it to DBG...

function toggleVisibleDBG() {
  dbg.toggleVisibleDBG();
}


