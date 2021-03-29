const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(ciphering, a) {
    this.ciphering = ciphering===false ? false : true;
    this.a = a||'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if(!message || !key || typeof (message) !== 'string' || typeof (key) !== 'string')
      throw new Error();
    let result='';
    let mode = true;
    if(message.length>key.length)
      key+=key;
    let keys = key.split('');
    if(keys.length!==message.length)
      keys.pop();
    message = message.toUpperCase();
    key = keys.join('').toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (this.a.indexOf(message.charAt(i)) === -1) {
        result += message.charAt(i);
      } else {
        if (mode === true) {
          result += this.a.charAt((this.a.indexOf(message.charAt(i)) + this.a.indexOf(key.charAt(i))) % 26);
        } else {
          result += this.a.charAt((this.a.indexOf(message.charAt(i)) - this.a.indexOf(key.charAt(i)) + 26) % 26);
        }
      }
    }
    return this.ciphering !== false ? result : result.split('').reverse().join('');
  }    
  decrypt(message, key) {
    if(!message || !key || typeof (message) !== 'string' || typeof (key) !== 'string')
      throw new Error();
    let result='';
    let mode = false;
    if(message.length>key.length)
      key+=key;
    let keys = key.split('');
    if(keys.length!==message.length)
      keys.pop();
    message = message.toUpperCase();
    key = keys.join('').toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (this.a.indexOf(message.charAt(i)) === -1) {
        result += message.charAt(i);
      } else {
        if (mode === true) {
          result += this.a.charAt((this.a.indexOf(message.charAt(i)) + this.a.indexOf(key.charAt(i))) % 26);
        } else {
          result += this.a.charAt((this.a.indexOf(message.charAt(i)) - this.a.indexOf(key.charAt(i)) + 26) % 26);
        }
      }
    }
    return this.ciphering !== false ? result : result.split('').reverse().join('');

  }
}

module.exports = VigenereCipheringMachine;
