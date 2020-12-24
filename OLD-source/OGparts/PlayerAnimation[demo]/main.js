///// Game Models

var humanModel = {
    width : 1.5,
    height: 1,
    stand : `<g fill="darkgreen" stroke="#444444" stroke-width="1">`
              +`<polygon class="leftLeg" points="30,20 25,17.5 17.5,20 20,35 30,35" />`
              +`<polygon class="rightLeg" points="45,20 50,17.5 57.5,20 55,35 45,35" />`
              +`<polygon class="torso" points="15,30 20,20 55,20 60,30 55,42.5 20,42.5" fill="rgba(0,0,0,.5)" />`
          +`</g>`,
    walk : `<g fill="darkgreen" stroke="#444444" stroke-width="1.25">`
            +`<polygon class="leftLeg" >`
              +`<animate attributeName="points" values="30,20 25,17.5 17.5,20 20,35 30,35;30,15 25,10 15,15 20,30 30,30;30,35 25,30 15,35 20,50 30,50;30,20 25,17.5 17.5,20 20,35 30,35" dur="2.5s" repeatCount="indefinite" />`
            +`</polygon>`
            +`<polygon class="rightLeg" >`
              +`<animate attributeName="points" values="45,20 50,17.5 57.5,20 55,35 45,35;45,35 50,30 60,35 55,50 45,50;45,15 50,10 60,15 55,30 45,30;45,20 50,17.5 57.5,20 55,35 45,35" dur="2.5s" repeatCount="indefinite" />`
            +`</polygon>`
            +`<polygon class="torso" points="15,30 20,20 55,20 60,30 55,42.5 20,42.5" fill="rgba(0,0,0,.5)">`
              +`<animate attributeName="points" values="15,30 20,20 55,20 60,30 55,42.5 20,42.5;15,30 20,20 55,22.5 60,35 55,45 20,42.5;15,32.5 20,22.5 55,20 60,30 55,42.5 20,45;15,30 20,20 55,20 60,30 55,42.5 20,42.5" dur="2.5s" repeatCount="indefinite" />`
            +`</polygon>`
          +`</g>`,
    run : `<g fill="darkgreen" stroke="#444444" stroke-width="1.25">`
            +`<polygon class="leftLeg" >`
              +`<animate attributeName="points" values="30,20 25,17.5 17.5,20 20,35 30,35;30,12.5 25,7.5 15,12.5 20,27.5 30,27.5;30,20 25,17.5 17.5,20 20,35 30,35;30,37.5 25,32.5 15,37.5 20,52.5 30,52.5;30,20 25,17.5 17.5,20 20,35 30,35" dur=".75s" repeatCount="indefinite" />`
            +`</polygon>`
            +`<polygon class="rightLeg" >`
              +`<animate attributeName="points" values="45,20 50,17.5 57.5,20 55,35 45,35;45,37.5 50,32.5 60,37.5 55,52.5 45,52.5;45,20 50,17.5 57.5,20 55,35 45,35;45,12.5 50,7.5 60,12.5 55,27.5 45,27.5;45,20 50,17.5 57.5,20 55,35 45,35" dur=".75s" repeatCount="indefinite" />`
            +`</polygon>`
            +`<polygon class="torso" points="15,30 20,20 55,20 60,30 55,42.5 20,42.5" fill="rgba(0,0,0,.5)">`
              +`<animate attributeName="points" values="15,30 20,20 55,20 60,30 55,42.5 20,42.5;15,30 20,20 55,25 60,35 55,47.5 20,42.5;15,35 20,25 55,20 60,30 55,42.5 20,47.5;15,30 20,20 55,20 60,30 55,42.5 20,42.5" dur=".75s" repeatCount="indefinite" />`
            +`</polygon>`
          +`</g>`,
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
    drawScreenArea('');
    drawSvgPlayer();
  })();
  //.........................
  
  
  
  /// CORE FUNCTIONS ///
  
  function createSVGelem(elem_id, parent_id = "body"){
    if (parent_id == "body") {
      document.body.innerHTML += '<svg viewBox=" 200 200" id="'+elem_id+'"></svg>';
    } else {
      document.getElementById(parent_id).innerHTML += '<svg id="'+elem_id+'"></svg>';
    }
  }
  
  
  
  
  
  /// !End CORE FUNCTIONS End! ///
  
  
  