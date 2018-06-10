import palindromePermutation from './04-palindromePermutation'
import {expect} from 'chai'
import 'mocha'

describe('palindromePermutation', () => {
  it('test 1', () => {
    expect(palindromePermutation('TAct Coa')).equals(true)
  })

  it('test 2', () => {
    expect(palindromePermutation('TAct Czo')).equals(false)
  })

  it('test 3', () => {
    expect(palindromePermutation('TActzCoa')).equals(false)
  })
})
