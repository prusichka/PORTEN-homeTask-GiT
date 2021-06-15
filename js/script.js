new Swiper(".slider ", {
  loop: true,
});
new Swiper(".sliderTwo ", {
  loop: true,
});
new Swiper(".slider3 ", {
  loop: true,
});

const burger = document.querySelector(".menu");
const mobileMenu = document.querySelector("#toggle");

burger.addEventListener("click", (e) => {
  e.preventDefault();

  let pagePos = window.scrollY;
  document.body.classList.add("is-menu-open");
  document.setAttribute("data-scroll", pagePos);

  mobileMenu.style.display = "block";
});
