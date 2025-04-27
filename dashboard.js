// js/dashboard.js

if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html';
}

// Product Add Function
function addProduct() {
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const stock = document.getElementById('productStock').value;

    if (name && price && stock) {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.push({ name, price, stock });
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();

        // Reset form
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        document.getElementById('productStock').value = '';
    } else {
        alert('Fill all fields!');
    }
}

// Display Products with Add to Cart button
function displayProducts() {
    const productContainer = document.getElementById('productList');
    productContainer.innerHTML = '';

    const products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ৳${product.price}</p>
            <p>Stock: ${product.stock}</p>
            <button onclick="addToCart('${product.name}', '${generateProductCode(product.name)}', 'Default', ${product.price})">Add to Cart</button>
            <button onclick="deleteProduct(${index})">Delete</button>
        `;

        productContainer.appendChild(productCard);
    });
}

// Generate random product code
function generateProductCode(name) {
    return name.toLowerCase().replace(/\s+/g, '-') + '-' + Math.floor(Math.random() * 10000);
}

// Delete product
function deleteProduct(index) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
}

// Add to cart function
function addToCart(name, code, color, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const quantity = 1;
    cart.push({ name, code, color, price, quantity });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}

// প্রথমবার Load হবার সময় products দেখাবে
displayProducts();
function loadOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const orderTable = document.getElementById('orderTableBody'); // তুমি যদি id="orderTableBody" দাও টেবিল বডিতে
    orderTable.innerHTML = '';

    orders.forEach((order, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.customerName}</td>
            <td>${order.phoneNumber}</td>
            <td>${order.deliveryAddress}</td>
            <td>৳${order.cashPaid}</td>
            <td>৳${order.advancePaid}</td>
            <td>${order.status}</td>
            <td>
                <button onclick="confirmDelivery(${index})">Confirm Delivery</button>
            </td>
        `;
        orderTable.appendChild(row);
    });
}

function confirmDelivery(index) {
    const orders = JSON.parse(localStorage.getItem('orders'));
    orders[index].status = "Confirmed"; // স্টেটাস চেঞ্জ
    localStorage.setItem('orders', JSON.stringify(orders));
    loadOrders(); // আবার টেবিল রিফ্রেশ
}
