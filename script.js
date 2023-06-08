const buttons = document.querySelectorAll(".tip button");
const customInput = document.querySelector(".tip .custom");
const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people_input");
const tipAmount = document.querySelector(".tip_amount");
const totalAmount = document.querySelector(".person:nth-child(2) h2");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      if (btn !== button) {
        btn.classList.remove("active");
        btn.style.backgroundColor = "";
      }
    });

    button.classList.toggle("active");
    if (button.classList.contains("active")) {
      button.style.backgroundColor = "hsl(172, 67%, 45%)";
    } else {
      button.style.backgroundColor = "";
    }

    calculateTip();
  });
});

billInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

function calculateTip() {
  const bill = parseFloat(billInput.value) || 0;
  const numberOfPeople = parseInt(peopleInput.value) || 1;

  let tipPercentage = 0;
  const selectedButton = document.querySelector(".tip button.active");
  if (selectedButton) {
    tipPercentage = parseFloat(selectedButton.textContent) / 100;
  } else {
    tipPercentage = parseFloat(customInput.value) / 100;
  }

  const tipPerPerson = (bill * tipPercentage) / numberOfPeople;
  const totalPerPerson = (bill + bill * tipPercentage) / numberOfPeople;

  tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalAmount.textContent = `$${totalPerPerson.toFixed(2)}`;
}

// Reset button
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  buttons.forEach((button) => {
    button.classList.remove("active");
    button.style.backgroundColor = "";
  });
  customInput.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
});
