
import { apiUrl } from "./api.js";


const queryString = document.location.search;

const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = apiUrl;

const product = `${url}products/${id}`;
console.log(product)


export async function getDetails() {
    try {
        const response = await fetch(product);
        const json = await response.json();

        return json;
    }
    catch
    (error) {
        console.log(error)
    }
}
