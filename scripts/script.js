import { homepageHero } from './layout/homepage-hero.js';
import { featuredProductCarousel } from './layout/featured-product-carousel.js';
import { displayCurrentProducts } from './layout/account-products.js';
import { renderCart } from './layout/render-cart.js';
import { renderProduct } from './layout/render-product.js';

//import logout from './admin/logout.js'

(async function content() {
    try {
        renderProduct();
        homepageHero();
        featuredProductCarousel()
        renderCart();

    } catch (error) {
        console.log(error);
    }
})()

displayCurrentProducts();
//logout()

