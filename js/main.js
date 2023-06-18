const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach (function (item) {
    item.addEventListener('click',function (e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    })
})

const toggle = document.getElementById('toggle');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const buttons = document.querySelectorAll('button[type="button"]');


menuItems.forEach(function(item) {
  item.addEventListener('click', function(e) {
    const currentItem = document.querySelector('.active');
    currentItem.classList.remove('active');
    e.target.classList.add('active');
  });
});

toggle.addEventListener('change', function() {
  if (toggle.checked) {
    document.body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    buttons.forEach(function(button) {
      button.classList.add('dark-mode');
    });
    document.getElementById('iconos-contacto').classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    buttons.forEach(function(button) {
      button.classList.remove('dark-mode');
    });
    document.getElementById('iconos-contacto').classList.remove('dark-mode');
  }
});
