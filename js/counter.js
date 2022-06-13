//Прослушка всего окна
window.addEventListener("click", function (event) {
  //Обьявляем переменную для счётчика
  let counter;

  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    //Находим обертку счетчика
    const counterWrapper = event.target.closest(".counter-wrapper");
    //Находим div с числом счётчика
    counter = counterWrapper.querySelector("[data-counter]");
  }
  //Проверяем является ли элемент кнопкой плюс
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
    //Функция пересчета стоимости
    if (
      event.target.hasAttribute("data-action") &&
      event.target.closest(".cart-wrapper")
    ) {
      //Функция пересчета стоимости
      calcCartPriceAndDelivery();
    }
  }
  //Проверяем является ли элемент кнопкой плюс
  if (event.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 1) {
      //Уменьшаем значение на 1
      counter.innerText = --counter.innerText;
    } else if (
      //
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      //Удаляем товар из корзины
      event.target.closest(".cart-item").remove();
      //Отображение статуса корзины пуста/полная
      toggleCartStatus();
      //Функция пересчета стоимости
      calcCartPriceAndDelivery();
    }
    //Клик на + и - для пересчета общей стоисоти
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
      //Функция пересчета стоимости
      calcCartPriceAndDelivery();
    }
  }
});
