// Insertion sort is a simple sorting algorithm that builds
// the final sorted array (or list) one item at a time.
// It is much less efficient on large lists than more
// advanced algorithms such as quicksort, heapsort, or merge sort.

const insertionSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        // The splice() method changes the contents of an
        // array by removing existing elements and/or adding new elements.
        nums.splice(j, 0, nums.splice(i, 1)[0])
      }
    }
  }
  return nums
}
insertionSort([10, 5, 3, 6])
