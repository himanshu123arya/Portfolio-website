let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);



// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 65,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);
// Node.js
let nodeProgress = document.querySelector(".nodejs"),
  nodeValue = document.querySelector(".nodejs-progress");
let nodeStart = 0, nodeEnd = 70, nodeSpeed = 30;
let progressNode = setInterval(() => {
  nodeStart++;
  nodeValue.textContent = `${nodeStart}%`;
  nodeProgress.style.background = `conic-gradient(#3c873a ${nodeStart * 3.6}deg, #ededed 0deg)`;
  if (nodeStart == nodeEnd) clearInterval(progressNode);
}, nodeSpeed);

// MySQL
let mysqlProgress = document.querySelector(".mysql"),
  mysqlValue = document.querySelector(".mysql-progress");
let mysqlStart = 0, mysqlEnd = 75, mysqlSpeed = 30;
let progressMysql = setInterval(() => {
  mysqlStart++;
  mysqlValue.textContent = `${mysqlStart}%`;
  mysqlProgress.style.background = `conic-gradient(#00758f ${mysqlStart * 3.6}deg, #ededed 0deg)`;
  if (mysqlStart == mysqlEnd) clearInterval(progressMysql);
}, mysqlSpeed);

// Express.js
let expressProgress = document.querySelector(".expressjs"),
  expressValue = document.querySelector(".expressjs-progress");
let expressStart = 0, expressEnd = 60, expressSpeed = 30;
let progressExpress = setInterval(() => {
  expressStart++;
  expressValue.textContent = `${expressStart}%`;
  expressProgress.style.background = `conic-gradient(#000000 ${expressStart * 3.6}deg, #ededed 0deg)`;
  if (expressStart == expressEnd) clearInterval(progressExpress);
}, expressSpeed);

// MongoDB
let mongoProgress = document.querySelector(".mongodb"),
  mongoValue = document.querySelector(".mongodb-progress");
let mongoStart = 0, mongoEnd = 75, mongoSpeed = 30;
let progressMongo = setInterval(() => {
  mongoStart++;
  mongoValue.textContent = `${mongoStart}%`;
  mongoProgress.style.background = `conic-gradient(#4db33d ${mongoStart * 3.6}deg, #ededed 0deg)`;
  if (mongoStart == mongoEnd) clearInterval(progressMongo);
}, mongoSpeed);

// Figma
let figmaProgress = document.querySelector(".figma"),
  figmaValue = document.querySelector(".figma-progress");
let figmaStart = 0, figmaEnd = 70, figmaSpeed = 30;
let progressFigma = setInterval(() => {
  figmaStart++;
  figmaValue.textContent = `${figmaStart}%`;
  figmaProgress.style.background = `conic-gradient(#a259ff ${figmaStart * 3.6}deg, #ededed 0deg)`;
  if (figmaStart == figmaEnd) clearInterval(progressFigma);
}, figmaSpeed);

// DSA
let dsaProgress = document.querySelector(".dsa"),
  dsaValue = document.querySelector(".dsa-progress");
let dsaStart = 0, dsaEnd = 50, dsaSpeed = 30;
let progressDsa = setInterval(() => {
  dsaStart++;
  dsaValue.textContent = `${dsaStart}%`;
  dsaProgress.style.background = `conic-gradient(#ff4b91 ${dsaStart * 3.6}deg, #ededed 0deg)`;
  if (dsaStart == dsaEnd) clearInterval(progressDsa);
}, dsaSpeed);




// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});