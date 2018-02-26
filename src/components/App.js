// @flow
import * as React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Title from './common/title'

const Index = () => <Title>React Silicon Life</Title>
const Example = () => <Title>React Silicon Example</Title>

const App = () => (
  <React.Fragment>
    <nav>
      <Link to="/">Index</Link>
      <Link to="/example">Example</Link>
    </nav>
    <Switch>
      <Route path="/example" component={Example} />
      <Route path="/" component={Index} exact />
    </Switch>
  </React.Fragment>
)

export default App
