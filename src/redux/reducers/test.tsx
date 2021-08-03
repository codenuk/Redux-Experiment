import axios from 'axios'

interface IAction {
  type: string
  username: string
  password: string
  token: string
  refreshToken: string
  isLogin: boolean
}

export interface IInitialState {
  username: string
  password: string
  token: string
  refreshToken: string
  isLogin: boolean
}

const initialState: IInitialState = {
  username: 'ping',
  password: 'password',
  token: '',
  refreshToken: '',
  isLogin: false,
}

const postLogin = async (username: string, password: string) => {
  try {
    const data = {
      username: username,
      password: password,
    }

    const response = await axios.post(
      'https://jum716bkef.execute-api.ap-southeast-1.amazonaws.com/prod/api/auth/login',
      data,
    )
    return response
  } catch (error) {
    return error
  }
}

const getMan = async (username: string, password: string) => {
  try {
    const response = await axios.post('https://jum716bkef.execute-api.ap-southeast-1.amazonaws.com/prod/api/auth/login')
    return response
  } catch (error) {
    return error
  }
}

const reducer = (state = initialState, action: IAction): IInitialState => {
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
      const resultPostLogin = postLogin(state.username, state.password)
      resultPostLogin
        .then((res) => {
          console.log('res', res)
        })
        .catch((err) => {
          console.log('err', err)
        })
      const token = 'fakeToken'
      const refreshToken = 'fakeRefreshToken'
      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', refreshToken)
      return {
        ...state,
        token: token,
        refreshToken: refreshToken,
        isLogin: true,
      }
    case 'SET_TOKEN':
      const isTokenExpired = false
      if (!isTokenExpired) {
        // ลองยิง API man แล้วได้ response ให้ setToken ได้เลยถือว่ายังไม่ หมดอายุ
        const localStorageToken = localStorage.getItem('token')
        const localStorageRefreshToken = localStorage.getItem('refreshToken')
        return {
          ...state,
          token: localStorageToken || '',
          refreshToken: localStorageRefreshToken || '',
          isLogin: localStorageToken ? true : false,
        }
      } else {
        // ยิงแล้ว err กลับมา ให้ทำการ call API refreshToken เพื่อขอ token and refreshToken ใหม่
        const isRefreshTokenExpired = false
        if (!isRefreshTokenExpired) {
          // ถ้า refreshToken ไม่หมดอายุ ก็ set token and refreshToken ใหม่
          const tokenAfterCallAPI = 'tokenAfterCallAPI'
          const refreshTokenAfterCallAPI = 'refreshTokenAfterCallAPI'
          localStorage.setItem('token', tokenAfterCallAPI)
          localStorage.setItem('refreshToken', refreshTokenAfterCallAPI)
          return {
            ...state,
            token: tokenAfterCallAPI,
            refreshToken: refreshTokenAfterCallAPI,
            isLogin: tokenAfterCallAPI ? true : false,
          }
        } else {
          // ถ้า refreshToken หมดอายุ kick to page login
          localStorage.removeItem('token')
          localStorage.removeItem('refreshToken')
          return {
            ...initialState,
          }
        }
      }
    case 'SET_LOGOUT':
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default reducer
