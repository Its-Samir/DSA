class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        while (current.next) {
            this.tail = current;
            current = current.next;
        }
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    getMethod(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        let i = 0;
        while (i < this.length) {
            if (i === index) return current;
            current = current.next;
            i++;
        }
    }

    setMethod(value, index) {
        let element = this.getMethod(index);
        if (!element) return false;
        element.val = value;
        return true;
    }

    insert(value, index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            this.unshift(value);
            return true;
        }
        if (index === this.length) {
            this.push(value);
            return true;
        }

        let prevElem = this.getMethod(index - 1);
        if (!prevElem) return false;
        let newNode = new Node(value);
        let afterElem = prevElem.next;
        newNode.next = afterElem;
        prevElem.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            let removeVal = this.shift();
            return removeVal;
        }
        if (index === this.length - 1) {
            let removeVal = this.pop();
            return removeVal;
        }

        let element = this.getMethod(index - 1);
        if (!element) return false;
        let removeVal = element.next;
        element.next = element.next.next;
        this.length--;
        return removeVal;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let nextElem;
        let prevElem = null;
        let i = 0;
        while (i < this.length) {
            nextElem = temp.next;
            temp.next = prevElem;
            prevElem = temp;
            temp = nextElem;
            i++;
        }
        return this;
    }
}

let list = new SinglyLinkedList()
list.push('hi')
list.push('there')
list.push('!')
list.push('Method')
list.pop();
list.shift();
list.unshift('Hello');
console.log(list.getMethod(1));
console.log(list.setMethod('Here', 1));

console.log(list.insert('Insert', 1));
console.log(list.remove(0));
list.reverse();

console.log(list)