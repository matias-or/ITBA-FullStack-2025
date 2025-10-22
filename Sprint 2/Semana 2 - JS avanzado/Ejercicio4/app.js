const form = document.querySelector('.formE4');
const input = document.querySelector('.inputE4');
const div = document.querySelector('.resultado');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = input.value;

    async function buscarUsuario(usuario) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${usuario}`);
            const data = await response.json();

            if (data.length > 0) {
                div.innerHTML = `
                    <h2>${data[0].name}</h2>
                    <p>Email: ${data[0].email}</p>
                    <p>Ciudad: ${data[0].address.city}</p>
                `;
            }
        } catch (error) {
            console.error('Usuario no encontrado');
        }
    }

    buscarUsuario(usuario);

    
    });