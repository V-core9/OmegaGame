///// Game Models

const humanModel = loadModel('human.male.json');
  
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
        return JSON.parse(this.responseText);
      }
    };
    xhttp.open("GET", "models/"+name, true);
    xhttp.send();
  }
  
  
  
  /// !End CORE FUNCTIONS End! ///
  
  
  