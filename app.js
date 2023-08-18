const burgerButtom = document.querySelector(".nav-toggle");
const inputBar = document.querySelector(".input-container");
const navInfo = document.querySelector(".burger-buttom");
const closeBtn = document.querySelector(".close-btn");
const body = document.body;
////
burgerButtom.addEventListener("click", function () {
  navInfo.style.display = "flex";
  body.style.overflow = "hidden"
});

closeBtn.addEventListener("click", function () {
  navInfo.style.display = "none";
  body.style.overflow = "auto"
});
