let preferenciasUsuario = {
    tema: "oscuro",
    idioma: "es",
    notificaciones: true
};

console.log(preferenciasUsuario);

botonGuardar = document.querySelector('#btn-guardar');
botonCargar = document.querySelector('#btn-cargar');

botonGuardar.addEventListener('click', () => {
    const JSONpreferencias = JSON.stringify(preferenciasUsuario);
    localStorage.setItem("misPreferencias", JSONpreferencias);
    alert('Preferencias guardadas');
})

botonCargar.addEventListener('click', () => {
    const preferenciasGuardadas = localStorage.getItem("misPreferencias");
    let JSpreferencias = JSON.parse(preferenciasGuardadas);
    console.log(JSpreferencias);
})