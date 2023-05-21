import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import Dashboard from './routes/Dashboard'
import { Wrapper } from './app.styles'

export default () => (
  <Wrapper>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  </Wrapper>
)
