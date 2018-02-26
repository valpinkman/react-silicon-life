import React from 'react'
import renderer from 'react-test-renderer'
import Title from './title'

test('should display the correct text', () => {
  const content = 'This is a title'

  const component = renderer.create(<Title>{content}</Title>)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
