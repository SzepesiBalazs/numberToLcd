export default class Two {
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
      return "_|";
    }
  
    getThirdLine() {
      return "|_";
    }
  }