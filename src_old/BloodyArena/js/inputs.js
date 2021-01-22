var inptHndl = {
    curPress : [],
    init: function(){
        window.onkeydown = window.onkeyup = window.onkeypress = keyHandle;
        window.onblur = lostInterest;
        window.onmousemove = mouseMoveHandler;
    }
}

let lastTime = Date.now();

function keyHandle(e) {
    e.preventDefault();

    let text = e.type +
        ' key=' + e.key +
        ' code=' + e.code +
        (e.shiftKey ? ' shiftKey' : '') +
        (e.ctrlKey ? ' ctrlKey' : '') +
        (e.altKey ? ' altKey' : '') +
        (e.metaKey ? ' metaKey' : '') +
        (e.repeat ? ' (repeat)' : '') +
        "\n";

    if (Date.now() - lastTime > 150) {
       console.log( new Array(81).join('-') );
    }

    lastTime = Date.now();
    console.log(  text );

    if (e.type == "keydown"){
        if (inptHndl.curPress.indexOf(e.key) == -1){
            inptHndl.curPress.push(e.key);
        }
    }

    if (e.type == "keyup"){
        if (inptHndl.curPress.length > 1){
            inptHndl.curPress = inptHndl.curPress.splice( inptHndl.curPress.indexOf(e.key), 1);
        } else {
            inptHndl.curPress = [];
        }
    }


}

function lostInterest(){
    console.log('lostInterest() [ user left this window ]')
    inptHndl.curPress = [];
}

function mouseMoveHandler(e){
    gamMos.x = e.clientX;
    gamMos.y = e.clientY;
}