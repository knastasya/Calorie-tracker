// трекер воды

const glassCountForm = document.querySelector(".diary-water-tracker__form");
const trackerInput = document.querySelector(".diary-water-tracker__form");
const glassCountRes = document.querySelector(".diary-water-tracker__crrnt-res");


const handleFormChange = (e) => {
    const glassCount = e.target.value;
    console.log(glassCount)
    glassCountRes.textContent = `${glassCount*200}`;
    return e.target.value
}

glassCountForm.addEventListener("change", handleFormChange)


/// плавно скрыть-показать див

const buttonBreakfast = document.getElementById("button-breakfast");
const accordeon = document.querySelector(".accordeon1"); 

const buttonLunch = document.getElementById("button-lunch")
const accordeon2 = document.querySelector(".accordeon2");

const buttonDinner = document.getElementById("button-dinner")
const accordeon3 = document.querySelector(".accordeon3");

const buttonSnack = document.getElementById("button-snack")
const accordeon4 = document.querySelector(".accordeon4");


buttonBreakfast.addEventListener('click', () => showAndHideDiv (accordeon, buttonBreakfast));

buttonLunch.addEventListener('click', () => showAndHideDiv (accordeon2, buttonLunch));

buttonDinner.addEventListener('click', () => showAndHideDiv (accordeon3, buttonDinner));

buttonSnack.addEventListener('click', () => showAndHideDiv (accordeon4, buttonSnack));



function showAndHideDiv (a, b) {

    if (a.style.visibility !== 'hidden') {

        a.style.visibility="hidden";
        a.style.height = "0px"
        a.style.opacity = "0";
        a.style.transition = "0.5s";

        b.classList.remove('diary-table-string__add-btn_focus');

    } else {
        a.style.visibility="visible";
        a.style.height = `${a.children.length*64}px`;
        a.style.transition = "0.5s";
        a.style.opacity = "1";
        b.classList.add('diary-table-string__add-btn_focus');
        
    }
  
};

// Настя Кольцова - начало - для charts.js

const setKcalOrMacroAttribute = (element) => {
    const kcalOrMacroValue = element.innerText.split(' ')[0];
    element.setAttribute('data', kcalOrMacroValue);
};

const breakfastAmountElement = document.querySelector('.diary-kcal__breakfast-amount');
setKcalOrMacroAttribute(breakfastAmountElement);
const lunchAmountElement = document.querySelector('.diary-kcal__lunch-amount');
setKcalOrMacroAttribute(lunchAmountElement);
const dinnerAmountElement = document.querySelector('.diary-kcal__dinner-amount');
setKcalOrMacroAttribute(dinnerAmountElement);
const snackAmountElement = document.querySelector('.diary-kcal__snack-amount');
setKcalOrMacroAttribute(snackAmountElement);

const carboAmountElement = document.querySelector('.diary-macro__carbo-amount');
setKcalOrMacroAttribute(carboAmountElement);
const proteinAmountElement = document.querySelector('.diary-macro__protein-amount');
setKcalOrMacroAttribute(proteinAmountElement);
const fatsAmountElement = document.querySelector('.diary-macro__fats-amount');
setKcalOrMacroAttribute(fatsAmountElement);


const setLocalStorageItem = (key, selector, attribute) => {
    const value = document.querySelector(selector).getAttribute(attribute);
    localStorage.setItem(key, value);
};

setLocalStorageItem('breakfastAmount', '.diary-kcal__breakfast-amount', 'data');
setLocalStorageItem('lunchAmount', '.diary-kcal__lunch-amount', 'data');
setLocalStorageItem('dinnerAmount', '.diary-kcal__dinner-amount', 'data');
setLocalStorageItem('snackAmount', '.diary-kcal__snack-amount', 'data');

setLocalStorageItem('carboAmount', '.diary-macro__carbo-amount', 'data');
setLocalStorageItem('proteinAmount', '.diary-macro__protein-amount', 'data');
setLocalStorageItem('fatsAmount', '.diary-macro__fats-amount', 'data');

// Настя Кольцова - конец - для charts.js