// nav.js

// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", () => {
  const initNavbar = () => {
    const nav = document.querySelector('nav');
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = menuBtn?.querySelector('i');
    const navLinkItems = navLinks?.querySelectorAll('a') || [];

    let lastScrollY = window.scrollY;
    let scrollPaused = false;

    // 🍔 Toggle mobile menu open/close
    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');

        if (navLinks.classList.contains('show')) {
          menuIcon.classList.replace('ri-menu-line', 'ri-close-line');
        } else {
          menuIcon.classList.replace('ri-close-line', 'ri-menu-line');
        }
      });
    }

    // 📎 Close nav + menu when clicking nav link
    navLinkItems.forEach(link => {
      link.addEventListener('click', () => {
        scrollPaused = true;
        nav.classList.add('nav--hidden');

        if (navLinks.classList.contains('show')) {
          navLinks.classList.remove('show');
          menuIcon.classList.replace('ri-close-line', 'ri-menu-line');
        }

        setTimeout(() => {
          scrollPaused = false;
        }, 1500);
      });
    });

    // 📜 Scroll behavior
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      // ✅ Always show navbar at the top
      if (currentScrollY <= 0) {
        nav.classList.remove('nav--hidden');
        nav.classList.remove('scrolled');
        return;
      }

      // ✅ Skip scroll behavior if paused
      if (scrollPaused) return;

      // ✅ Add/remove background
      if (currentScrollY > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      // ✅ Hide nav on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        nav.classList.add('nav--hidden');
      } else {
        nav.classList.remove('nav--hidden');
      }

      lastScrollY = currentScrollY;
    });
  };

  // Detect when header is injected
  const headerCheck = setInterval(() => {
    if (document.querySelector('nav')) {
      clearInterval(headerCheck);
      initNavbar(); // Run navbar logic once <nav> is present
    }
  }, 100); // check every 100ms until nav exists
});
