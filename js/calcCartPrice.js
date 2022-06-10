function calcCartPrice () {
    const cartItems = document.querySelectorAll('.cart-item');

    let totalPrice = 0;
    let totalPriceOnPage = document.querySelector('.total-price');

    cartItems.forEach(function (item) {
       
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');

        const curentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

        totalPrice += curentPrice; 
    })
    //Отображаем цену на странице
    totalPriceOnPage.innerText = totalPrice;
}