const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {throw new Error};
  if (arr == []) {return []};

  let arr1 = [];

  for (let i = 0; i < arr.length; i++) {

    if ((arr[i] === '--discard-next' && arr[i + 2] === '--discard-prev')) {
      i += 2;
      continue;
    } else if ((arr[i] === '--discard-next' && arr[i + 2] === '--double-prev')) {
      i += 2;
      continue;
    } else if (arr[i] === '--discard-next') {
      i++;
      continue;
    } else if (arr[i] === '--discard-prev') {
      if (arr[i - 1] !== undefined) arr1.pop();
      continue;
    } else if (arr[i] === '--double-next') {
      if (arr[i + 1] !== undefined) arr1.push(arr[i + 1]);
      continue;
    } else if (arr[i] === '--double-prev') {
      if (arr[i - 1] !== undefined) arr1.push(arr1[arr1.length - 1]);
      continue;
    }  else  {arr1.push(arr[i]) };
  }
  return arr1;
  };
