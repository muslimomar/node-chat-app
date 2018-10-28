var socket = io();

socket.on('connect', function()  {
  console.log('Connected to server');
});


socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', (msg) => {
  console.log(msg);
  var li = $('<li></li>');
  li.text(`${msg.from}: ${msg.text}`);
  li.addClass('list-group-item');
  $('#messages').append(li);

});

socket.on('newLocationMessage', (message) => {
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank">My current location</a>');

  li.text(`${message.from}: `);
  a.attr('href',message.url);
  li.addClass('list-group-item');
  li.append(a);
  $('#messages').append(li);

});

$('#message-form').on('submit', function(e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: $('[name=message]').val()
  }, () => {

  });
});


var locationButton = $('#send-location');
locationButton.on('click', () => {
  if (!navigator.geolocation) {
      return $('#error-div span').text("Geolocation not supported by your browser.");
  }

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });

  },(e) => {
    $('#error-div span').text('Unable to fetch location');
  });

});
