function toggleCartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmpety = document.querySelector("[data-cart-empty]");
    const orderShow = document.getElementById("order-form");

    if(cartWrapper.children.length > 0) {
        cartEmpety.classList.add('none')
        orderShow.classList.remove('none')
    } else {
        cartEmpety.classList.remove('none');
        orderShow.classList.add("none");
    }
}