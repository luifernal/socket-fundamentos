
const { io } = require('../server');


io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido'

    });


    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    // Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {

         console.log(data);
        // if(mesaje.usuario){

        //     callback({
        //         respuesta: 'Todo salio bien'
        //     });
        // }else{
        //     callback({
        //         respuesta: 'Todo salio mal'
        //     });
        // }
        client.broadcast.emit('enviarMensaje', data);

    });

});