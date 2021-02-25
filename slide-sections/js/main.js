"use strict"; // to enable strict mode and modern JavaScript functionality

/* ----------- Global Variables ----------- */
let slideSections;
let activeSlide = 0;

/* ----------- The DOM is ready ----------- */
document.addEventListener("DOMContentLoaded", function () {
  slideSections = document.querySelectorAll(".section-slide"); // declaring slideSections
  showSlideSection("section1"); // show the first section
  setInterval(() => setActiveSlide(), 3000); // start the loop interval 
});

/* ----------- Slide Section Functions ----------- */

/**
 * Hiding all slideSections
 */
function hideAllSlideSections() {
  for (const slideSection of slideSections) {
    slideSection.style.display = "none";
  }
}

/**
 * displaying a slide section by a given id: idOfSlideSection
 */
function showSlideSection(idOfSlideSection) {
  hideAllSlideSections(); // start by hiding all slides sections
  document.getElementById(idOfSlideSection).style.display = "block"; // display the new one by the given id
}

/**
 * Chaning and displaying the active slide section 
 * - changing the global variable activeSlide and display the new active slideSection
 */
function setActiveSlide() {
  if (activeSlide < slideSections.length - 1) { // checking if activeSlide is lower than the number of slide sections
    activeSlide++; // incrementing activeSlide number (+1)
  } else { // if not, change the activeSlide back to the first one
    activeSlide = 0;
  }
  hideAllSlideSections(); //hide all slides
  slideSections[activeSlide].style.display = "block"; // display slide section by activeSlide number
}