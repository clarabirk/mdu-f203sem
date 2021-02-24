"use strict"; // to enable strict mode and modern JavaScript functionality

let slideSections;

document.addEventListener("DOMContentLoaded", function () {
  slideSections = document.querySelectorAll(".section-slide");

  showSlideSection("section1"); // show the first section
});

function hideAllSlideSections(){
  for (const slideSection of slideSections) {
    slideSection.style.display = "none";
  }
}

function showSlideSection(idOfSlideSection){
  hideAllSlideSections(); // start by hiding all slides sections
  document.getElementById(idOfSlideSection).style.display = "block";
}

