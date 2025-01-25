import LcdParser from "./src/LcdParser.js";
const lcdParser = new LcdParser();

const inputElement = document.getElementById("inputNumber");

inputElement.addEventListener("input", () => {
  const inputValue = inputElement.value;
  lcdParser.numberBuilderV2(inputValue);
  document.getElementById("lcd-line-one").innerHTML = lcdParser.getFirstLine();
  document.getElementById("lcd-line-two").innerHTML = lcdParser.getSecondLine();
  document.getElementById("lcd-line-three").innerHTML =
    lcdParser.getThirdLine();
});
