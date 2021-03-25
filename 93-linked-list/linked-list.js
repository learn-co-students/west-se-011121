class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    addToEnd(data){
        const node = new Node(data)
        if(!this.head) {
            this.head = node 
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
    }

    addAfterTarget(data, target){

    }

    deleteTheTarget(target){
        
    }

    print(){
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}


const myList = new LinkedList
myList.addToEnd(3)
myList.addToEnd(4)
myList.addToEnd(5)
myList.addToEnd(6)
myList.print()
console.log(myList)