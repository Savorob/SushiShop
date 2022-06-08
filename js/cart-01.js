//Div внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper');

//Отследить клик
window.addEventListener('click', function(event){
    //проеверяем, что клик произошел по корзине
    if (event.target.hasAttribute('data-cart')) {
        console.log('add to cart')
        //Находим карточку товара внутри которой произошел клик
        const card = event.target.closest('.card');

        //Собираем данные карточки
        const productInfo = {
          id: card.dataset.id ,
          imgSrc: card.querySelector(".product-img").getAttribute("src"),
          title: card.querySelector(".item-title").innerText,
          itemsBox: card.querySelector("[data-items-in-box]").innerText,
          weight: card.querySelector(".price__weight").innerText,
          price: card.querySelector(".price__currency").innerText,
          counter: card.querySelector("[data-counter]").innerText,
        };
        console.log(productInfo);
        
        const cartItemHTML = `<div class="cart-item" data-id="$productInfo.id">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsBox}/${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price} ₽</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`;
        //Отобразм товар в корзине
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    }
})