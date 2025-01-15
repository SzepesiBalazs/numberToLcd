import Eight from "../src/numbers/Eight";
import One from "../src/numbers/One";
import Two from "../src/numbers/Two";
import Three from "../src/numbers/Three";
import Four from "../src/numbers/Four";
import Five from "../src/numbers/Five";
import Six from "../src/numbers/Six";
import Seven from "../src/numbers/Seven";
import Nine from "../src/numbers/Nine";

export default class LcdParser {
  constructor(isLargeType = false) {
    this.firstLine = "";
    this.secondLine = "";
    this.thirdLine = "";
    this.additionalLineOne = "";
    this.additionalLineTwo = "";
    this.isLargeType = isLargeType;
  }

  numberBuilder(inputNumber) {
    const numberArray = inputNumber.toString().split("").map(Number);
    numberArray.map((n) => {
      const source = this.numberSource();
      if (this.isLargeType) {
        let firstLineArray = source[n].getFirstArray();
        let secondLineArray = source[n].getSecondArray();
        let thirdLineArray = source[n].getThirdArray();

        this.firstLine += firstLineArray
          .toSpliced(1, 0, firstLineArray[1])
          .join("");
        this.additionalLineOne += secondLineArray
          .toSpliced(1, 1, " ")
          .toSpliced(1, 0, " ")
          .join("");
        this.secondLine += secondLineArray
          .toSpliced(1, 0, secondLineArray[1])
          .join("");
        this.additionalLineTwo += thirdLineArray
          .toSpliced(1, 1, " ")
          .toSpliced(1, 0, " ")
          .join("");
        this.thirdLine += thirdLineArray
          .toSpliced(1, 0, thirdLineArray[1])
          .join("");
      } else {
        this.firstLine += source[n].getFirstArray().join("");
        this.secondLine += source[n].getSecondArray().join("");
        this.thirdLine += source[n].getThirdArray().join("");
      }
    });

    console.log(
      this.getFirstLine() +
        this.getAdditionalLineOne() +
        this.getSecondLine() +
        this.getAdditionalLineTwo() +
        this.getThirdLine()
    );
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

  getAdditionalLineOne() {
    return this.additionalLineOne + "\n";
  }

  getAdditionalLineTwo() {
    return this.additionalLineTwo + "\n";
  }

  numberSource() {
    return {
      1: new One(),
      2: new Two(),
      3: new Three(),
      4: new Four(),
      5: new Five(),
      6: new Six(),
      7: new Seven(),
      8: new Eight(),
      9: new Nine(),
    };
  }
}
