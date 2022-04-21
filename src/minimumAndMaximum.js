/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
function minimumAndMaximumSort(numbers) {
  let minAndMax = [];
  if (numbers.length) {
    numbers.sort((a, b) => a - b);
    minAndMax.push(numbers[0]);
    minAndMax.push(numbers[numbers.length - 1]);
  }

  return minAndMax;
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum
 */
function minimumAndMaximumIterate(numbers) {
  if (numbers.length >= 1)  {
    let min = numbers[0];
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }

    return [min, max];
  }

  return []
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
