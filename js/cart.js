function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function addToCart(productId) {
  let cart = getCart();

  if (cart.includes(productId)) {
    alert("This item is already in your cart.");
    return;
  }

  cart.push(productId);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Item added to cart successfully!");
  window.location.href = "cart.html";
}

function removeFromCart(productId) {
  let cart = getCart().filter(id => id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function loadCart() {
  const cartItems = document.getElementById("cartItems");
  if (!cartItems) return;

  const cart = getCart();
  let total = 0;

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("cartTotal").innerText = "₹0";
    return;
  }

  cart.forEach(id => {
    const product = products.find(item => item.id === id);
    if (!product) return;

    total += product.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <p>₹${product.price} per day</p>
        </div>
        <button onclick="removeFromCart(${product.id})">Remove</button>
      </div>
    `;
  });

  document.getElementById("cartTotal").innerText = "₹" + total;
}

function submitBooking(event) {
  event.preventDefault();

  const cart = getCart();

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  if (endDate < startDate) {
    alert("End date must be after start date.");
    return;
  }

  const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) || 1;
  let total = 0;

  cart.forEach(id => {
    const product = products.find(item => item.id === id);
    if (product) total += product.price * days;
  });

  const booking = {
    name: document.getElementById("bookingName").value,
    email: document.getElementById("bookingEmail").value,
    phone: document.getElementById("bookingPhone").value,
    startDate: document.getElementById("startDate").value,
    endDate: document.getElementById("endDate").value,
    address: document.getElementById("address").value,
    items: cart,
    days: days,
    total: total,
    status: "Pending"
  };

  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  localStorage.removeItem("cart");

  alert(`Booking request submitted!\nRental days: ${days}\nEstimated total: ₹${total}`);
  window.location.href = "index.html";
}