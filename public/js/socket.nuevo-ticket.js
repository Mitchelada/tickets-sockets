// Comando para establecer la conexion
var socket = io();


var label = $('#lblNuevoTicket')

socket.on('connect', () => {
    console.log("Conectado");
})

socket.on('disconnect', () => {
    console.log("Desconectado");
})

// on estadoActual

socket.on('estadoActual', (resp) => {
    label.text(resp.actual)
})

$('button').on('click', () => {

    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket);
    })

})