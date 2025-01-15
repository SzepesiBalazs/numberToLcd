//  _   _
// |_| |_|
// |_| |_|

import LcdParser from "../src/LcdParser";

describe("number-to-lcd", () => {
  test("first line output by one number should be space, underscore, space and line break ( _ )", () => {
    const lcdParser = new LcdParser();

    lcdParser.numberBuilder(8);
    const topLine = lcdParser.getFirstLine();

    expect(topLine).toBe(" _ \n");
  });

  test("first line output by two numbers should be space, underscore, space, space, underscore, space and line break ( _  _ )", () => {
    const lcdParser = new LcdParser();

    lcdParser.numberBuilder(88);
    const topLine = lcdParser.getFirstLine();

    expect(topLine).toBe(" _  _ \n");
  });

  test("second line output by two numbers should be |_| |_| line break", () => {
    const lcdParser = new LcdParser();

    lcdParser.numberBuilder(88);
    const topLine = lcdParser.getSecondLine();

    expect(topLine).toBe("|_||_|\n");
  });

  test("third line output by two numbers should be |_| |_| line break", () => {
    const lcdParser = new LcdParser();

    lcdParser.numberBuilder(88);
    const topLine = lcdParser.getThirdLine();

    expect(topLine).toBe("|_||_|\n");
  });

  test("first line output of 1 should be space ( )", () => {
    const lcdParser = new LcdParser();

    lcdParser.numberBuilder(1);
    const topLine = lcdParser.getFirstLine();

    expect(topLine).toBe("   \n");
  });

  test("if isLargeType is true", () => {
    const lcdParser = new LcdParser(true);

    lcdParser.numberBuilder(88);
    const topLine = lcdParser.getFirstLine();

    expect(topLine).toBe(" __  __ \n");
  });
});
