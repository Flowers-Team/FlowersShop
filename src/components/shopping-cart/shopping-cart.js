const shopping_cart_icon = document.querySelector(".shopping-cart-icon");
const shopping_cart = document.querySelector(".shopping-cart");

removeCardNodeList.forEach((removeCard, index) => {
    removeCard.addEventListener("click", () => {
        pickedCard[index].style.display = "none";
    });
});
