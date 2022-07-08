var checkExist = setInterval(() => {
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    clearInterval(checkExist);
  }

  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", smallscreenMenu);

  function smallscreenMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  const navLink = document.querySelectorAll(".nav-link");

  navLink.forEach(n => n.addEventListener("click", closeMenu));

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
})