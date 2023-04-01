window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 10px";
    document.getElementById("logo").style.width = "100%";
    document.getElementById("navbar").style.backgroundColor ="black";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.width = "130%";
    document.getElementById("navbar").style.backgroundColor="#0004";
  }
}

$('.owl-carousel').owlCarousel({
    loop:true,
    dots:true,
    nav:true,
    margin:47,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:2,
            loop:true
        }
    }
})


const body = document.body;
const modeToggle = document.querySelector(".switch");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});


function openNavbar() {
    document.getElementById("navbar").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);


  window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backtop.style.bottom = "50px";
    } else {
      backtop.style.bottom = "-50px";
    }
  }