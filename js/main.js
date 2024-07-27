document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        estado: document.getElementById('estado').value,
        age: document.getElementById('años').value,
        lastName: document.getElementById('apellido').value
    };
    
    fetch('http://18.223.168.112:3001/api/costumers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
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