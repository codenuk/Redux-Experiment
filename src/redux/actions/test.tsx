/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

const setUsername = (value: any) => {
  return {
    type: 'SETUSERNAME',
    username: value,
  }
}

const setPassword = (value: any) => ({
  type: 'SETPASSWORD',
  password: value,
})

export default {
  setUsername,
  setPassword,
}
