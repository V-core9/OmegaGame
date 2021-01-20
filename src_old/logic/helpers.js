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
//  8. setCookie() -> Makes new cookie
//  9. getCookie() -> Gets the value of cookie
//  10. checkCookie() -> checks if user cookie is set
//  11. humanTime() -> Readable time format from default [either formats value or returns current formated]
//
//====================================================



//  1. detectCurrentDevice()
function detectCurrentDevice(){
    console.log('detectCurrentDevice()');
}
//!  1. detectCurrentDevice()  !!

//  2. findCurrentPage()
function findCurrentPage(){
    if (mainApp.status === 'init') {
        console.log('mainApp.status === init => openLoginPage()')
    }
    console.log('findCurrentPage()');
    console.log(window.location.href);
}
//! 2. findCurrentPage()  !!

//  3. openCurrentPage()
function openCurrentPage(){
    console.log("openCurrentPage() -> "+mainApp.page);
}
//! 3. openCurrentPage()  !!





//  8. setCookie() 
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//!  8. setCookie() !!
  
//  9. getCookie() 
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
//!  9. getCookie() !!

//  10. removeCookie()
function removeCookie(cname){
    document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
//! 10.removeCookie() !!
  
//  11. checkCookie() 
function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
}
//!  11. checkCookie() !!