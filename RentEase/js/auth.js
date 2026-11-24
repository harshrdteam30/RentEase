function signupUser(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some(user => user.email === email)) {
    alert("This email is already registered.");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully! Please login.");
  window.location.href = "login.html";
}

function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(user => user.email === email && user.password === password);

  if (!user) {
    alert("Invalid email or password.");
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(user));
  alert("Login successful!");
  window.location.href = "index.html";
}