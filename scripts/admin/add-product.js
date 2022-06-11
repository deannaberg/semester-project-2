import { getToken } from "../utilities/storage.js";
import { apiUrl } from "../utilities/api.js";

const addProductForm = document.querySelector('#addProductForm');
const title = document.querySelector('#addTitle');
const img = document.querySelector('#addImg');
const description = document.querySelector('#addDescription');
const price = document.querySelector('#addPrice');
//const featured = document.querySelector('#featuredToggle');


addProductForm.addEventListener("submit", submitNewProduct);
const url = apiUrl + "products";

function submitNewProduct(event) {
    event.preventDefault();

    const titleValue = title.value.trim();
    const imgValue = img.value.trim();
    const descriptionValue = description.value.trim();
    const priceValue = parseFloat(price.value);

    if (titleValue.length === 0 || imgValue.length === 0 || descriptionValue.length === 0 || priceValue.length === 0 || isNaN(priceValue)) {
        console.log("please supply proper values");
    }
    addProduct(titleValue, imgValue, descriptionValue, priceValue);
}

async function addProduct(title, img, description, price) {


    const data = JSON.stringify({ title: title, img: img, description: description, price: price });

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.created_at) {
            console.log("Product has been created");
        }

        if (json.error) {
            console.log("there has been an error");
        }
    } catch (error) {
        console.log(error);

    }
}
