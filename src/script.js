const humbergerBtn = document.querySelector('.fa-bars');
const timesBtn = document.querySelector('.fa-times');
const menuBar = document.querySelector('.menu-bar');
const anyMenu = document.querySelectorAll('.menu-bar');

humbergerBtn.addEventListener('click', () => {
  menuBar.style.display = 'block';
});
timesBtn.addEventListener('click', () => {
  menuBar.style.display = 'none';
});

anyMenu.forEach((n) => n.addEventListener('click', () => {
  menuBar.style.display = 'none';
}));