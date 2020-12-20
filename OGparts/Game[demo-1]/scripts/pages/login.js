

(function(){
    simplePromptLogin();
})();

function simplePromptLogin(){
    var userNameOld = ((typeof(appObj.user.name) == "undefined") ? "Harry Potter" : appObj.user.name);
    var person = prompt("Please enter your name", userNameOld);
    if (person != null) {
        appObj.user.name = person;
    } 
    alert(appObj.user.name);
}
