/*

| File: helpers.js
: Description: Contains general helpers functions for the both game and application.
@ Author: Slavko V.

! Note: Insert into html before app.js 

? Requires: [-none-]

*/

// 1. Pages Section
var pages = [
    {
        name: "login",
        title: "Login Page - OmegaGame",
        url: "pages/login.js"
    },
    {
        name: "lobby",
        title: "Lobby Page - OmegaGame",
        url: "pages/lobby.js"
    },
    {
        name: "options",
        title: "Options Page - OmegaGame",
        url: "pages/options.js"
    },
    {
        name: "game",
        title: "OmegaGame",
        url: "pages/game.js"
    }
];

function openPage(name){
    console.log(name);
}
// !end! 1. Pages Section

// 2. Load Script[s] function
function loadScript(name, url){
    console.log('loadScript()')
};
// !end! 2. Load Script[s] function


// 3. Loading InterScreen Functions
    // 3.1. Show Loading Screen 
    function showLoadInterScreen(){
        console.log('showLoadInterScreen()');
    }
    // !end! 3.1. Show Loading Screen

    // 3.2. Hide Loading Screen 
    function hideLoadInterScreen(){
        console.log('hideLoadInterScreen()');
    }
    // !end! 3.2. Hide Loading Screen
// !end! 3. Loading InterScreen Functions

