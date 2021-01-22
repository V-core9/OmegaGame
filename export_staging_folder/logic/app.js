var app = {
  data: {},
  elem: "",
  drawer: "",
  start: function () {
    if (appConst.mode !== "pro") {
      dbg.log("Variabe Method app.start()");
    }

    this.elem = document.getElementById("mainApp").transferControlToOffscreen();
    this.drawer = new Worker("webWorkers/drawer.js");
    this.drawer.postMessage({
      canvas: this.elem
    }, [this.elem]);
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
        dbg.log("not mobile device");
      }
    }
  }
};

window.onload = function () {
  if (appConst.mode !== "pro") {
    dbg.start();
  }

  app.start();
};
//# sourceMappingURL=app.js.map