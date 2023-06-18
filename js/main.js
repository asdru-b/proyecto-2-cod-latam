const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach (function (item) {
    item.addEventListener('click',function (e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    })
})

const toggleCheckbox = document.querySelector('.toggle-checkbox');
toggleCheckbox.addEventListener('change', function() {
  const body = document.querySelector('body');
  if (this.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});