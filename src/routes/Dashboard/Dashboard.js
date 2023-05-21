import '@passageidentity/passage-elements/passage-profile'
import { Wrapper, Title, Message } from './Dashboard.style'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import { MessageBody } from './Components/MessageBody'

const Dashboard = () => {
  const { isLoading, isAuthorized, username } = useCurrentUser()

  if (isLoading) {
    return null
  }
  return (
    <Wrapper>
      <Title>{isAuthorized ? 'Welcome!' : 'Unauthorized'}</Title>
      <Message>
        <MessageBody isAuthorized username={username} />
      </Message>
    </Wrapper>
  )
}

export default Dashboard
