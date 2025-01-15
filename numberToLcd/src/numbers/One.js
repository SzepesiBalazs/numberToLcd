export default class One {
  constructor(isLargeType = false) {
    this.isLargeType = isLargeType;
  }

  getFirstArray() {
    return [" ", " ", " "];
  }

  getSecondArray() {
    return [" ", " ", "|"];
  }

  getThirdArray() {
    return [" ", " ", "|"];
  }
}
