
import { getProducts } from '../utilities/get-products.js';
import search from '../components/search.js';
import productListings from './product-listings.js';



(async function content() {
    try {
        const products = await getProducts();

        productListings(products);
        search(products);


    } catch (error) {
        console.log(error);
    }
})()
