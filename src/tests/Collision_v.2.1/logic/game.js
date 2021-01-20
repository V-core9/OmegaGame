console.log('Inside Logic->game.js.');

//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: game.js                                                          ║
//║ ↔ Location: <: public_root :>/                                                ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 20.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝
const dbgGame = true;

function rotateObj(obj, angle){
   for (var i=0; i < obj.cp.length; i++){
        var x = obj.cp[i].split(',')[0];
        var y = obj.cp[i].split(',')[1];
        var newX = y*Math.cos(angle) - x*Math.sin(angle);
        var newY = y*Math.sin(angle) + x*Math.cos(angle);
        obj.cp[i] = newX+','+newY;
   }
}

function mainLoop(mapObjs, canvas, ctx) {
  
    ctx.clearRect(0,0,canvas.width, canvas.height);
    var mapObjNum = mapObjs.length;
    for (i = 0 ; i < mapObjs.length; i++) {
        mapObjs[i].marked = false;
    }

    for (i = 0 ; i < mapObjs.length; i++) {
        mapObjs[i].update(canvas, mapObjs.slice(0), i);
        mapObjs[i].draw(ctx);
        //console.log(mapObjs[i]);
    }
    
    window.requestAnimationFrame(function() {
        mainLoop(mapObjs, canvas, ctx);
    });
}

var canvas = document.getElementById('mgc');
canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight/2;
var ctx = canvas.getContext('2d');
var mapObjs = [];

var mapData = {
    w: 2000,
    h: 1000,
    col: 'green'
}


mainLoop(mapObjs, canvas, ctx);