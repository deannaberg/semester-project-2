import { cartArray } from '../components/cart-array.js';

const cartContainer = document.querySelector('#cart-wrapper');


const cartProducts = await cartArray();


export async function renderCart() {

    cartProducts.forEach((cartElement) => {
        cartContainer.innerHTML += `<li class="list-group-item">
                                        <div class="d-flex justify-content-between">
                                        <div class="" >
                                            <img class="img-contain" style="height: 100px" src="${cartElement.img}" alt=""/>
                                            </div>
                                        <p>${cartElement.title}</p>
                                        <p>$${cartElement.price}</p>
                                        <a href="products/product-details.html?id=${cartElement.id}" class="btn btn-primary">View Product</a>
                                        </div>
                                        </li>`;
    });

}