const botonFav = document.querySelector('#add-fav');

botonFav.addEventListener('click', () => {
    botonFav.classList.toggle('favorito');
    if (botonFav.classList.contains('favorito')) {
        botonFav.textContent = "Quitar de Favoritos";
    } else {
        botonFav.textContent = "Añadir a Favoritos";
    }
});