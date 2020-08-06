//     1
//   2   3
// 4       6

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const arrayToTree = (array, i = 0) => {
  if (i >= array.length || array[i] === null) {
    return null;
  }
  const node = new Node(array[i]);
  node.left = arrayToTree(array, i * 2 + 1);
  node.right = arrayToTree(array, i * 2 + 2);

  return node;
};

const getLeafs = (node, direction = [], array = []) => {
  if (node.left === null && node.right === null) {
    return [...array, [node.value, direction]];
  } else {
    if (node.left) {
      array = [...array, ...getLeafs(node.left, [...direction, 'l'])];
    }
    if (node.right) {
      array = [...array, ...getLeafs(node.right, [...direction, 'r'])];
    }
  }
  return array;
};

const leafsAreGood = (array, k) => {
  const root = arrayToTree(array);
  const leafsNDirections = getLeafs(root);
  let pairs = [];
  for (let i = 0; i < leafsNDirections.length - 1; i++) {
    for (let j = i + 1; j < leafsNDirections.length; j++) {
      let distance = 0;
      const d1 = leafsNDirections[i][1];
      const d2 = leafsNDirections[j][1];
      let largest = 0;
      if (d1.length > d2.length) {
        largest = d1.length;
      } else {
        largest = d2.length;
      }
      for (let i = 0; i < largest; i++) {
        if (d1[i] && d2[i]) {
          if (distance !== 0 || d1[i] !== d2[i]) {
            distance += 2;
          }
        } else {
          distance += 1;
        }
        if (distance > k) {
          break;
        } 
      }
      if (distance === k) {
        pairs.push([leafsNDirections[i][0], leafsNDirections[j][0]])
      }
    }
  }
  return pairs;
};

console.log(leafsAreGood([1, 2, 3, 6, 4, 5, 7], 4));
