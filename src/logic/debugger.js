//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: debugger.js                                                      ║
//║ ↔ Location: <: public_root :>/                                                ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 11.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝

console.log('Debugger.js');


var dbg = {
    elem : "", 
    tabs : [
      {
        name : "dbg_opt_tab",
        title: "DBG options",
        tabBtn: "Options[dbg]",
        options: [{
          title: 'Toggle DBG Widget',
          widgetToggle: function(){
            document.body.innerHTML += `<div id="dbg_widget"></div>`;
          }
        }]
      }
    ],
    logList: [], 
    start: function() {
      document.body.innerHTML += `<div id='dbgObj_elem'>
                                     <div class='title_area'>
                                        <p class='title'>DBG_contaner_elem</p>
                                        <button  aria-label="Toggle Debug" class='dbgTgl' onclick="tglDbgVis()"></button>
                                     </div>
                                     <div id='dbg_tabs'>
                                     </div>
                                     <div id='dbg_tabs_nav'>
                                     </div>
                                  <\div>`;
      this.populateTabs();
     }, 
    log: function(msg) {
      this.logList.push(msg);
      console.log(msg);
     }, 
    logLS: function () {
      this.log('[ SoF :|: dbg.logLS() :|: '+Date.now()+' ]')
      console.log(JSON.stringify(this.logList));
      this.log('[ EoF :|: dbg.logLS() :|: '+Date.now()+' ]')
    },
    addDbgTab: function (tabObj) {
      this.logList.push(tabObj);
    },
    populateTabs: function(){
      var tabsHelper = document.getElementById('dbg_tabs');
      var tabsNavHelper = document.getElementById('dbg_tabs_nav');
      for (var i=0; i < this.tabs.length; i++){
        tabsHelper.innerHTML += `<div class="dbg_tab" id="tab_`+this.tabs[i].name+`">
                                  <p class='title'>`+this.tabs[i].title+`</p>
                                 </div>`;
        tabsNavHelper.innerHTML += `<button class="dbg_tab_nav" id="`+this.tabs[i].name+`">
                                  <p class='title'>`+this.tabs[i].title+`</p>
                                 </button>`;
        for (var x=0; x< this.tabs[i].options.length; x++){
          tabsHelper.innerHtml += `<div class="dbg_tab" id="tab_`+this.tabs[i].name+`">
                                  <p class='title'>`+this.tabs[i].title+`</p>
                                 </div>`;
        }
      }
    }
 }



 function tglDbgVis(){
  document.getElementById('dbgObj_elem').classList.toggle('active')
 }