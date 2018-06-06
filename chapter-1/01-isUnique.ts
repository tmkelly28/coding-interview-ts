const isUnique = (str: string): boolean => {
  for (let i: number = 0; i < str.length - 1; i++) {
    for (let j: number = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false
      }
    }
  }
  return true
}

console.log('\nisUnique\n')
console.log(isUnique('abc') === true)
console.log(isUnique('cbc') === false)
