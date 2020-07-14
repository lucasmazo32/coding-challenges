const missingNumber = function(nums) {
  const obj = {};
  nums.forEach(num => {
      obj[num] = num + 1
  });
  let current = 0;
  let ans;
  for(let i = 0; i <= nums.length; i++) {
      if (obj[current]) {
          current = obj[current];
      } else {
          ans = current;
          break;
      }
  }
  return ans;
};
