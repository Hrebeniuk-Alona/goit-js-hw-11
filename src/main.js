import getImagesByQuery from './js/pixabay-api';
import {createGallery, clearGallery, showLoader, hideLoader} from './js/render-functions';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import iconError from "./img/error.svg";


const form = document.querySelector(".form");
const input = document.querySelector("[name='search-text']");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".span").classList.remove("loader");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    clearGallery();

    const userRequest = input.value.trim();
    if (userRequest=== "") {
        return;
    }

    showLoader();

    getImagesByQuery(userRequest)
    .then(response => {
        const aray = response.data.hits;
        if (aray.length === 0) {
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                messageColor: '#fafafb',
                backgroundColor: '#ef4040',
                iconUrl: iconError,
                position: 'topRight'
            })
            return;
        }

        createGallery(aray);

    })
        .catch(error => {
            console.log(error);
        })
    .finally(() => {
      hideLoader();
    });
    
 
    form.reset()

}
