
const quantity_ordered = document.getElementById('quantity');
const order_amount = document.getElementById('amount');
let unit_price = 100;

function place_order() {
    alert(`Your order for ${quantity_ordered.value} packs of peanuts, and will be delivered to you shortly`);
}

quantity_ordered.addEventListener('input', () => {
    if (quantity_ordered.value < 0) {
        unit_price = 0;
    }
    else {
        unit_price = 100;
    }
    const calculated_price = quantity_ordered.value * unit_price;
    order_amount.innerHTML = calculated_price
});