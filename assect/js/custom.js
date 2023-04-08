
"use strict"
new kursor({

  type: 1

  
})

window.addEventListener("scroll" , function() {
  const navBar = this.document.querySelector("#nav-bar");
  navBar.classList.toggle("sticky" , this.window.scrollY > 0);
})



const open = document.querySelector("#open-btn").addEventListener("click" , function() {

  document.querySelector("#nav-item").style.width = "40%";

});

const close = document.querySelector("#close-btn").addEventListener("click" , function() {

  document.querySelector("#nav-item").style.width = "0";

});



