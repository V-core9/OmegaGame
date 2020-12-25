//  Main Application File
//
//  File Name: app.js
//  Description: Main application file that will handle everything around the actuall game.
//  Requires: helpers.js, app.config.js
//  Author: Slavko V.
//  Url: #
//
//----------------------------------------------------
//
//  TABLE OF CONTENT:
//  1. detectCurrentDevice() -> Detects current device and fills into mainApp.device
//  2. findCurrentPage() -> Detects current page and sets in mainApp
//  3. openCurrentPage() -> Handles opening of the current page 
//  4. showInterLoadScreen() -> Shows InterLoad screen when going from page to page
//  5. hideInterLoadScreen() -> Hides InterLoad screen once load of the page is done
//  6. loadJSfile() -> Helper that handles loading of JS files 
//  7. loadCSSfile() -> Helper that handles loading of CSS files
//  8. createCookie() -> Makes new cookie
//  9. getCookie() -> Gets the value of cookie
//  10. humanTime() -> Readable time format from default [either formats value or returns current formated]
//
//====================================================



//  1. detectCurrentDevice()
function detectCurrentDevice(){
    console.log('detectCurrentDevice()');
}
//!  1. detectCurrentDevice()  !!

//  2. findCurrentPage()
function findCurrentPage(){
    console.log('findCurrentPage()');
    console.log(window.location.href);
}
//! 2. findCurrentPage()  !!

//  3. openCurrentPage()
function openCurrentPage(){
    console.log("openCurrentPage() -> "+mainApp.page);
}
//! 3. openCurrentPage()  !!