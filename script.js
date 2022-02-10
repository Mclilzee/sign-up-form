const formContainer = document.querySelector(".form-container");

console.log(formContainer);

formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = e.target.password;
  const confirmPassword = e.target.confirmPassword;
  const fullName = e.target.firstName.value + " " + e.target.lastName.value;
  const passwordMismatchMessage = document.querySelector(".password-mismatch");

  if (password.value !== confirmPassword.value) {
    passwordMismatchMessage.textContent = "* Passwords do not match";
    showPasswordMissmatchMessage(password, confirmPassword);
  } else {
    passwordMismatchMessage.textContent = "";
    showFormSuccessfulMessage(password, confirmPassword, fullName);
  }
});

function showPasswordMissmatchMessage(password, confirmPassword) {
  password.classList.add("error");
  confirmPassword.classList.add("error");
}

function showFormSuccessfulMessage(password, confirmPassword, fullName) {
  password.classList.remove("error");
  confirmPassword.classList.remove("error");

  document
    .querySelector(".welcome-message-container")
    .classList.remove("hidden");

  document.querySelector(".welcome-message").textContent += fullName;
}
