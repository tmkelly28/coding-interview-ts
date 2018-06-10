import isUnique from './01-isUnique'
import {expect} from 'chai'
import 'mocha'

describe('isUnique', () => {
  it('test 1', () => {
    expect(isUnique('abc')).equals(true)
  })

  it('test 2', () => {
    expect(isUnique('cbc')).equals(false)
  })
})
