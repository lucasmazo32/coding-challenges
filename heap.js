// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */

function sortFunction(a, b) {
  return b[1] - a[1];
}

const topKFrequent = function(nums, k) {
  const obj = {};
  nums.forEach(element => {
      if(obj[element]) {
          obj[element] += 1;
      } else {
          obj[element] = 1;
      }
  });
  arr = [];
  Object.keys(obj).forEach(key => {
      arr.push([key, obj[key]]);
  });
  arr.sort(sortFunction);
  return arr.slice(0, k).map(element => Number(element[0]));
};