// js/order.js

function displayOrderSummary() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const orderSummary = document.getElementById('orderSummary');

    if (cartItems.length === 0) {
        orderSummary.innerHTML = '<p>No products in cart.</p>';
        return;
    }

    let total = 0;
    let html = '<h3>Order Summary:</h3>';

    cartItems.forEach(item => {
        total += item.price * item.quantity;
        html += `
            <div>
                <h4>${item.name}</h4>
                <p>৳${item.price} x ${item.quantity}</p>
            </div>
        `;
    });

    html += `<h3>Total: ৳${total}</h3>`;
    orderSummary.innerHTML = html;
}
function confirmOrder() {
    const customerName = document.getElementById('customerName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value;
    const cashPaid = parseFloat(document.getElementById('cashPaid').value);

    if (!customerName || !phoneNumber || !deliveryAddress || isNaN(cashPaid)) {
        alert("Please fill all fields correctly.");
        return;
    }

    const tenPercentPayment = (cashPaid * 0.10).toFixed(2); // ১০% হিসাব
    alert(`Dear ${customerName}, you need to pay 10% now: ৳${tenPercentPayment}`);

    // এখন অর্ডার সেভ করবো
    const order = {
        customerName,
        phoneNumber,
        deliveryAddress,
        cashPaid,
        advancePaid: tenPercentPayment,
        status: "Pending"  // ডিফল্টে পেন্ডিং থাকবে
    };

    // Local storage এ সেভ করা
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert("Order placed successfully!");
    window.location.href = "index.html"; // অথবা যেখানে রিডাইরেক্ট করতে চাও
}


    // Update stock
    const products = JSON.parse(localStorage.getItem('products')) || [];
    cartItems.forEach(cartItem => {
        const index = products.findIndex(p => p.name === cartItem.name);
        if (index !== -1) {
            products[index].stock -= cartItem.quantity;
        }
    });

    localStorage.setItem('products', JSON.stringify(products));
    localStorage.removeItem('cart'); // Cart Empty

    alert('Order Confirmed! Thank you for shopping.');
    window.location.href = 'dashboard.html';
}

displayOrderSummary();
