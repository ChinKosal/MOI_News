// change picture
function pictureChange1() {
  document.getElementById("themImage").src = "./img/sec_1_img_1.jpg";
}
function pictureChange2() {
  document.getElementById("themImage").src = "./img/sec_1_img_2.jpg";
}
function pictureChange3() {
  document.getElementById("themImage").src = "./img/sec_1_img_3";
}
function pictureChange4() {
  document.getElementById("themImage").src = "./img/sec_1_img_4.jpg";
}
function pictureChange5() {
  document.getElementById("themImage").src = "./img/sec_1_img_5";
}
// finish change picture

// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn_sec1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
//  finish add active

// popup
function openPopup() {
  document.getElementById("popup").style.transition = "0.2s all ease-in";
  document.getElementById("popup").style.visibility = "visible";
  document.getElementById("popup").style.right = "0";
}

function closePopup() {
  document.getElementById("popup").style.right = "-850px";
  document.getElementById("popup").style.transition = "0.4s";
  document.getElementById("closepopup").style.background = "none";
}
// finish popup

// btn sroll top
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// finish btn scroll top

// click chhange svg in btn_slider_Card
function chhangeIcon(x) {
  x.classList.toggle("​​​fa-arrow-down-long");
}

// map
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// modal
const showDialog = () => {
  document.getElementById("dialog").classList.add("show");
  const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
  const body = document.body;
  body.style.position = "fixed";
  body.style.top = `-${scrollY}`;
};
const closeDialog = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
  document.getElementById("dialog").classList.remove("show");
};
window.addEventListener("scroll", () => {
  document.documentElement.style.setProperty(
    "--scroll-y",
    `${window.scrollY}px`
  );
});
// Set event handlers for each button

// slider
// var swiper = new Swiper(".swiper-container", {
//   direction: "vertical", // Set the direction to 'vertical'
//   slidesPerView: "auto", // Set to 1 to show one slide at a time
//   spaceBetween: 0, // No space between slides
//   loop: true,
//   autoplay: {
//     delay: 1000, // Adjust autoplay delay in milliseconds
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
// Get the button element
// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  var swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "slide", // Use the slide effect
    speed: 1000, // Set the transition speed in milliseconds
  });

  // Get the button element
  var prevSlideButton = document.getElementById('prevSlideButton');

  // Check if the button element exists
  if (prevSlideButton) {
    // Add click event listener to the button
    prevSlideButton.addEventListener('click', function () {
      // Move to the previous slide
      swiper.slidePrev();
    });
  } else {
    console.error("Button element not found.");
  }
});
