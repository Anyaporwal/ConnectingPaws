document.getElementById("feedback-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const feedback = document.getElementById("feedback").value.trim();
    const suggestion = document.getElementById("suggestion/Queries").value.trim();
    const successMessage = document.getElementById("success-message");
    if (name && email ) {
      successMessage.textContent = "Thank you for your feedback!";
      successMessage.style.color = "green";
      this.reset();
    } else {
      successMessage.textContent = "Please fill out all fields.";
      successMessage.style.color = "red";
    }
  });
  