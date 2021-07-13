
/// MENU MOBILE
const mobileOpen = document.getElementById('mobileOpen');
const nav = document.querySelector('nav');
const mobileExit = document.getElementById('mobileExit');

mobileOpen.addEventListener('click', ()=> {
  nav.classList.add('mobileOpen')
})

mobileExit.addEventListener('click', ()=> {
  nav.classList.remove('mobileOpen')
})
