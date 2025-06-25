document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual submission

    // Show success message
    const message = document.getElementById("success-message");
    message.style.display = "block";

    // Clear form (optional)
    this.reset();

    // Hide message after 4 seconds
    setTimeout(() => {
      message.style.display = "none";
    }, 4000);
  });
