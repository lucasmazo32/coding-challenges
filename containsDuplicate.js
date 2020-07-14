// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true

// Example 2:

// Input: [1,2,3,4]
// Output: false

// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Link: https://leetcode.com/problems/contains-duplicate/

const containsDuplicate = (nums) => {
  const hash = {};
  let answer = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) {
      answer = true;
      break;
    } else {
        hash[nums[i]] = 0;
    }
  };
  return answer;
};


////


function findSmallestInterval(numbers) {
    let dif = Math.abs(numbers[0] - numbers[1]);
    for (let i = 1; i < numbers.length - 1; i++) {
        const num = numbers[i];
        numbers.slice(i + 1).forEach(number => {
            if (Math.abs(number - num) < dif) {
                dif = Math.abs(number - num);
            }
        });
    }
    return dif;
}
