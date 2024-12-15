// Напиши скрипт, який змінює колір фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color і
// задає це значення кольору текстовим вмістом для span.color.

const spanColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");

btnChangeColor.addEventListener("click", handleClick);

function handleClick(event) {
  const newColor = getRandomHexColor();
  spanColor.textContent = newColor;
  body.style.background = newColor;

  console.log(newColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
