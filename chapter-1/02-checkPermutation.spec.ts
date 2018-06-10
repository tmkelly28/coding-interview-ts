import checkPermutation from './02-checkPermutation'
import {expect} from 'chai'
import 'mocha'

describe('checkPermutation', () => {
  it('test 1', () => {
    expect(checkPermutation('cat', 'tac')).equals(true)
  })

  it('test 2', () => {
    expect(checkPermutation('cat', 'cat')).equals(true)
  })
  it('test 3', () => {
    expect(checkPermutation('cat', 'tca')).equals(true)
  })

  it('test 4', () => {
    expect(checkPermutation('cat', 'hat')).equals(false)
  })
})
