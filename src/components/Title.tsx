import * as React from 'react'

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FunctionComponent<TitleProps> = ({ children }: TitleProps) => <h1>{children}</h1>

export default Title
