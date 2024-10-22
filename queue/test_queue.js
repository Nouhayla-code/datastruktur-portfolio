import Queue from "./queue.js";

const queue = new Queue();

queue.enqueue("first");
queue.enqueue("second");
queue.enqueue("third");
queue.enqueue("fourth");
queue.enqueue("fifth");
queue.enqueue("sixth");

queue.dumpList();

console.log(queue.size());
console.log(queue.get(0));
console.log(queue.get(1));
console.log(queue.get(2));

console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.get(0));
console.log(queue.get(1));
console.log(queue.get(2));
