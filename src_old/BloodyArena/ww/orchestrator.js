var orchInterval = "";
var tickTime = 5;
var doneTick = 0;
var expTicks = 1000/tickTime;
var passTime = 0;

onmessage = function(e) {
    console.log('Worker_Orchestrator: Message received from main script - Reporting ONLINE');
    const result = e.data[0];
    const workerResult = 'Result: ' + result;
    postMessage(workerResult);
    if (result == "start"){
        passTime = Date.now();
        requestAnimationFrame(orchFunc);
    } else if (result == "stop"){
        orchIntervalStop();
    }
  }

  function orchFunc() {
    doneTick++;
    postMessage( 'updateGame' );
    if(doneTick % 3 == 0){
      postMessage( 'updateScreen' )
    }
    if(doneTick % 6 == 0){
      postMessage( 'updateInscreen' )
    }
    requestAnimationFrame(orchFunc);
  }
  
  function orchIntervalStop() {
    clearInterval(orchInterval);
  }

  function orchFuncOLD() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    postMessage( "OrchTick: "+doneTick+" >> Time: "+t );
    doneTick++;
    if (doneTick == expTicks){
      console.log('TimeTook Orch: '+(Date.now() - passTime)+'; TickNumb: '+doneTick+'; ExpTicks: '+ expTicks);
      doneTick = 0;
      passTime = Date.now();
    }
  }