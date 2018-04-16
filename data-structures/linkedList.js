// A linked list is a list made up of nodes,
// each of which contains value and it points to another node.

class Node {
  // Individual node in the LinkedList
  constructor(value) {
    // Initalialize value and next properties.
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    // Keeping track of the head and tail makes easier to pop.
    this.tail = this.head = null
    this.length = 0
  }
  push(val) {
    // Create a new node
    const node = new Node(val)
    this.length++
    //
    !this.head ? (this.head = node) : (this.tail.next = node)
    // When we push, i'ts always the last.
    this.tail = node
  }
  pop() {
    return this.delete(this.length - 1)
  }
  _find(value, test = this._test) {
    // current is the node actually we're looking at now.
    let current = this.head
    let i = 0
    while (current) {
      // If we arrive inside the if code path and it finds
      // the value, it short circuits and return the current.
      if (test(value, current.value, i, current)) return current
      current = current.next
      i++
    }
    return null
  }
  _test(a, b) {
    // It's a comparator function, It is used to check by value.
    return a === b
  }
  _testIdx(search, __, i) {
    // __ is a symbolic, we don't use it. It's for maintaining the order.
    // Checks whether we found the correct index.
    return search === i
  }
  get(idx) {
    const node = this._find(idx, this._testIdx)
    if (!node) return null
    return node.value
  }
  delete(idx) {
    if (idx === 0) {
      const head = this.head
      if (head) {
        this.head = head.next
      } else {
        this.tail = this.head = null
      }
      this.length--
      return head.value
    }
    const node = this._find(idx - 1, this._testIdx)
    const excise = node.next
    if (!excise) return null
    node.next = excise.next
    if (node.next && !node.next.next) {
      this.tail = node.next
    }
    this.length--
    return excise.value
  }
}

let linkedList = new LinkedList()
linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.push(4)
console.log(linkedList)
