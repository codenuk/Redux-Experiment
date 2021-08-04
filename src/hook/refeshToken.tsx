import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import allAction from '../redux/actions/index'
import { ICombineReducers } from '../redux/reducers'
import axios from 'axios'
const urlGQL = 'https://jum716bkef.execute-api.ap-southeast-1.amazonaws.com/prod/api/graphql'

const HookRefeshToken = (props: any): void => {
  const stateRedux = useSelector((state: ICombineReducers) => state.testReducer)
  const dispatch = useDispatch()

  // set accessToken and refreshToken from localStorage to redux if it have
  useEffect(() => {
    const resultGetMan = getMan(stateRedux.accessToken)
    resultGetMan
      .then((res) => {
        const localStorageToken = localStorage.getItem('accessToken') || ''
        const localStorageRefreshToken = localStorage.getItem('refreshToken') || ''

        if (res.data) {
          console.log('>>> not need refresh token')
          dispatch(allAction.testAction.setSetToken(localStorageToken, localStorageRefreshToken))
        }
        if (res.response) {
          if (res.response.data?.message === 'Unauthorized') {
            // ยิงแล้ว err กลับมา ให้ทำการ call API refreshToken เพื่อขอ accessToken and refreshToken ใหม่
            const resultPostRefreshToken = postRefreshToken(localStorageRefreshToken)
            resultPostRefreshToken
              .then((resRefresh) => {
                console.log('>>> need refresh token', resRefresh)
                const tokenAfterCallAPI = resRefresh.data.accessToken
                const refreshTokenAfterCallAPI = resRefresh.data.refreshToken
                localStorage.setItem('accessToken', tokenAfterCallAPI)
                localStorage.setItem('refreshToken', refreshTokenAfterCallAPI)
                dispatch(allAction.testAction.setSetToken(tokenAfterCallAPI, refreshTokenAfterCallAPI))
              })
              .catch((errRefresh) => {
                console.log('>>> need login again')
                console.log('errRefresh', errRefresh)
                dispatch(allAction.testAction.setLogout())
              })
          }
        }
      })
      .catch((err) => {
        console.log('err', err.response)
      })
  }, [])
}

export default HookRefeshToken

const getMan = async (accessToken: string) => {
  try {
    const q = `
      query Query {
        man
      }
    `
    const response = await axios({
      url: urlGQL,
      method: 'post',
      data: {
        query: q,
        variables: {},
      },
      headers: {
        Authorization: accessToken,
      },
    })

    return response
  } catch (error) {
    return error
  }
}

const postRefreshToken = async (propsRefreshToken: string) => {
  try {
    const data = {
      refreshToken: propsRefreshToken,
    }
    const response = await axios.post(
      'https://jum716bkef.execute-api.ap-southeast-1.amazonaws.com/prod/api/auth/refreshToken',
      data,
    )
    return response
  } catch (error) {
    return error
  }
}
