const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.use(express.static('./GUI/'))

server.listen(8501, function() {
    const io = require('socket.io')(server);
    const open = require('open');
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    console.log('[ STATUS: OMEGA GUI Server Started | TIME: ' + today.toUTCString() );
    console.log('AppUrl: http://localhost:8501/index.html ....>> OPENING <<');
    //open('http://localhost:8501/index.html', {wait: true});

    
    io.on('connection', function(client) {
        const spawn = require('child_process').spawn;
        const sh = spawn('bash');
        
        client.on('message', function(data) {
            sh.stdin.write(data + "\n");
            io.emit('message', new Buffer("<span class='user_input_cmd'> " + data + "</span>"));
        });
        
        sh.stdout.on('data', function(data) {
            io.emit('message', data);
        });

        sh.stderr.on('data', function(data) {
            io.emit('message', "<span class='command_result error'>" + data + "</span>");
        });

        sh.on('exit', function(code) {
            io.emit('exit', '** Shell exited: ' + code + ' **');
        });
    });
})