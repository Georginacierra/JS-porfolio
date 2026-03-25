// escuchar un evento : validar el mail rejex, mensaje de error
// click boton escuchar evento --> loader y mensaje de confirmacion

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameField = document.getElementById("name");
const mailField = document.getElementById("mail-field");
const buttonField = document.getElementById("button-field");
const confirmationMessage = document.getElementById("confirmation-message");
const mailInput = document.getElementById("mail");
const errorMessage = document.getElementById("error-message");
const formInfo = document.getElementById("form-info");
const loader = document.getElementById("loader-graphic");

mailInput.addEventListener("input", (e) => {
  const fieldValue = e.target.value;
  if (!emailRegex.test(fieldValue)) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});

formInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  loader.style.display = "block";
  const showSuccess = () => {
    loader.style.display = "none";
    confirmationMessage.style.display = "block";
  };

  setTimeout(showSuccess, 3000);
});

// en css agregar el color
