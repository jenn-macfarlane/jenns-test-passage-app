import '@passageidentity/passage-elements/passage-auth'
import { Wrapper } from './Login.style'

const Login = () => {
  return (
    <Wrapper>
      <passage-auth
        app-id={process.env.REACT_APP_PASSAGE_APP_ID}
      ></passage-auth>
    </Wrapper>
  )
}
export default Login
