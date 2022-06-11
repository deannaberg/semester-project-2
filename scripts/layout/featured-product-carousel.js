import { getProducts } from "../utilities/get-products.js";
import carouselCards from "../components/carousel-cards.js";

export async function featuredProductCarousel() {
    const featureCarousel = "#featuredProducts";
    const featuredProducts = await getProducts();


    for (let i = 0; i < featuredProducts.length; i++) {
        if (featuredProducts[i].featured === true) {
            carouselCards(featuredProducts[i], featureCarousel)

        }

    }

}
