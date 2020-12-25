// File that lists all application files so they can be loaded and used on the go. 
//
//  File Name: [src/config/] files.config.js
//  Description: 
//      Giving you ability to load files using only their names. Contains both with CSS and JS files.
//  Requires: [---]
//  Author: Slavko V.
//  Url: #
//
//----------------------------------------------------
//
//  TABLE OF CONTENT:
//  1. filesList -> main files list object
//>     1. config -> Array of objects...config JSON [ *.js ] files
//>     2. css -> Array of objects...style CSS files
//>     3. js -> Array of objects...JS files
//
//
//
//
//====================================================

var filesList = {
    config  : [
        {
            name    : "app_config",
            location: "config/app.config.js"
        },
        {
            name    : "files_config",
            location: "config/files.config.js"
        },
        {
            name    : "game_config",
            location: "config/app.config.js"
        },
    ],
    css     : [
        {
            name    : "app_style",
            url     : "styles/app.css"
        }
    ],
    js      : [
        {
            name    : "app_logic",
            url     : "logic/app.js"
        },
        {
            name    : "app_helpers",
            url     : "logic/helpers.js"
        }
    ]
}
