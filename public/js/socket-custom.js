 // io() esta incluida en la libreria socket.io
 var socket = io();

 // escichar informacion
 socket.on('connect', function(){
     console.log('conectado al servidor');
 });

 // escichar informacion
 socket.on('disconnect', function(){
     console.log('Perdimos conexion con el servidor');
 });

 // Enviar informacion
 socket.emit('enviarMensaje', {
   usuario: 'Fernando',
   mensaje: 'Hola Mundo'   
 }, function(resp){
     console.log('respuesta server', resp);
 });

 // escichar informacion
 socket.on('enviarMensaje', function(mensaje){
     console.log('Servidor', mensaje );
 });