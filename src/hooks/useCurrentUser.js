import { useState, useEffect } from 'react'
import { PassageUser } from '@passageidentity/passage-elements/passage-user'

export const useCurrentUser = () => {
  const [currentUserInfo, setCurrentUserInfo] = useState({
    isLoading: true,
    isAuthorized: false,
    username: '',
  })

  useEffect(() => {
    let cancelReq = false
    new PassageUser().userInfo().then((userInfo) => {
      if (cancelReq) {
        return
      }
      if (userInfo === undefined) {
        setCurrentUserInfo({
          isLoading: false,
          isAuthorized: false,
          username: '',
        })
        return
      }

      setCurrentUserInfo({
        isLoading: false,
        isAuthorized: true,
        username: userInfo.email,
      })
    })
    return () => (cancelReq = true)
  }, [])

  return currentUserInfo
}
