recursion(5)

const sortedArray: number[] = mergeSort([4, 8, 3, 1, 7, 6, 5, 2])

console.log(sortedArray)

function recursion(n: number) {
  if (n === 0) {
    return
  }

  console.log('#'.repeat(n))

  recursion(n - 1)
}

function mergeSort(arr: number[]) {
  const len: number = arr.length

  if (arr.length === 1) {
    return arr
  }

  let left: number[] = arr.slice(0, len / 2)
  let right: number[] = arr.slice(len / 2)

  const sortedLeft: number[] = mergeSort(left)
  const sortedRight: number[] = mergeSort(right)

  let result: number[] = []

  while (true) {
    if (!sortedLeft.length || !sortedRight.length) {
      result = [...result, ...sortedRight, ...sortedLeft]
      break
    }

    if (sortedLeft[0] <= sortedRight[0]) {
      result.push(sortedLeft[0])
      sortedLeft.shift()
    } else {
      result.push(sortedRight[0])
      sortedRight.shift()
    }
  }

  return result
}
