// @flow
import * as React from 'react'

type Props = {
  children: React.Node,
}

const Title = ({ children }: Props): React.Node => (
  <React.Fragment>
    <h1>{children}</h1>

    <style jsx>{`
      h1 {
        font-family: sans-serif;
      }
    `}</style>
  </React.Fragment>
)

export default Title
