$('#frm_nuevo_cliente').on('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera predeterminada

    const formData = {
        name: $('#nombre').val(),
        email: $('#email').val(),
        estado: $('#estado').val() === 'true', // Convierte el valor a un booleano
        age: parseInt($('#años').val(), 10), // Convierte el valor a un número entero
        lastName: $('#apellido').val()
    };

    // Aquí puedes hacer tu petición POST con los datos del formulario
    // Por ejemplo, con la función fetch:
    fetch('http://18.117.122.104:3001/api/costumers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});
function cargarClientes(){
    $('#tb_register').empty();
    fetch('http://18.117.122.104:3001/api/costumers')
    .then(response => response.json())
    .then(data => {
        // Crear la tabla
        let table = $('#tb_register');

        // Añadir una fila por cada objeto en los datos
        data.forEach(obj => {
            let row = $('<tr></tr>');

            // Añadir una celda por cada propiedad en el objeto
            for (let key in obj) {
                let cell = $('<td></td>');
                cell.text(obj[key]);
                row.append(cell);
            }

            table.append(row);
        });

        tbody.append(row);
    })
    .catch(error => console.error('Error:', error));
}
cargarClientes();