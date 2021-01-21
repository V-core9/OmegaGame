var dbgIntVal = 50;
var dbgInterval;

var appDbg = {
    start : function(){
        if ( document.getElementById('appDbgEl') !== null ) {
            document.getElementById('appDbgEl').remove();
        };

        document.body.innerHTML += `<link rel="stylesheet" href="css/dbgger.css">`;
        document.body.innerHTML += `<div id="appDbgEl" class="shortInfo">`
                                    +`<div class="shortInfoContainer">`
                                    +`<div>KeyPressed [<p id='keysPressedPrint'></p>]</div>`
                                    +`<div>ActioTriggered [<p id='ActioTriggeredPrint'></p>]</div>`
                                    +`<div>CamPos[x:y]: <p id='camPosEl'></p>;</div>`
                                    +`<div>Mouse[x:y]: <p id='mousePosEl'></p>;</div>`
                                    +`</div>`
                                    +`<div class="bigInfoContainer">`
                                    +`</div>`
                                    +`<button onclick="document.getElementById('appDbgEl').classList.toggle('shortInfo')" class="dbgToggler">/\\ Show</button>`
                                    +`</div>`;

        dbgInterval = setInterval(printStatsDBG, dbgIntVal);
    },
    
}


function printStatsDBG(){
    //console.log('PressedButtons: [ '+inptHndl.curPress+']');
    document.getElementById('keysPressedPrint').innerHTML = inptHndl.curPress;
    document.getElementById('camPosEl').innerHTML = gamCam.x+":"+gamCam.y;
    document.getElementById('mousePosEl').innerHTML = gamMos.x+":"+gamMos.y;
}