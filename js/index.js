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
var btns = header.getElementsByClassName(".btn_sec1");
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

// item for news2
// const item2 = [
//   {
//     image: "./img/news1_img1.jpg",
//     txt1: "នាព្រឹកថ្ងៃព្រហស្បតិ៍ ១កើត ខែស្រាពណ៍ ឆ្នាំថោះ បញ្ចស័ក ព.ស២៥៦៧ ត្រូវនឹងថ្ងៃទី១៧ ខែសីហា ឆ្នាំ២០២៣នេះ",
//     txt2: "ថ្ងៃព្រហស្បតិ៍ ទី១៧ ខែសីហា ឆ្នាំ២០២៣",
//     txt3: "នាព្រឹកថ្ងៃព្រហស្បតិ៍ ១កើត ខែស្រាពណ៍ ឆ្នាំថោះ បញ្ចស័ក ព.ស២៥៦៧ ត្រូវនឹងថ្ងៃទី១៧",
//   },
//   {
//     image: "./img/news1_img2",
//     txt1: "នាព្រឹកថ្ងៃព្រហស្បតិ៍ ១កើត ខែស្រាពណ៍ ឆ្នាំថោះ បញ្ចស័ក ព.ស២៥៦៧ ត្រូវនឹងថ្ងៃទី១៧ ខែសីហា ឆ្នាំ២០២៣នេះ",
//     txt2: "ថ្ងៃព្រហស្បតិ៍ ទី១៧ ខែសីហា ឆ្នាំ២០២៣",
//     txt3: "នាព្រឹកថ្ងៃព្រហស្បតិ៍ ១កើត ខែស្រាពណ៍ ឆ្នាំថោះ បញ្ចស័ក ព.ស២៥៦៧ ត្រូវនឹងថ្ងៃទី១៧",
//   },
//   {
//     image: "./img/news1_img3.jpg",
//     txt1: "នាព្រឹកថ្ងៃព្រហស្បតិ៍ ១កើត ខែស្រាពណ៍ ឆ្នាំថោះ បញ្ចស័ក ព.ស២៥៦៧ ត្រូវនឹងថ្ងៃទី១៧ ខែសីហា ឆ្នាំ២០២៣នេះ",
//     txt2: "ថ្ងៃព្រហស្បតិ៍ ទី១៧ ខែសីហា ឆ្នាំ២០២៣",
//     txt3: "នាព្រឹកថ្ងៃព្រហស្បតិ៍ ១កើត ខែស្រាពណ៍ ឆ្នាំថោះ បញ្ចស័ក ព.ស២៥៦៧ ត្រូវនឹងថ្ងៃទី១៧",
//   },
//   {
//     image: "./img/news1_img4.jpg",
//     txt1: "នាព្រឹកថ្ងៃព្រហស្បតិ៍ ១កើត ខែស្រាពណ៍ ឆ្នាំថោះ បញ្ចស័ក ព.ស២៥៦៧ ត្រូវនឹងថ្ងៃទី១៧ ខែសីហា ឆ្នាំ២០២៣នេះ",
//     txt2: "ថ្ងៃព្រហស្បតិ៍ ទី១៧ ខែសីហា ឆ្នាំ២០២៣",
//     txt3: "នាព្រឹកថ្ងៃព្រហស្បតិ៍ ១កើត ខែស្រាពណ៍ ឆ្នាំថោះ បញ្ចស័ក ព.ស២៥៦៧ ត្រូវនឹងថ្ងៃទី១៧ ខែសីហា ឆ្នាំ២០២៣នេះ",
//   },
//   {
//     image: "./img/news1_img5.jpg",
//     txt1: "នាព្រឹកថ្ងៃព្រហស្បតិ៍ ១កើត ខែស្រាពណ៍ ឆ្នាំថោះ បញ្ចស័ក ព.ស២៥៦៧ ត្រូវនឹងថ្ងៃទី១៧ ខែសីហា ឆ្នាំ២០២៣នេះ",
//     txt2: "ថ្ងៃព្រហស្បតិ៍ ទី១៧ ខែសីហា ឆ្នាំ២០២៣",
//     txt3: "នាព្រឹកថ្ងៃព្រហស្បតិ៍ ១កើត ខែស្រាពណ៍ ឆ្នាំថោះ បញ្ចស័ក ព.ស២៥៦៧ ត្រូវនឹងថ្ងៃទី១៧ ខែសីហា ឆ្នាំ២០២៣នេះ",
//   },
//   {
//     image: "./img/news1_img6.jpg",
//     txt1: "នាព្រឹកថ្ងៃព្រហស្បតិ៍ ១កើត ខែស្រាពណ៍ ឆ្នាំថោះ បញ្ចស័ក ព.ស២៥៦៧ ត្រូវនឹងថ្ងៃទី១៧ ខែសីហា ឆ្នាំ២០២៣នេះ",
//     txt2: "ថ្ងៃព្រហស្បតិ៍ ទី១៧ ខែសីហា ឆ្នាំ២០២៣",
//     txt3: "នាព្រឹកថ្ងៃព្រហស្បតិ៍ ១កើត ខែស្រាពណ៍ ឆ្នាំថោះ បញ្ចស័ក ព.ស២៥៦៧ ត្រូវនឹងថ្ងៃទី១៧ ខែសីហា ឆ្នាំ២០២៣នេះ",
//   },
// ];

// let box_item2 = "";
// item2.forEach((item, index) => {
//   if (index !== 6) {
//     box_item2 += `
//     <div class="card_news1">
//       <div class="box_img">
//           <img src="${item.image}" alt="">
//       </div>
//       <div class="box_title">
//           <p class="txt1">${item.txt1}</p>
//           <p class="txt2">${item.txt2}</p>
//           <p class="txt3">${item.txt3}</p>
//           <div class="btn_share">
//               <button class="btn" id='show' onClick='showDialog()'>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
//                       <path fill="currentColor"
//                           d="M11.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L13 5.414V15a1 1 0 1 1-2 0V5.414L9.707 6.707a1 1 0 0 1-1.414-1.414l3-3zM4 11a2 2 0 0 1 2-2h2a1 1 0 0 1 0 2H6v9h12v-9h-2a1 1 0 1 1 0-2h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9z" />
//                   </svg>
//                   <p class="txt_share">ចែករំលែក</p>
//               </button>
//           </div>
//       </div>
//     </div>
//         `;
//   }
// });
// document.getElementById("get_item2").innerHTML = box_item2;
// finish item for news2

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
