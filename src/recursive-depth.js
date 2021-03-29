const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(typeof(arr) !== 'object')
      return 0;
    return 1 + Math.max(0,...arr.map((item)=>this.calculateDepth(item)))

  }
};