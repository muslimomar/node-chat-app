const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage,generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("New user connected");

  socket.emit('welcomeUser', generateMessage('Admin', 'Welcome to the chat appp'));

  socket.broadcast.emit('newUser',generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (msg,callback) => {
    console.log({msg});

      io.emit('newMessage', generateMessage(msg.from,msg.text));
      callback('This is from the server');
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin',coords.latitude,coords.longitude));
  });


  socket.on('disconnect', () => {
    console.log('Disconnected from the server ----- \n');
  });

});


server.listen(port, () => {
  console.log(`Server is up on port ${port} ----- \n`);
});
