let button = document.querySelector(".color-btn");
let text = document.querySelector(".label-text");
let col = document.querySelector(".col");

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
function changeLabel(label) {
  text.innerText = "Background Color: " + label;
}
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

col.addEventListener("input", function (event) {
  document.body.style.backgroundColor = event.target.value;
});

button.addEventListener("click", function () {
  changeLabel(getRandomColor());
  changeBackgroundColor(getRandomColor());
});
