import React from 'react'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import allAction from '../../redux/actions/index'
import { Redirect } from 'react-router-dom'
import { ICombineReducers } from '../../redux/reducers'
import axios from 'axios'

const LoginPage: React.FC = (): JSX.Element => {
  const stateRedux = useSelector((state: ICombineReducers) => state.testReducer)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    const data = {
      username: stateRedux.username,
      password: stateRedux.password,
    }

    axios
      .post('https://jum716bkef.execute-api.ap-southeast-1.amazonaws.com/prod/api/auth/login', data)
      .then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken)
        localStorage.setItem('refreshToken', res.data.refreshToken)
        dispatch(allAction.testAction.setLogin(res.data.accessToken, res.data.refreshToken))
      })
      .catch((err) => {
        console.log(err)
      })
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
