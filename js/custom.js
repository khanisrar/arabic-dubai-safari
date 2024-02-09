$(document).ready(function () {
  const width = window.screen.width;
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-header").css("top", "0");
      // $(".header-content").css("display", "none");
    } else {
      $(".scroll-header").css("top", "-50%");
      // $(".header-content").to("display", "flex");
    }
  });
  setInterval(function () {
    $(".card-title").toggleClass("text-red");
    $(".toggle-text").toggleClass("text-red");
  }, 500);
});
const menuBtn = document.querySelectorAll(".menuBtn");
const navbar = document.querySelector(".navlinks");

window.onscroll = () => {
  menuBtn.forEach(function (btn) {
    btn.classList.remove("fa-times");
    btn.classList.add("fa-bars");
    navbar.classList.remove("active");
  });
};

menuBtn.forEach(function (btn) {
  btn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    btn.className =
      btn.className === "fa fa-times" ? "fa fa-bars" : "fa fa-times";
  });
});
