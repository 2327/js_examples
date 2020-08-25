'use strict';

let ProductBtn = document.querySelectorAll('button.toBasketBtn');
let BasketBtn = document.querySelector('button.btn.btn-light.btn-lg.dropdown-toggle');
let basket = []
let TotalTable = document.querySelector('table.table.table-hover').getElementsByTagName('tbody')[0];

ProductBtn.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClickProductBtn(event);
    })
});

BasketBtn.addEventListener('click', function(event) {
    handleClickBasketBtn(event); 
});

function handleClickBasketBtn(clickedButtonEvent) {
    basket.forEach(function(product) {
    console.log(basket);
       console.log(product.id + product.name + product.quantity + product.price);
       TotalTable.insertRow().innerHTML =
           "<td>" +product.id+ "</td>"+
           "<td>" +product.name+ "</td>"+
           "<td>" +product.price+ "</td>"+
           "<td>" +product.quantity+ "</td>";

//       let row = TotalTable.insertRow(0);
//       let cell = row.insertCell(0);
//       cell.innerHTML = product.id + product.name + product.quantity + product.price;
});
}

function handleClickProductBtn(clickedButtonEvent) {
    const currentButton = clickedButtonEvent.target;
    let id = currentButton.getAttribute('data-id')
    let quantity;
    let additionProduct = basket.filter(el => el.id === id);

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
}
