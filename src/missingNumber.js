/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let match = true;
    for (let j = 1; j <= numbers.length + 1; j++) {
      match = numbers.indexOf(j);
      if (match === -1) {
        return j;
      }
    }
  }
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
  const n = numbers.length + 1;
  let total = (n * (n + 1)) / 2;

  numbers.forEach((number) => {
    total = total - number;
  })

  return total;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
