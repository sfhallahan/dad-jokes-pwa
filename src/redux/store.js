import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import * as appReducers from './modules'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

const middlewares = [
  thunk,
  routerMiddleware(history)
]

const reducers = combineReducers({
 ...appReducers,
 routing: routerReducer
})

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

const store = createStore(
 reducers,
 composedEnhancers
)

export default store
