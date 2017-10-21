import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import TestsLauncher from './components/containers/TestsLauncher'

const App = ({ store }) => (
  <Provider store={store}>
    <TestsLauncher />
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App

