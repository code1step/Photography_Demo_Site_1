const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
  // Toggle nav visibility
  navLinks.classList.toggle('show');

  // Toggle icon between menu and close
  if (navLinks.classList.contains('show')) {
    menuIcon.classList.remove('ri-menu-line');
    menuIcon.classList.add('ri-close-line');
  } else {
    menuIcon.classList.remove('ri-close-line');
    menuIcon.classList.add('ri-menu-line');
  }
});
