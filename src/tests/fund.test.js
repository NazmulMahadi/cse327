import { expect } from '@jest/globals'
import React from 'react'
import DonationMethodes from '../components/FundRaising/DonationMethodes'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('DonationMethod', () => {
  it('should render bkash image', () => {
    const component = shallow(<DonationMethodes />)
    const img = component.find('img')
    expect(img.props().src).toEqual(
      'https://download.logo.wine/logo/BKash/BKash-Logo.wine.png'
    )
  })

  it('should render correct number', () => {
    const component = shallow(<DonationMethodes />)
    const header = component.find('h1')
    expect(header.props().children).toEqual('Send 0170000111')
  })
})
