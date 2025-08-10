import './style.css';
import green from './img/green.jpg';
import or from './img/or.jpg';
import n from './img/n.jpg';
import purple from './img/purple.jpg';
import sun from './img/sun.jpg';

const preBtn = document.querySelector('.pre');
const nextBtn = document.querySelector('.next');
const bottom = document.querySelector('.bottom > div');
const imageDiv = document.querySelector('.imagediv');
// const greenImg = document.createElement('img');
// const orangeImg = document.createElement('img');
// const nImg = document.createElement('img');
// const purpleImg = document.createElement('img');
// const sunImg = document.createElement('img');
// greenImg.src = green;
// orangeImg.src = or;
// nImg.src = n;
// purpleImg.src = purple;
// sunImg.src = sun;
function appendEl(...imgSrc) {
  const len = imgSrc.length;
  const arr = [];
  for (let i = 0; i < len; i++) {
    const img = document.createElement('img');
    img.src = imgSrc[i];
    arr.push(img);
    imageDiv.appendChild(img);
    const btn = document.createElement('button');
    bottom.appendChild(btn);
  }
}
//
// bottom.addEventListener('click', e => {
//   if (e.target.matches('button')) {
//     bottomBtns.forEach((v, i) => {
//       if (v === e.target) {
//         arr[index].classList.add('hide');
//         index = i;
//         arr[index].classList.remove('hide');
//         clearRestart();
//       }
//     });
//     colorBtn();
//   }
// });
