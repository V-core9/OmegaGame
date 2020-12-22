///// Game Models

const humanModel = null;

function loadModels(){
  humanModel = loadModel('human.male.json');
}
  
//// End Game Models
  
  
  
  var gameData = {
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
  
  // Store the namespace string in a variable.
  var namespace = "http://www.w3.org/2000/svg"
  
  
  
  function  startPlayerAnimation(){
    switch (gameData.player.animStatus) {
    case 'stand':
      pElem.innerHTML = humanModel.stand;
      //alert('stand');
      break;
    case 'walk':
      pElem.innerHTML = humanModel.walk;
      //alert('walk');
      break;
    case 'run':
      pElem.innerHTML = humanModel.run;
      //alert('run');
      break;
    default:
        gameData.player.animStatus = 'stand'
      alert('stand');
      break;
      // code block
  }
    
  }
  
  function setPlayerStatus(status){
    gameData.player.animStatus = status;
    startPlayerAnimation();
    console.log(status);
  }
  
  
  //////
  function drawScreenArea(){
    createSVGelem("gameScreenArea");
    camElem = document.getElementById('gameScreenArea');
    camElem.setAttribute('width', document.innerWidth);
    camElem.setAttribute('height', document.innerHeight);
  }
  
  function drawSvgPlayer(){
    createSVGelem("playerElem", "gameScreenArea");
    pElem = document.getElementById('playerElem');
    // Third example: svg G grouping
    pElem.innerHTML = humanModel.stand;
    
  }
  
  
  
  
  
  ///SelfTriggering starter...
  (function(){
    var testLoad = 0;
    do {
      setTimeout(function(){ if (humanModel  !== null) {testLoad = 1}; }, 3000);
    }
    while (testLoad != 1);
    drawScreenArea('');
    drawSvgPlayer();
  })();
  //.........................
  
  
  
  /// CORE FUNCTIONS ///
  
  function createSVGelem(elem_id, parent_id = "body"){
    if (parent_id == "body") {
      document.body.innerHTML += '<svg viewBox="100 100 200 200" id="'+elem_id+'"></svg>';
    } else {
      document.getElementById(parent_id).innerHTML += '<svg id="'+elem_id+'"></svg>';
    }
  }
  
  function loadModel(name) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        return this.responseText;
      }
    };
    xhttp.open("GET", "models/"+name, true);
    xhttp.send();
  }
  
  
  
  /// !End CORE FUNCTIONS End! ///
  
  




  // sfiVar => single frame interval Variable
// ssiVar => single second interval Varialbe
var wantedFPS = 50,currentFPS;
var sfiVar, ssiVar;
var allDoneFPS = 0, ssDoneFPS = 0;

function startGameIntervals(){
	startFrameInterval();
    startSecondInterval();
}

function startFrameInterval() {
  sfiVar = setInterval( function(){ drawFrameFunc(); }, 1000/wantedFPS );
}

function startSecondInterval(){
  ssiVar = setInterval( function(){ oneSecFunc(); }, 1000 );
}

function drawFrameFunc() {
	document.getElementById("demo2").innerHTML += "Hello ";
	ssDoneFPS++;
}

function oneSecFunc(){
	currentFPS = ssDoneFPS;
    allDoneFPS += ssDoneFPS;
    ssDoneFPS = 0;
	document.getElementById("demo").innerHTML = currentFPS;
}

function stopFrameInterval() {
  clearInterval(sfiVar);
}

function stopSecondInterval() {
  clearInterval(ssiVar);
}
  