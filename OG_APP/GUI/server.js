const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const spawn = require('child_process').spawn;
const sh = spawn('bash');

app.use(express.static('./GUI/'))

sh.stdout.on('data', function (data) {
    io.emit('message', data);
});

sh.stderr.on('data', function (data) {
    io.emit('message', "<span class='command_result error'>" + data + "</span>");
});

sh.on('exit', function (code) {
    io.emit('exit', '** Shell exited: ' + code + ' **');
});

io.on('connection', function (client) {
    client.on('message', function (data) {
        sh.stdin.write(data + "\n");
        io.emit('message', new Buffer("<span class='user_input_cmd'> " + data + "</span>"));
    });
});

server.listen(8501, function () {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    console.log('[ STATUS: OMEGA GUI Server Started | TIME: ' + today.toUTCString() + ' | ADDRESS: http://localhost:8501/index.html ]');
})