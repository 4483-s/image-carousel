import "./style.css";
import green from "./img/green.jpg";
import or from "./img/or.jpg";
import n from "./img/n.jpg";
import purple from "./img/purple.jpg";
const preBtn = document.querySelector(".pre");
const nextBtn = document.querySelector(".next");
const bottom = document.querySelector(".bottom > div");
const bottomBtns = document.querySelectorAll(".bottom > div>button");
const imageDiv = document.querySelector(".imagediv");
const greenImg = document.createElement("img");
const orangeImg = document.createElement("img");
const nImg = document.createElement("img");
const purpleImg = document.createElement("img");
greenImg.src = green;
orangeImg.src = or;
nImg.src = n;
purpleImg.src = purple;
//
let intervalId;
let index = 3;
const arr = [greenImg, orangeImg, nImg, purpleImg];
arr.forEach((v) => v.classList.add("hide"));

imageDiv.append(...arr);
bottom.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    bottomBtns.forEach((v, i) => {
      if (v === e.target) {
        arr[index].classList.add("hide");
        index = i;
        arr[index].classList.remove("hide");
        clearRestart();
      }
    });
    colorBtn();
  }
});

preBtn.addEventListener("click", function () {
  preImg();
  clearRestart();
});
nextBtn.addEventListener("click", function () {
  nextImg();
  clearRestart();
});
function clearRestart() {
  clearInterval(intervalId);
  intervalId = setInterval(nextImg, 9000);
}
function nextImg() {
  imageDiv.children[index].classList.add("hide");
  index++;
  if (index >= arr.length) {
    index = 0;
  }
  imageDiv.children[index].classList.remove("hide");
  colorBtn();
}
function preImg() {
  imageDiv.children[index].classList.add("hide");
  index--;
  if (index < 0) {
    index = arr.length - 1;
  }
  imageDiv.children[index].classList.remove("hide");
  colorBtn();
}
function colorBtn() {
  const colored = document.querySelector(".colored");
  if (colored) {
    colored.classList.remove("colored");
  }
  bottomBtns[index].classList.add("colored");
}
nextImg();
intervalId = setInterval(nextImg, 9000);
