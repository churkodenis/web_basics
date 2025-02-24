class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    
    dequeue() {
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.items.shift();
    }
    front(){
        return this.isEmpty() ? "Queue is empty" : this.items[0];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    getPositiveCount(){
        return this.items.filter(num => num > 0).length;
    }
    display(){
        return this.items.join(", ")
    }
}

const queue = new Queue();
queue.enqueue(-5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(-3);
queue.enqueue(7);


console.log("Черга: " + queue.display());
console.log("Кількість додатних елементів: " + queue.getPositiveCount());


