document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 12345678910;
  const pinNumber = 1234;

  const inputMobileNumber = document.getElementById("mobile-number").value;
  const inputMobileNumberConverted = parseInt(inputMobileNumber);

  const inputPinNumber = document.getElementById("pin-number").value;
  const inputPinNumberConverted = parseInt(inputPinNumber);

  if (
    inputMobileNumberConverted === mobileNumber &&
    inputPinNumberConverted === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert(
      `Please input Mobile Number: ${mobileNumber} Pin Number: ${pinNumber}`
    );
  }
});
