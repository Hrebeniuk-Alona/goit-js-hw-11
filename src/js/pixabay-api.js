import axios from "axios";

const API_KEY = "49725109-808c4ffe1912c75b108e52d51";



export default function getImagesByQuery(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
       safesearch: true
    })

    return axios(`https://pixabay.com/api/?${params}`)
}