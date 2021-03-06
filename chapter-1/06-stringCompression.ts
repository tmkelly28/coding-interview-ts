const stringCompression = (st: string): string => {
  let compressed: string = ''
  let current: string = st[0]
  let counter = 0

  for (let i: number = 0; i < st.length; i++) {
    if (st[i] !== current) {
      compressed += (current + counter)
      current = st[i]
      counter = 1
    } else {
      counter++
    }
  }
  return compressed + (current + counter)
}

export default stringCompression
