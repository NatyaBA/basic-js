const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let number = n;
  while (number > 9) {
    let count = 0;
    while (number > 0) {
      count = count + (number % 10);
      number = Math.floor(number / 10);
    }
    number = count;
  }
  return number;
}

module.exports = {
  getSumOfDigits
};
