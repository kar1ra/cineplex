function openModal() {
  document.getElementById("auth-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("auth-modal").style.display = "none";
}

function showLoginForm() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
}

function showRegisterForm() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
}

function registerUser() {
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById(
    "register-confirm-password"
  ).value;
  const errorText = document.getElementById("password-error");

  if (password !== confirmPassword) {
    errorText.style.display = "block"; // Показываем сообщение об ошибке
    return; // Останавливаем дальнейшую обработку
  }

  errorText.style.display = "none"; // Скрываем сообщение, если пароли совпадают
  console.log("Регистрация успешна!");
}

function togglePasswordVisibility(passwordId, toggleButtonId) {
  const passwordField = document.getElementById(passwordId);
  const toggleButton = document.getElementById(toggleButtonId);

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.textContent = "🙈"; // Меняем иконку на закрытый глаз
  } else {
    passwordField.type = "password";
    toggleButton.textContent = "👁️"; // Меняем иконку на открытый глаз
  }
}
