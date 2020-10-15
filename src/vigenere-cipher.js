const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor (valueBoolean) {
    this.valueBoolean = valueBoolean === false;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }




  encrypt (message, key) {
    this.checkValue(message, key);
    return this.getResult(message, key);
  }



  decrypt (message, key) {
    this.checkValue(message, key);
    return this.getResult(message, key, true);
  }



  checkValue (message, key) {

    if (typeof message === "undefined" || typeof key === "undefined") {throw new Error()};

  }



  getResult (message, key, isDecrypt = false) {
    let result = '';

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      if (typeof key[j] === "undefined") j = 0;

      if (!this.alphabet.includes(message[i])) {
        result += message[i];
        continue;
      }

      let keyIndex = this.alphabet.indexOf(key[j]);
      let keyRow = this.alphabet.slice(keyIndex, this.alphabet.length).concat(this.alphabet.slice(0, keyIndex));
      
      let messageIndex = (isDecrypt ? keyRow : this.alphabet).indexOf(message[i]);

      result += (isDecrypt ? this.alphabet : keyRow)[messageIndex];
      j++;
    }



    return this.valueBoolean ? result.split('').reverse().join('') : result;


  }
}  




module.exports = VigenereCipheringMachine;
