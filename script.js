// Seleccionamos el botón hamburguesa
const toggleButton = document.querySelector('.menu-toggle');

// Seleccionamos la lista del menú
const navLinks = document.querySelector('.nav ul');

// Evento: cuando hacen clic en el botón
toggleButton.addEventListener('click', () => {
  // Alternamos la clase "active" en el menú (muestra/oculta)
  navLinks.classList.toggle('active');
});
