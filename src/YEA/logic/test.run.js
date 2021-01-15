console.log('Inside Logic->test.run.js.');





var enemyNum = 35;
var bulletNum = 200;
var healNum = 100;
//GENERATING MAP OBJS
for (var i = 1; i <= bulletNum; i++) {
    var min = Math.min(canvas.height, canvas.width);
    var vx = Math.floor((0.5 - Math.random()) * min/80);
    var vy = Math.floor((0.5 - Math.random()) * min/80);
    var ok = false;
    while (!ok) {
        var minr = min/320
        var maxr = min/160
        //var r = Math.floor(Math.random() * (maxr - minr)) + minr;
        var r = 2;
        var x = Math.floor(Math.random() * (canvas.width-2*r)) + r;
        var y = Math.floor(Math.random() * (canvas.height-2*r)) + r;
  
        var type = 'bullet';
        var color = 'white';
      
        var newObj = new mapObj(type, x, y, r, vx, vy, color, 100);
        
        ok = true;
        for (var j = 0; j < mapObjs.length; j++) {
            if (mapObjs[j].dis(newObj) < newObj.r + mapObjs[j].r) ok = false;
        }
    }
    mapObjs.push(newObj);
  
    
}

for (var i = 1; i <= enemyNum; i++) {
    var min = Math.min(canvas.height, canvas.width);
    var vx = Math.floor((0.5 - Math.random()) * min/200);
    var vy = Math.floor((0.5 - Math.random()) * min/200);
    var ok = false;
    while (!ok) {
        var minr = min/80
        var maxr = min/40
        var r = Math.floor(Math.random() * (maxr - minr)) + minr;
        var x = Math.floor(Math.random() * (canvas.width-2*r)) + r;
        var y = Math.floor(Math.random() * (canvas.height-2*r)) + r;
      
        var type = 'enemy';
        var color = 'red';
      
        var newObj = new mapObj(type, x, y, r, vx, vy, color, 100);
        
        ok = true;
        for (var j = 0; j < mapObjs.length; j++) {
            if (mapObjs[j].dis(newObj) < newObj.r + mapObjs[j].r) ok = false;
        }
    }
    mapObjs.push(newObj);    
}

for (var i = 1; i <= healNum; i++) {
    var min = Math.min(canvas.height, canvas.width);
    var vx = Math.floor((0.5 - Math.random()) * min/200);
    var vy = Math.floor((0.5 - Math.random()) * min/200);
    var ok = false;
    while (!ok) {
        var minr = min/320
        var maxr = min/160
        var r = Math.floor(Math.random() * (maxr - minr)) + minr;
        var x = Math.floor(Math.random() * (canvas.width-2*r)) + r;
        var y = Math.floor(Math.random() * (canvas.height-2*r)) + r;
      
        var type = 'heal';
        var color = 'white';
      
        var newObj = new mapObj(type, x, y, r, vx, vy, color, 100);
        
        ok = true;
        for (var j = 0; j < mapObjs.length; j++) {
            if (mapObjs[j].dis(newObj) < newObj.r + mapObjs[j].r) ok = false;
        }
    }
    mapObjs.push(newObj);
  
    
}


var newObj = new mapObj('player',50, 25, 15, 4, 6, 'green', 100);
mapObjs.push(newObj);