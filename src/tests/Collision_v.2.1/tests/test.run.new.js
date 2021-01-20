console.log('Inside tests->test.run.js.');

//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: test.run.js                                                      ║
//║ ↔ Location: <: public_root :>/tests                                           ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 20.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝
console.log('Inside Logic->test.run.js.');



var baseObjects = 8;
//GENERATING MAP OBJS
for (var i = 1; i <= baseObjects; i++) {
    var min = Math.min(canvas.height, canvas.width);
    var vx = Math.floor((0.5 - Math.random()) * min/80);
    var vy = Math.floor((0.5 - Math.random()) * min/80);        
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    var angle = Math.floor(Math.random() * 360);
  
    var wght = Math.floor(Math.random() * 10001);
    var fr = 0.9 + Math.floor(Math.random() * 11)/10;
    
    var pathArr = ["-10,-10", "-15,0", "-10,10", "10,10", "15,0", "10,-10"];
    
    var objArgs = { posX : parseInt(x), posY : parseInt(y) , velocityX : vx, velocityY : vy, friction : fr , weight : wght, colisionPath: pathArr, angle: parseInt(angle)}
    console.log(objArgs);
    var newObj = new baseObj( objArgs );
    console.log(newObj);      
    mapObjs.push(newObj);    
    rotateObj(mapObjs[i-1], angle);
}

for (var i = baseObjects+1; i <= baseObjects*2; i++) {
    var min = Math.min(canvas.height, canvas.width);
    var vx = Math.floor((0.5 - Math.random()) * min/80);
    var vy = Math.floor((0.5 - Math.random()) * min/80);        
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    var angle = Math.floor(Math.random() * 360);
  
    var wght = Math.floor(Math.random() * 10001);
    var fr = 0.9 + Math.floor(Math.random() * 11)/10;
    
    var pathArr = ["-10,-10", "10,-10", "10,10", "-10,10"];
    var objArgs = { posX : parseInt(x), posY : parseInt(y) , velocityX : vx, velocityY : vy, friction : fr , weight : wght, colisionPath: pathArr, angle: parseInt(angle)}
    
    console.log(objArgs);
    var newObj = new baseObj( objArgs );
    console.log(newObj);      
    
    mapObjs.push(newObj);    

    
    rotateObj(mapObjs[i-1], angle);
}

for (var i = baseObjects*2+1; i <= baseObjects*3; i++) {
    var min = Math.min(canvas.height, canvas.width);
    var vx = Math.floor((0.5 - Math.random()) * min/80);
    var vy = Math.floor((0.5 - Math.random()) * min/80);        
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    var angle = Math.floor(Math.random() * 360);
  
    var wght = Math.floor(Math.random() * 10001);
    var fr = 0.9 + Math.floor(Math.random() * 11)/10;
    
    var pathArr = ["-20,-50", "-30,0", "-20,50", "20,50", "30,0", "20,-50"];
    
    var objArgs = { posX : parseInt(x), posY : parseInt(y) , velocityX : vx, velocityY : vy, friction : fr , weight : wght, colisionPath: pathArr, angle: parseInt(angle)}
    console.log(objArgs);
    var newObj = new baseObj( objArgs );
    console.log(newObj);      
    mapObjs.push(newObj);    
    rotateObj(mapObjs[i-1], angle);
}

var bulletNumber = 50;
for (var i = 1; i <= bulletNumber; i++) {
    var min = Math.min(canvas.height, canvas.width);
    var vx = Math.floor((0.5 - Math.random()) * min/80);
    var vy = Math.floor((0.5 - Math.random()) * min/80);        
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    var angle = Math.floor(Math.random() * 360);
  
    var wght = Math.floor(Math.random() * 10001);
    var fr = 0.9 + Math.floor(Math.random() * 11)/10;
    
    var pathArr = ["0,-5", "-3,0", "-3,5", "3,5", "3,0"];
    
    var objArgs = { posX : parseInt(x), posY : parseInt(y) , velocityX : vx, velocityY : vy, friction : fr , weight : wght, colisionPath: pathArr, angle: parseInt(angle)}
    console.log(objArgs);
    var newObj = new bulletObj( objArgs , 25, true);
    console.log(newObj);      
    mapObjs.push(newObj);    
    rotateObj(mapObjs[mapObjs.length-1], angle);
}

console.log(mapObjs);