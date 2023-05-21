import React from 'react'
import { P } from './MessageBody.style'

const MessageBody = ({ isAuthorized, username = undefined }) => {
  console.log('isAuthorized?', isAuthorized)
  const trimmedUsername = username.slice(0, username.indexOf('@'))
  return (
    <>
      <P>
        {isAuthorized
          ? `Welcome back, ${trimmedUsername}! \n You successfully signed in with Passage.`
          : 'You have not logged in and cannot view the dashboard.'}
      </P>
      <br />
      <br />
      {!isAuthorized && <a href="/">Login to continue.</a>}
    </>
  )
}

export { MessageBody }
