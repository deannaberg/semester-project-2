export default function clearItemButton(targetElement) {

    const removeButton = document.querySelectorALL(targetElement);
    console.log(removeButton)

    removeButton.addEventListener("click", clearItem, function (e) {
        e.stopPropogation();
        e.this.remove
    });
}
