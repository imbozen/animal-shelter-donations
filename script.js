// Scroll from hero button → donate section
document.getElementById("hero-btn").addEventListener("click", () => {
  document.getElementById("donate").scrollIntoView({ behavior: "smooth" });
});

// Form submission handling
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  handleForm();
});

// Function to update the DOM
function handleForm() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const response = document.getElementById("form-response");
  response.textContent = `Thank you, ${name}! Your message has been received.`;
  response.style.color = "green";

  // Clear fields
  document.getElementById("contact-form").reset();
}
