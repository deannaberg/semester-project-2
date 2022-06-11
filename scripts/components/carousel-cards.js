
export default function carouselCards(data, container) {

    const element = document.querySelector(container);


    element.innerHTML += `<div class="card col">
                                <img src="${data.image.url}" class="card-img-top" alt="${data.image.alternativeText}"></img>
                                <div class="card-body">
                                    <h5 class="card-title">${data.title}</h5>
                                </div>
                            </div>
                            `;
}

