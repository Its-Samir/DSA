class Node {
    constructor(val) {
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedLists {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        let current = this.tail;
        if (!this.head) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = current.prev;
            this.tail.next = null;
            current.prev = null;
        }
        this.length--;
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        let current = this.head;
        if (!this.head) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = current.next;
            this.head.prev = null;
            current.next = null;
        }
        this.length--;
        return current;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let half = Math.floor(this.length / 2);
        if (index <= half) {
            let i = 0;
            let current = this.head;
            while (i !== index) {
                current = current.next;
                i++
            }
            return current;
        } else {
            let i = this.length - 1;
            let current = this.tail;
            while (i !== index) {
                current = current.prev;
                i--
            }
            return current;
        }
    }

    set(index, value) {
        let result = this.get(index);
        if (!result) return false;
        result.val = value;
        return true;
    }

    insert(value, index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) {
            this.unshift(value);
            return true;
        }
        if (index === this.length - 1) {
            this.push(value);
            return true;
        }
        let newNode = new Node(value);
        let prevElem = this.get(index - 1);
        let nextElem = prevElem.next;
        newNode.next = nextElem;
        nextElem.prev = newNode;
        prevElem.next = newNode;
        newNode.prev = prevElem;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) {
            this.shift();
            return true;
        }
        if (index === this.length - 1) {
            this.pop();
            return true;
        }
        let prevElem = this.get(index - 1);
        let removeVal = prevElem.next;
        let nextElem = removeVal.next;
        prevElem.next = null;
        nextElem.prev = null;
        prevElem.next = nextElem;
        nextElem.prev = prevElem;
        this.length--;
        return removeVal;
    }

    reverse() {
        // didn't get the logic yet

        // let current = this.head;
        // this.head = this.tail;
        // this.tail = current;
        // let nextElem = null;
        // let prevElem = null;
        // let i = 0;
        // while(i < this.length) {
        //    nextElem = current.prev;
        //    prevElem = current.next;
        //    current.next = nextElem;
        //     current.prev = prevElem;
        //     i++;
        // }
        // this.tail = this.head;
        // this.head = current;
        // return this;
    }
}


const list = new DoublyLinkedLists();
list.push('Hi')
list.push(88)
list.push('56')
list.pop();
list.unshift('Hello');
list.shift();
list.get(1);
list.set(1, 'Set');
list.insert('Insert', 0);
list.remove(1);
// list.reverse()
console.log(list);