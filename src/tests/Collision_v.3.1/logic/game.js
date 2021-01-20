const dbgGame = true;
var playerVar;

function startGame() {
    playerVar = new playerComponent(30, 30, "red", 225, 225, 0.9);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerWidth*9/16;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            e.preventDefault();
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


function updateGameArea() {
    myGameArea.clear();
    playerVar.angleChanged = false;
    playerVar.moveAngle = 0;
    if (myGameArea.keys && ( myGameArea.keys[37] || myGameArea.keys[65] )) {if (playerVar.moveAngle > playerVar.moveAngleMax){ playerVar.moveAngle = playerVar.moveAngleMax } else { playerVar.moveAngle+= -1; playerVar.angleChanged = true;} }
    if (myGameArea.keys && ( myGameArea.keys[39] || myGameArea.keys[68] )) {if (playerVar.moveAngle > playerVar.moveAngleMax){ playerVar.moveAngle = playerVar.moveAngleMax } else { playerVar.moveAngle+= 1; playerVar.angleChanged = true; } }
    if (myGameArea.keys && (myGameArea.keys[38] || myGameArea.keys[87])) {if (playerVar.speed > playerVar.speedMax){ playerVar.speed = playerVar.speedMax } else { playerVar.speed+= 1; } }
    if (myGameArea.keys && ( myGameArea.keys[40] || myGameArea.keys[83] )) {if (playerVar.speed < playerVar.speedMaxB){ playerVar.speed = playerVar.speedMaxB } else { playerVar.speed+= -1; } }
    playerVar.newPos();
    playerVar.draw();
}