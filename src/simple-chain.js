const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    let arr = [];
    for (let i = 1; i <= this.chain.length-1; i++) { 
      arr[i] = this.chain[i]; 
    }
    if (arr.indexOf(position) === -1) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!")
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    let finish = this.chain.join('~~');
    this.chain = [];
    return finish;
  }
};

module.exports = {
  chainMaker
};
