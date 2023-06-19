const arrayLink = [
  "/src/img/shopping-cart/buket.png",
  "/src/img/shopping-cart/rose.png",
];
const arrayAlt = ["buket", "rose"];
const nameCard = ["рубиновые искры", "рубиновые искры"];
const priceCard = ["167.00 ₽", "167.00 ₽"];
const containerCards = document.querySelector(".container-cards-shopping-cart");

const decodeHtmlCharCodes = (str) =>
  str.replace(/(&#(\d+);)/g, (match, capture, charCode) =>
    String.fromCharCode(charCode)
  );

const generateCard = () => {
  arrayLink.forEach((elem, index) => {
    const article = document.createElement("article");
    article.classList.add("picked-card");
    //-----------------------------------------
    const divContainer = document.createElement("div");
    divContainer.classList.add("container");
    const img = document.createElement("img");
    img.src = elem;
    img.alt = arrayAlt[index];
    const divCol_2 = document.createElement("div");
    divCol_2.classList.add("col", "col-2");
    //-----------------------------------------
    const h5 = document.createElement("h5");
    h5.textContent = nameCard[index];
    const divCounter = document.createElement("div");
    divCounter.classList.add("counter");
    //-----------------------------------------
    const divMinus = document.createElement("div");
    divMinus.classList.add("minus");
    divMinus.textContent = decodeHtmlCharCodes(`&#8722;`);
    const divNumber = document.createElement("div");
    divNumber.classList.add("number");
    divNumber.textContent = "1";
    const divPlus = document.createElement("div");
    divPlus.classList.add("plus");
    divPlus.textContent = decodeHtmlCharCodes(`&#43;`);
    divCounter.append(divMinus, divNumber, divPlus);
    //-----------------------------------------
    divCol_2.append(h5, divCounter);
    //-----------------------------------------
    const divCol_3 = document.createElement("div");
    divCol_3.classList.add("col", "col-3");
    const h6 = document.createElement("h6");
    h6.textContent = priceCard[index];
    const button = document.createElement("button");
    button.classList.add("remove-card");
    button.textContent = "Удалить";
    divCol_3.append(h6, button);
    //-----------------------------------------
    divContainer.append(img, divCol_2, divCol_3);
    //-----------------------------------------
    const hr = document.createElement("hr");
    article.append(divContainer, hr);
    containerCards.appendChild(article);
  });
};

generateCard();

const shopping_cart = document.querySelector(".shopping-cart");
const plusNodeList = document.querySelectorAll(".plus");
const minusNodeList = document.querySelectorAll(".minus");
const number = document.querySelectorAll(".number");
const removeCardNodeList = document.querySelectorAll(".remove-card");
const pickedCard = document.querySelectorAll(".picked-card");
const basketIcon = document.querySelector(".header__basket");
const closeCart = document.querySelector(".close-cart");

basketIcon.addEventListener("click", () => {
  shopping_cart.style.display = "flex";
});

closeCart.addEventListener("click", () => {
  shopping_cart.style.display = "none";
});

plusNodeList.forEach((plus, index) => {
  plus.addEventListener("click", (e) => {
    let currentNumber = number[index].textContent;
    currentNumber = Number(currentNumber);
    number[index].textContent = ++currentNumber;

    if (currentNumber > 0) {
      minusNodeList[index].classList.remove("block-click");
    }
  });
});

minusNodeList.forEach((minus, index) => {
  minus.addEventListener("click", () => {
    let currentNumber = number[index].textContent;
    currentNumber = Number(currentNumber);
    number[index].textContent = --currentNumber;

    if (currentNumber <= 0) {
      minus.classList.add("block-click");
    }
  });
});

removeCardNodeList.forEach((removeCard, index) => {
  removeCard.addEventListener("click", () => {
    pickedCard[index].style.display = "none";
  });
});
