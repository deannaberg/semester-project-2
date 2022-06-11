import { apiUrl } from "./api.js";

export async function getData(path) {

    const url = apiUrl + path;
    const response = await fetch(url);
    const json = await response.json();


    return json;

}