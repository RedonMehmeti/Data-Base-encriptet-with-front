// Handle Signup Form submission
document.getElementById("signup-form").addEventListener("submit", async function(event) {
    event.preventDefault();
  
    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
  
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        document.getElementById("signup-message").textContent = "User created successfully!";
        document.getElementById("signup-message").style.color = "green";
      } else {
        document.getElementById("signup-message").textContent = data.message;
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  });
  
  // Handle Login Form submission
  document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();
  
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        document.getElementById("login-message").textContent = "Login successful!";
        document.getElementById("login-message").style.color = "green";
        localStorage.setItem("authToken", data.token); // Store token in local storage
      } else {
        document.getElementById("login-message").textContent = data.message;
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  });
  