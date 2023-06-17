const row1 = document.querySelector(".row");
console.log(row1);
const arrayFlowers1 = [
  "Букеты из гипсофил",
  "Букеты из ромашек",
  "Букеты из хризантем",
  "Комнатные цветы в горшках",
  "Монобукеты",
];

const generateFlowersModification = (array, container) => {
  array.forEach((elem) => {
    console.log(elem);
    const div = document.createElement("div");
    div.textContent = elem;
    div.classList.add("modificator");
    container.appendChild(div);
  });
};

generateFlowersModification(arrayFlowers1, row1);
