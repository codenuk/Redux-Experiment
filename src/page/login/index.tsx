import React, { useEffect } from 'react'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import allAction from '../../redux/actions/index'

const LoginPage: React.FC = (): JSX.Element => {
  const stateRedux = useSelector((state: any) => state.testReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('stateRedux', stateRedux)
  }, [stateRedux])

  return (
    <div className="App App-header">
      <p>Login</p>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => dispatch(allAction.testAction.setUsername(e.target.value))}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => dispatch(allAction.testAction.setPassword(e.target.value))}
      />
      <button type="submit">send</button>
    </div>
  )
}

export default LoginPage
