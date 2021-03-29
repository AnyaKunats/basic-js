const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dream='';
  if (!Array.isArray(members)){
    return false;
  }
  let names = members.filter((name)=>typeof name ==='string');
  names.forEach((item,i,names)=>{
    dream+=item.trim().split('')[0].toUpperCase()})

  return dream.split('').sort().join('');
};
