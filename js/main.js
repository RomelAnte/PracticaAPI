/*
    formulario.addEventListener('submit', function(e){
    e.preventDefault();

    var datos = new FormData(formulario);

    console.log(datos.get('nombre'))

    let url = 'http://localhost:8000/guardarDirector/';

    fetch(url, {
            method: 'POST',
            body: datos,
        })
        .then(res => res)
        .then(data => {
            Swal.fire({
                title:'Confirmacion',
                text:data.mensaje,
                icon: 'success'
            });
            $("#staticBackdrop").modal('hide');
            formulario.reset();

        })
    .catch((error) => {
        console.error('Error:', error);
    });
})
*/
var formulario = document.getElementById('frm_nuevo_cliente');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var datos = new FormData(formulario);

    console.log(datos.get('nombre'));

    fetch('http://18.223.168.112:3001/api/costumers', {
        method: 'POST',
        body: datos,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('resultado').innerHTML = `
            <h2>Registro exitoso:</h2>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('resultado').innerHTML = `
            <h2>Error:</h2>
            <p>${error.message}</p>
        `;
    });

});