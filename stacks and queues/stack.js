//LIFO

class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // push but at the beginning
    push(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let current = this.first;
            this.first = newNode;
            newNode.next = current;
        }
        this.size++;
        return this;
    }

    // pop but from beginning
    pop() {
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

let stack = new Stack();
stack.push(42);
stack.push(58);
stack.pop();
console.log(stack);