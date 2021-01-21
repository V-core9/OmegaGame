if (!window.Worker) {
    console.log('Supporting Workers: NOPE, please upgrade :(');
    exitApp();
} else {
    console.log('Supporting Workers: Nice :D')
    startApp();
};

function startApp(){
    app.start();
}

function exitApp(){
    window.close();
}