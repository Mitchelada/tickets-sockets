// Comando para establecer la conexion
var socket = io();

var searchParams = new URLSearchParams(window.location.search)

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new error('El escritorio es necesario')
}

var escritorio = searchParams.get('escritorio');
var label = $('small')

console.log(escritorio);



$('h1').text('Escritorio ' + escritorio)

$('button').on('click', () => {

    socket.emit('atenderTicket', { escritorio: escritorio }, (resp) => {

        if (resp === 'No hay tickets') {
            label.text(resp)
            alert(resp)
            return;
        }

        label.text('Ticket ' + resp.numero)
    })
})