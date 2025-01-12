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
});
