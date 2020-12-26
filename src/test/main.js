var allDone = 0;


let workerList = [];

for (let i = 0; i < window.navigator.hardwareConcurrency; i++) {
  let newWorker = {
    worker: new Worker('drawer.js'),
    inUse: false
  };
  workerList.push(newWorker);
}

