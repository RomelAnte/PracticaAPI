var formulario = document.getElementById('frm_nuevo_director');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    alert("hola mundo")
    var datos = new FormData(formulario);

    console.log(datos.get('name'))

    let url = 'http://54.226.58.33:3000/api/costumers';

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
