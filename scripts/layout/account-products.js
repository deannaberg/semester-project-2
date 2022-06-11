import { getProducts } from "../utilities/get-products.js";


export async function displayCurrentProducts() {
    try {
        const products = await getProducts();
        products.forEach(product => {

            const productContainer = document.querySelector("#currentProducts");

            productContainer.innerHTML += `<div class="col">
                                                    <div class="card text-center shadow" style="width: 18rem;">
                                                    <div class="card-header">
                                                    <h5 class="card-title">${product.title}</h5>
                                                    </div>
                                                    <img src="${product.image.url}" class="card-img-top" style="max-width: 100px" alt="${product.image.alternativeText}">
                                                        <div class="card-body">
                                                        
                                                            <div class="btn-group mt-4" type="group">
                                                                <button id="deleteProductBtn" type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#deleteWarningModal">Delete</button>
                                                                <button id="editProductBtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editProductModal">Edit</button>
                                                            </div>
                                                            </div>
                                                    </div>
                                                </div>`;
        });
    } catch (error) {
        console.log(error)
    }
}

