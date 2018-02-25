import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import makeStore from './store'
import App from './components/App'

const store = makeStore({})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
)

module.hot.accept()
