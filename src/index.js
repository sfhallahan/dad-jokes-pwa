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

  if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
               .register('/sw.js')
               .then((registration) => console.log('Registration successful!'))
               .catch((error) => console.log('Error with SW Registration'))
    })
  }
