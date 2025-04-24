// Section toggle
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
  }
  
  // Product Form logic
  const form = document.getElementById('product-form');
  const productList = document.getElementById('product-list');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
  
    const li = document.createElement('li');
    li.textContent = `${name} - ৳${price}`;
    productList.appendChild(li);
  
    form.reset();
  });
  
  // Chart.js - Sales report
  const ctx = document.getElementById('salesChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [{
        label: 'Sales (৳)',
        data: [5000, 7000, 3000, 9000],
        backgroundColor: 'gold'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('product-name').value.trim();
    const price = document.getElementById('product-price').value.trim();
  
    // Validation
    if (!name || !price || price <= 0) {
      alert("Please enter a valid product name and price.");
      return;
    }
  
    const li = document.createElement('li');
    li.textContent = `${name} - ৳${price}`;
    productList.appendChild(li);
  
    form.reset();
  });
  