class DoublyLinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new DoublyLinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            newNode.prev = currentNode;
        }
    }

    removeFirst10() {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === 10) {
                if (currentNode.prev) {
                    currentNode.prev.next = currentNode.next;
                } else {
                    this.head = currentNode.next; // Якщо це перший елемент
                }
                if (currentNode.next) {
                    currentNode.next.prev = currentNode.prev;
                }
                break; // Видалити перший знайдений елемент
            }
            currentNode = currentNode.next;
        }
    }

    print() {
        let currentNode = this.head;
        const result = [];
        while (currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(result.join(" <-> "));
    }
}

// Створення списку, виведення його на консоль до та після видалення першого елемента зі значенням 10
const list = new DoublyLinkedList();
list.append(10);
list.append(10);
list.append(15);
list.append(10);
list.append(20);

console.log("Список до видалення:");
list.print();

list.removeFirst10();

console.log("Список після видалення першого елементу зі значенням 10:");
list.print();