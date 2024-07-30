$('#frm_nuevo_proveedor').on('submit', function(event) {
    event.preventDefault(); 
    
    const formData = {
        name: $('#nombre').val(),
        direcciom: $('#direccion').val(),
        telefono: $('#telefono').val(),
        email: $('#email').val(),
        estado: $('#estado').val() === 'true', 
        age: parseInt($('#años').val(), 10), 
        lastName: $('#apellido').val()
    };

    fetch('http://18.117.122.104:3001/api/supplier', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)        
    })
    .then(response => response.json())
    .then(data => {         
        console.log('Respuesta del servidor:', data);       
        Swal.fire({
            title:'Confirmacion',
            text:data.mensaje,
            icon: 'success'
        });
        $("#staticBackdrop").modal('hide');
        $('#frm_nuevo_proveedor').reset();
    })
    .catch(error => console.error('Error:', error));
    limpiarFormulario();
})
function cargarProveedor(){
    fetch('http://18.117.122.104:3001/api/supplier')
    .then(response => response.json())
    .then(data => {
        let table = $('#tb_register');
        data.forEach(obj => {
            let row = $('<tr></tr>');
            for (let key in obj) {
                let cell = $('<td></td>');
                cell.text(obj[key]);
                row.append(cell);
            }

            table.append(row);
        });
    })
    .catch(error => console.error('Error:', error));
}
cargarProveedor();

function limpiarFormulario(){
    $('#nombre').val("");
    $('#email').val("");
    $('#estado').val("");
    $('#años').val("");
    $('#apellido').val("");
}