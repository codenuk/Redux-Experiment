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

const setLogin = (
  accessToken: string,
  refreshToken: string,
): { type: string; accessToken: string; refreshToken: string } => {
  return {
    type: 'SET_LOGIN',
    accessToken: accessToken,
    refreshToken: refreshToken,
  }
}

const setSetToken = (
  accessToken: string,
  refreshToken: string,
): { type: string; accessToken: string; refreshToken: string } => ({
  type: 'SET_TOKEN',
  accessToken: accessToken,
  refreshToken: refreshToken,
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
