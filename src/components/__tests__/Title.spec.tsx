import * as React from 'react'
import { render } from 'react-testing-library'

import Title from '../Title'

describe('<Title />', () => {
  test('render correctly', () => {
    const wrapper = render(<Title>Hello World</Title>)

    expect(wrapper).toMatchSnapshot()
  })

  test('renders with the right text', () => {
    const wrapper = render(<Title>Hello</Title>)

    expect(wrapper.container.textContent).toBe('Hello')
  })
})
