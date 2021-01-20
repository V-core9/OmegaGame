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





var baseObjects = 5;
//GENERATING MAP OBJS
for (var i = 1; i <= baseObjects; i++) {
    var min = Math.min(canvas.height, canvas.width);
    var vx = Math.floor((0.5 - Math.random()) * min/80);
    var vy = Math.floor((0.5 - Math.random()) * min/80);        
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
  
    var wght = Math.floor(Math.random() * 10001);
    var fr = 0.9 + Math.floor(Math.random() * 11)/10;
    
    var pathArr = ["10,10", "5,20", "10,30", "30,30", "35,20", "30,10"];
    
    var objArgs = { posX : parseInt(x), posY : parseInt(y) , velocityX : vx, velocityY : vy, friction : fr , weight : wght, colisionPath: pathArr}
    console.log(objArgs);
    var newObj = new baseObj( objArgs );
    console.log(newObj);      
    mapObjs.push(newObj);    
}

for (var i = baseObjects; i <= baseObjects*2; i++) {
    var min = Math.min(canvas.height, canvas.width);
    var vx = Math.floor((0.5 - Math.random()) * min/80);
    var vy = Math.floor((0.5 - Math.random()) * min/80);        
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    var angle = Math.floor(Math.random() * 360);
  
    var wght = Math.floor(Math.random() * 10001);
    var fr = 0.9 + Math.floor(Math.random() * 11)/10;
    
    var pathArr = ["5,5", "5,40", "10,45", "30,45", "35,40", "35,5", "30,5", "30,15", "10,15", "10,5"];
    var objArgs = { posX : parseInt(x), posY : parseInt(y) , velocityX : vx, velocityY : vy, friction : fr , weight : wght, colisionPath: pathArr, angle: parseInt(0)}
    
    console.log(objArgs);
    var newObj = new baseObj( objArgs );
    console.log(newObj);      
    
    mapObjs.push(newObj);    

    
    rotateObj(mapObjs[i-1], angle);
}
console.log(mapObjs);