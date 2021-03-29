const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const str1 = String(str);
  const addition =
      typeof options.addition === 'boolean' ||
      options.addition === null ||
      options.addition
          ? String(options.addition)
          : '';
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const separator = options.separator ? String(options.separator) : '+';
  const additionSeparator = options.additionSeparator
      ? String(options.additionSeparator)
      : '|';
  let strAdd = (addition+additionSeparator).repeat(additionRepeatTimes);
  let newStr = (str1+strAdd.slice(0,strAdd.length-additionSeparator.length)+separator).repeat(repeatTimes);
  return newStr.slice(0,newStr.length-separator.length);
};
  