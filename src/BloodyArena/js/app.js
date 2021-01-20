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
    //console.log(e.data);
    switch (e.data) {
        case "updateGame":
            console.log('updatingGameSpace....>>')
            break;
    
        case "updateScreen":
            console.log('updatingScreen....>>')
            break;
    
        case "updateInscreen":
            console.log('updatingINScreenER....>>')
            break;
    
        default:
            break;
    }
}

var app = {
    cnv: document.getElementById('appCam'),
    cnvW: window.innerWidth,
    cnvH: window.innerWidth*9/16,
    camStyle: 'attached',
    start: function(){
        console.log('app.start()[S]');
        this.cnv.width = this.cnvW;
        this.cnv.height = this.cnvH;
        orchestratorWW.postMessage(["start"]);
    }
}