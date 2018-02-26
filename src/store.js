import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

/* eslint-disable no-underscore-dangle */
const devTools =
  process.browser && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
/* eslint-enable no-underscore-dangle */

export default initialState => {
  const middlewares = [thunk]
  const enhancers = compose(applyMiddleware(...middlewares), devTools)

  const store = createStore(reducers, initialState, enhancers)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
