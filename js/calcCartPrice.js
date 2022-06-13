function calcCartPriceAndDelivery () {
    const cartItems = document.querySelectorAll('.cart-item');

    let totalPrice = 0;
    let totalPriceOnPage = document.querySelector('.total-price');
    let deliveryStatus = document.querySelector(".delivery-cost");

    cartItems.forEach(function (item) {
       
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');

        const curentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

        totalPrice += curentPrice; 
    })
    //Отображаем цену на странице
    totalPriceOnPage.innerText = totalPrice;

    if (totalPrice >= 600) {
        deliveryStatus.innerText = 'бесплатно';
        deliveryStatus.classList.replace("canvas", "free");
    } else {
        deliveryStatus.innerText = "250 рублей";
        deliveryStatus.classList.replace('free', 'canvas');
    }
}