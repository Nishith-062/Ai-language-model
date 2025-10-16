import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Progress from './pages/Progress';
import Settings from './pages/Settings';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>AI-Language Coach</header>
    <Routes>
      <Route path='login' element={<Login/>} />
      <Route path='Signup' element={<SignUp/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/progress" element={<Progress/>} />
      <Route path="/settings" element={<Settings/>} />

    </Routes>
    

    </>
  )
}

export default App
