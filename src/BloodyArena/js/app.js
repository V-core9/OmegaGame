var imObj   = [];
var bllObj  = [];
var plObj   = [];

var map = {
    wi: 8000,
    he: 3000,
    ti: 0000,
    we: 'rain'
}

var orchestratorWW = new Worker('ww/orchestrator.js');

orchestratorWW.onmessage = function(e) {
    console.log('Message received from worker '+e.data);
}

var app = {
    cnv: document.getElementById('appCam'),
    cnvW: window.innerWidth,
    cnvH: window.innerWidth*9/16,
    start: function(){
        console.log('app.start()[S]');
        this.cnv.width = this.cnvW;
        this.cnv.height = this.cnvH;
        orchestratorWW.postMessage(["start"]);
    }
}