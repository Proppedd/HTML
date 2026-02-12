document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");

  nameError.textContent = "";
  emailError.textContent = "";

  let valid = true;

  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
  }
});
