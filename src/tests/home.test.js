import { expect } from '@jest/globals'
import React from 'react'
import Home from '../components/Home/Home '
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import pic1 from '../components/Images/pic-1.png'

Enzyme.configure({ adapter: new Adapter() })

describe('Home', () => {
  it('should take the right image', () => {
    const component = shallow(<Home />)
    const img = component.find('img')
    expect(img.props().src).toEqual(pic1)
  })
})
