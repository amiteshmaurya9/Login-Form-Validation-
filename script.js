const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Clear previous errors
  emailError.textContent = '';
  passwordError.textContent = '';

  let isValid = true;

  // Validate email
  const emailValue = emailInput.value.trim();
  const emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailValue) {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate password
  const passwordValue = passwordInput.value.trim();
  if (!passwordValue) {
    passwordError.textContent = 'Password is required.';
    isValid = false;
  } else if (passwordValue.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  // If valid, submit form or show success message
  if (isValid) {
    alert('Login successful!');
    loginForm.reset();
  }
});