// js/cart.js

function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartItems');

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let html = '';
    cartItems.forEach(item => {
        html += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Code: ${item.code}</p>
                <p>Color: ${item.color}</p>
                <p>Price: ৳${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <hr>
        `;
    });

    cartContainer.innerHTML = html;
}

displayCart();
