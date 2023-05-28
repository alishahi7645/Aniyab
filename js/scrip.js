const mainimg = document.querySelector(".main-img");
const mainhover = document.querySelector(".main-hover");
console.log(mainimg);

mainimg.addEventListener('mouseenter', function () {
  mainhover.classList.toggle("main-hover-active");
});
