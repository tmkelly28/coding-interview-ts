import stringCompression from './06-stringCompression'
import {expect} from 'chai'
import 'mocha'

describe('isUnique', () => {
  it('test 1', () => {
    expect(stringCompression('aabccccd')).equals('a2b1c4d1')
  })

  it('test 2', () => {
    expect(stringCompression('aabcccc')).equals('a2b1c4')
  })
})
