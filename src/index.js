import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import App from './containers/App/App'
import store, { history } from './redux/store'
import './styles/globalStyles.css'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
document.getElementById('root'))


// Add your service worker here
