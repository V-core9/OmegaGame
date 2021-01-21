const dbgApp = true;

var gamMos = {
    x : 0,
    y : 0
}

var gameObjs={
    imObj   : [],
    bllObj  : [],
    plObj   : []
}

var map = {
    wi: 8000,
    he: 3000,
    ti: 0,
    we: 'rain'
}

var orchestratorWW = new Worker('ww/orchestrator.js');

orchestratorWW.onmessage = function(e) {
    //console.log(e.data);
    var mm = 0;
    switch (e.data) {
        case "updateGame":
            //console.log('updatingGameSpace....>>')
            mm++;
            break;
    
        case "updateScreen":
            //console.log('updatingScreen....>>')
            mm++;
            break;
    
        case "updateInscreen":
            //console.log('updatingINScreenER....>>')
            mm++;
            break;
    
        default:
            break;
    }
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
        inptHndl.init();

        if (dbgApp){
            appDbg.start();
        }
    }
}

var gamCam = {
    mode: "free",
    trgt: "",
    x: 1000,
    y: 500
}