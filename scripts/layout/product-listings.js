
export default function productListings(data) {

    data.forEach(product => {

        const equipmentContainer = document.querySelector("#equipmentContainer");
        equipmentContainer.innerHTML += `<div class="col">
                                            <div class="card" style="width: 18rem;">
                                           
                                            <img src="${product.image.url}" class="img-cover"  alt="${product.image.alternativeText}"/>
                                            
                                                <div class="card-body">
                                                    <h5 class="card-title">${product.title}</h5>
                                                    <a href="product-details.html?id=${product.id}" class="btn btn-primary w-100">View Product</a>
                                                </div>
                                            </div>
                                        </div>`;

    });
}
