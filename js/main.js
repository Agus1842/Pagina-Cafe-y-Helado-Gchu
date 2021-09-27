let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    busquedaForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let busquedaForm = document.querySelector('.busqueda-form');

document.querySelector('#busqueda-btn').onclick = () => {
    busquedaForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cartera-items-contenedor');

document.querySelector('#cartera-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    busquedaForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    busquedaForm.classList.remove('active');
    cartItem.classList.remove('active');
}