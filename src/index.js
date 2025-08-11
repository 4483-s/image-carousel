import './style.css';
import green from './img/green.jpg';
import or from './img/or.jpg';
import n from './img/n.jpg';
import purple from './img/purple.jpg';
import sun from './img/sun.jpg';
const container = document.querySelector('.container');
const preBtn = document.querySelector('.pre');
const nextBtn = document.querySelector('.next');
const bottom = document.querySelector('.bottom');
const imageDiv = document.querySelector('.imagediv');
const arrowDiv = document.querySelector('.arrows');

container.addEventListener('mouseenter', () => {
  preBtn.style.display = 'block';
  nextBtn.style.display = 'block';
});
container.addEventListener('mouseleave', () => {
  preBtn.style.display = 'none';
  nextBtn.style.display = 'none';
});
function processSource(arr) {
  const spliced = arr.splice(arr.length - 2);
  arr.unshift(...spliced);
}
function appendEl(...imgSrc) {
  const len = imgSrc.length;
  const originArr = [];
  for (let i = 0; i < len; i++) {
    const img = document.createElement('img');
    const btn = document.createElement('button');
    img.src = imgSrc[i];
    originArr.push(img);
    // imageDiv.appendChild(img);
    bottom.appendChild(btn);
    btn.setAttribute('data-img-index', i);
  }
  const altered = [...originArr];
  processSource(altered);
  altered.forEach(v => {
    imageDiv.appendChild(v);
  });
  return originArr;
}
const arr = appendEl(green, or, n, purple, sun);
let intervalId;
//
//
//
//
preBtn.addEventListener('click', () => {
  preImg();
  clearRestart();
});
nextBtn.addEventListener('click', () => {
  nextImg();
  clearRestart();
});
bottom.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const imgIndex = Number(e.target.getAttribute('data-img-index'));
    const inDomIndex = findInDomIndexByArrId(imgIndex);
    const targetedChild = imageDiv.children[inDomIndex];
    if (inDomIndex === 2) {
      clearRestart();
      return;
    }
    while (imageDiv.children[2] !== targetedChild) {
      nextImg();
      clearRestart();
    }
  }
});

intervalId = setInterval(() => {
  nextImg();
}, 6000);
colordot();
function clearRestart() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    nextImg();
  }, 6000);
}
function nextImg() {
  console.log('n');
  const firstChild = imageDiv.firstElementChild;
  firstChild.remove();
  imageDiv.appendChild(firstChild);
  colordot();
}
function preImg() {
  console.log('p');
  const lastChild = imageDiv.lastElementChild;
  lastChild.remove();
  imageDiv.prepend(lastChild);
  colordot();
}
function findInDomIndexByArrId(index) {
  const target = arr[index];
  for (let i = 0; i < arr.length; i++) {
    if (imageDiv.children[i] === target) {
      return i;
    }
  }
  alert('fatal error');
}
function colordot() {
  const colored = document.querySelector('.colored');
  if (colored) {
    colored.classList.remove('colored');
  }
  const current = imageDiv.children[2];
  const index = arr.findIndex(v => v === current);
  bottom.children[index].classList.add('colored');
}
window.preImg = preImg;
window.nextImg = nextImg;
window.arr = arr;
window.imageDiv = imageDiv;
