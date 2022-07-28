//fade in and out of navbar for scrolling
const nav = document.querySelector(".navbar");
//Underlining of navbar when scrolling content
const sections = document.querySelectorAll("div");
const navLi = document.querySelectorAll('nav .navbar-collapse ul li a')

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () =>{
  if (lastScrollY < window.scrollY){
    //scroll down
    nav.classList.add("nav--hidden");
  } else {
    //scroll up
    nav.classList.remove("nav--hidden");
  }
  lastScrollY = window.scrollY;
  let current = '';
  sections.forEach( section=>{
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY > sectionTop - sectionHeight /3){
      current = section.getAttribute('id');
    }
  })

  navLi.forEach( li =>{
    li.classList.remove("active");
    if(li.classList.contains(current)){
      li.classList.add('active')
      if ($(window).width() > 767) {
        nav.classList.remove("nav--hidden");
      }
    }
  })
});
//End of scrolling code

//Navbar side menu

//Hamburger Animation
document.querySelector('.first-button').addEventListener('click', function () {
  document.querySelector('.animated-icon').classList.toggle('open');
});
//close navbar when is clicked
const navLinks = document.querySelectorAll('.navbar-nav .nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { 
      bsCollapse.toggle();
      document.querySelector('.animated-icon').classList.remove('open');
    })
    
})

//End of navbar side menu

/* Type writer for home page*/
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { 
    delta /= 2; 
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
// End of type wrtier

//Scrolling on reveal 
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
//End of scrolling reveal

//View more button
$(function () {
  $(".group .col-lg-4").slice(0, 3).show();
  $(".personal .col-lg-4").slice(0, 3).show();
  //console.log($(".personal .col-lg-4").length);
  if ($(".group .col-lg-4").length <= 3){
    $(".load-group").css('visibility', 'hidden');
  }

  if ($(".personal .col-lg-4").length <= 3){
    $(".load-personal").css('visibility', 'hidden');
  } 

  //load more button for group
  $("body").on('click touchstart', '#load-group', function (e) {
    // e.preventDefault();
    if (document.getElementById("load-group").innerText == "Load More"){
      $(".group .col-lg-4:hidden").slideDown();
      document.getElementById("load-group").innerText = "Load Less"
    }else{
      $(".group .col-lg-4").slice(3, $(".group .col-lg-4").length).slideUp();
      document.getElementById("load-group").innerText = "Load More"
    }
  });

  $("body").on('click touchstart', '#load-personal', function (e) {
    // e.preventDefault();
    if (document.getElementById("load-personal").innerText == "Load More"){
      $(".personal .col-lg-4:hidden").slideDown();
      document.getElementById("load-personal").innerText = "Load Less"
    }else{
      $(".personal .col-lg-4").slice(3, $(".personal .col-lg-4").length).slideUp();
      document.getElementById("load-personal").innerText = "Load More"
    }
  });

});

//Copy to clipboard functions
function CopyUser(){
  navigator.clipboard.writeText("Darien");
}

function CopyPw(){
  navigator.clipboard.writeText("Darienabc123!");
}


//Arrow animation
var arrowBounce = function() {
  var arrow = $(".arrow");
  if (arrow.hasClass("lift")) {
    arrow.removeClass("lift");
  } else {
    arrow.addClass("lift");
  }
};
// run the arrowBounce function every 800ms
setInterval(arrowBounce, 800);

//top button
var topbtn = document.getElementById("topbtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

