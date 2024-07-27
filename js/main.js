document.getElementById('frm_nuevo_cliente').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = 
        {
            "name": "Pepito",
            "email": "romel.ante6250@utc.edu.ec",
            "estado": true,
            "age": 22,
            "lastName": "Perez"
        };
    
    fetch('http://18.223.168.112:3001/api/costumers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        console.log('Respuesta completa:', response);
        if (!response.ok) {
            return response.text().then(text => {
                throw new Error(`Error del servidor: ${response.status} ${response.statusText}\n${text}`);
            });
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
    console.log('Enviando solicitud:', {
        url: 'http://18.223.168.112:3001/api/customers',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: formData
    });
});