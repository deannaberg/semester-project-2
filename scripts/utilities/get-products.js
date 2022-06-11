import { getData } from "./get-data.js";

export async function getProducts() {
    const productPath = "products";
    const products = await getData(productPath);

    return products
}