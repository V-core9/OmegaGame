var dbgIntVal = 250;
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
                                    +`</div>`
                                    +`<div class="bigInfoContainer">`
                                    +`</div>`
                                    +`<button onclick="document.getElementById('appDbgEl').classList.toggle('shortInfo')" class="dbgToggler">/\\ Show</button>`
                                    +`</div>`;

        dbgInterval = setInterval(printStatsDBG, dbgIntVal);
    },
    
}


function printStatsDBG(){
    console.log('PressedButtons: [ '+inptHndl.curPress+']');
    document.getElementById('keysPressedPrint').innerHTML = inptHndl.curPress;
}