var prevScrollPos = window.pageYOffset;
var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove('hidden');
    
  } else {
    navbar.classList.add('hidden');
  }
  
  prevScrollPos = currentScrollPos;
});

const slides = document.querySelectorAll('.banner-slide');
let currentSlide = 0;
function showSlide(slideIndex) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[slideIndex].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); 


function scrollToBriefInfo() {
  var briefInfo = document.querySelector('.briefInfo');
  var scrollTo = briefInfo.offsetTop;

  function scrollStep() {
    if (window.pageYOffset < scrollTo) {
      window.scroll(0, window.pageYOffset + 30);
      requestAnimationFrame(scrollStep);
    }
  }

  scrollStep();
}

function scrollToListEvent() {
  var briefInfo = document.querySelector('.listevent');
  var scrollTo = briefInfo.offsetTop;

  function scrollStep() {
    if (window.pageYOffset < scrollTo) {
      window.scroll(0, window.pageYOffset + 30);
      requestAnimationFrame(scrollStep);
    }
  }

  scrollStep();
}

function scrollToPriceInfo() {
  var briefInfo = document.querySelector('.upcoming');
  var scrollTo = briefInfo.offsetTop;

  function scrollStep() {
    if (window.pageYOffset < scrollTo) {
      window.scroll(0, window.pageYOffset + 30);
      requestAnimationFrame(scrollStep);
    }
  }

  scrollStep();
}

function scrollToInfo() {
  var briefInfo = document.querySelector('.briefInfoA');
  var scrollTo = briefInfo.offsetTop;

  function scrollStep() {
    if (window.pageYOffset < scrollTo) {
      window.scroll(0, window.pageYOffset + 30);
      requestAnimationFrame(scrollStep);
    }
  }

  scrollStep();
}

function scrollToForm() {
  var briefInfo = document.querySelector('.form-back');
  var scrollTo = briefInfo.offsetTop;

  function scrollStep() {
    if (window.pageYOffset < scrollTo) {
      window.scroll(0, window.pageYOffset + 30);
      requestAnimationFrame(scrollStep);
    }
  }

  scrollStep();
}

let counter = 2023;
function decreaseYear(){
  if (counter > 1974){
    counter --;
    document.getElementById("year").innerHTML = counter
  }

}
  function increaseYear(){
    if (counter < 2023){
      counter++;
      document.getElementById("year").innerHTML = counter
    }
    
  }

  let pageCounter = 3;
function decreasePage(){
  if (pageCounter > 1){
    pageCounter --;
    document.getElementById("page").innerHTML = pageCounter
      
  }

}
  function increasePage(){
    if (pageCounter < 20){
      pageCounter++;
      document.getElementById("page").innerHTML = pageCounter
      // window.location.reload()    
    }
    
  }
let clickCount = 0;
window.onload = function() {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav-links');
  let countnav = navbar.style.height;

  burger.addEventListener('click', function() {
    clickCount++;

    if (clickCount % 2 !== 0) {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.left = '50%';
      nav.style.top = '50%';
      nav.style.transform = 'translate(-50%, -50%)';
      navbar.style.height = '36%';
      burger.style.marginRight = '0px';
    } else {
      nav.style.display = 'none';
      burger.style.marginRight = '0';
      navbar.style.height = countnav;

    }
  });
}
  function validation (event){
    event.preventDefault();
    contactUs = document.getElementById("contactUs");
    uname = document.getElementById("uname");
    email = document.getElementById("email");
    phone = document.getElementById("phone");
    message = document.getElementById("message");
    conmethod = document.getElementById("conmethod");
  
    
    if (uname.value.length < 5){
      alert("Username must be at least 5 characters long.");
      return false;
    }
  
 
    if (email.value == "" || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
      alert("Please enter a valid email.");
      return false;
  }
  

    if (isNaN(phone.value) || phone.value.length < 10 || phone.value.length > 14){
      alert("Please enter a valid phone number. It should contain 10 to 14 digits.");
      return false;
  }
  
    if (message.value.length < 10){
      alert("Your message must be at least 10 characters long.");
      return false;
    }
  
 
    if (!conmethod.value){
      alert("Please select a contact method.");
      return false;
    }
  
    contactUs.submit();
  }

  const stripbutton = document.querySelector(".strbtn");
  const mobileDropdown = document.querySelector(".mobile-link");
  const showHandler = () => {
    mobileDropdown.classList.toggle("show");
  };
