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
    const currentButton = clickedButtonEvent.target.parentNode;
    console.log(currentButton);

    let id = currentButton.dataset.id;
    console.log(id);
}

