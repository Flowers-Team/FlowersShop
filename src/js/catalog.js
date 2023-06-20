const row1 = document.querySelector(".row-1");
const row2 = document.querySelector(".row-2");
const row3 = document.querySelector(".row-3");

const arrayFlowers1 = [
  "Букеты из гипсофил",
  "Букеты из ромашек",
  "Букеты из хризантем",
  "Комнатные цветы в горшках",
  "Монобукеты",
];

const arrayFlowers2 = [
  "Сборные букеты",
  "Букет на праздник",
  "Композиции из цветов",
  "Конверты",
  "Открытки",
  "Подарки",
  "Букеты из сухоцветов",
];

const arrayFlowers3 = [
  "Шары",
  "Популярное",
  "Букеты роз",
  "Цветы на похороны",
  "Упаковка подарков",
];

const generateFlowersModification = (array, container) => {
  array.forEach((elem) => {
    const div = document.createElement("div");
    div.textContent = elem;
    div.classList.add("modificator");
    container.appendChild(div);
  });
};

generateFlowersModification(arrayFlowers1, row1);
generateFlowersModification(arrayFlowers2, row2);
generateFlowersModification(arrayFlowers3, row3);

const containerIcons = document.querySelector(".container-icons");

const generateSocialMediasIcons = (container) => {
  const arrayLinks = [
    "/src/img/catalog/instagram-icon.png",
    "/src/img/catalog/call-icon.png",
    "/src/img/catalog/viber-icon.png",
  ];

  const arrayAlt = ["instagram", "call", "viber"];

  arrayLinks.forEach((elem, index) => {
    const img = document.createElement("img");
    img.src = elem;
    img.alt = arrayAlt[index];
    container.appendChild(img);
  });
};

generateSocialMediasIcons(containerIcons);

const arrayByLight = ["нежные", "яркие"];

const objByLight = {
  name: "light",
  arrayId: ["id-1", "id-2"],
  arrayBy: ["нежные", "яркие"],
};

const objByColor = {
  name: "color",
  arrayId: ["id-1", "id-2", "id-3", "id-4", "id-5", "id-6", "id-7"],
  arrayBy: [
    "белый",
    "желтый",
    "зеленый",
    "красный",
    "оранжевый",
    "розовый",
    "синий",
  ],
};

const objByFormat = {
  name: "format",
  arrayId: ["id-1", "id-2", "id-3", "id-4", "id-5", "id-6"],
  arrayBy: [
    "букет",
    "в вазе",
    "в конверте",
    "в корзине",
    "в шляпной коробке",
    "в ящике",
  ],
};

const objByFlower = {
  name: "flower",
  arrayId: ["id-1", "id-2", "id-3", "id-4", "id-5"],
  arrayBy: [
    "Альстромерия (2)",
    "Антуриум (1)",
    "Аспарагус (1)",
    "Астильба (7)",
    "Астранция (1)",
  ],
};

const containerFilter = document.querySelector(".container-filter");

const generateCheckBoxBlocks = (obj, title) => {
  const block = document.createElement("div");
  block.classList.add("block");
  const h6 = document.createElement("h6");
  h6.textContent = title;
  block.appendChild(h6);

  obj.arrayBy.forEach((elem, index) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    const moduleDiv = document.createElement("div");
    moduleDiv.classList.add("module");

    input.type = "checkbox";
    input.value = elem;
    input.name = obj.name;
    input.id = obj.arrayId[index];
    label.textContent = elem;
    label.htmlFor = obj.name;
    moduleDiv.appendChild(input);
    moduleDiv.appendChild(label);
    block.appendChild(moduleDiv);
  });

  containerFilter.appendChild(block);
};

const createRange = (title) => {
  const block = document.createElement("div");
  block.classList.add("block");
  const h6 = document.createElement("h6");
  h6.textContent = title;
  const inputFirst = document.createElement("input");
  const inputSecond = document.createElement("input");
  const moduleDiv = document.createElement("div");
  const label = document.createElement("label");
  moduleDiv.classList.add("module");
  inputFirst.type = "range";
  inputFirst.min = 50;
  inputFirst.max = 400;
  inputFirst.setAttribute("value", 50);
  inputFirst.id = "id-lower";
  inputSecond.type = "range";
  inputSecond.min = 50;
  inputSecond.max = 400;
  inputSecond.setAttribute("value", 400);
  inputSecond.id = "id-upper";
  label.textContent = `Цена: ${inputFirst.value}.00 ₽ – ${inputSecond.value}.00 ₽`;
  label.classList.add("label-range");
  moduleDiv.appendChild(inputFirst);
  moduleDiv.appendChild(inputSecond);
  block.appendChild(h6);
  block.appendChild(moduleDiv);
  block.appendChild(label);
  containerFilter.appendChild(block);

  const createInputEvent = () => {
    inputFirst.addEventListener("input", () => {
      label.textContent = `Цена: ${inputFirst.value}.00 ₽ – ${inputSecond.value}.00 ₽`;
    });

    inputSecond.addEventListener("input", () => {
      label.textContent = `Цена: ${inputFirst.value}.00 ₽ – ${inputSecond.value}.00 ₽`;
    });
  };

  return createInputEvent;
};

const setDefaultValueRangeInput = () => {
  const labelRange = document.querySelector(".label-range");
  labelRange.textContent = `Цена: 50.00 ₽ – 400.00 ₽`;
};

const createButtonReset = () => {
  const button = document.createElement("button");
  button.classList.add("button-reset");
  button.classList.add("button__basket");
  button.type = "reset";
  button.textContent = "Сбросить фильтр";
  containerFilter.appendChild(button);

  button.addEventListener("click", () => {
    setDefaultValueRangeInput();
  });
};

generateCheckBoxBlocks(objByLight, "По свету");
generateCheckBoxBlocks(objByColor, "По цвету");
generateCheckBoxBlocks(objByFormat, "по формату");
const functionClosure = createRange("стоимость");
generateCheckBoxBlocks(objByFlower, "по цветку");
createButtonReset();
functionClosure(); // замыкание
