//Находим элементы для взаимодействия
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

//Отслеживаем клик на минус
btnMinus.addEventListener('click', function(){
    //Проверка на число больше 1
    if (parseInt(counter.innerText) > 1) {
        //Уменьшаем значение на 1 
        counter.innerText = --counter.innerText;
    } 
});
//Отслеживаем клик по плюс
btnPlus.addEventListener("click", function () {
    //Увеличиваем значение на 1
    counter.innerText = ++counter.innerText;
});