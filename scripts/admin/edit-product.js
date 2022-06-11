import { getToken } from "../utilities/storage.js";
import { apiUrl } from "../utilities/api.js";

const editProductForm = document.querySelector('#editProductForm');
const title = document.querySelector('#editTitle');
const img = document.querySelector('#editImg');
const description = document.querySelector('#editDescription');
const price = document.querySelector('#editPrice');

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = apiUrl + "products/" + id;


(async function () {
    try {
        const response = await fetch(url);
        const product = await response.json();

        title.value = product.title;
        img.value = product.image;
        description.value = product.description;
        price.value = product.price;



    } catch (error) {
        console.log(error);
    }
})();

editProductForm.addEventListener("submit", submitEditedProduct);


function submitEditedProduct(event) {
    event.preventDefault();

    const titleValue = title.value.trim();
    const imgValue = img.value.trim();
    const descriptionValue = description.value.trim();
    const priceValue = parseFloat(price.value);

    if (titleValue.length === 0 || imgValue.length === 0 || descriptionValue.length === 0 || priceValue.length === 0 || isNaN(priceValue)) {
        console.log("please supply proper values");
    }
    updateProduct(titleValue, imgValue, descriptionValue, priceValue);
}

async function updateProduct(title, img, description, price) {


    const data = JSON.stringify({ title: title, img: img, description: description, price: price });

    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.updated_at) {
            console.log("Product has been updated");
        }

        if (json.error) {
            console.log("there has been an error");
        }
    } catch (error) {
        console.log(error);

    }
}