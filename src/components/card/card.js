async function getData(arg) {
  let res = await fetch(arg);
  const arrayLinks = [];
  if (res.ok) {
    let json = await res.json();
    json.forEach((element) => {
      arrayLinks.push(element.photo_mini);
    });
    return arrayLinks;
  } else console.log(`Ошибка получения данных: ${res.status}`);
}

const generateCards = () => {
  const container_cards = document.querySelector(".container-cards");
  const res = getData("/src/js/catalog.json");
  res.then((data) => {
    data.forEach((element) => {
      const card = document.createElement("article");
      const img = document.createElement("img");
      const h5 = document.createElement("h5");
      const small = document.createElement("small");
      const button = document.createElement("button");
      card.classList.add("card");
      img.src = element;
      h5.textContent = "лучший день";
      small.textContent = "167.000 ₽";
      button.textContent = "В корзину";
      // button.disabled = true;
      card.appendChild(img);
      card.appendChild(h5);
      card.appendChild(small);
      card.appendChild(button);
      container_cards.appendChild(card);
    });

    console.log(document.querySelectorAll("article"));
    const cards = document.querySelectorAll(".card");

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

    generateCircleNew(cards[1]);
    generateCircleSale(cards[3]);
    generateCircleSale(cards[5]);
    generateCircleSale(cards[8]);
    generateCircleSale(cards[10]);
  });
};

generateCards();
