import addToCart from "../components/make-cart.js";
import { getDetails } from '../utilities/get-details.js';

export async function renderProduct() {

    try {
        const data = await getDetails();
        console.log(data)
        const breadcrumbProduct = document.querySelector('#breadcrumbProduct');
        breadcrumbProduct.innerHTML = `<span>${data.title}</span>`;

        const detailContainer = document.querySelector('#detailContainer');
        detailContainer.innerHTML = `<div class="row">
                                        <div class="col">
                                        <div class="d-flex justify-content-center align-items-center p-4 shadow mb-5">
                                        <img src="${data.image.url}" style="max-height: 300px;" alt="${data.image.alternativeText}"></img>
                                            </div>
                                        </div>
                                        <div class="col ms-3">
                                            <h1 class="mb-3 h2">${data.title}</h1>
                                            <div class="mb-4">${data.description}</div>
                                            <div>
                                                <p class="h4">Price: $${data.price}</p>
                                                <button class="cartBtn btn btn-primary btn-lg" data-id="${data.id}" data-title="${data.title}" data-img="${data.image.url}" data-price="${data.price}">add to cart</button>
                                            </div>
                                        </div>
                                    </div>`;
    } catch (error) {
        console.log(error)
    }

    const cartBtn = ".cartBtn";
    addToCart(cartBtn);

}
//