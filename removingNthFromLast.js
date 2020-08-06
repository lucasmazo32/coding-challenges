const removeNthFromEnd = function(head, n) {
  let length = 1;
  let node = head;
  while (node.next) {
    length += 1;
    node = node.next;
  }
  node = head;
  for (let i = 0; i < length; i++) {
    if (i === length - (n + 1)) {
      node.next = node.next.next;
      break;
    }
    node = node.next;
  }
  return head;
};