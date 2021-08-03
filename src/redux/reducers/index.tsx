import { combineReducers } from 'redux'
import testReducer, { IInterface } from './test'

interface ICombineReducers {
  testReducer: IInterface
}

const rootReducer = combineReducers<ICombineReducers>({
  testReducer,
})
export default rootReducer
