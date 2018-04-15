// Adding Cross elements.

function addCrossElements(array) {
  let result = []
  for (let index = 0; index < array.length; index++) {
    let current = array[index]
    let revIndexElement = array[array.length - 1 - index]
    result.push(current + revIndexElement)
  }
  return result
}

addCrossElements([100, 200, 300]) // Result: [ 400, 400, 400 ]
// Here the Big O is n, So it can be said as O(n).
// Because we iterate through the array elements only once.

// Find an elemnet from array. If found return true.
function findElement(element, array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] == element) return true
  }
}

// Here we will iterate the array to find the element.
// The worst case here could be the element can be in last index.
// So here also it's O(n)

// Make Arrays
function makeArrays(array) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      result.push([array[i], array[j]])
    }
  }
  return result
}

// In the above makeArray functions we can see that there are
// nested loops. So it's O(n^2).
// If you have 3 nested loops it will be O(n^3).
// It can be applied for for, while, etc.
// If you have a cubes algorithm, there is something wrong.

// Function with no loop and exits or retuen within some time.
function add(a, b) {
  return a + b
}
// It's O(1), because it's in constant time.

// You will also find something called O(log n)
// Means the increse in time when you add more inputs, recursive log n's.
// Eg: Merge sort, Quick sort etc.
