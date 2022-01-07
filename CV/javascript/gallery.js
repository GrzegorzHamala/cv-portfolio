import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".img");
const createGallery = (galleryItems) => {
  for (const items of galleryItems) {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item");
    gallery.append(galleryItem);

    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = items.original;
    galleryItem.append(galleryLink);

    const galleryImg = document.createElement("img");
    galleryImg.classList.add("gallery__image");
    galleryImg.src = items.preview;
    galleryImg.dataset.source = items.original;
    galleryImg.alt = items.description;
    galleryLink.append(galleryImg);
  }
};

gallery.addEventListener("click", selectImage);

function selectImage(event) {
  event.preventDefault();
  for (const items of galleryItems) {
    const instance = basicLightbox.create(`<img src=${items.original}>`);

    if (event.target.src === items.preview) {
      instance.show();
    }
  }
}

createGallery(galleryItems);

// import { galleryItems } from "./gallery-items";

// export function PortfolioUp(event) {
//   for (let image of galleryItems) {
//     const instance = document.querySelector("#Portfolio").src = `${image.original}`;

//      if (event.target.src === image.preview) {
//        instance.show();
//      }
//   }
// }

// export function PortfolioOut() {
//   document.querySelector("#Portfolio").src =
//     "./../images/img/portfolio-img.jpg";
//   document.querySelector("#Portfolio").style = "position: none";
// }

// function BanerUp() {
//   document.querySelector("#Baner").src = "./../images/img/baner.jpg";
//   document.querySelector("#Baner").style =
//     "position: absolute; background-color: #000000";
//   document.querySelector("body").style = "background-color: #00000099";
// }

// function BanerOut() {
//   document.querySelector("#Baner").src = "./../images/img/baner-img.jpg";
//   document.querySelector("#Baner").style = "position: none";
//   document.querySelector("body").style = "background-color: none";
// }
