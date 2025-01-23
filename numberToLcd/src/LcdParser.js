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
  constructor(isLargeType = false, size = 0) {
    this.firstLine = "";
    this.secondLine = "";
    this.thirdLine = "";
    this.additionalLineOne = "";
    this.additionalLineTwo = "";
    this.isLargeType = isLargeType;
    this.largeSizeArray = [];
    this.size = size;
  }

  numberBuilderV2(inputNumber) {
    const numberArray = inputNumber.toString().split("").map(Number);
    numberArray.map((n) => {
      const source = this.numberSource();
      if (this.isLargeType) {
        let firstLineArray = source[n].getFirstArray();
        let secondLineArray = source[n].getSecondArray();
        let thirdLineArray = source[n].getThirdArray();
        let additionalLineOne = source[n].getSecondArray().toSpliced(1, 1, " ");
        let additionalLineTwo = source[n].getThirdArray().toSpliced(1, 1, " ");

        firstLineArray = this.arrayTransformer(firstLineArray);

        secondLineArray = this.arrayTransformer(secondLineArray);

        thirdLineArray = this.arrayTransformer(thirdLineArray);

        additionalLineOne = this.arrayTransformer(additionalLineOne);

        additionalLineTwo = this.arrayTransformer(additionalLineTwo);

        this.largeSizeArray[0] += firstLineArray.join("");
        this.largeSizeArray[1] += additionalLineOne.join("");
        this.largeSizeArray[2] += secondLineArray.join("");
        this.largeSizeArray[3] += additionalLineTwo.join("");
        this.largeSizeArray[4] += thirdLineArray.join("");
      } else {
        this.firstLine += source[n].getFirstArray().join("");
        this.secondLine += source[n].getSecondArray().join("");
        this.thirdLine += source[n].getThirdArray().join("");
      }
    });

    for (let index = 2; index < this.size; index++) {
      this.largeSizeArray = this.largeSizeArray.toSpliced(
        1,
        0,
        this.largeSizeArray[1]
      );
      this.largeSizeArray = this.largeSizeArray.toSpliced(
        this.largeSizeArray.length - 2,
        0,
        this.largeSizeArray[this.largeSizeArray.length - 2]
      );
    }
    this.largeSizeArray = this.largeSizeArray.map((element) => {
      return element.substring(9, element.length) + "\n";
    });

    return this.largeSizeArray.join("");
  }

  arrayTransformer(lineArray) {
    for (let index = 1; index < this.size; index++) {
      lineArray = lineArray.toSpliced(1, 0, lineArray[1]);
    }
    return lineArray;
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
