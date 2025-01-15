export default class Four {
    constructor(isLargeType = false) {
      this.isLargeType = isLargeType;
    }
  
    getFirstLine() {
      if (this.isLargeType) {
         return "  "
      }
      return " ";
    }
  
    getSecondLine() {
      return "|_|";
    }
  
    getThirdLine() {
      return "  |";
    }
  }