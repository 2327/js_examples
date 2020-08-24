'use strict';

let buttons = document.querySelectorAll('button.toBasketBtn');
console.log(buttons)
let basket = []

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    })
});

function handleClick(clickedButtonEvent) {
    const currentButton = clickedButtonEvent.target;
    console.log(currentButton);
    let id = currentButton.getAttribute('data-id')
    let quantity;
    let additionProduct = basket.filter(el => el.id === id);
    console.log('0: ' + additionProduct);

    if (additionProduct.length != 0) {
        quantity = additionProduct.quantity;
        console.log(typeof(quantity));
        console.log(quantity);
        quantity = quantity + 1;
        console.log(quantity);
    } else {
        quantity = 1;
    }

    basket.push({
        id: currentButton.getAttribute('data-id'),
        price: currentButton.getAttribute('data-price'),
        name: currentButton.getAttribute('data-name'),
        quantity: quantity});

    console.log(basket);
}
