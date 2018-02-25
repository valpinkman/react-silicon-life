import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers'

const devTools =
  // eslint-disable-next-line no-underscore-dangle
  process.browser && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__() /* eslint-disable-line no-underscore-dangle */
    : f => f

export default initialState => {
  const middlewares = [thunk]
  const enhancers = compose(applyMiddleware(...middlewares), devTools)

  const store = createStore(reducer, initialState, enhancers)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = reducer
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
