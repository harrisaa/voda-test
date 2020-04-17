import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'

import Users from './pages/Users'

ReactDOM.render(
  <AppContainer>
    <Users />
  </AppContainer>,
  document.getElementById('root'),
)

/**
 * If hot reloading is enabled then re-render when a change is detected
 */
if (module.hot) {
  module.hot.accept()
}
