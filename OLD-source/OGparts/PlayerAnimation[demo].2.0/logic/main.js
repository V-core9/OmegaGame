alert(window.innerHeight);

var gameData = {
    options: {
        video : {
            width: window.innerWidth,
            height: window.innerHeight,
            wantedFPS: 50,
            details: medium
        },
        audio : {
            volume: 75,
        }
    },
    player: {
        animStatus: 'stand'
    },
    camera: {
        mode: 'free',
        zoom: 1,
        top: 100,
        left: 200
    },
    map: {
        name: 'HellPitPass',
        width: 500,
        height: 250
    }
};
var camElem, pElem;
  
// sfiVar => single frame interval Variable
// ssiVar => single second interval Varialbe
var drawer = {
    status : 'stopped',
};
var wantedFPS = 50,currentFPS;
var sfiVar, ssiVar;
var allDoneFPS = 0, ssDoneFPS = 0;

function startDrawerIntervals(){
    drawScreenArea();
    drawSvgPlayer();
	startFrameInterval();
    startSecondInterval();
    setDrawerStatus('drawing');
}

function stopDrawerIntervals(){
	stopFrameInterval();
    stopSecondInterval();
    setDrawerStatus('stopped');
}

function startFrameInterval() {
  sfiVar = setInterval( function(){ drawFrameFunc(); }, 1000/wantedFPS );
}

function startSecondInterval(){
  ssiVar = setInterval( function(){ oneSecFunc(); }, 1000 );
}

function drawFrameFunc() {
    //document.getElementById("demo").innerHTML += "Hello ";
    updatePlayer();
	ssDoneFPS++;
}

function oneSecFunc(){
	currentFPS = ssDoneFPS;
    allDoneFPS += ssDoneFPS;
    ssDoneFPS = 0;
	document.getElementById("currentFPS").innerHTML = currentFPS;
}

function stopFrameInterval() {
  clearInterval(sfiVar);
}

function stopSecondInterval() {
  clearInterval(ssiVar);
}

function setDrawerStatus(status = null){
    drawer.status = status;

    debuggerUpdateFront();
}

function debuggerUpdateFront(){
    var statusColor = 'gray';
    if (drawer.status == "drawing"){
        statusColor = 'green';
    } else if ( drawer.status == "stopped" ){
        statusColor = 'red';
    } 
	document.getElementById("drawerStatusElem").innerHTML = drawer.status;
    document.getElementById("drawerStatusElem").style.background = statusColor;
    //alert(status);
}

function setWantedFps(num = 50){
    wantedFPS = num;
    stopDrawerIntervals();
    startDrawerIntervals();
}



///Create SVG element Function
function createSVGelem(elem_id, parent_id = "body"){
    if (parent_id == "body") {
        document.body.innerHTML += '<svg viewBox="100 100 200 200" id="'+elem_id+'"></svg>';
    } else {
        document.getElementById(parent_id).innerHTML += '<svg id="'+elem_id+'"></svg>';
    }
}
///END Create SVG element Function END 

///DrawScreenArea function -> will create root svg element 
function drawScreenArea(){
    if (document.getElementById('gameScreenArea') != null){
        document.getElementById('gameScreenArea').remove();
    }
    document.body.innerHTML += '<svg viewBox="100 100 200 200" id="gameScreenArea" width="'+document.innerWidth+'" height="'+document.innerHeight+'" ></svg>';
}
///END DrawScreenArea function END

///drawSvgPlayer function
function drawSvgPlayer(){
    if (document.getElementById('playerElem') != null){
        document.getElementById('playerElem').remove();
    }
    document.getElementById('gameScreenArea').innerHTML += '<svg viewBox="100 100 200 200" id="playerElem"></svg>';
    pElem = document.getElementById('playerElem');
    pElem.innerHTML = `<g fill="darkgreen" stroke="#444444" stroke-width="1">`
                        +`<polygon class="leftLeg" points="30,20 25,17.5 17.5,20 20,35 30,35" />`
                        +`<polygon class="rightLeg" points="45,20 50,17.5 57.5,20 55,35 45,35" />`
                        +`<polygon class="torso" points="15,30 20,20 55,20 60,30 55,42.5 20,42.5" fill="rgba(0,0,0,.5)" />`
                    +`</g>`;
    
}

function updatePlayer(){
    //createSVGelem("playerElem", "gameScreenArea");
    //pElem = document.getElementById('playerElem');
    pElem.innerHTML = `<g fill="darkgreen" stroke="#444444" stroke-width="1">`
                        +`<polygon class="leftLeg" points="30,20 25,17.5 17.5,20 20,35 30,35" />`
                        +`<polygon class="rightLeg" points="45,20 50,17.5 57.5,20 55,35 45,35" />`
                        +`<polygon class="torso" points="15,30 20,20 55,20 60,30 55,42.5 20,42.5" fill="rgba(0,0,0,.5)" />`
                    +`</g>`;
    
}
///END drawSvgPlayer function END






