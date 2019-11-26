const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const log = require("./logger");

app.use(express.static(path.join(__dirname, '../build')));

// @ts-ignore
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

// @ts-ignore
io.on('connect', (socket) => {
  // Say Hi to all connected clients
  io.emit('broadcast', '[Server]: Welcome stranger!');

  // @ts-ignore
  socket.on('message', (msg) => {
    // console.log(`message received from user: ${msg.from}`);
    // console.log(`message received content: ${msg.content}`);
    io.emit('message', msg);
  });

  // Say Bye to all connected clients
  socket.on('disconnect', function () {
    io.emit('broadcast', '[Server]: Bye, bye, stranger!');
  });
});

const port = process.env.PORT || 3001;
app.set('port', port);

http.listen(port, () => {
  log.info(`Listening on port: ${port}`);
});