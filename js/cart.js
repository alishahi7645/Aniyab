let items = document.querySelector(".cart-product-item").children;
let btn = document.querySelector(".btn");
let totalItems = items.length;
let index = 0;
console.log(btn);
btn.onclick = function () {
  next("next");
};
function next(direction) {
  if (direction == "next") {
    index++;
    if (index == totalItems) {
      index = 0;
    }
    console.log(index);
  } else {
    if (index == 0) {
      index = totalItems - 1;
      console.log(index);
    } else {
      index--;
      console.log(index);
    }
  }

  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("cart-active");
  }
  items[index].classList.add("cart-active");
}
