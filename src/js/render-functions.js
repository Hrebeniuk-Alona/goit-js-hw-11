
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".span");

export  function createGallery(images) {
    gallery.innerHTML=images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-img" src="${webformatURL}" alt="${tags}">
        <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${likes}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${views}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${comments}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${downloads}</p>
      </li>
     </ul>
        </a>
        </li>`
    ).join("");

    const galleryModal = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay : 250
    })
     galleryModal.refresh()
}


export function clearGallery() {
    gallery.innerHTML = "";
    
}

export function showLoader() {
    loader.classList.add("loader");
}

export function hideLoader() {
    loader.classList.remove("loader");
}



