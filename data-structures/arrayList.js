class ArrayList {
  constructor() {
    this.length = 0
    this.data = {}
  }
  push(val) {
    this.data[this.length] = val
    this.length++
  }
  pop() {
    this.delete(this.length - 1)
  }
  get(idx) {
    this.data[idx]
  }
  delete(idx) {
    const res = this.data[idx]
    this.collapse(idx)
    return res
  }
  collapse(idx) {
    for (let i = idx; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}

let array = new ArrayList()
