'use strict';

const inputS = [];
const boxtThree = document.querySelector('.box3');
const countt = document.getElementById('count1');
const toggler = document.getElementById('Togg');
const background = document.querySelector('.background1');
const inputt = document.getElementById('inputt');

const eNter = function (e) {
  if (e.key === 'Enter') {
    newElement();
    console.log(inputS);
    if (!boxtThree.classList.contains('visible')) {
      boxtThree.classList.add('visible');
      countt.innerHTML = `${arry.length}`;
    }
  }
};

/*function renderLeads() {
  let listItems = '';
  for (let i = 0; i < inputS.length; i++) {
    // Refactor the code below to use a template string
    listItems += `
            <li>
                <div target='_blank' href='${inputS[i]}' class='box1'>
                <div class='circle2' onclick="myFunction()" id='circles'><img src="./images/icon-check.svg"  class='check hidden' id='checky' alt="" />
                </div>
                    ${inputS[i]}
                    <img src="./images/icon-cross.svg" class='crossy hidden' alt="">
                </div>
            </li>
        `;
  }
  ulEL.innerHTML = listItems;

  const circles = document.querySelector('.circle2');
  const checkyy = document.getElementById('checky');
  var list = document.querySelector('.box1');
  list.addEventListener(
    'click',
    function (ev) {
      if (ev.target.tagName === 'box1') {
        ev.target.classList.toggle('checked');
      }
    },
    false
  );
}
*/

const arry = [];
function newElement() {
  const li = document.createElement('li');
  li.className = 'boxy';
  const inputValue = document.getElementById('inputt').value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    document.getElementById('ul-el').appendChild(li);
    arry.push(t);
  }
  document.getElementById('inputt').value = '';

  li.draggable = 'true';
  const span = document.createElement('SPAN');
  span.className = 'circle2';
  li.appendChild(span);

  const spanTwo = document.createElement('IMG');
  spanTwo.className = 'crossy';
  spanTwo.src = './images/icon-cross.svg';
  li.appendChild(spanTwo);

  const imgX = document.createElement('IMG');
  imgX.className = 'check hidden';
  imgX.src = './images/icon-check.svg';
  span.appendChild(imgX);

  for (let i = 0; i < cloSee.length; i++) {
    cloSee[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = 'none';
      arry.pop();
      countt.innerHTML = `${arry.length}`;
    };
  }
  if (!background.classList.contains('day')) {
    li.classList.add('nighty');
  } else {
    li.classList.remove('nighty');
  }

  countt.innerHTML = `${arry.length}`;
  function nightDay() {
    if (background.classList.contains('day')) {
      background.classList.add('night');
      toggler.src = './images/icon-sun.svg';
      background.classList.remove('day');
      document.body.style.backgroundColor = 'black';
      boxtThree.style.backgroundColor = 'hsl(235, 24%, 19%)';
      boxtThree.style.color = 'hsl(233, 14%, 35%)';
      inputt.style.backgroundColor = 'hsl(235, 24%, 19%)';
      inputt.style.color = 'hsl(233, 14%, 35%)';
      li.style.backgroundColor = 'hsl(235, 24%, 19%)';
      li.style.color = 'hsl(234, 39%, 85%)';
    } else {
      background.classList.remove('night');
      toggler.src = './images/icon-moon.svg';
      background.classList.add('day');
      document.body.style.backgroundColor = 'white';
      boxtThree.style.backgroundColor = 'white';
      boxtThree.style.color = 'black';
      inputt.style.backgroundColor = 'white';
      inputt.style.color = 'black';
      li.style.backgroundColor = 'white';
      li.style.color = 'black';
    }
  }

  toggler.addEventListener('click', nightDay);
}
document.addEventListener('keydown', eNter);

const list = document.querySelector('.ul');
const circlee = document.querySelector('.circle2');
list.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      const eTwo = ev.target.querySelector('.circle2');
      const eThree = ev.target.querySelector('.check');
      if (!ev.target.classList.contains('checked')) {
        ev.target.classList.add('checked');
        eTwo.classList.add('active-check');
        eThree.classList.remove('hidden');
      } else {
        ev.target.classList.remove('checked');
        eTwo.classList.remove('active-check');
        eThree.classList.add('hidden');
      }
    }
  },
  false
);

const cloSee = document.getElementsByClassName('crossy');

for (let i = 0; i < cloSee.length; i++) {
  cloSee[i].onclick = function () {
    console.log('pesho');
    const div = this.parentElement;
    div.style.display = 'none';
  };
}

/*
function cloSe(e) {
  if (e.target.className === 'crossy') {
    var crosS = e.target.querySelector('.crossy');
    const listItem = crosS.parentNode;
    var ull = listItem.parentNode;
    //Remove the parent list item from the ul.
    ull.removeChild(listItem);
  }
}

list.addEventListener('click', cloSe);
function checK() {
  if (!circlee.classList.contains('active-check')) {
    circlee.classList.add('active-check');
    checkk.classList.remove('hidden');
  }
}
*/
