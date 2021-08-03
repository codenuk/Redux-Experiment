import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LoginPage from './page/login'
import MainPage from './page/main'

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/main" exact component={MainPage} />
      </Switch>
    </div>
  )
}

export default App
