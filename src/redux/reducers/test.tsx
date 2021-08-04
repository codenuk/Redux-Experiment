interface IAction {
  type: string
  username: string
  password: string
  accessToken: string
  refreshToken: string
  isLogin: boolean
}

export interface IInitialState {
  username: string
  password: string
  accessToken: string
  refreshToken: string
  isLogin: boolean
}

const initialState: IInitialState = {
  username: 'ping',
  password: 'password',
  accessToken: '',
  refreshToken: '',
  isLogin: false,
}

const reducer = (state = initialState, action: IAction): any => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.username,
      }
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.password,
      }
    case 'SET_LOGIN':
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        isLogin: true,
      }
    case 'SET_TOKEN':
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        isLogin: localStorage.getItem('accessToken') ? true : false,
      }
    case 'SET_LOGOUT':
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default reducer
