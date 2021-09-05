import { expect } from '@jest/globals'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { getUserRef } from '../firebase/firebase.utils'

Enzyme.configure({ adapter: new Adapter() })

describe('firebase utils', () => {
  it('should get firebase users collection path', () => {
    const uid = 'aabbcccc'
    const userRef = getUserRef(uid)
    expect(userRef.parent.path).toEqual('users')
  })
})
