// Run-length encoding is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string "aabccc" we replace "aa" by "a2" and replace "ccc" by "c3". Thus the compressed string becomes "a2bc3".

// Notice that in this problem, we are not adding '1' after single characters.

// Given a string s and an integer k. You need to delete at most k characters from s such that the run-length encoded version of s has minimum length.

// Find the minimum length of the run-length encoded version of s after deleting at most k characters.

const getLengthOfOptimalCompression = function(s, k) {
  let reduced = '';
  const initial = {};
  for (let i = 0; i < s.length; i++) {
    if (initial[s[i]]) {
      initial[s[i]] += 1;
    } else {
      initial[s[i]] = 1;
    }
  }
  const obj = {};
  Object.keys(initial).forEach((key) => {
    if (obj[initial[key]]) {
      obj[initial[key]].push(key);
    } else {
      obj[initial[key]] = [key];
    }
  });
  while(k !== 0) {
    const mkeys = Object.keys(obj);
    const keys = mkeys.map((i) => Number(i));
    keys.sort(function(a, b){return a-b});
    const minimum = keys[0];
    if ((obj[minimum].length * minimum) <= k) {
      k -= obj[minimum].length * minimum;
      delete obj[minimum];
    } else if (minimum <= k) {
      obj[minimum].pop();
      k -= minimum;
      if (obj[minimum].length === 0) {
        delete obj[minimum];
      }
    } else {
      const letter = obj[minimum].pop();
      if (obj[minimum - k]) {
        obj[minimum - k].push(letter);
      } else {
        obj[minimum - k] = letter;
      }
      k = 0;
    }
  }
  let ans = 0;
  Object.keys(obj).forEach((key) => {
    if (key === 1 || key === '1') {
      ans += obj[key].length;
    } else {
      const mult = 2 + Math.floor(Math.log10(key));
      ans += mult * (obj[key].length)
    }
  });
  return ans;
};

console.log(getLengthOfOptimalCompression('abbbbbbbbbba', 2));