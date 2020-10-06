const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if ( typeof(+sampleActivity) !== Number || sampleActivity === "") { return false};

  return Math.ceil(Math.exp(MODERN_ACTIVITY / +sampleActivity) / (0.693 / +sampleActivity));
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
