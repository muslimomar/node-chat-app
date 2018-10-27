var socket = io();

socket.on('connect', function()  {
  console.log('Connected to server');


  socket.on('newMessage', (msg) => {
    document.getElementById("email-p")
    .innerHTML = JSON.stringify(msg,undefined,2);

  });


  socket.emit('createMessage', {
    from: 'Client',
    text: 'Whatting happen yaar?'
  });




























});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

// socket.on('newEmail', function(email) {
//   console.log('New email: ', email);
// });
