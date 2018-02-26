// @flow
import * as React from 'react'
import css from 'styled-jsx/css'

type Props = {
  children: React.Node,
}

const styles = css`
  h1 {
    font-family: sans-serif;
  }
`

const Title = ({ children }: Props): React.Node => (
  <React.Fragment>
    <h1>{children}</h1>
    <style jsx>{styles}</style>
  </React.Fragment>
)

export default Title
