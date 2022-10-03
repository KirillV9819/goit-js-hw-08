import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryMarkUp = createMarkUp(galleryItems);

galleryRef.insertAdjacentHTML("afterbegin", galleryMarkUp);

function createMarkUp(galleryItems) {
   return galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" 
    alt="${description}" />
    </a>`
    )
    .join("");
};

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});