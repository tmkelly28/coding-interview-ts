// 1-2 Check Permutation

const checkPermutation = (s1: string, s2: string): boolean => {
  if (s1.length !== s2.length) {
    return false
  }

  let result: number = 0

  for (let i: number = 0; i < s1.length; i++) {
    result += s1[i].charCodeAt(0)
    result -= s2[i].charCodeAt(0)
  }

  return result === 0
}

export default checkPermutation
