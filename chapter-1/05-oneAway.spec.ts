import oneAway from './05-oneAway'
import {expect} from 'chai'
import 'mocha'

describe('isUnique', () => {
  it('test 1', () => {
    expect(oneAway('pale', 'ple')).equals(true)
  })

  it('test 2', () => {
    expect(oneAway('pales', 'ple')).equals(true)
  })

  it('test 3', () => {
    expect(oneAway('pale', 'bale')).equals(true)
  })

  it('test 4', () => {
    expect(oneAway('pale', 'pale')).equals(true)
  })

  it('test 5', () => {
    expect(oneAway('pale', 'bake')).equals(false)
  })
})
