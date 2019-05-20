import * as React from 'react'
import { Text } from 'react-native'

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FunctionComponent<TitleProps> = ({ children }: TitleProps) => <Text>{children}</Text>

export default Title
