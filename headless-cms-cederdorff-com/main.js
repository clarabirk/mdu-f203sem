"use strict";

document.addEventListener("DOMContentLoaded", initTypedJs());

// ---------- typed.js ---------- //
function initTypedJs() {
  new Typed(".typed", {
    strings: ["Rasmus Cederdorff.", "a Freelancer.", "a Lecturer.", "a Web Developer.", "an App Developer.", "a Web Architect.", "a Teacher."],
    typeSpeed: 100,
    loop: true,
  });
};

// ---------- smooth scroll ---------- //

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("scrollTop").style.display = "block";
  } else {
    document.getElementById("scrollTop").style.display = "none";
  }
}

function scrollToTheTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// ---------- fetch client posts ---------- //

// const postFetchUrl = "https://api.cederdorff.com/wp-json/wp/v2/posts?_embed";
const postFetchUrl = "https://api.cederdorff.com/wp-json/wp/v2/posts?_embed&categories=2";

fetch(postFetchUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    console.log(posts);
    appendClients(posts);
  });

function appendClients(clients) {
  let html = "";
  for (let i = 0; i < clients.length; i++) {
    let client = clients[i];
    if (i % 2 === 0) { // index is even
      html += /*html*/ `
        <article class="client">
          <div class="col-left even">
            <img src="${getFeaturedImageUrl(client)}" alt="${client.title.rendered}">
          </div>
          <div class="col-right even">
            <div class="container">
              <div class="center">
                <h3>${client.title.rendered}</h3>
                <h4>${client.meta.sub_title[0]}</h4>
                ${client.content.rendered}
                <div class="client-links">
                  <a href="${client.meta.link_url[0]}" target="_blank">${client.meta.link_text[0]} <i class="ion-ios-arrow-forward"></i><i class="ion-ios-arrow-forward"></i> </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        `;
    } else { // index is odd
      html += /*html*/ `
          <article class="client">
            <div class="col-right">
              <img src="${getFeaturedImageUrl(client)}" alt="${client.title.rendered}">
            </div>
            <div class="col-left">
              <div class="container">
                <div class="center">
                  <h3>${client.title.rendered}</h3>
                  <h4>${client.meta.sub_title[0]}</h4>
                  ${client.content.rendered}
                  <div class="client-links">
                    <a href="${client.meta.link_url[0]}" target="_blank">${client.meta.link_text[0]} <i class="ion-ios-arrow-forward"></i><i class="ion-ios-arrow-forward"></i> </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
          `;
    }
  }

  document.querySelector("#clients").innerHTML += html;
}

function getFeaturedImageUrl(client) {
  let imageUrl = "";
  if (client._embedded['wp:featuredmedia']) {
    imageUrl = client._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}