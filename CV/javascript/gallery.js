import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".img");

gallery.addEventListener("click", selectImage);

function selectImage() {
  for (const items of galleryItems) {
      if (items = true) {
         items.original;
      }
      else {
        items.preview;
      }
  }
}