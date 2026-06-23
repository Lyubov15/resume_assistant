document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burgerMenu');
  const nav = document.getElementById('main-nav');
  const overlay = document.getElementById('navOverlay');
  const navLinks = nav.querySelectorAll('a');

  function toggleMenu() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');

    // Блокируем скролл только на мобильных
    if (window.innerWidth <= 768) {
      document.body.style.overflow = nav.classList.contains('active')
        ? 'hidden'
        : '';
    } else {
      document.body.style.overflow = '';
    }
  }

  burger.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  overlay.addEventListener('click', toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) toggleMenu();
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      // Закрываем меню и возвращаем прокрутку
      burger.classList.remove('active');
      nav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
