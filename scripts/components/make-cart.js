import { cartArray } from "./cart-array.js";

export default function addToCart(targetButton) {
    const element = document.querySelectorAll(targetButton);
    element.forEach((button) => {
        button.addEventListener("click", handleClick);
    });
}

function handleClick() {

    let cartProducts = cartArray();

    const id = this.dataset.id;
    const title = this.dataset.title;
    const img = this.dataset.img;
    const price = this.dataset.price;

    const product = { id: id, title: title, img: img, price: price };

    cartProducts.push(product);

    saveProduct(cartProducts);

}
function saveProduct(items) {
    localStorage.setItem("cart", JSON.stringify(items));
}

