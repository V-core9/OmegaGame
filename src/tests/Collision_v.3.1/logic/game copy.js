var playerVar;

function startGame() {
    playerVar = new playerComponent(30, 30, "red", 225, 225, 0.99);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
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

function playerComponent(width, height, color, x, y, f) {

    this.width = width;
    this.height = height;
    this.speed = 0;
    this.angle = 0;
    this.moveAngle = 0;
    this.x = x;
    this.y = y;
    this.f = f;
    this.speedMax = 5;
    this.speedMaxB = -3;
    this.draw = function() {
        ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        ctx.restore();    
    }
    this.drawDbg = function(){
        
    }
    this.newPos = function() {
        this.speed = this.speed * this.f;
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
    }
}

function updateGameArea() {
    myGameArea.clear();
    playerVar.moveAngle = 0;
    if (myGameArea.keys && myGameArea.keys[37]) {playerVar.moveAngle = -1; }
    if (myGameArea.keys && myGameArea.keys[39]) {playerVar.moveAngle = 1; }
    if (myGameArea.keys && myGameArea.keys[38]) {if (playerVar.speed > playerVar.speedMax){ playerVar.speed = playerVar.speedMax } else { playerVar.speed+= 1; } }
    if (myGameArea.keys && myGameArea.keys[40]) {if (playerVar.speed < playerVar.speedMaxB){ playerVar.speed = playerVar.speedMaxB } else { playerVar.speed+= -1; } }
    playerVar.newPos();
    playerVar.draw();
}