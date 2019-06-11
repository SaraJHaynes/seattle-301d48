'use strict';

var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var leftImage = document.getElementById('left');
var centerImage = document.getElementById('center');
var rightImage = document.getElementById('right');

<<<<<<< HEAD
<<<<<<< HEAD
let allProducts = [];
=======
const allProducts = [];
>>>>>>> e7bfac1aa999930ff2031cb8dc845a99a8ce9915
const container = document.getElementById('image_container');
const viewed = [];
const labels = [];
const pics = [leftImage, centerImage, rightImage];
const list = document.getElementById('productlist');
<<<<<<< HEAD
let totalClicks = 0;
=======
const totalClicks = 0;
>>>>>>> e7bfac1aa999930ff2031cb8dc845a99a8ce9915
const views = [];
const votes = [];
=======
var allProducts = [];
var container = document.getElementById('image_container');
var viewed = [];
var labels = [];
var pics = [leftImage, centerImage, rightImage];
var list = document.getElementById('productlist');
var totalClicks = 0;
var views = [];
var votes = [];
>>>>>>> f0a9bc79ccfd27c8bf085c5d6106c586316edc6c

function Product(name) {
  this.name = name;
  this.path = `img name .jpg`;
  this.votes = 0;
  this.views = 0;
  allProducts.push(this);
}

function makeRandom() {
  return Math.floor(Math.random() * names.length);
}

function displayPics(){
  while(viewed.length < 6){
    const rando = makeRandom();
    while(!viewed.includes(rando)){
      viewed.push(rando);
    }
    console.log(rando);
  }
<<<<<<< HEAD
  // console.log(rando);
  // TODO: In a sentence or two, explain why the previous line of code threw an error when we changed the variable declaration from `var to `let`.
=======
  console.log(rando);
<<<<<<< HEAD
  // because the variable rando was scoped tothe function displayPics
  // TODO: In a sentence or two, explain why the previous line of code threw an error when we changed the constiable declaration from `const to `const`.
>>>>>>> e7bfac1aa999930ff2031cb8dc845a99a8ce9915
=======
  // TODO: In a sentence or two, explain why the previous line of code threw an error when we changed the variable declaration from `var to `let`.
>>>>>>> f0a9bc79ccfd27c8bf085c5d6106c586316edc6c
  // PUT YOUR RESPONSE IN THIS COMMENT
  // Turning var to let threw an error because of the scope for let. Let was outside to code block so it couldn't be read. Var can scope globally but let in confined to the block it is in. When I moved console.log(rando); inside the code block on line 37 it worked.
  console.log(viewed);

  for (var i = 0; i < 3; i++){
    var temp = viewed.shift();
    pics[i].src = allProducts[temp].path;
    pics[i].id = allProducts[temp].name;
    allProducts[temp].views += 1;
  }
}

function handleClick(event) {
  if (event.target.id === 'image_container') {
    return alert('Be sure to click directly on an image!!');
  }
  totalClicks += 1;
  if(totalClicks > 24) {
    container.removeEventListener('click', handleClick);
    container.style.display = 'none';
    showList();
    makeChart();
  }
  for(var i = 0; i < names.length; i++){
    if(event.target.id === allProducts[i].name) {
      allProducts[i].votes += 1;
      console.log(`event.target.id has allProducts[i].votes votes in  allProducts[i].views views`);
    }
  }
  localStorage.busmall = JSON.stringify(allProducts);
  localStorage.busmallProducts = JSON.stringify(allProducts);
  displayPics();
}

function showList() {
<<<<<<< HEAD
  for(let i = 0; i < allProducts.length; i++) {
<<<<<<< HEAD
    let liEl = document.createElement('li');
    liEl.textContent = `allProducts[i].name has allProducts[i].votes votes in allProducts[i].views views`;
=======
    const liEl = document.createElement('li');
=======
  for(var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('li');
>>>>>>> f0a9bc79ccfd27c8bf085c5d6106c586316edc6c
    liEl.textContent = allProducts[i].name + ' has ' + allProducts[i].votes + ' votes in ' + allProducts[i].views + ' views';
>>>>>>> e7bfac1aa999930ff2031cb8dc845a99a8ce9915
    list.appendChild(liEl);
  }
}

function makeChartData(){
  allProducts.forEach(function(product){
    labels.push(product.name);
    votes.push(product.votes);
    views.push(product.views);
  });
}

function makeChart(){
  makeChartData();
  var ctx = document.getElementById('chartypants').getContext('2d');
  new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'total votes',
        backgroundColor: 'gold',
        borderColor: '#214',
        data: votes,
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            max: 20,
            min: 0,
            stepSize: 1
          }
        }]
      }
    }
  });
  Chart.defaults.global.defaultFontColor = '#eee'; //eslint-disable-line
}

container.addEventListener('click', handleClick);

document.getElementById('bus').addEventListener('click', function(){
  localStorage.removeItem('busmall');
  console.log('Local storage was cleared!');
});

if(localStorage.busmall){
  console.log('Local storage data exists');
  allProducts = JSON.parse(localStorage.busmall);
} else {
  console.log('There is no local storage data; initialize app by creating instances');
  for(var i = 0; i < names.length; i++) {
    new Product(names[i]);
  }
}

displayPics();
