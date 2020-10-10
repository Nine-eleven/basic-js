const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) { return 'Unable to determine the time of year!'};
  if (!(date instanceof Date)) { throw new Error () };
  let newDate = new Date (date.getTime()); 
  let seasons = ["winter", "spring", "summer", 'autumn', "winter"];
  return seasons[Math.round((newDate.getMonth()) / 3)];


  // remove line with error and write your code here
};
