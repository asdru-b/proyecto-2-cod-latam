// Seleccionar todos los elementos del menú
const menuItems = document.querySelectorAll('.menu-item');

// Agregar un event listener a cada elemento del menú
menuItems.forEach(function(item) {
  item.addEventListener('click', function(e) {
    const currentItem = document.querySelector('.active');
    currentItem.classList.remove('active');
    e.target.classList.add('active');
  });
});

// Seleccionar el interruptor de modo claro/oscuro
const toggle = document.getElementById('toggle');

// Seleccionar los elementos de encabezado, pie de página, boton e iconos
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const buttons = document.querySelectorAll('button[type="button"]');
const iconosContacto = document.getElementById('iconos-contacto');

// Agregar un event listener al interruptor de modo claro/oscuro
toggle.addEventListener('change', function() {
  if (toggle.checked) {
    // Habilitar modo oscuro
    document.body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    buttons.forEach(function(button) {
      button.classList.add('dark-mode');
    });
    iconosContacto.classList.add('dark-mode');
  } else {
    // Deshabilitar modo oscuro
    document.body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    buttons.forEach(function(button) {
      button.classList.remove('dark-mode');
    });
    iconosContacto.classList.remove('dark-mode');
  }
});

// Reemplazar las imágenes del toggle al activar/desactivar el modo oscuro
function toggleDarkMode() {
  const solImg = document.querySelector('.toggle-icon[src="images/sol.png"]');
  const lunaImg = document.querySelector('.toggle-icon[src="images/luna.png"]');
  const solImgDark = 'images/sol2.png';
  const lunaImgDark = 'images/luna2.png';
  const solImgDefault = 'images/sol.png';
  const lunaImgDefault = 'images/luna.png';

  toggle.addEventListener('change', function() {
    if (toggle.checked) {
      // Modo oscuro activado
      solImg.src = solImgDark;
      lunaImg.src = lunaImgDark;
    } else {
      // Modo oscuro desactivado
      solImg.src = solImgDefault;
      lunaImg.src = lunaImgDefault;
    }
  });
}

toggleDarkMode();





