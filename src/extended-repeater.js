const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 
str = String (str);
options.addition = String (options.addition);

if(typeof options.separator === "undefined") { options["separator"] = "+"};
if(typeof options.additionSeparator === "undefined") { options["additionSeparator"] = "|"};


let arrStr = [str];
for (let i=1; i < options.repeatTimes; i +=1) {
  arrStr.push(options.separator + str);
};

// расcчёт дополнения к строке

let resAddition = "";
if  (typeof options.addition !== "undefined" && typeof options.additionRepeatTimes !== "undefined") {
for (let i=0; i < options.additionRepeatTimes; i +=1) {
  resAddition += (i === (options.additionRepeatTimes - 1)) ? options.addition : (options.addition + options.additionSeparator);
}
} else if (options.addition !== "undefined") {resAddition = options.addition};




return arrStr.join(resAddition) + resAddition;



}

  