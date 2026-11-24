function getCategory(id) {
  return categories.find(category => category.id === id);
}

function loadHomeCategories() {
  const homeCategories = document.getElementById("homeCategories");
  if (!homeCategories) return;

  homeCategories.innerHTML = categories.slice(0, 8).map(category => `
    <a class="category-card" href="category.html?id=${category.id}">
      <span>${category.icon}</span>
      <h3>${category.name}</h3>
    </a>
  `).join("");
}

function loadAllCategories() {
  const allCategories = document.getElementById("allCategories");
  if (!allCategories) return;

  allCategories.innerHTML = categories.map(category => `
    <a class="category-card" href="category.html?id=${category.id}">
      <span>${category.icon}</span>
      <h3>${category.name}</h3>
    </a>
  `).join("");
}

function productCard(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">₹${product.price} / day</div>
        <a class="btn primary" href="product.html?id=${product.id}">View Details</a>
      </div>
    </div>
  `;
}

function loadFeaturedProducts() {
  const featuredProducts = document.getElementById("featuredProducts");
  if (!featuredProducts) return;

  featuredProducts.innerHTML = products.slice(0, 6).map(productCard).join("");
}

function loadCategoryPage() {
  const categoryProducts = document.getElementById("categoryProducts");
  if (!categoryProducts) return;

  const params = new URLSearchParams(window.location.search);
  const categoryId = params.get("id");
  const category = getCategory(categoryId);

  document.getElementById("categoryTitle").innerText =
    category ? category.name + " Rentals" : "All Products";

  function renderProducts() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const price = document.getElementById("priceFilter").value;

    let filtered = products.filter(product => product.category === categoryId);

    if (search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search)
      );
    }

    if (price === "low") {
      filtered = filtered.filter(product => product.price < 500);
    } else if (price === "mid") {
      filtered = filtered.filter(product => product.price >= 500 && product.price <= 1000);
    } else if (price === "high") {
      filtered = filtered.filter(product => product.price > 1000);
    }

    categoryProducts.innerHTML = filtered.length
      ? filtered.map(productCard).join("")
      : "<p>No products found.</p>";
  }

  document.getElementById("searchInput").addEventListener("input", renderProducts);
  document.getElementById("priceFilter").addEventListener("change", renderProducts);

  renderProducts();
}

function loadProductPage() {
  const productDetail = document.getElementById("productDetail");
  if (!productDetail) return;

  const params = new URLSearchParams(window.location.search);
  const productId = Number(params.get("id"));
  const product = products.find(item => item.id === productId);

  if (!product) {
    productDetail.innerHTML = "<h2>Product not found</h2>";
    return;
  }

  productDetail.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div>
      <h1>${product.name}</h1>
      <p><strong>Category:</strong> ${getCategory(product.category).name}</p>
      <p><strong>Rating:</strong> ${product.rating} / 5</p>
      <p>${product.description}</p>
      <h2 class="price">₹${product.price} / day</h2>
      <button class="btn primary" onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `;
}

function sendContact(event) {
  event.preventDefault();
  alert("Thank you! Your message has been recorded in demo mode.");
  event.target.reset();
}

function openAdmin() {
  const password = document.getElementById("adminPassword").value;

  if (password !== "admin123") {
    alert("Incorrect admin password.");
    return;
  }

  document.getElementById("adminPanel").classList.remove("hidden");

  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const bookingList = document.getElementById("bookingList");

  bookingList.innerHTML = bookings.length
    ? bookings.map(booking => `
        <div class="cart-item">
          <div>
            <h3>${booking.name}</h3>
            <p>${booking.email} | ${booking.phone}</p>
            <p>${booking.startDate} to ${booking.endDate}</p>
            <p><strong>Total:</strong> ₹${booking.total}</p>
          </div>
        </div>
      `).join("")
    : "<p>No bookings yet.</p>";
}

loadHomeCategories();
loadAllCategories();
loadFeaturedProducts();
loadCategoryPage();
loadProductPage();