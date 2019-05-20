import * as React from 'react'
import { Text, StyleSheet } from 'react-native'

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FunctionComponent<TitleProps> = ({ children }: TitleProps) => <Text style={styles.text}>{children}</Text>

const styles = StyleSheet.create({
  text: {
    fontSize: 24
  }
})

export default Title
