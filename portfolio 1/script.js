  //cycle mouse
  const circle=document.getElementById("circle");
  document.addEventListener("mousemove",(e) => {
    circle.style.left= `${e.clientX}px`;
    circle.style.top= `${e.clientY}px`;

  })

  //loading screen 
window.addEventListener("load", function () {
setTimeout(() => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.visibility = "hidden";

  setTimeout(() => preloader.remove(), 600);
}, 1000); 
});

//menu toggle navbar for phones
 document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});


