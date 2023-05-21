import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25em;
  min-width: 30em;
  background: #e84530;
  border: 1px solid black;
  border-radius: 25px;
  overflow: hidden;
`
Wrapper.displayName = 'DashboardRouteWrapper'

const Title = styled.h2`
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 44px;
  width: 100%;
`
Wrapper.displayName = 'DashboardRouteBody'

const Message = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
Wrapper.displayName = 'DashboardRouteMessage'

export { Wrapper, Title, Message }
