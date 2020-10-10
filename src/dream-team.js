const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false};
  let newArray = [];
  members.forEach( 
    (item) => {if (typeof item === "string") { newArray.push(item.toUpperCase()) } }
   );

  let arrayEnd = newArray.map ( (item) => {
   return item.match(/\S/g);
  } );

  arrayEnd.sort();


  return  arrayEnd.reduce( (sum, item) => sum + item[0], "" );

};
