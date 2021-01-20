// PlayerControls / Inputs
var appInp = {
    keyPress: [],
    start: function() {
      window.addEventListener('mousedown', function (e)
                  {
                      if (e.which === 1)
                      {
                          var canvasBoundingRectangle = mainApp.camEl.getBoundingClientRect();
                          mouseX = e.clientX - canvasBoundingRectangle.left;
                          mouseY = e.clientY - canvasBoundingRectangle.top;
                          if (dbgMode > 1){
                            //console.log("x:" + mouseX + "    y:" + mouseY);
                            ctx.fillStyle = 'rgba(0,255,255,.95)';
                            ctx.beginPath();
                            ctx.arc(mouseX, mouseY, 3, 0, 2 * Math.PI);
                            ctx.fill();
                          }
                      }
                  });
      window.addEventListener('mousemove', function (e)
                  {
                      var canvasBoundingRectangle = mainApp.camEl.getBoundingClientRect();
                      mouseX = e.clientX - canvasBoundingRectangle.left;
                      mouseY = e.clientY - canvasBoundingRectangle.top;
                      if (dbgMode > 2){
                        if (e.which === 1)
                        {
                            ctx.strokeStyle = 'rgba(0,0,255,.25)';
                        } else {
                            ctx.strokeStyle = 'rgba(0,255,0,.25)';
                        }
                        //console.log("x:" + mouseX + "    y:" + mouseY);
                        ctx.beginPath();
                        ctx.arc(mouseX, mouseY, 1, 0, 2 * Math.PI);
                        ctx.stroke();
                      }
                  });
      window.addEventListener('mouseup', function (e)
                  {
                    if (e.which === 1)
                      {
                          var canvasBoundingRectangle = mainApp.camEl.getBoundingClientRect();
                          mouseX = e.clientX - canvasBoundingRectangle.left;
                          mouseY = e.clientY - canvasBoundingRectangle.top;
  
                        if(dbgMode > 1){
                          //console.log("x:" + mouseX + "    y:" + mouseY);
                          ctx.fillStyle = 'rgba(255,0,255,1)';
                          ctx.beginPath();
                          ctx.arc(mouseX, mouseY, 3, 0, 2 * Math.PI);
                          ctx.fill();                        
                        }
                      }
                  });
      
      window.onkeydown = window.onkeyup = window.onkeypress = handle;
      let lastTime = Date.now();
  
      function handle(e) {
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
  
        lastTime = Date.now();
  
        //console.log(text);
        //console.log(e);
        if (e.type == 'keydown'){
          if ((appInp.keyPress).indexOf(e.key) == -1 ){
            //console.log((appInp.keyPress).indexOf(e.key));
            appInp.keyPress.push(e.key);
            
          } 
        } else {
          var helperArray = appInp.keyPress;
          var index = helperArray.indexOf(e.key);
          if (index > -1) {
            helperArray.splice(index, 1);
          }
          appInp.keyPress = helperArray;
        }
        
        //console.log(appInp.keyPress);
        mainApp.methods.dbgSmall();
        metal_hulk.drawAll();
        
      }
    },
  }