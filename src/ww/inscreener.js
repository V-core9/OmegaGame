
console.log('Worker_Inscreener: Message received from main script - Reporting ONLINE');

onmessage = function(e) {
    var workerResult = [];

    var result = e.data;
    //console.log(e.data);
    var x1 = (result.gamCam.x - 200);
    var x2 = (result.gamCam.x + result.gamCam.w + 200);

    for (var i=0; i < result.imObj.length; i++){
        if(((result.imObj[i].x > x1) && (result.imObj[i].x < x2) && ((result.imObj[i].y > (result.gamCam.w - 200)) && (result.imObj[i].y < (result.gamCam.y + result.gamCam.h + 200))))){
            workerResult.push(result.imObj[i]);
        }
    };

    for (var i=0; i<result.bllObj.length; i++){
        if(((result.bllObj[i].x > x1) && (result.bllObj[i].x < x2) && ((result.bllObj[i].y > (result.gamCam.w - 200)) && (result.bllObj[i].y < (result.gamCam.y + result.gamCam.h + 200))))){
            workerResult.push(result.bllObj[i]);
        }
    };

    for (var i=0; i<result.plObj.length; i++){
        if(((result.plObj[i].x > x1) && (result.plObj[i].x < x2) && ((result.plObj[i].y > (result.gamCam.w - 200)) && (result.plObj[i].y < (result.gamCam.y + result.gamCam.h + 200))))){
            workerResult.push(result.plObj[i]);
        }
    };

    //console.log(workerResult);
    postMessage(workerResult);
}