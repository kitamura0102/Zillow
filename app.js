const burgerButtom = document.querySelector(".nav-toggle");
const inputBar = document.querySelector(".input-container");
const navInfo = document.querySelector(".burger-buttom");
const closeBtn = document.querySelector(".close-btn");

////
burgerButtom.addEventListener("click", function () {
  navInfo.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  navInfo.style.display = "none";
});
