const products = [
    { name: "Female All Dress collection", price: "৳150 to ৳12000", img: "product1.jpg" },
    { name: "Gents All Dress collection", price: "৳150 to ৳6000", img: "product2.jpg" },
    { name: "Baby All Dress collection", price: "৳150 to ৳1200", img: "product3.jpg" },
  ];
  
  const container = document.createElement("section");
  container.className = "product-section";
  container.innerHTML = "<h2>Our Collections</h2><div class='product-container'></div>";
  document.body.appendChild(container);
  
  const productContainer = document.querySelector(".product-container");
  
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
    productContainer.appendChild(card);
  });

fetch('https://madina-unique-backend.onrender.com/products')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('product-list');
    data.forEach(product => {
      const item = document.createElement('div');
      item.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
      `;
      container.appendChild(item);
    });
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });

  
  <!-- Whats app add buy now button -->
   function buyNow(productName, price) {
  const message = `Hello, I want to order "${productName}" for ৳${price}.`;
  const whatsappURL = `https://wa.me/8801738730573?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
}




//add to cart file function
function addToCart(name, code, color, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const quantity = 1; // Default quantity 1

  cart.push({ name, code, color, price, quantity });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart!');
}
