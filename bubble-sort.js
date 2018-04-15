// Bubble Sort is a sorting algorithm that works by
// repeatedly swapping the adjacent elements and makes it in order.

const bubbleSort = numbers => {
  do {
    var swap = false
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers[i + 1]) {;
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]]
        swap = true
      }
    }
  } while (swap)
  return numbers
}

bubbleSort([4, 5, 2, 6, 1])