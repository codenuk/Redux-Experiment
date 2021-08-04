import React from 'react'
import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import LoginPage from './page/login'
import MainPage from './page/main'
import axios from 'axios'

import { useSelector } from 'react-redux'
import { ICombineReducers } from './redux/reducers'

const App: React.FC = (): JSX.Element => {
  const stateRedux = useSelector((state: ICombineReducers) => state.testReducer)

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = stateRedux.accessToken
  }, [])
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
