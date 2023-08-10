const form = document.querySelector("form");
const buttons = form.querySelectorAll("button");
const label = document.querySelector("#input");
const userInput = form.elements["userInput"];

import {
  percentageSign,
  equalsSign,
  handleEqualsClick,
  handlePercentageClick,
  handleOtherOperatorsClick,
  handleResetClick,
  handleButtonClick,
  clearResult,
} from "./calculator.js";

label.textContent = "";
userInput.value = "";

function handleSubmitClick(textContent) {
  if (textContent === equalsSign) {
    handleEqualsClick(label, userInput);
  } else if (textContent === percentageSign) {
    handlePercentageClick(userInput, label);
  } else {
    handleOtherOperatorsClick(textContent, userInput, label);
  }
}

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    switch (this.type) {
      case "submit":
        handleSubmitClick(this.textContent);
        break;
      case "reset":
        handleResetClick(label, form);
        break;
      case "button":
        handleButtonClick(this.textContent, userInput);
        break;
      default:
        break;
    }
  });
});

userInput.addEventListener("input", function() {
  this.value = this.value.match(/[0-9.]*/)[0];
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
});

form.addEventListener("reset", function() {
  clearResult();
});
