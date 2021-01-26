//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: app.js                                                           ║
//║ ↔ Location: <: public_root :>/ app.js                                         ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 23.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝

console.log('App STARTING file..>.>.>.>')

var animConfig = {
    randomColors: false,
}

var leftSvg, centerSvg, rightSvg;

(function () {
    window.addEventListener("resize", startAnimationFunc);

    startAnimationFunc();
})();

function startAnimationFunc() {
    leftSvg = document.getElementById('leftSvg');
    centerSvg = document.getElementById('centerSvg');
    rightSvg = document.getElementById('rightSvg');
    redrawThreeElems();
}


// Draws 3 "banners"
function redrawThreeElems() {

    getSizes();

    leftSvg.setAttribute("width", animConfig.screenSingleWidthHelper);
    centerSvg.setAttribute("width", animConfig.screenSingleWidthHelper);
    rightSvg.setAttribute("width", animConfig.screenSingleWidthHelper);
    leftSvg.setAttribute("height", animConfig.animHeight);
    centerSvg.setAttribute("height", animConfig.animHeight);
    rightSvg.setAttribute("height", animConfig.animHeight);

    var leftSvgPoints = (animConfig.screenSingleWidthHelper * 0.01) + "," + (animConfig.screenSingleWidthHelper * 0.005);
    leftSvgPoints += " " + (animConfig.screenSingleWidthHelper * 0.99) + "," + (animConfig.animHeight * 0.15);
    leftSvgPoints += " " + (animConfig.screenSingleWidthHelper * 0.99) + "," + (animConfig.animHeight * 0.89);
    leftSvgPoints += " " + (animConfig.screenSingleWidthHelper * 0.01) + "," + (animConfig.animHeight * 0.74);

    leftSvg.querySelector('polygon').setAttribute("points", leftSvgPoints);

    var centerSvgPoints = (animConfig.screenSingleWidthHelper * 0.01) + "," + (animConfig.screenSingleWidthHelper * 0.005);
    centerSvgPoints += " " + (animConfig.screenSingleWidthHelper / 2) + "," + (animConfig.animHeight * 0.075);
    centerSvgPoints += " " + (animConfig.screenSingleWidthHelper * 0.99) + "," + (animConfig.screenSingleWidthHelper * 0.005);
    centerSvgPoints += " " + (animConfig.screenSingleWidthHelper * 0.99) + "," + (animConfig.animHeight * 0.9);
    centerSvgPoints += " " + (animConfig.screenSingleWidthHelper / 2) + "," + (animConfig.animHeight * 0.99);
    centerSvgPoints += " " + (animConfig.screenSingleWidthHelper * 0.01) + "," + (animConfig.animHeight * 0.9);

    centerSvg.querySelector('polygon').setAttribute("points", centerSvgPoints);

    var rightSvgPoints = (animConfig.screenSingleWidthHelper * 0.01) + "," + (animConfig.animHeight * 0.15);
    rightSvgPoints += " " + (animConfig.screenSingleWidthHelper * 0.99) + "," + (animConfig.screenSingleWidthHelper * 0.005);
    rightSvgPoints += " " + (animConfig.screenSingleWidthHelper * 0.99) + "," + (animConfig.animHeight * 0.74);
    rightSvgPoints += " " + (animConfig.screenSingleWidthHelper * 0.01) + "," + (animConfig.animHeight * 0.89);

    rightSvg.querySelector('polygon').setAttribute("points", rightSvgPoints);

}
// End (3 elems) banners

// Gets sizes and puts into animConfig
function getSizes() {
    animConfig.screenSingleWidthHelper = window.innerWidth / 3;
    animConfig.animHeight = window.innerHeight;
}
// End getting sizes

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("demo").innerHTML = this.responseText;
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "package.json", true);
    xhttp.send();
}

loadDoc();


//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//▌   ! END OF FILE !            ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
//▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
//▌ ♠ File Name: app.js   ▐      ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀