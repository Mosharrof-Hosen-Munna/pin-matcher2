function getPin() {
  const pin = Math.round(Math.random() * 10000) + "";
  if (pin.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function pinGenerator() {
  const pin = getPin();
  const pinInput = document.getElementById("pin-number");
  pinInput.value = pin;
}
document
  .getElementById("number-pad")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const numberInput = document.getElementById("number-input");
    if (isNaN(number)) {
      if (number === "C") {
        numberInput.value = "";
      } else {
      }
    } else {
      const numbers = numberInput.value + number;
      numberInput.value = numbers;
    }
  });
document.getElementById("submit-btn").addEventListener("click", function (e) {
  const numberInput = document.getElementById("number-input");
  // check pin number match
  const pinNumber = document.getElementById("pin-number");
  if (numberInput.value === pinNumber.value) {
    document.getElementById("notify-match").style.display = "block";
    document.getElementById("notify-unmatch").style.display = "none";
  } else {
    document.getElementById("notify-unmatch").style.display = "block";
    document.getElementById("notify-match").style.display = "none";
  }
  // console.log("I am clicked");
});
