// It's a divide-and-conquer algorithm.
// Merge sort is the one you're probably going to use.
// When we use Array.prototype.sort(), Most of the time (90%) it will use merge sort.
// But the firefox js engine will use quick depending on the data type.
// It's very consistent and dependable.
// Main key is it's uses recursion.

// SUB ARRAY 1: [2, 6, 7] (SORTED)
// SUB ARRAY 2: [3, 8, 9] (SORTED)
// COMPARE 2 & 3, TAKE 2, PUSH -> NEW ARRAY
// COMPARE 6 & 3, TAKE 3, PUSH -> NEW ARRAY
// COMPARE 6 & 8, TAKE 6, PUSH -> NEW ARRAY
// COMPARE 7 & 8, TAKE 7, PUSH -> NEW ARRAY
// NOW SUB ARRAY 1 is empty, So PUSH SUB ARRAY 2[REMAINING] -> ARRAY

const mergeSort = nums => {
  if (nums.length < 2) return nums
  const len = nums.length
  const mid = Math.round(len / 2)
  const left = nums.slice(0, mid)
  const right = nums.slice(mid, len)
  const sortLeft = mergeSort(left)
  const sortRight = mergeSort(right)

  return connect(sortLeft, sortRight)
}

const connect = (l, r) => {
  const res = []
  while (l.length && r.length) {
    l[0] <= r[0] ? res.push(l.shift()) : res.push(r.shift())
  }
  return [...res, ...r, ...l]
}

mergeSort([10, 3, 6, 8, 1, 2])
