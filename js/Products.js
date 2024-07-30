$('#frm_nuevo_productos').on('submit', function(event) {
    event.preventDefault(); 
    
    const formData = {
        cantidad: parseInt($('#cantidad').val(),10),
        estado: $('#estado').val() === 'true',  
        fkid_suppliers: parseInt($('#proveedor').val(),10), 
    };
    fetch('http://18.117.122.104:3001/api/products', {
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
function cargarProductos(){
    fetch('http://18.117.122.104:3001/api/products')
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
cargarProductos();

function cargarProveedor(){
    fetch('http://18.117.122.104:3001/api/supplier')
    .then(response => response.json())
    .then(data => {
        let select = $('#proveedor'); // Asegúrate de cambiar 'miSelect' por el id de tu elemento select
        data.forEach(obj => {
            let option = $('<option></option>');
            option.val(obj.id); // Asegúrate de cambiar 'id' por el nombre de la propiedad que contiene el valor del id
            option.text(obj.name+" "+obj.lastName); // Asegúrate de cambiar 'name' por el nombre de la propiedad que contiene el nombre
            select.append(option);
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