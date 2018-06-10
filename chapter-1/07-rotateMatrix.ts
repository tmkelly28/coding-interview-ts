// try in place
const rotateMatrix = (matrix: number[][]): number[][] => {

  return matrix
}

console.log(`
  rotateMatrix
`)

// 1 2 -> 3 1
// 3 4    4 2
//
// 1 2 3    7 4 1
// 4 5 6 -> 8 5 2
// 7 8 9    9 6 3
//
// n = 3
// 0,0 -> 0,3
// 0,1 -> 1,1
// 0,2 -> 2,2
// 1,1 -> 2,1
// 2,2 -> 2,0
//
console.log(rotateMatrix([[1, 2], [3, 4]]))
