import { expect } from '@jest/globals'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { store } from '../redux/store'

Enzyme.configure({ adapter: new Adapter() })

describe('redux', () => {
  it('should contain dispatch function', () => {
    expect(store).toHaveProperty('dispatch')
  })
})
