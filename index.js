'use strict';

const WebSocket = require('ws'),
handlers = require('./commandHandlers');

const url = "ws://localhost:8080"
var ws = new WebSocket(url);
ws
.on('message',handleMessage)
.on('close',()=> console.log('closed'));

function handleMessage(msg){
    var cmd = JSON.parse(msg);
    console.log(cmd);
    handleCommand(cmd.command,cmd.payload);
}
function handleCommand(cmd, options){
    handlers[cmd].execute(this);
}

ws.on('open',()=>{
    console.log('agent connected...');
});



