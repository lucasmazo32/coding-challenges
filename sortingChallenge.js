// Given an array of integers, sort the array so that all odd indexes are greater than the even indexes.

// [2, 1, 3, 4] => [1, 3, 2, 4]
// Assume all numbers are different
// O((n / 2) * (n / 2)) => O(n^2)

const sortingOddGreater = (array) => {
  for (let i = 1; i < array.length; i += 2) {
    const currentOdd = array[i];
    let max_even = array[0];
    let index = 0;
    for (let j = 2; j < array.length; j += 2) {
      if (array[j] > max_even) {
        max_even = array[j]
        index = j;
      }
    }
    if (max_even > currentOdd) {
      array[i] = max_even;
      array[index] = currentOdd;
    }
  }
  return array;
};

const test = [6, 11, 99, 3, 7, 70, 80, 4, 2 , 1];

console.log(sortingOddGreater(test))
