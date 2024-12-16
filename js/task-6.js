// #region MyRegion

// Напиши скрипт створення й очищення колекції елементів
// з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів.
// Після натискання на кнопку Create має рендеритися(додаватися в DOM)
// колекція з відповідною кількістю елементів і очищатися значення в
// інпуті.
// При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова.
// Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input,
//   воно має бути в межах від 1 до 100 включно.Тільки якщо воно задоволяє умову,
//   мають додаватися нові < div > елементи в DOM.
// Для рендеру елементів на сторінці створи функцію createBoxes(amount),
// //   яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
// // Функція має створювати стільки < div > елементів, скільки вказано в параметрі amount.
// // Усі ці < div > мають додаватися за одну операцію у DOM дочірніми елементами для div#boxes.

// // Розміри першого <div> елемента мають бути 30px на 30px.
// // Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// // Усі елементи повинні мати випадковий колір фону.
// // Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

// // Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(),
// //   яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// const numberInput = document.querySelector("input");
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const boxes = document.querySelector("#boxes");

// createBtn.addEventListener("click", handleCreateBtn);

// function handleCreateBtn() {
//   const allCreateElements = [];

//   console.log(numberInput.value);

//   for (let i = 0; i < numberInput.value; i++) {
//     const createDiv = document.createElement("div");
//     createDiv.textContent = "div";

//     const addSize = 10 * i + 30;
//     console.log(addSize);

//     createDiv.style.width = `${addSize}px`;
//     createDiv.style.height = `${addSize}px`;

//     createDiv.style.background = getRandomHexColor();
//     console.log(createDiv);
//     allCreateElements.push(createDiv);
//   }
//   boxes.append(...allCreateElements);
//   numberInput.value = 1;
// }

// destroyBtn.addEventListener("click", destroyBoxes);
// function destroyBoxes() {
//   boxes.innerHTML = "";
//   numberInput.value = 1;
// }

// // element.innerHTML - містить HTML-вміст елемента element.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

//#endregion MyRegion

const numberInput = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", handleCreateBtn);

function handleCreateBtn() {
  const inputValue = parseInt(numberInput.value.trim(), 10);

  if (isNaN(inputValue) || inputValue < 1 || inputValue > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  destroyBoxes();

  const allCreateElements = [];
  for (let i = 0; i < inputValue; i++) {
    const createDiv = document.createElement("div");
    createDiv.textContent = "div";

    const addSize = 10 * i + 30;

    createDiv.style.width = `${addSize}px`;
    createDiv.style.height = `${addSize}px`;
    createDiv.style.background = getRandomHexColor();

    allCreateElements.push(createDiv);
  }

  boxes.append(...allCreateElements);

  numberInput.value = "";
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
