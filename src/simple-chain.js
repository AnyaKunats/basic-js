 const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value===null)
      this.chain.push(`( null )`)
    else
      this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof position!=='number' || position < 1 || position > this.chain.length){
      this.chain = [];
      throw new Error();
    }
    this.slice(position-1, 1);
    return this;

  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.join('~~');
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;
