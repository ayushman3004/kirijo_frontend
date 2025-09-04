import { useDebugValue, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import LogoutButton from './components/LogoutButton'

function App() {
  

  return (
    <BrowserRouter>
    <div>
      
      <LogoutButton/>
    </div>
    </BrowserRouter>
  )
}

export default App
