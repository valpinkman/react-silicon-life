import * as React from 'react'
import { AppRegistry } from 'react-native'

import Title from './components/Title'

const root = document.getElementById('main')

const App = () => <Title>Hello World</Title>

AppRegistry.registerComponent('App', () => App)
AppRegistry.runApplication('App', { rootTag: root })
