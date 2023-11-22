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
    .getElementById("scrollToTopButton1")
    .addEventListener("click", function () {
      swiper.slidePrev();
    });
});
