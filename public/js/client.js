var socket = io('http://localhost:5000');

socket.on('example-pong', function (data) {
    console.log("pong");
});

window.addEventListener("load", function(){

  var button = document.getElementById('hello');

  button.addEventListener('click', function() {
      console.log("ping");
      socket.emit('example-ping', { duration: 2 });
  });

});