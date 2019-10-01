var socket = io();

//Informamos en la consola de Google si el usuario se desconectó o no. Este código funciona todo el tiempo
// los sockets.on se utilizan para escuchar. En este caso, escuchan si se conectó o desconectó el usuario
socket.on('connect', function() {
    console.log('Conectado al servidor');
});


socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});


//los socket.emit envían información al servidor
socket.emit('enviarMensaje', {
    usuario: 'Marco',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});



//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});