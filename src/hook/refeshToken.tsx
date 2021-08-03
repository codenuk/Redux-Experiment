import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import allAction from '../redux/actions/index'
// import { ICombineReducers } from '../redux/reducers'

const HookRefeshToken = (): void => {
  // const stateRedux = useSelector((state: ICombineReducers) => state.testReducer)
  const dispatch = useDispatch()

  // set token and refreshToken from localStorage to redux if it have
  useEffect(() => {
    dispatch(allAction.testAction.setSetToken())
  }, [])
}

export default HookRefeshToken
