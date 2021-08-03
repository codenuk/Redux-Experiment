const setUsername = (value: string): { type: string; username: string } => {
  return {
    type: 'SET_USERNAME',
    username: value,
  }
}

const setPassword = (value: string): { type: string; password: string } => ({
  type: 'SET_PASSWORD',
  password: value,
})

const setLogin = (username: string, password: string): { type: string; username: string; password: string } => ({
  type: 'SET_LOGIN',
  username: username,
  password: password,
})

const setSetToken = (): { type: string } => ({
  type: 'SET_TOKEN',
})

const setLogout = (): { type: string } => ({
  type: 'SET_LOGOUT',
})

export default {
  setUsername,
  setPassword,
  setLogin,
  setSetToken,
  setLogout,
}
