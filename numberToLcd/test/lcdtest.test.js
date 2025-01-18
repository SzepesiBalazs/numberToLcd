//  _   _
// |_| |_|
// |_| |_|

import LcdParser from "../src/LcdParser";

describe("number-to-lcd", () => {
  test("first line output by one number should be space, underscore, space and line break ( _ )", () => {
    const lcdParser = new LcdParser();

    lcdParser.numberBuilderV2(8);
    const topLine = lcdParser.getFirstLine();

    expect(topLine).toBe(" _ \n");
  });

  test("first line output by two numbers should be space, underscore, space, space, underscore, space and line break ( _  _ )", () => {
    const lcdParser = new LcdParser();

    lcdParser.numberBuilderV2(88);
    const topLine = lcdParser.getFirstLine();

    expect(topLine).toBe(" _  _ \n");
  });

  test("second line output by two numbers should be |_| |_| line break", () => {
    const lcdParser = new LcdParser();

    lcdParser.numberBuilderV2(88);
    const topLine = lcdParser.getSecondLine();

    expect(topLine).toBe("|_||_|\n");
  });

  test("third line output by two numbers should be |_| |_| line break", () => {
    const lcdParser = new LcdParser();

    lcdParser.numberBuilderV2(88);
    const topLine = lcdParser.getThirdLine();

    expect(topLine).toBe("|_||_|\n");
  });

  test("first line output of 1 should be space ( )", () => {
    const lcdParser = new LcdParser();

    lcdParser.numberBuilderV2(1);
    const topLine = lcdParser.getFirstLine();

    expect(topLine).toBe("   \n");
  });

  test("if isLargeType is true", () => {
    const lcdParser = new LcdParser(true, 2);

    const v2builder = lcdParser.numberBuilderV2(88);
    const topLine = v2builder.substring(0, 9);

    expect(topLine).toBe(" __  __ \n");
  });

  test("change horizontal size dynamically with 3", () => {
    const lcdParser = new LcdParser(true, 3);

    const v2builder = lcdParser.numberBuilderV2(88);

    const topLine = v2builder.substring(0, 11);

    expect(topLine).toBe(" ___  ___ \n");
  });
});
