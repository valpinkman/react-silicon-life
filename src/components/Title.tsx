import * as React from 'react'

interface TitleProps {
  children: string
}

const Title: React.FunctionComponent<TitleProps> = ({ children }) => (
  <h1>{children}</h1>
)

export default Title
