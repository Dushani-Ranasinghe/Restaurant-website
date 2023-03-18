const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
  if (menu.classList.contains('show')) {
    menuIcon.innerHTML = '<i class="fa fa-times"></i>';
  } else {
    menuIcon.innerHTML = '<i class="fa fa-bars"></i>';
  }
});
