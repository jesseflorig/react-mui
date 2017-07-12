import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import Store from './store'
import injectTapEventPlugin from 'react-tap-event-plugin'

const StoreInstance = Store()

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker()
