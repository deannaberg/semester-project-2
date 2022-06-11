
import productListings from "../layout/product-listings.js";

export default function searchProducts(data) {

    const search = document.querySelector("#search");

    search.onkeyup = function (event) {
        const searchValue = event.target.value.trim().toLowerCase();

        const filteredProducts = data.filter(function (item) {
            if (item.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });
        if (!searchValue.length) {
            productListings(data)
        } else {
            productListings(filteredProducts);
        };

    };

}
