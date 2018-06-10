const oneAway = (str1: string, str2: string): boolean => {
  if (str1 === str2) {
    return true
  }

  let edits: number = 0

  if (str1.length !== str2.length) {
    let ptr1: number = 0
    let ptr2: number = 0
    while (ptr1 < str1.length && ptr2 < str2.length) {
      const ch1: string | undefined = str1[ptr1]
      const ch2: string | undefined = str2[ptr2]
      if (ch1 !== ch2) {
        edits++
        if (edits > 1) {
          return false
        } else {
          if (str1.length > str2.length) {
            ptr1++
          } else {
            ptr2++
          }
        }
      } else {
        ptr1++
        ptr2++
      }
    }
  } else {
    for (let i: number = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        edits++
        if (edits > 1) {
          return false
        }
      }
    }
  }
  return true
}

console.log('\poneAway\n')
console.log(oneAway('pale', 'ple') === true)   // remove
console.log(oneAway('pales', 'pale') === true) // insert
console.log(oneAway('pale', 'bale') === true)  // replace
console.log(oneAway('pale', 'pale') === true)  // none
console.log(oneAway('pale', 'bake') === false)
