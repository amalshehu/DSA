// Quicksort (sometimes called partition-exchange sort)
// is an efficient sorting algorithm, serving as a systematic
// method for placing the elements of an array in order.

// STEP 0: ARRAY: [5, 10, 4, 6]

// SET THE LAST ELEMENT AS PIVOT, IE 6.
// SPLIT THE ARRAY INTO TWO, ELEMENT < PIVOT: [5, 4] & ELEMENT > PIVOT: [10]
// CALL quickSort() ON BOTH RECURSIVELY
// RESULT ARRAY : [5, 4] & [10]

// STEP 1: ARRAY: [5, 4]
// ASSUME 4 AS PIVOT
// SPLIT THE ARRAY INTO TWO, ELEMENT < PIVOT: [] & ELEMENT > PIVOT: [5]
// CALL quickSort() ON [] AND [5]
// RECURSION WILL MOVE TOWARDS THE BASE CASE, BECAUSE LENGTH <= 1
// THEN CONCAT ARRAY ELEMENT < PIVOT, PIVOT AND ELEMENT > PIVOT
// IT WILL RETURN [4, 5]

// STEP 2: ARRAY: [10]
// IT WILL RETURN THE BASE CASE, IE,
// THEN CONCAT [4, 5] & 6 & [10]

// RESULT: [ 4, 5, 6, 10 ]

const quickSort = nums => {
  // base case
  if (nums.length <= 1) return nums
  const pivot = nums[nums.length - 1]
  let left = []
  let right = []
  for (let i = 0; i < nums.length - 1; i++) {
    nums[i] < pivot ? left.push(nums[i]) : right.push(nums[i])
  }
  const sortLeft = quickSort(left)
  const sortRight = quickSort(right)

  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([5, 10, 4, 6]))
