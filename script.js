const buttons = document.querySelectorAll("button");
let activeButton = null;
const bill = document.querySelector(".bill-input");
const people = document.querySelector(".number_of_people");
const person = document.querySelector(".person h2");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button === activeButton) {
      // If the same button is clicked again, remove selection
      button.style.backgroundColor = "";
      activeButton = null;
    } else {
      // If a different button is clicked, update selection
      if (activeButton) {
        activeButton.style.backgroundColor = "";
      }
      button.style.backgroundColor = "hsl(172, 67%, 45%)";
      activeButton = button;
    }
  });
});
