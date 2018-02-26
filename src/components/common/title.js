// @flow
import * as React from 'react'

type Props = {
  children: React.Node,
}
const Title = ({ children }: Props): React.Node => <h1>{children}</h1>

export default Title
