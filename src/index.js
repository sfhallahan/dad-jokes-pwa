import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import App from './containers/App/App'
import store, { history } from './redux/store'
import registerServiceWorker from './registerServiceWorker'
import './styles/globalStyles.css'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
