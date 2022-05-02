class LinkedList {
  constructor(value, next=null) {
    this.value = value
    this.next = next
  }

  print() {
    let start = this
    while (start.value) {
      console.log(start.value)
      start = start.next
    }
  }
}

let item1 = new LinkedList(1)
let item2 = new LinkedList(2)
let item3 = new LinkedList(3)

item1.next = item2
item2.next = item3

console.log(item1.value)
console.log(item1.next)
item1.print()