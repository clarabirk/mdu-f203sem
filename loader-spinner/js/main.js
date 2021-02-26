"use strict"; // to enable strict mode and modern JavaScript functionality

/* ----------- The DOM is ready ----------- */
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    showLoader(false); // hide loader after 3 sec
  }, 3000)
});

// to shoe and hide the loader
function showLoader(show) {
  let loader = document.getElementById('loader');
  if (show) {
    loader.classList.remove("hide");
  } else {
    loader.classList.add("hide");
  }
}