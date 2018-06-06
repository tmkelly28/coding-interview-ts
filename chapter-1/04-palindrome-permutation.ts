// palindrome permutation

const palindromePermutation = (st: string): boolean => {
  const dict = {}

  for (let i: number = 0; i < st.length; i++) {
    const ch:string = st[i].toLowerCase()
    if (dict[ch]) {
      delete dict[ch]
    } else {
      dict[ch] = true
    }
  }

  return Object.keys(dict).length <= 1
}

console.log('\npalindromePermutation\n')
console.log(palindromePermutation('TAct Coa') === true)
