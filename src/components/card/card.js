const array_links = [
  "./images/flower-1.png",
  "./images/flower-2.png",
  "./images/flower-3.png",
  "./images/flower-4.png",
  "./images/flower-5.png",
  "./images/flower-6.png",
  "./images/flower-7.png",
  "./images/flower-8.png",
  "./images/flower-9.png",
  "./images/flower-10.png",
  "./images/flower-11.png",
  "./images/flower-12.png",
];

const generateCards = (array) => {
  const container_cards = document.querySelector(".container-cards");
  for (let i = 0; i < array.length; i++) {
    const card = document.createElement("article");
    const img = document.createElement("img");
    const h5 = document.createElement("h5");
    const small = document.createElement("small");
    const button = document.createElement("button");

    card.classList.add("card");
    img.src = array[i];
    h5.textContent = "лучший день";
    small.textContent = "167.000 ₽";
    button.textContent = "В корзину";
    // button.disabled = true;
    card.appendChild(img);
    card.appendChild(h5);
    card.appendChild(small);
    card.appendChild(button);
    container_cards.appendChild(card);
  }
};

const generateCircleNew = (card) => {
  const circle_new = document.createElement("div");
  const h6 = document.createElement("h6");
  h6.textContent = "new";
  circle_new.classList.add("circle", "circle-new");
  circle_new.appendChild(h6);
  card.appendChild(circle_new);
};

const generateCircleSale = (card) => {
  const circle_sale = document.createElement("div");
  const h6 = document.createElement("h6");
  h6.textContent = "sale";
  circle_sale.classList.add("circle", "circle-sale");
  circle_sale.appendChild(h6);
  card.appendChild(circle_sale);
};

generateCards(array_links);

const cards = document.querySelectorAll(".card");

generateCircleNew(cards[0]);
generateCircleSale(cards[1]);
// generateCircleSale(cards[9]);