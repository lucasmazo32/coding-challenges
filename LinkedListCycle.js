const hasCycle = function(head) {
  if (head === null) {
      return false;
  }
  let p1 = head.next;
  let p2 = head.next;
  if(p2 && p2.next) {
      p2 = p2.next;
  } else {
      return false;
  }
  console.log(p1.val);
  console.log(p2.val);
  while (p1 && p2) {
      if (p1.val === p2.val && p1.next === p2.next) {
          return true;
      } else {
          p1 = p1.next
          if (p2.next) {
              p2 = p2.next.next;   
          } else {
              return false;
          }
      }
  }
  return false;
};
