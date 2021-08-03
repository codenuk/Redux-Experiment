/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IInterface {
  username: string
  password: string
}

const initialState: IInterface = {
  username: '',
  password: '',
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SETUSERNAME':
      return {
        ...state,
        username: action.username,
      }
    case 'SETPASSWORD':
      return {
        ...state,
        password: action.password,
      }
    default:
      return state
  }
}

export default reducer
