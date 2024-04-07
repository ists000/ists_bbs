// Import User
import { User } from "./class/User.js";
let user = new User();

// Get DOM
let newPassword_input = document.querySelector("#newPassword");
let confirmPassword_input = document.querySelector("#confirmPassword");
let error = document.querySelector("#error");
let checkError = document.querySelector("#checkError");
let checkbox = document.querySelector("#flexCheckDefault");
let btn = document.querySelector(".btn.btn-dark");

// Add Click Button Event
btn.addEventListener("click", (event) => {
  event.preventDefault();

  const newPassword = newPassword_input.value;
  const confirmPassword = confirmPassword_input.value;
  const checkboxChecked = checkbox.checked;

  // Check if the new password input is empty
  if (!newPassword) {
    // If new password input is empty, display an error message
    error.style.display = "block";
    error.textContent = "Please enter your new password.";
    return;
  } else {
    error.style.display = "none";
  }

  // Check if the confirm password input is empty
  if (!confirmPassword) {
    error.style.display = "block";
    error.textContent = "Please confirm your new password.";
    return;
  } else {
    error.style.display = "none";
  }

  // Verify if 2 Passwords match
  if (newPassword !== confirmPassword) {
    error.style.display = "block";
    error.textContent = "Passwords do not match.";
    return;
  } else {
    error.style.display = "none";
  }

  // Check if checkbox is checked
  if (!checkboxChecked) {
    checkError.style.display = "block";
    checkError.textContent = "Please agree to the Terms and Conditions.";
    return;
  } else {
    checkError.style.display = "none";
  }

  // Reset the password
  user
    .reset(newPassword)
    .then((user) => {
      // If reset is successful, redirect to login page
      window.location.href = "../login.html";
    })
    .catch((error) => {
      // Handle any errors
      alert(error);
    });
});
