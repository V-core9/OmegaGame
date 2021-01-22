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