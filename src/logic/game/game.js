//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: main.js                                                          ║
//║ ↔ Location: <: public_root :>/ logic / game / main.js                         ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 22.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝

//console.log('[ LoadingFile >> logic/game/game.js ]');

var app = {
  data: {},
  elem: "",
  drawer: "",
  start: function () {
    if (appConst.mode !== "pro") {
      dbg.log("Variabe Method game.start()");
    }
    //document.body.innerHTML += '<div id="rootApp" ><\div>' ;
    this.elem = document.getElementById("gameCam").transferControlToOffscreen();
    this.elem.width = window.innerWidth;
    this.elem.height = window.innerHeight;
    //var cWorker = document.getElementById("rootApp").transferControlToOffscreen();
    this.drawer = new Worker("webWorkers/drawer.js");
    this.drawer.postMessage({ canvas: this.elem }, [this.elem]);
    this.deviceScan();
  },
  deviceScan: function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      if (appConst.mode !== "pro") {
        dbg.log("Mobile detected");
      }
      this.data.mobile = true;
    } else {
      this.data.mobile = false;
      if (appConst.mode !== "pro") {
        dbg.log("game.DeviceScan() -> not mobile device");
      }
    }
  },
}


// WILL START APPLICATION HERE -> ->

window.onload = function () {
  if (appConst.mode !== "pro") {
    dbg.start();
  }
  game.start();
}



//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//▌   ! END OF FILE !            ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
//▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄       ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
//▌ ♠ File Name: game.js  ▐       ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀