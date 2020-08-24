'use strict';

let buttons = document.querySelectorAll('button.toBasketBtn');
console.log(buttons)
let bucket = []

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    })
});

function handleClick(clickedButtonEvent) {
    const currentButton = clickedButtonEvent.target;
    console.log(currentButton);

    let id = currentButton.getAttribute('data-id');
    console.log(id);
}

