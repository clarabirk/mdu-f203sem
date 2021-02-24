console.log("Child Theme JS is running!");

document.addEventListener("DOMContentLoaded", function () {
    initTypedJs();
});

// ---------- typed.js ---------- //
function initTypedJs() {
    new Typed(".typed", {
        strings: ["Rasmus Cederdorff.", "a Freelancer.", "a Lecturer.", "a Web Developer.", "an App Developer.", "a Web Architect.", "a Teacher."],
        typeSpeed: 75,
        loop: true
    });
};