// Implement a Queue using two stacks. You may only use the standard push(),
// pop(), and peek() operations traditionally available to stacks. You do
// not need to implement the stack yourself (i.e. an array can be used 
// to simulate a stack).

class Queue {
  constructor() {
    this.queue = [];
  }

  push(element) {
    this.queue.unshift(element);
  }

  pop() {
    return this.queue.pop();
  }

  peek(element) {
    return this.queue.indexOf(element);
  }

  showQueue() {
    return this.queue;
  }
}

function queueTwoStacks(stack1, stack2) {
  const queue = new Queue();
  while (stack1.length > 0 || stack2.length > 0) {
    if (stack1.length > 0) {
      queue.push(stack1.pop());
    }
    if (stack2.length > 0) {
      queue.push(stack2.pop());
    }
  }
  return queue.showQueue();
}

const stack1 = [1, 3, 5];
const stack2 = [2, 4];

console.log(queueTwoStacks(stack1, stack2));