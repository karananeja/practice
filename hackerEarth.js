/**
 * @param {number} size 
 * @param {number[]} numbers 
 * @returns {string}
 */
function arraySum(size, numbers) {
  let sum = 0;

  for (let i = 0; i < size; i++) {
    sum += numbers[i];
  }

  return `${sum}`;
}
console.log({ arraySum: arraySum(5, [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]) });
