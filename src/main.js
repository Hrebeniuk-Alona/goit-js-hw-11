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
    if (!userRequest) {
        iziToast.show({
     message: 'Please write your request!',
     backgroundColor: '#ef4040',
     messageColor: '#ffffff',
     iconUrl: iconError,
     position: 'topRight'
        })

        form.reset();
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
            console.log(error.message);
            iziToast.show({
                title: 'ERROR',
                titleColor: '#ffffff',
                message: 'Error connecting to server',
                messageColor: '#ffffff',
                iconUrl: iconError,
                backgroundColor: '#B51B1B',
                position: 'topRight'})
        })

    .finally(() => {
      hideLoader();
    });
    
 
    form.reset()

}
