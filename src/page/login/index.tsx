import React, { useEffect } from 'react'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import allAction from '../../redux/actions/index'
import { Redirect } from 'react-router-dom'
import HookRefeshToken from '../../hook/refeshToken'
import { ICombineReducers } from '../../redux/reducers'

const LoginPage: React.FC = (): JSX.Element => {
  const stateRedux = useSelector((state: ICombineReducers) => state.testReducer)
  const dispatch = useDispatch()

  HookRefeshToken()

  useEffect(() => {
    console.log('stateRedux', stateRedux)
  }, [stateRedux])

  const handleSubmit = () => {
    dispatch(allAction.testAction.setLogin(stateRedux.username, stateRedux.password))
  }

  if (stateRedux.isLogin) {
    return <Redirect to="/main" />
  }
  return (
    <div className="App App-header">
      <p>Login</p>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => dispatch(allAction.testAction.setUsername(e.target.value))}
        value={stateRedux.username}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => dispatch(allAction.testAction.setPassword(e.target.value))}
        value={stateRedux.password}
      />
      <button type="submit" onClick={() => handleSubmit()}>
        send
      </button>
    </div>
  )
}

export default LoginPage
