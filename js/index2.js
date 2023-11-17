// popup
function openPopup() {
  document.getElementById("popup").style.transition = "0.2s all ease-in";
  document.getElementById("popup").style.visibility = "visible";
  document.getElementById("popup").style.right = "0";
}

function closePopup() {
  document.getElementById("popup").style.right = "-2000px";
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

// map
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// modal
// modal
// Function to toggle the visibility of the modal
function toggleDialog() {
  var modal = document.getElementById("dialog");
  modal.style.display =
    modal.style.display === "none" || modal.style.display === ""
      ? "block"
      : "none";
}
// Set event handlers for each button

// JavaScript function to toggle the visibility of the modal and set the video source
function toggleModal(cardId) {
  var modal = document.querySelector(".video_modal");
  var videoIframe = document.getElementById("videoIframe");
  var videoSource;

  switch (cardId) {
    case "card1":
      videoSource = "https://youtu.be/Dv-ED_WtPME";
      break;
    case "card2":
      videoSource = "https://youtu.be/o7hl9ou71V0";
    case "card3":
      videoSource = "https://youtu.be/3u8jw89JF9Q";
    case "card4":
      videoSource = "https://youtu.be/xf1RLp9X19w";
    case "card5":
      videoSource = "https://youtu.be/jHukqpV0WM0";
    case "card6":
      videoSource = "https://youtu.be/Kclp0Z6brTo";
      break;
    // Add more cases as needed for additional cards
    default:
      videoSource = "";
      break;
  }

  if (modal.style.display === "none" || modal.style.display === "") {
    modal.style.display = "block";
    videoIframe.src = videoSource; // Set the video source based on the card identifier
  } else {
    modal.style.display = "none";
    videoIframe.src = ""; // Clear the video source when hiding the modal
  }
}

// Add event listeners to all cards
var cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    var cardId = this.id;
    toggleModal(cardId);
  });
});
