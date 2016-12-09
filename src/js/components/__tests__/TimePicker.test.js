// @flow
import React from 'react'
import { shallow } from 'enzyme'

import TimePicker from '../TimePicker'

describe('TimePicker Component', () => {
  it('should render', () => {
    const fakeTime = {
      hours: 1,
      minutes: 20,
      seconds: 45
    }

    const Component = shallow(<TimePicker time={fakeTime} />)

    expect(Component.length).toBeTruthy()
  })

  it('should allow editing of seconds', () => {

  })
})
