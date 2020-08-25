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
    console.log('0: ' + JSON.stringify(additionProduct));

    if (additionProduct.length > 1) {
        console.log("error!!");
    } else if (additionProduct.length === 1) {
        quantity = additionProduct[0].quantity;
        quantity = quantity + 1;
        additionProduct[0].quantity = quantity;
    } else {
        quantity = 1;
        basket.push({
            id: currentButton.getAttribute('data-id'),
            price: currentButton.getAttribute('data-price'),
            name: currentButton.getAttribute('data-name'),
            quantity: quantity});
    }

    console.log(basket);
}
