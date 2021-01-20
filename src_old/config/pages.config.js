// App PAGES config file
//
//  File Name: [src/config/] pages.config.js
//  Description: 
//      Contains pages data like which css and js to load, what to execute to initiate something if required.
//      Also contains HTML depending on page requirements and speed of development.
//  Requires: [---]
//  Author: Slavko V.
//  Url: #
//
//----------------------------------------------------
//
//  TABLE OF CONTENT:
//  1. appPages - Array of objects containing all pages available to the user....public till login.
//      1. home -> yea name gets it.
//      2. about_game -> yup
//      3. author -> creators corner [Single page in a SPA web app]
//      4. login -> exactly that page
//      5. game_lobby -> players lobby to change game mode and stuff
//====================================================

var appPages = [
    {
        name    : 'home',
        url     : '',
        seoData : {
            title       : 'Home Page',
            description : 'OmegaGame is the best what you can get from someone who has no idea how to program.',
            html        : '<span style="color: red">HOME PAGE YEAAAA</div>'
        }
    },
    {
        name    : 'about_game',
        url     : 'about_game',
        seoData : {
            title       : 'About OmegaGame',
            description : 'OmegaGame is the best what you can get from someone who has no idea how to program.',
            html        : '<span style="color: green">ABOUT OmegaGame PAGE</div>'
        }
    },
    {
        name    : 'author',
        url     : 'author',
        seoData : {
            title       : 'About author',
            description : 'OmegaGame Author is the best!',
            html        : '<span style="color: green">ABOUT OmegaGame AUTHOR</div>'
        }
    }
]