import * as React from 'react'
import Hello from './components/Hello'
import Theme from './components/Theme'

const App = () => (
  <Theme theme="dark">
    <Hello name="elmo" />
  </Theme>
)

export default App
