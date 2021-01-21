const dbgApp = true;

var gamMos = {
    x : 0,
    y : 0
}

var gamCam = {
    mode: "free",
    trgt: "",
    x: 1000,
    y: 500,
    w: window.innerWidth,
    h: window.innerWidth*9/16,
}

var gameObjs = {
    imObj   : [],
    bllObj  : [],
    plObj   : []
}

var scObj = [];

var map = {
    wi: 8000,
    he: 3000,
    ti: 0,
    we: 'rain'
}

var inscreenWW = new Worker('ww/inscreener.js');
var drawerWW = new Worker('ww/drawer.js');
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
            
            break;
    
        case "updateInscreen":
            //console.log('updatingINScreenER....>>')
            var helpObjs = gameObjs;
            helpObjs.gamCam = gamCam;
            inscreenWW.postMessage(helpObjs);
            break;
    
        default:
            break;
    }
}

inscreenWW.onmessage = function(e){
    scObj = e.data;
    //console.log(scObj);
}


const offscreenCanvas = document.getElementById('appCam').transferControlToOffscreen();


var app = {
    cnv: document.getElementById('appCam'),
    start: function(){
        console.log('app.start()[S]');
        //this.cnv.width = gamCam.w;
        //this.cnv.height = gamCam.h;
        orchestratorWW.postMessage(["start"]);
        inptHndl.init();
        drawerWW.postMessage({  canvas: offscreenCanvas , scObj: scObj }, [offscreenCanvas]);
        if (dbgApp){
            appDbg.start();
        }
    }
}




///

var randomWalls = 500;

for (var i=0; i< randomWalls; i++){
    var args = {
        posX: (Math.random() * map.wi),
        posY: (Math.random() * map.he),
        weight: (Math.random() * 1000),
        colisionPath: ["-10,10","-10,-10","10,-10","10,10"]
    }
    var newWall = new wallObj(args);
    gameObjs.imObj.push(newWall);
}

console.log(gameObjs);