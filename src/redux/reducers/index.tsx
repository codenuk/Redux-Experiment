import { combineReducers } from 'redux'
import testReducer, { IInitialState } from './test'

export interface ICombineReducers {
  testReducer: IInitialState
}

const rootReducer = combineReducers<ICombineReducers>({
  testReducer,
})
export default rootReducer
