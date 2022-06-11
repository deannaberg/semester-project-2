import { getData } from '../utilities/get-data.js';
const heroContainer = document.querySelector("#hero-container");

export async function homepageHero() {
    const heroPath = "homepage-hero";
    const content = await getData(heroPath);

    const img = content.image.url;



    heroContainer.innerHTML = `
                                <img class="hero-img" src="${img}"/>
                                <div class="hero-text container">
                                <div class="w-75 position-absolute top-50">
                                    <h1>${content.Title}</h1>
                                    <p class="lead pt-3">${content.subText}</p>
                                    <a href="#" class="btn btn-dark btn-lg rounded-pill mt-3" >Get a Free Quote</a>
                                    </div>
                                </div>
                                
                            `

}


