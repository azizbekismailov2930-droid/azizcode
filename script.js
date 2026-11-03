
// REGISTRATION FORM VALIDATION

document.getElementById("registrationForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword =
      document.getElementById("confirmPassword").value;

    const message =
      document.getElementById("registrationMessage");

    if (password !== confirmPassword) {
      message.style.color = "#ff6b8a";
      message.textContent = "Passwords do not match!";
      return;
    }

    message.style.color = "#5ddcff";
    message.textContent =
      "Registration completed successfully!";

    this.reset();

  });
