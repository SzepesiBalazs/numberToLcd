export default class Seven {
    constructor(isLargeType = false) {
      this.isLargeType = isLargeType;
    }
  
    getFirstLine() {
      if (this.isLargeType) {
         return " __ "
      }
      return " _ ";
    }
  
    getSecondLine() {
      return "  |";
    }
  
    getThirdLine() {
      return "  |";
    }
  }