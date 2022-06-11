export const cartArray = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
}