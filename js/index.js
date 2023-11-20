// change picture
function pictureChange(buttonNumber, imagePath) {
  var image = document.getElementById("themImage");
  image.style.opacity = 0;

  setTimeout(function () {
    image.onload = function () {
      image.style.opacity = 1;
    };
    image.src = imagePath;
    setActiveButton(buttonNumber);
  }, 300); // Adjust the delay to match the transition duration (0.3s in this case)
}
function pictureChange1() {
  pictureChange(1, "./img/sec_1_img_1.jpg");
}
function pictureChange2() {
  pictureChange(2, "./img/sec_1_img_2.jpg");
}
function pictureChange3() {
  pictureChange(3, "./img/sec_1_img_3");
}
function pictureChange4() {
  pictureChange(4, "./img/sec_1_img_4.jpg");
}
function pictureChange5() {
  pictureChange(5, "./img/sec_1_img_5");
}
function setActiveButton(btnNumber) {
  // Remove active class from all buttons
  var buttons = document.querySelectorAll(".btn_sec1");
  buttons.forEach(function (button) {
    button.classList.remove("active_icon");
  });

  // Add active class to the clicked button
  var activeButton = document.getElementById("btn" + btnNumber);
  if (activeButton) {
    activeButton.classList.add("active_icon");
  }
}

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
let menufixd = document.querySelector(".navbar");
let headerfixed = document.querySelector(".header");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
    menufixd.classList.add("fixedmenu");
    headerfixed.classList.add("fixedheader");
  } else {
    mybutton.style.display = "none";
    menufixd.classList.remove("fixedmenu");
    headerfixed.classList.remove("fixedheader");
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
// Function to toggle the visibility of the modal
function toggleDialog() {
  var modal = document.getElementById("dialog");
  modal.style.display =
    modal.style.display === "none" || modal.style.display === ""
      ? "block"
      : "none";
}

// slider js
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

  // document.getElementById("nextButton").addEventListener("click", function () {
  //   swiper.slideNext();
  // });

  document
    .getElementById("scrollToTopButton")
    .addEventListener("click", function () {
      swiper.slidePrev();
    });
});
