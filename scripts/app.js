/*

| File: helpers.js
: Description: Contains general helpers functions for the both game and application.
@ Author: Slavko V.

! Note: Insert into html before app.js 

? Requires: helpers.js

|-Table of content:
|--   1. Application Variables -> Section Containing variables in different uses.
|-->>    1. Application Object  -> Contains status of the current app and some data about it.
|-->>    2. Available Modes     -> List of modes supported by the app.
|
|--   2. Start Application -> Self-triggering function soon as load is complete.
|--      Desc.: First runs getAppMode() then startsApplication()
|
|--   3. Get Application Mode -> Sets mode in appObj.mode 
|        Desc.: Checkes current url for ["mode=dev"] after splitting on [?] character

*/
// 1. Application Variables

    // 1.1. Application Object
    var appObj = {
        status : 'init',
        user : {
            name: 'MikiG',
            prefChar: 'doom'
        }
    };
    // !end! 1.1. Application Object

    // 1.2. Available Modes
    var availableModes = [
        {name:'pro',color:'#444444'},
        {name:'dev',color:'#555555'},
        {name:'test',color:'green'},
        {name:'cheater',color:'black'}];
    // !end! 1.2. Available Modes

// !end! 1.0. Application Object

// 2. Start Application
(function(){
    //getting the appmode set
    getAppMode();
    
    //starting the actual app
    startApplication();
})();
// !end! 2. Start Application

// 3. Get Application Mode
function getAppMode(){
    var i,avalModeHelper = [];
    for (i = 0; i < availableModes.length; i++) {
        if (window.location.href.split('?')[1].indexOf('mode='+availableModes[i].name) > -1) {
            appObj.mode = availableModes[i].name;
            document.getElementById('app').style.background = availableModes[i].color;
            avalModeHelper += availableModes[i].name;
        };
    };
    if (!(avalModeHelper.indexOf(appObj.mode) > -1)){
        appObj.mode = availableModes[0].name;
        document.getElementById('app').style.background = "red";
    };

    alert(appObj.mode);
};
// !end! 3. Get Application Mode