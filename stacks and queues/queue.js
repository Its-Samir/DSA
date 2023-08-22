// FIFO

class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // enqueue (insert at the end)
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }

    // dequeue (remove from the beginning)
    dequeue() {
        if (this.size === 0) return null;
        let temp = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = temp.next;
        }
        this.size--;
        return temp;
    }
}

let queue = new Queue();
queue.enqueue('Enqueue');
queue.enqueue('Hello');
queue.dequeue();
console.log(queue);