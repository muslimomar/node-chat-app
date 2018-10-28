var socket = io();
//
socket.on('connect', function()  {
  console.log('Connected to server');
});

socket.on('newMessage', (msg) => {
  console.log(msg);
});

socket.on('welcomeUser', (msg) => {
  console.log(msg);
});

socket.on('newUser', (msg) => {
  console.log(msg);
});

socket.on('newEmail', function(email) {
  console.log('New email: ', email);
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});
