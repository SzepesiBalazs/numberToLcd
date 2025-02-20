import LcdParser from "./src/LcdParser.js";
const lcdParser = new LcdParser();

const inputElement = document.getElementById("inputNumber");

inputElement.addEventListener("input", () => {
  const inputValue = inputElement.value;
  lcdParser.numberBuilderV2(inputValue);
  console.log(lcdParser.firstLine);
  groupCharacters(lcdParser.firstLine, "grouped-text-one");
  groupCharacters(lcdParser.secondLine, "grouped-text-two");
  groupCharacters(lcdParser.thirdLine, "grouped-text-three");
});

window.validateNumberLength = function (input) {
  input.value = input.value.replace(/[^0-9]/g, "");
};

function groupCharacters(inputString, elementId) {
  const container = document.getElementById(elementId);
  let groupedString = "";

  for (let i = 0; i < inputString.length; i += 3) {
    groupedString += `<span class="group">${inputString.slice(
      i,
      i + 3
    )}</span>`;
  }

  container.innerHTML = groupedString;
}

// Example usage
