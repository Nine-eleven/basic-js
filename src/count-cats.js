const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    let sum = 0;
    backyard.forEach ( (item) => {
    item.forEach ( (it_em) => {
      if (it_em === '^^') {sum += 1};
    });
  });
  return sum;
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
