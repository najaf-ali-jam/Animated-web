const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation(){
    let img = document.querySelector("#elem-container")
let fixed = document.querySelector("#fixed-image")
img.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})
img.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})

let elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
     e.addEventListener("mouseenter", function(){
        let image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
     })
})
}
function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}
function menuAnimation(){
let menu = document.querySelector("nav h3")
let full = document.querySelector("#full-scr")
let navImg = document.querySelector("nav img")
let flag = 0
menu.addEventListener("click", function () {
   if(flag == 0){
    full.style.top = 0
    navImg.style.opacity = 0
    flag = 1
   }else{
    full.style.top = "-100%"
    navImg.style.opacity = 1
    flag = 0
   }
    
})
}
function loaderAnimation(){
    let loader = document.querySelector("#loader")
    setTimeout(function(){
        loader.style.top = "-100%"
    },4200)
}
swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()



