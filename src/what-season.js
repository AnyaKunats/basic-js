const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date===undefined)
    return 'Unable to determine the time of year!';
  if(date===null)
    return null;

  if (date.toString().indexOf(date.getFullYear()) == -1) {
    throw new Error();
  }
  if (date == undefined) {
    throw new Error('Unable to determine the time of year!');
  }
  if (!(date instanceof Date)) {
    throw new TypeError('type error');
  }

  let month = date.getMonth();
  let season = {
    'winter': 'winter',
    'spring': 'spring',
    'autumn': 'autumn',
    'summer': 'summer'};
  switch (month){
    case 0:
    case 1:
    case 11:
      return season.winter;
    case 2:
    case 3:
    case 4:
      return season.spring;
    case 5:
    case 6:
    case 7:
      return season.summer;
    case 8:
    case 9:
    case 10:
      return season.autumn;
  }
};
