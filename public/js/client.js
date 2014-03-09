var socket = io.connect('http://localhost:5000');

socket.on('pong', function (data) {
    console.log("pong");
});

$(document).ready(function() {
    $("#hello").click(function(){
        socket.emit('ping', { duration: 2 });
    }); 
});