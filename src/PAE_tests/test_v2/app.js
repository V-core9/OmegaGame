const dbgMode = 3; // 0 -> false, 1 -> true, 2 -> 'full' and  3 -> 'extended' ;
var mouseX = mouseY = 0;
var circles = [];

var c = new Circle(200, 200, 10, 'red');
circles.push(c);

// Main Application Object variable
var mainApp = {
  camEl : "",
  data:  {
    title: 'PlayerAnimationTest',
    date: '2021.01.11_04:11',
  },
  methods: {
    start: function(){
      //console.log('[> SoFunc :=>> mainApp.methods.start() <]');
      document.body.innerHTML += `<canvas id='cam1' class="gameCam" width="800" height="800"></canvas>`;
      mainApp.camEl = document.getElementById('cam1');
      mainApp.camEl.style.border = '1px solid black';
      appInp.start();
    },
    drawAll: function(){
      this.drawCursor();
      this.drawDbgInfo();
    },
    drawCursor: function(){
      ctx.fillStyle = 'rgba(0,255,255,.95)';
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 3, 0, 2 * Math.PI);
      ctx.fill();
      
      metal_hulk.anglDelta = Math.atan2(mouseY - (metal_hulk.posY + metal_hulk.modH/2), mouseX - (metal_hulk.posX + metal_hulk.modW/2)) * 180 / Math.PI;
    },
    dbgSmall: function(){
      ctx.restore();
      ctx.lineWidth = 1;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.fillRect( 0 , mainApp.camEl.height-100, mainApp.camEl.width, 100 );
      ctx.fillStyle = 'darkgreen';
      ctx.font = "15px monospace";
      ctx.fillText('Main App -> Data -> Title [: '+mainApp.data.title+' :]', 10 , mainApp.camEl.height-80);
    },
    drawDbgInfo: function(){
      ctx.restore();
      ctx.lineWidth = 1;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect( 0 , mainApp.camEl.height-200, mainApp.camEl.width, 200 );
      ctx.fillStyle = 'lime';
      ctx.font = "15px monospace";
      ctx.fillText('Main App -> Data -> Title [: '+mainApp.data.title+' :]', 10 , mainApp.camEl.height-180);
      ctx.fillText('Main App -> Data -> DoC [: '+mainApp.data.date+' :]', 10 , mainApp.camEl.height-160);
      ctx.fillText('Main App -> Data -> Title [: '+mainApp.data.title+' :]', 10 , mainApp.camEl.height-180);
      ctx.fillText('Main App Model...', 10 , mainApp.camEl.height-140);
      ctx.fillText( JSON.stringify(mainApp), 10 , mainApp.camEl.height-120);
      ctx.fillText( 'NOTE: Look at the console for the methods and camEl object data print.', 10 , mainApp.camEl.height-100);
      //console.log( 'MainAPP camEl: '+mainApp.camEl+' || METHODS: '+mainApp.methods);
    }
  }
}

function drawAll(){
  ctx.clearRect(0,0,mainApp.camEl.width, mainApp.camEl.height);
  for(var i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].draw(ctx);
    //console.log(circles.length)
  }
  mainApp.methods.drawAll();
  metal_hulk.drawAll();  
  requestAnimationFrame(drawAll);
}

mainApp.methods.start();

var ctx = mainApp.camEl.getContext("2d");
var gameRender = requestAnimationFrame(drawAll);
