console.log('Inside Logic->game.js.');

//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: game.js                                                           ║
//║ ↔ Location: <: public_root :>/                                                ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 11.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝

var mouseX = mouseY = 0;


function rotate(v, theta) {
    return [v[0] * Math.cos(theta) - v[1] * Math.sin(theta), v[0] * Math.sin(theta) + v[1] * Math.cos(theta)];
}


function mainLoop(mapObjs, canvas, ctx) {
  
    ctx.clearRect(0,0,canvas.width, canvas.height);
    var newObj1 = newObj2 = null;

    for (i = 0 ; i < mapObjs.length; i++) {

        if (mapObjs[i].hp === 0) {
          if (mapObjs[i].type == 'enemy'){
            newObj1 = newObj2 = new gameHero(mapObjs[i].type, mapObjs[i].x, mapObjs[i].y, r/2, vx/4, vy/4, color, 25);
          }
          mapObjs.splice(i,1);
        } else {
          mapObjs[i].update(canvas, mapObjs.slice(0), i);
          mapObjs[i].draw(ctx);
        }
    }

    if(newObj1 != null){
      mapObjs.push(newObj1);
    }
    if(newObj2 != null){
      
      mapObjs.push(newObj2);
    }

    
    window.requestAnimationFrame(function() {
        mainLoop(mapObjs, canvas, ctx);
    });
}


//document.body.innerHTML += `<canvas id='canvasIMGGEN' class="gameCam" width="800" height="800"></canvas>`;
//document.body.innerHTML += `<canvas id='cam2' class="gameCam" width="800" height="800"></canvas>`;
var canvasGEN = document.getElementById('canvasIMGGEN');
var ctxGEN = canvasGEN.getContext('2d');
var canvas = document.getElementById('gameCam');
canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight/2;
var ctx = canvas.getContext('2d');
var mapObjs = [];




mainLoop(mapObjs, canvas, ctx);


  

  
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//▌   ! END OF FILE !            ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
//▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄       ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
//▌ ♠ File Name: game.js  ▐       ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀