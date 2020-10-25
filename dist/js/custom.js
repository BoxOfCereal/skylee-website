"use strict";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    console.log("working");

    // Get the modal
    let modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let galleryImgs = document.getElementsByClassName("gallery-img");
    let modalImg = document.getElementById("modal-img");
    let captionText = document.getElementById("caption");

    //add stuff to each img
    Array.from(galleryImgs).forEach((img) => {
      console.log(img);
      img.onclick = function () {
        console.log(img);
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      };
    });

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    modal.onclick = function (e) {
      if (e.target !== this) return;
      modal.style.display = "none";
    };
  },
  false
);
