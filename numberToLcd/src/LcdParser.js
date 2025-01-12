import Eight from "../src/numbers/Eight";

export default class LcdParser {
  constructor() {
    this.firstLine = "";
    this.secondLine = "";
    this.thirdLine = "";
  }

  numberBuilder(inputNumber) {
    const numberArray = inputNumber.toString().split("").map(Number);
    numberArray.map((n) => {
      const source = this.numberSource();
      this.firstLine += source[n].getFirstLine();
      this.secondLine += source[n].getSecondLine();
      this.thirdLine += source[n].getThirdLine();
    });
    console.log(this.getFirstLine() + this.getSecondLine() + this.getThirdLine())
  }

  getFirstLine() {
    return this.firstLine + "\n";
  }

  getSecondLine() {
    return this.secondLine + "\n";
  }

  getThirdLine() {
    return this.thirdLine + "\n";
  }

  numberSource() {
    return {
      8: new Eight(),
    };
  }
}
