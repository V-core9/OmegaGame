//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: data.js                                                          ║
//║ ↔ Location: <: public_root :>/ logic / game / data.js                         ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 22.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝

//console.log('[ LoadingFile >> logic/game/data.js ]');


// Application Constant info...
const appConst = {
    title: "Tenk Arena [game demo] - OmegaGame",
    description: "Tenk Areana Game Demo - OmegaGame tech demonstration.",
    keywords: "2D game, top down, OmegaGame, demo",
    icon: "assets/app/fav/icon.png",
    appLocation: "http://localhost:5000",
    apiLocation: "http://SOON_WILL_COME:MISSINGPORT/WANTED_API_FOLDER",
    mode: "dev"
}

// Application Data variable....moving to centralized location for some of the stuff.
var appData = {
    status: 'init',
    mobile: false,
    whenStarted: Date.now(),
    curPage: ""

};

var mapObj = [];