const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {

    let maxDepth = 1;

    if (arr.some (item => Array.isArray(item))) {


      let array = arr.reduce((resultArr, item) => resultArr.concat(item), []);
      return maxDepth + this.calculateDepth(array);


    }

    return maxDepth;


  };
};